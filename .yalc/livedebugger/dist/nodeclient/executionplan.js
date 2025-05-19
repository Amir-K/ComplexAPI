"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionPlan$ = void 0;
exports.getAllQueriesInQueryStore = getAllQueriesInQueryStore;
exports.getExecutionPlansFromQueryStore = getExecutionPlansFromQueryStore;
exports.setExecutionPlan = setExecutionPlan;
const rxjs_1 = require("rxjs");
const toolcalls_1 = require("./toolcalls");
const executionPlanSubject = new rxjs_1.Subject();
exports.executionPlan$ = executionPlanSubject.asObservable();
async function getAllQueriesInQueryStore({ pool, toolCallId, name }) {
    if (!pool) {
        console.error("Pool is not set");
        return null;
    }
    const command = `SELECT query_text_id, query_sql_text FROM sys.query_store_query_text`;
    const result = await pool.request().query(command);
    (0, toolcalls_1.postToolCallResult)({ toolCallId, name, result: result.recordset });
    return result.recordset;
}
function checkGetExecutionPlansFromQueryStoreArgs({ queryTextId, pool, }) {
    if (!pool) {
        console.error("Pool is not set");
        return false;
    }
    if (!queryTextId) {
        console.error("Query text ID is not set");
        return false;
    }
    return true;
}
async function getExecutionPlansFromQueryStore({ queryTextId, pool, toolCallId, name, }) {
    if (!checkGetExecutionPlansFromQueryStoreArgs({ queryTextId, pool, toolCallId, name })) {
        return;
    }
    const request = pool.request();
    const result = await request.query(`
      SELECT 
        z.query_plan,
        z.plan_id 
      FROM sys.query_store_query_text AS p 
      JOIN sys.query_store_query AS q 
        ON p.query_text_id = q.query_text_id
      JOIN sys.query_store_plan AS z 
        ON z.query_id = q.query_id
      WHERE p.query_text_id = ${queryTextId}
    `);
    (0, toolcalls_1.postToolCallResult)({ toolCallId, name, result: result.recordset });
    return result.recordset;
}
function checkSetExecutionPlanArgs({ planId, queryTextId, pool }) {
    if (!pool) {
        console.error("Pool is not set");
        return false;
    }
    if (!queryTextId) {
        console.error("Query ID is not set");
        return false;
    }
    if (!planId) {
        console.error("Plan ID is not set");
        return false;
    }
    return true;
}
async function setExecutionPlan({ planId, queryTextId, pool, toolCallId, name }) {
    try {
        if (!checkSetExecutionPlanArgs({ planId, queryTextId, pool, toolCallId, name })) {
            return;
        }
        const result = await pool.request().query(`
      SELECT query_id FROM sys.query_store_query
      WHERE query_text_id = ${queryTextId}
    `);
        const queryId = result.recordset[0].query_id;
        await pool.request().batch(`EXEC sp_query_store_force_plan @query_id = ${queryId}, @plan_id = ${planId}`);
        (0, toolcalls_1.postToolCallResult)({ toolCallId, name, result: `Execution plan ${planId} set for query ${queryId}` });
    }
    catch (error) {
        console.error(`Failed to set execution plan ${planId}`, error);
        throw error;
    }
}
