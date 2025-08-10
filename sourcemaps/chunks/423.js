exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 260:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'Geist', 'Geist Fallback'","fontStyle":"normal"},
	"className": "__className_5cfdac",
	"variable": "__variable_5cfdac"
};


/***/ }),

/***/ 1765:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HTTPAccessErrorFallback", ({
    enumerable: true,
    get: function() {
        return HTTPAccessErrorFallback;
    }
}));
const _interop_require_default = __webpack_require__(72639);
const _jsxruntime = __webpack_require__(37413);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(61120));
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        display: 'inline-block'
    },
    h1: {
        display: 'inline-block',
        margin: '0 20px 0 0',
        padding: '0 23px 0 0',
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: 'top',
        lineHeight: '49px'
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '49px',
        margin: 0
    }
};
function HTTPAccessErrorFallback(param) {
    let { status, message } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                children: status + ": " + message
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                style: styles.error,
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                            }
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                            className: "next-error-h1",
                            style: styles.h1,
                            children: status
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            style: styles.desc,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                                style: styles.h2,
                                children: message
                            })
                        })
                    ]
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-fallback.js.map


/***/ }),

/***/ 4871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IconKeys: function() {
        return IconKeys;
    },
    ViewportMetaKeys: function() {
        return ViewportMetaKeys;
    }
});
const ViewportMetaKeys = {
    width: 'width',
    height: 'height',
    initialScale: 'initial-scale',
    minimumScale: 'minimum-scale',
    maximumScale: 'maximum-scale',
    viewportFit: 'viewport-fit',
    userScalable: 'user-scalable',
    interactiveWidget: 'interactive-widget'
};
const IconKeys = [
    'icon',
    'shortcut',
    'apple',
    'other'
];

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interopDefault", ({
    enumerable: true,
    get: function() {
        return interopDefault;
    }
}));
function interopDefault(mod) {
    return mod.default || mod;
}

//# sourceMappingURL=interop-default.js.map

/***/ }),

/***/ 7308:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatServerError: function() {
        return formatServerError;
    },
    getStackWithoutErrorMessage: function() {
        return getStackWithoutErrorMessage;
    }
});
const invalidServerComponentReactHooks = [
    'useDeferredValue',
    'useEffect',
    'useImperativeHandle',
    'useInsertionEffect',
    'useLayoutEffect',
    'useReducer',
    'useRef',
    'useState',
    'useSyncExternalStore',
    'useTransition',
    'experimental_useOptimistic',
    'useOptimistic'
];
function setMessage(error, message) {
    error.message = message;
    if (error.stack) {
        const lines = error.stack.split('\n');
        lines[0] = message;
        error.stack = lines.join('\n');
    }
}
function getStackWithoutErrorMessage(error) {
    const stack = error.stack;
    if (!stack) return '';
    return stack.replace(/^[^\n]*\n/, '');
}
function formatServerError(error) {
    if (typeof (error == null ? void 0 : error.message) !== 'string') return;
    if (error.message.includes('Class extends value undefined is not a constructor or null')) {
        const addedMessage = 'This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component';
        // If this error instance already has the message, don't add it again
        if (error.message.includes(addedMessage)) return;
        setMessage(error, `${error.message}

${addedMessage}`);
        return;
    }
    if (error.message.includes('createContext is not a function')) {
        setMessage(error, 'createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component');
        return;
    }
    for (const clientHook of invalidServerComponentReactHooks){
        const regex = new RegExp(`\\b${clientHook}\\b.*is not a function`);
        if (regex.test(error.message)) {
            setMessage(error, `${clientHook} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
            return;
        }
    }
} //# sourceMappingURL=format-server-error.js.map


/***/ }),

/***/ 7797:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 8670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ROOT_SEGMENT_KEY: function() {
        return ROOT_SEGMENT_KEY;
    },
    convertSegmentPathToStaticExportFilename: function() {
        return convertSegmentPathToStaticExportFilename;
    },
    encodeChildSegmentKey: function() {
        return encodeChildSegmentKey;
    },
    encodeSegment: function() {
        return encodeSegment;
    }
});
const _segment = __webpack_require__(35499);
function encodeSegment(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return _segment.PAGE_SEGMENT_KEY;
        }
        const safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramValue = segment[1];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const safeValue = encodeToFilesystemAndURLSafeString(paramValue);
    const encodedName = '$' + paramType + '$' + safeName + '$' + safeValue;
    return encodedName;
}
const ROOT_SEGMENT_KEY = '';
function encodeChildSegmentKey(parentSegmentKey, parallelRouteKey, segment) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? segment : "@" + encodeToFilesystemAndURLSafeString(parallelRouteKey) + "/" + segment;
    return parentSegmentKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
function convertSegmentPathToStaticExportFilename(segmentPath) {
    return "__next" + segmentPath.replace(/\//g, '.') + ".txt";
} //# sourceMappingURL=segment-value-encoding.js.map


/***/ }),

/***/ 8681:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __webpack_require__(7797);
const _aftertaskasyncstorageexternal = __webpack_require__(3295);
function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
    });
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E634",
        enumerable: false,
        configurable: true
    });
    workStore.invalidUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 8704:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map


/***/ }),

/***/ 9221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringExoticSearchParamsForUseCache: function() {
        return makeErroringExoticSearchParamsForUseCache;
    }
});
const _reflect = __webpack_require__(83717);
const _dynamicrendering = __webpack_require__(54717);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _invarianterror = __webpack_require__(75539);
const _dynamicrenderingutils = __webpack_require__(18238);
const _creatededupedbycallsiteservererrorlogger = __webpack_require__(14768);
const _reflectutils = __webpack_require__(84627);
const _utils = __webpack_require__(8681);
const _scheduler = __webpack_require__(52825);
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        // dynamicIO Prerender
        // We're prerendering in a mode that aborts (dynamicIO) and should stall
        // the promise to ensure the RSC side is considered dynamic
        return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`searchParams`');
    }
    // We're prerendering in a mode that does not aborts. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve({});
}
function createPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    if (prerenderStore.type === 'prerender') {
        // We are in a dynamicIO (PPR or otherwise) prerender
        return makeAbortingExoticSearchParams(workStore.route, prerenderStore);
    }
    // The remaining cases are prerender-ppr and prerender-legacy
    // We are in a legacy static generation and need to interrupt the prerender
    // when search params are accessed.
    return makeErroringExoticSearchParams(workStore, prerenderStore);
}
function createRenderSearchParams(underlyingSearchParams, workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if (false) {} else {
            return makeUntrackedExoticSearchParams(underlyingSearchParams, workStore);
        }
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeAbortingExoticSearchParams(route, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            const error = createSearchAccessError(route, expression);
                            (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                const error = createSearchAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            const error = createSearchAccessError(route, expression);
            (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            if (workStore.dynamicShouldError) {
                                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                            } else if (prerenderStore.type === 'prerender-ppr') {
                                // PPR Prerender (no dynamicIO)
                                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                            } else {
                                // Legacy Prerender
                                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                            }
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no dynamicIO)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
                return false;
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            if (workStore.dynamicShouldError) {
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            } else if (prerenderStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
            } else {
                // Legacy Prerender
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
            }
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests throw an error. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedExoticSearchParams(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (!_reflectutils.wellKnownProperties.has(prop)) {
            Object.defineProperty(promise, prop, {
                get () {
                    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(store, workUnitStore);
                    return underlyingSearchParams[prop];
                },
                set (value) {
                    Object.defineProperty(promise, prop, {
                        value,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    let promiseInitialized = false;
    const proxiedUnderlying = new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized) {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
                const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                (0, _dynamicrendering.trackDynamicDataInDynamicRender)(store, workUnitStore);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (store.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingSearchParams)));
    promise.then(()=>{
        promiseInitialized = true;
    });
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            Object.defineProperty(promise, prop, {
                get () {
                    return proxiedUnderlying[prop];
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && store.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E249",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin or well-known property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E2",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
}

//# sourceMappingURL=search-params.js.map

/***/ }),

/***/ 9608:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _bailouttocsr = __webpack_require__(81208);
const _workasyncstorageexternal = __webpack_require__(29294);
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    if (workStore == null ? void 0 : workStore.isStaticGeneration) throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 9977:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 10449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored.contexts.HooksClientContext;

//# sourceMappingURL=hooks-client-context.js.map

/***/ }),

/***/ 11264:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _react = __webpack_require__(43210);
const _routerreducertypes = __webpack_require__(59154);
const _useactionqueue = __webpack_require__(19129);
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 11448:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findSourceMapURL", ({
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
}));
const basePath =  false || '';
const pathname = "" + basePath + "/__nextjs_source-map";
const findSourceMapURL =  false ? 0 : undefined;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map


/***/ }),

/***/ 11804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppLinksMeta: function() {
        return AppLinksMeta;
    },
    OpenGraphMetadata: function() {
        return OpenGraphMetadata;
    },
    TwitterMetadata: function() {
        return TwitterMetadata;
    }
});
const _meta = __webpack_require__(80407);
function OpenGraphMetadata({ openGraph }) {
    var _openGraph_title, _openGraph_url, _openGraph_ttl;
    if (!openGraph) {
        return null;
    }
    let typedOpenGraph;
    if ('type' in openGraph) {
        const openGraphType = openGraph.type;
        switch(openGraphType){
            case 'website':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'website'
                    })
                ];
                break;
            case 'article':
                var _openGraph_publishedTime, _openGraph_modifiedTime, _openGraph_expirationTime;
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'article'
                    }),
                    (0, _meta.Meta)({
                        property: 'article:published_time',
                        content: (_openGraph_publishedTime = openGraph.publishedTime) == null ? void 0 : _openGraph_publishedTime.toString()
                    }),
                    (0, _meta.Meta)({
                        property: 'article:modified_time',
                        content: (_openGraph_modifiedTime = openGraph.modifiedTime) == null ? void 0 : _openGraph_modifiedTime.toString()
                    }),
                    (0, _meta.Meta)({
                        property: 'article:expiration_time',
                        content: (_openGraph_expirationTime = openGraph.expirationTime) == null ? void 0 : _openGraph_expirationTime.toString()
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'article:author',
                        contents: openGraph.authors
                    }),
                    (0, _meta.Meta)({
                        property: 'article:section',
                        content: openGraph.section
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'article:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'book':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'book'
                    }),
                    (0, _meta.Meta)({
                        property: 'book:isbn',
                        content: openGraph.isbn
                    }),
                    (0, _meta.Meta)({
                        property: 'book:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'book:author',
                        contents: openGraph.authors
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'book:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'profile':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'profile'
                    }),
                    (0, _meta.Meta)({
                        property: 'profile:first_name',
                        content: openGraph.firstName
                    }),
                    (0, _meta.Meta)({
                        property: 'profile:last_name',
                        content: openGraph.lastName
                    }),
                    (0, _meta.Meta)({
                        property: 'profile:username',
                        content: openGraph.username
                    }),
                    (0, _meta.Meta)({
                        property: 'profile:gender',
                        content: openGraph.gender
                    })
                ];
                break;
            case 'music.song':
                var _openGraph_duration;
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'music.song'
                    }),
                    (0, _meta.Meta)({
                        property: 'music:duration',
                        content: (_openGraph_duration = openGraph.duration) == null ? void 0 : _openGraph_duration.toString()
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:album',
                        contents: openGraph.albums
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    })
                ];
                break;
            case 'music.album':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'music.album'
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:musician',
                        contents: openGraph.musicians
                    }),
                    (0, _meta.Meta)({
                        property: 'music:release_date',
                        content: openGraph.releaseDate
                    })
                ];
                break;
            case 'music.playlist':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'music.playlist'
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:song',
                        contents: openGraph.songs
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'music.radio_station':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'music.radio_station'
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'music:creator',
                        contents: openGraph.creators
                    })
                ];
                break;
            case 'video.movie':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'video.movie'
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, _meta.Meta)({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, _meta.Meta)({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    })
                ];
                break;
            case 'video.episode':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'video.episode'
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:actor',
                        contents: openGraph.actors
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:director',
                        contents: openGraph.directors
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:writer',
                        contents: openGraph.writers
                    }),
                    (0, _meta.Meta)({
                        property: 'video:duration',
                        content: openGraph.duration
                    }),
                    (0, _meta.Meta)({
                        property: 'video:release_date',
                        content: openGraph.releaseDate
                    }),
                    (0, _meta.MultiMeta)({
                        propertyPrefix: 'video:tag',
                        contents: openGraph.tags
                    }),
                    (0, _meta.Meta)({
                        property: 'video:series',
                        content: openGraph.series
                    })
                ];
                break;
            case 'video.tv_show':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'video.tv_show'
                    })
                ];
                break;
            case 'video.other':
                typedOpenGraph = [
                    (0, _meta.Meta)({
                        property: 'og:type',
                        content: 'video.other'
                    })
                ];
                break;
            default:
                const _exhaustiveCheck = openGraphType;
                throw Object.defineProperty(new Error(`Invalid OpenGraph type: ${_exhaustiveCheck}`), "__NEXT_ERROR_CODE", {
                    value: "E237",
                    enumerable: false,
                    configurable: true
                });
        }
    }
    return (0, _meta.MetaFilter)([
        (0, _meta.Meta)({
            property: 'og:determiner',
            content: openGraph.determiner
        }),
        (0, _meta.Meta)({
            property: 'og:title',
            content: (_openGraph_title = openGraph.title) == null ? void 0 : _openGraph_title.absolute
        }),
        (0, _meta.Meta)({
            property: 'og:description',
            content: openGraph.description
        }),
        (0, _meta.Meta)({
            property: 'og:url',
            content: (_openGraph_url = openGraph.url) == null ? void 0 : _openGraph_url.toString()
        }),
        (0, _meta.Meta)({
            property: 'og:site_name',
            content: openGraph.siteName
        }),
        (0, _meta.Meta)({
            property: 'og:locale',
            content: openGraph.locale
        }),
        (0, _meta.Meta)({
            property: 'og:country_name',
            content: openGraph.countryName
        }),
        (0, _meta.Meta)({
            property: 'og:ttl',
            content: (_openGraph_ttl = openGraph.ttl) == null ? void 0 : _openGraph_ttl.toString()
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:image',
            contents: openGraph.images
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:video',
            contents: openGraph.videos
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:audio',
            contents: openGraph.audio
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:email',
            contents: openGraph.emails
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:phone_number',
            contents: openGraph.phoneNumbers
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:fax_number',
            contents: openGraph.faxNumbers
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'og:locale:alternate',
            contents: openGraph.alternateLocale
        }),
        ...typedOpenGraph ? typedOpenGraph : []
    ]);
}
function TwitterAppItem({ app, type }) {
    var _app_url_type, _app_url;
    return [
        (0, _meta.Meta)({
            name: `twitter:app:name:${type}`,
            content: app.name
        }),
        (0, _meta.Meta)({
            name: `twitter:app:id:${type}`,
            content: app.id[type]
        }),
        (0, _meta.Meta)({
            name: `twitter:app:url:${type}`,
            content: (_app_url = app.url) == null ? void 0 : (_app_url_type = _app_url[type]) == null ? void 0 : _app_url_type.toString()
        })
    ];
}
function TwitterMetadata({ twitter }) {
    var _twitter_title;
    if (!twitter) return null;
    const { card } = twitter;
    return (0, _meta.MetaFilter)([
        (0, _meta.Meta)({
            name: 'twitter:card',
            content: card
        }),
        (0, _meta.Meta)({
            name: 'twitter:site',
            content: twitter.site
        }),
        (0, _meta.Meta)({
            name: 'twitter:site:id',
            content: twitter.siteId
        }),
        (0, _meta.Meta)({
            name: 'twitter:creator',
            content: twitter.creator
        }),
        (0, _meta.Meta)({
            name: 'twitter:creator:id',
            content: twitter.creatorId
        }),
        (0, _meta.Meta)({
            name: 'twitter:title',
            content: (_twitter_title = twitter.title) == null ? void 0 : _twitter_title.absolute
        }),
        (0, _meta.Meta)({
            name: 'twitter:description',
            content: twitter.description
        }),
        (0, _meta.MultiMeta)({
            namePrefix: 'twitter:image',
            contents: twitter.images
        }),
        ...card === 'player' ? twitter.players.flatMap((player)=>[
                (0, _meta.Meta)({
                    name: 'twitter:player',
                    content: player.playerUrl.toString()
                }),
                (0, _meta.Meta)({
                    name: 'twitter:player:stream',
                    content: player.streamUrl.toString()
                }),
                (0, _meta.Meta)({
                    name: 'twitter:player:width',
                    content: player.width
                }),
                (0, _meta.Meta)({
                    name: 'twitter:player:height',
                    content: player.height
                })
            ]) : [],
        ...card === 'app' ? [
            TwitterAppItem({
                app: twitter.app,
                type: 'iphone'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'ipad'
            }),
            TwitterAppItem({
                app: twitter.app,
                type: 'googleplay'
            })
        ] : []
    ]);
}
function AppLinksMeta({ appLinks }) {
    if (!appLinks) return null;
    return (0, _meta.MetaFilter)([
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:ios',
            contents: appLinks.ios
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:iphone',
            contents: appLinks.iphone
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:ipad',
            contents: appLinks.ipad
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:android',
            contents: appLinks.android
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:windows_phone',
            contents: appLinks.windows_phone
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:windows',
            contents: appLinks.windows
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:windows_universal',
            contents: appLinks.windows_universal
        }),
        (0, _meta.MultiMeta)({
            propertyPrefix: 'al:web',
            contents: appLinks.web
        })
    ]);
}

//# sourceMappingURL=opengraph.js.map

/***/ }),

/***/ 12089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\metadata\\async-metadata.js")


/***/ }),

/***/ 12776:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function() {
        return handleHardNavError;
    },
    useNavFailureHandler: function() {
        return useNavFailureHandler;
    }
});
const _react = __webpack_require__(43210);
const _createhreffromurl = __webpack_require__(57391);
function handleHardNavError(error) {
    if (error && "undefined" !== 'undefined' && 0 && 0) {}
    return false;
}
function useNavFailureHandler() {
    if (false) {}
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nav-failure-handler.js.map


/***/ }),

/***/ 12907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(65239).vendored["react-rsc"].ReactServerDOMWebpackServerEdge;

//# sourceMappingURL=react-server-dom-webpack-server-edge.js.map

/***/ }),

/***/ 14077:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "matchSegment", ({
    enumerable: true,
    get: function() {
        return matchSegment;
    }
}));
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 14114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "IconsMetadata", ({
    enumerable: true,
    get: function() {
        return IconsMetadata;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _meta = __webpack_require__(80407);
function IconDescriptorLink({ icon }) {
    const { url, rel = 'icon', ...props } = icon;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
        rel: rel,
        href: url.toString(),
        ...props
    });
}
function IconLink({ rel, icon }) {
    if (typeof icon === 'object' && !(icon instanceof URL)) {
        if (!icon.rel && rel) icon.rel = rel;
        return IconDescriptorLink({
            icon
        });
    } else {
        const href = icon.toString();
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: rel,
            href: href
        });
    }
}
function IconsMetadata({ icons }) {
    if (!icons) return null;
    const shortcutList = icons.shortcut;
    const iconList = icons.icon;
    const appleList = icons.apple;
    const otherList = icons.other;
    return (0, _meta.MetaFilter)([
        shortcutList ? shortcutList.map((icon)=>IconLink({
                rel: 'shortcut icon',
                icon
            })) : null,
        iconList ? iconList.map((icon)=>IconLink({
                rel: 'icon',
                icon
            })) : null,
        appleList ? appleList.map((icon)=>IconLink({
                rel: 'apple-touch-icon',
                icon
            })) : null,
        otherList ? otherList.map((icon)=>IconDescriptorLink({
                icon
            })) : null
    ]);
}

//# sourceMappingURL=icons.js.map

/***/ }),

/***/ 14768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", ({
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
}));
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(43210));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Dynamic IO is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn =  false ? 0 : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache(// eslint-disable-next-line @typescript-eslint/no-unused-vars -- cache key
(key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if (false) { var _stack; } else {
            logErrorOrWarn(message);
        }
    };
}

//# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map

/***/ }),

/***/ 14985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_default)
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 15102:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 16042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\client-segment.js")


/***/ }),

/***/ 16444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\client-page.js")


/***/ }),

/***/ 17388:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 17974:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RedirectStatusCode", ({
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
}));
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map


/***/ }),

/***/ 18238:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}

//# sourceMappingURL=dynamic-rendering-utils.js.map

/***/ }),

/***/ 19129:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __webpack_require__(40740);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(43210));
const _isthenable = __webpack_require__(91992);
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if (false) {} else {
        dispatch = (action)=>actionQueue.dispatch(action, setState);
    }
    return (0, _isthenable.isThenable)(state) ? (0, _react.use)(state) : state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map


/***/ }),

/***/ 19357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored["react-ssr"].ReactServerDOMWebpackClientEdge;

//# sourceMappingURL=react-server-dom-webpack-client-edge.js.map

/***/ }),

/***/ 20884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-client.edge.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var ReactDOM = __webpack_require__(46033), decoderOptions = {
    stream: !0
};
function resolveClientReference(bundlerConfig, metadata) {
    if (bundlerConfig) {
        var moduleExports = bundlerConfig[metadata[0]];
        if (bundlerConfig = moduleExports && moduleExports[metadata[2]]) moduleExports = bundlerConfig.name;
        else {
            bundlerConfig = moduleExports && moduleExports["*"];
            if (!bundlerConfig) throw Error('Could not find the module "' + metadata[0] + '" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.');
            moduleExports = metadata[2];
        }
        return 4 === metadata.length ? [
            bundlerConfig.id,
            bundlerConfig.chunks,
            moduleExports,
            1
        ] : [
            bundlerConfig.id,
            bundlerConfig.chunks,
            moduleExports
        ];
    }
    return metadata;
}
function resolveServerReference(bundlerConfig, id) {
    var name = "", resolvedModuleData = bundlerConfig[id];
    if (resolvedModuleData) name = resolvedModuleData.name;
    else {
        var idx = id.lastIndexOf("#");
        -1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
        if (!resolvedModuleData) throw Error('Could not find the module "' + id + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return resolvedModuleData.async ? [
        resolvedModuleData.id,
        resolvedModuleData.chunks,
        name,
        1
    ] : [
        resolvedModuleData.id,
        resolvedModuleData.chunks,
        name
    ];
}
var chunkCache = new Map();
function requireAsyncModule(id) {
    var promise = globalThis.__next_require__(id);
    if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
    promise.then(function(value) {
        promise.status = "fulfilled";
        promise.value = value;
    }, function(reason) {
        promise.status = "rejected";
        promise.reason = reason;
    });
    return promise;
}
function ignoreReject() {}
function preloadModule(metadata) {
    for(var chunks = metadata[1], promises = [], i = 0; i < chunks.length;){
        var chunkId = chunks[i++];
        chunks[i++];
        var entry = chunkCache.get(chunkId);
        if (void 0 === entry) {
            entry = __webpack_require__.e(chunkId);
            promises.push(entry);
            var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
            entry.then(resolve, ignoreReject);
            chunkCache.set(chunkId, entry);
        } else null !== entry && promises.push(entry);
    }
    return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
        return requireAsyncModule(metadata[0]);
    }) : 0 < promises.length ? Promise.all(promises) : null;
}
function requireModule(metadata) {
    var moduleExports = globalThis.__next_require__(metadata[0]);
    if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
    else throw moduleExports.reason;
    return "*" === metadata[2] ? moduleExports : "" === metadata[2] ? moduleExports.__esModule ? moduleExports.default : moduleExports : moduleExports[metadata[2]];
}
function prepareDestinationWithChunks(moduleLoading, chunks, nonce$jscomp$0) {
    if (null !== moduleLoading) for(var i = 1; i < chunks.length; i += 2){
        var nonce = nonce$jscomp$0, JSCompiler_temp_const = ReactDOMSharedInternals.d, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.X, JSCompiler_temp_const$jscomp$1 = moduleLoading.prefix + chunks[i];
        var JSCompiler_inline_result = moduleLoading.crossOrigin;
        JSCompiler_inline_result = "string" === typeof JSCompiler_inline_result ? "use-credentials" === JSCompiler_inline_result ? JSCompiler_inline_result : "" : void 0;
        JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, JSCompiler_temp_const$jscomp$1, {
            crossOrigin: JSCompiler_inline_result,
            nonce: nonce
        });
    }
}
var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
    if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
    return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ASYNC_ITERATOR = Symbol.asyncIterator, isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, ObjectPrototype = Object.prototype, knownServerReferences = new WeakMap();
function serializeNumber(number) {
    return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
}
function processReply(root, formFieldPrefix, temporaryReferences, resolve, reject) {
    function serializeTypedArray(tag, typedArray) {
        typedArray = new Blob([
            new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength)
        ]);
        var blobId = nextPartId++;
        null === formData && (formData = new FormData());
        formData.append(formFieldPrefix + blobId, typedArray);
        return "$" + tag + blobId.toString(16);
    }
    function serializeBinaryReader(reader) {
        function progress(entry) {
            entry.done ? (entry = nextPartId++, data.append(formFieldPrefix + entry, new Blob(buffer)), data.append(formFieldPrefix + streamId, '"$o' + entry.toString(16) + '"'), data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data)) : (buffer.push(entry.value), reader.read(new Uint8Array(1024)).then(progress, reject));
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++, buffer = [];
        reader.read(new Uint8Array(1024)).then(progress, reject);
        return "$r" + streamId.toString(16);
    }
    function serializeReader(reader) {
        function progress(entry) {
            if (entry.done) data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data);
            else try {
                var partJSON = JSON.stringify(entry.value, resolveToJSON);
                data.append(formFieldPrefix + streamId, partJSON);
                reader.read().then(progress, reject);
            } catch (x) {
                reject(x);
            }
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++;
        reader.read().then(progress, reject);
        return "$R" + streamId.toString(16);
    }
    function serializeReadableStream(stream) {
        try {
            var binaryReader = stream.getReader({
                mode: "byob"
            });
        } catch (x) {
            return serializeReader(stream.getReader());
        }
        return serializeBinaryReader(binaryReader);
    }
    function serializeAsyncIterable(iterable, iterator) {
        function progress(entry) {
            if (entry.done) {
                if (void 0 === entry.value) data.append(formFieldPrefix + streamId, "C");
                else try {
                    var partJSON = JSON.stringify(entry.value, resolveToJSON);
                    data.append(formFieldPrefix + streamId, "C" + partJSON);
                } catch (x) {
                    reject(x);
                    return;
                }
                pendingParts--;
                0 === pendingParts && resolve(data);
            } else try {
                var partJSON$22 = JSON.stringify(entry.value, resolveToJSON);
                data.append(formFieldPrefix + streamId, partJSON$22);
                iterator.next().then(progress, reject);
            } catch (x$23) {
                reject(x$23);
            }
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++;
        iterable = iterable === iterator;
        iterator.next().then(progress, reject);
        return "$" + (iterable ? "x" : "X") + streamId.toString(16);
    }
    function resolveToJSON(key, value) {
        if (null === value) return null;
        if ("object" === typeof value) {
            switch(value.$$typeof){
                case REACT_ELEMENT_TYPE:
                    if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
                        var parentReference = writtenObjects.get(this);
                        if (void 0 !== parentReference) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                    }
                    throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
                case REACT_LAZY_TYPE:
                    parentReference = value._payload;
                    var init = value._init;
                    null === formData && (formData = new FormData());
                    pendingParts++;
                    try {
                        var resolvedModel = init(parentReference), lazyId = nextPartId++, partJSON = serializeModel(resolvedModel, lazyId);
                        formData.append(formFieldPrefix + lazyId, partJSON);
                        return "$" + lazyId.toString(16);
                    } catch (x) {
                        if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                            pendingParts++;
                            var lazyId$24 = nextPartId++;
                            parentReference = function() {
                                try {
                                    var partJSON$25 = serializeModel(value, lazyId$24), data$26 = formData;
                                    data$26.append(formFieldPrefix + lazyId$24, partJSON$25);
                                    pendingParts--;
                                    0 === pendingParts && resolve(data$26);
                                } catch (reason) {
                                    reject(reason);
                                }
                            };
                            x.then(parentReference, parentReference);
                            return "$" + lazyId$24.toString(16);
                        }
                        reject(x);
                        return null;
                    } finally{
                        pendingParts--;
                    }
            }
            if ("function" === typeof value.then) {
                null === formData && (formData = new FormData());
                pendingParts++;
                var promiseId = nextPartId++;
                value.then(function(partValue) {
                    try {
                        var partJSON$28 = serializeModel(partValue, promiseId);
                        partValue = formData;
                        partValue.append(formFieldPrefix + promiseId, partJSON$28);
                        pendingParts--;
                        0 === pendingParts && resolve(partValue);
                    } catch (reason) {
                        reject(reason);
                    }
                }, reject);
                return "$@" + promiseId.toString(16);
            }
            parentReference = writtenObjects.get(value);
            if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
            else return parentReference;
            else -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference && (key = parentReference + ":" + key, writtenObjects.set(value, key), void 0 !== temporaryReferences && temporaryReferences.set(key, value)));
            if (isArrayImpl(value)) return value;
            if (value instanceof FormData) {
                null === formData && (formData = new FormData());
                var data$32 = formData;
                key = nextPartId++;
                var prefix = formFieldPrefix + key + "_";
                value.forEach(function(originalValue, originalKey) {
                    data$32.append(prefix + originalKey, originalValue);
                });
                return "$K" + key.toString(16);
            }
            if (value instanceof Map) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$Q" + key.toString(16);
            if (value instanceof Set) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$W" + key.toString(16);
            if (value instanceof ArrayBuffer) return key = new Blob([
                value
            ]), parentReference = nextPartId++, null === formData && (formData = new FormData()), formData.append(formFieldPrefix + parentReference, key), "$A" + parentReference.toString(16);
            if (value instanceof Int8Array) return serializeTypedArray("O", value);
            if (value instanceof Uint8Array) return serializeTypedArray("o", value);
            if (value instanceof Uint8ClampedArray) return serializeTypedArray("U", value);
            if (value instanceof Int16Array) return serializeTypedArray("S", value);
            if (value instanceof Uint16Array) return serializeTypedArray("s", value);
            if (value instanceof Int32Array) return serializeTypedArray("L", value);
            if (value instanceof Uint32Array) return serializeTypedArray("l", value);
            if (value instanceof Float32Array) return serializeTypedArray("G", value);
            if (value instanceof Float64Array) return serializeTypedArray("g", value);
            if (value instanceof BigInt64Array) return serializeTypedArray("M", value);
            if (value instanceof BigUint64Array) return serializeTypedArray("m", value);
            if (value instanceof DataView) return serializeTypedArray("V", value);
            if ("function" === typeof Blob && value instanceof Blob) return null === formData && (formData = new FormData()), key = nextPartId++, formData.append(formFieldPrefix + key, value), "$B" + key.toString(16);
            if (key = getIteratorFn(value)) return parentReference = key.call(value), parentReference === value ? (key = nextPartId++, parentReference = serializeModel(Array.from(parentReference), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$i" + key.toString(16)) : Array.from(parentReference);
            if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(value);
            key = value[ASYNC_ITERATOR];
            if ("function" === typeof key) return serializeAsyncIterable(value, key.call(value));
            key = getPrototypeOf(value);
            if (key !== ObjectPrototype && (null === key || null !== getPrototypeOf(key))) {
                if (void 0 === temporaryReferences) throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.");
                return "$T";
            }
            return value;
        }
        if ("string" === typeof value) {
            if ("Z" === value[value.length - 1] && this[key] instanceof Date) return "$D" + value;
            key = "$" === value[0] ? "$" + value : value;
            return key;
        }
        if ("boolean" === typeof value) return value;
        if ("number" === typeof value) return serializeNumber(value);
        if ("undefined" === typeof value) return "$undefined";
        if ("function" === typeof value) {
            parentReference = knownServerReferences.get(value);
            if (void 0 !== parentReference) return key = JSON.stringify({
                id: parentReference.id,
                bound: parentReference.bound
            }, resolveToJSON), null === formData && (formData = new FormData()), parentReference = nextPartId++, formData.set(formFieldPrefix + parentReference, key), "$F" + parentReference.toString(16);
            if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
            throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
        }
        if ("symbol" === typeof value) {
            if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
            throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
        }
        if ("bigint" === typeof value) return "$n" + value.toString(10);
        throw Error("Type " + typeof value + " is not supported as an argument to a Server Function.");
    }
    function serializeModel(model, id) {
        "object" === typeof model && null !== model && (id = "$" + id.toString(16), writtenObjects.set(model, id), void 0 !== temporaryReferences && temporaryReferences.set(id, model));
        modelRoot = model;
        return JSON.stringify(model, resolveToJSON);
    }
    var nextPartId = 1, pendingParts = 0, formData = null, writtenObjects = new WeakMap(), modelRoot = root, json = serializeModel(root, 0);
    null === formData ? resolve(json) : (formData.set(formFieldPrefix + "0", json), 0 === pendingParts && resolve(formData));
    return function() {
        0 < pendingParts && (pendingParts = 0, null === formData ? resolve(json) : resolve(formData));
    };
}
var boundCache = new WeakMap();
function encodeFormData(reference) {
    var resolve, reject, thenable = new Promise(function(res, rej) {
        resolve = res;
        reject = rej;
    });
    processReply(reference, "", void 0, function(body) {
        if ("string" === typeof body) {
            var data = new FormData();
            data.append("0", body);
            body = data;
        }
        thenable.status = "fulfilled";
        thenable.value = body;
        resolve(body);
    }, function(e) {
        thenable.status = "rejected";
        thenable.reason = e;
        reject(e);
    });
    return thenable;
}
function defaultEncodeFormAction(identifierPrefix) {
    var referenceClosure = knownServerReferences.get(this);
    if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
    var data = null;
    if (null !== referenceClosure.bound) {
        data = boundCache.get(referenceClosure);
        data || (data = encodeFormData({
            id: referenceClosure.id,
            bound: referenceClosure.bound
        }), boundCache.set(referenceClosure, data));
        if ("rejected" === data.status) throw data.reason;
        if ("fulfilled" !== data.status) throw data;
        referenceClosure = data.value;
        var prefixedData = new FormData();
        referenceClosure.forEach(function(value, key) {
            prefixedData.append("$ACTION_" + identifierPrefix + ":" + key, value);
        });
        data = prefixedData;
        referenceClosure = "$ACTION_REF_" + identifierPrefix;
    } else referenceClosure = "$ACTION_ID_" + referenceClosure.id;
    return {
        name: referenceClosure,
        method: "POST",
        encType: "multipart/form-data",
        data: data
    };
}
function isSignatureEqual(referenceId, numberOfBoundArgs) {
    var referenceClosure = knownServerReferences.get(this);
    if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
    if (referenceClosure.id !== referenceId) return !1;
    var boundPromise = referenceClosure.bound;
    if (null === boundPromise) return 0 === numberOfBoundArgs;
    switch(boundPromise.status){
        case "fulfilled":
            return boundPromise.value.length === numberOfBoundArgs;
        case "pending":
            throw boundPromise;
        case "rejected":
            throw boundPromise.reason;
        default:
            throw "string" !== typeof boundPromise.status && (boundPromise.status = "pending", boundPromise.then(function(boundArgs) {
                boundPromise.status = "fulfilled";
                boundPromise.value = boundArgs;
            }, function(error) {
                boundPromise.status = "rejected";
                boundPromise.reason = error;
            })), boundPromise;
    }
}
function registerBoundServerReference(reference, id, bound, encodeFormAction) {
    knownServerReferences.has(reference) || (knownServerReferences.set(reference, {
        id: id,
        originalBind: reference.bind,
        bound: bound
    }), Object.defineProperties(reference, {
        $$FORM_ACTION: {
            value: void 0 === encodeFormAction ? defaultEncodeFormAction : function() {
                var referenceClosure = knownServerReferences.get(this);
                if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
                var boundPromise = referenceClosure.bound;
                null === boundPromise && (boundPromise = Promise.resolve([]));
                return encodeFormAction(referenceClosure.id, boundPromise);
            }
        },
        $$IS_SIGNATURE_EQUAL: {
            value: isSignatureEqual
        },
        bind: {
            value: bind
        }
    }));
}
var FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice;
function bind() {
    var referenceClosure = knownServerReferences.get(this);
    if (!referenceClosure) return FunctionBind.apply(this, arguments);
    var newFn = referenceClosure.originalBind.apply(this, arguments), args = ArraySlice.call(arguments, 1), boundPromise = null;
    boundPromise = null !== referenceClosure.bound ? Promise.resolve(referenceClosure.bound).then(function(boundArgs) {
        return boundArgs.concat(args);
    }) : Promise.resolve(args);
    knownServerReferences.set(newFn, {
        id: referenceClosure.id,
        originalBind: newFn.bind,
        bound: boundPromise
    });
    Object.defineProperties(newFn, {
        $$FORM_ACTION: {
            value: this.$$FORM_ACTION
        },
        $$IS_SIGNATURE_EQUAL: {
            value: isSignatureEqual
        },
        bind: {
            value: bind
        }
    });
    return newFn;
}
function createBoundServerReference(metaData, callServer, encodeFormAction) {
    function action() {
        var args = Array.prototype.slice.call(arguments);
        return bound ? "fulfilled" === bound.status ? callServer(id, bound.value.concat(args)) : Promise.resolve(bound).then(function(boundArgs) {
            return callServer(id, boundArgs.concat(args));
        }) : callServer(id, args);
    }
    var id = metaData.id, bound = metaData.bound;
    registerBoundServerReference(action, id, bound, encodeFormAction);
    return action;
}
function createServerReference$1(id, callServer, encodeFormAction) {
    function action() {
        var args = Array.prototype.slice.call(arguments);
        return callServer(id, args);
    }
    registerBoundServerReference(action, id, null, encodeFormAction);
    return action;
}
function ReactPromise(status, value, reason, response) {
    this.status = status;
    this.value = value;
    this.reason = reason;
    this._response = response;
}
ReactPromise.prototype = Object.create(Promise.prototype);
ReactPromise.prototype.then = function(resolve, reject) {
    switch(this.status){
        case "resolved_model":
            initializeModelChunk(this);
            break;
        case "resolved_module":
            initializeModuleChunk(this);
    }
    switch(this.status){
        case "fulfilled":
            resolve(this.value);
            break;
        case "pending":
        case "blocked":
            resolve && (null === this.value && (this.value = []), this.value.push(resolve));
            reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
            break;
        default:
            reject && reject(this.reason);
    }
};
function readChunk(chunk) {
    switch(chunk.status){
        case "resolved_model":
            initializeModelChunk(chunk);
            break;
        case "resolved_module":
            initializeModuleChunk(chunk);
    }
    switch(chunk.status){
        case "fulfilled":
            return chunk.value;
        case "pending":
        case "blocked":
            throw chunk;
        default:
            throw chunk.reason;
    }
}
function createPendingChunk(response) {
    return new ReactPromise("pending", null, null, response);
}
function wakeChunk(listeners, value) {
    for(var i = 0; i < listeners.length; i++)(0, listeners[i])(value);
}
function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
    switch(chunk.status){
        case "fulfilled":
            wakeChunk(resolveListeners, chunk.value);
            break;
        case "pending":
        case "blocked":
            if (chunk.value) for(var i = 0; i < resolveListeners.length; i++)chunk.value.push(resolveListeners[i]);
            else chunk.value = resolveListeners;
            if (chunk.reason) {
                if (rejectListeners) for(resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++)chunk.reason.push(rejectListeners[resolveListeners]);
            } else chunk.reason = rejectListeners;
            break;
        case "rejected":
            rejectListeners && wakeChunk(rejectListeners, chunk.reason);
    }
}
function triggerErrorOnChunk(chunk, error) {
    if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
    else {
        var listeners = chunk.reason;
        chunk.status = "rejected";
        chunk.reason = error;
        null !== listeners && wakeChunk(listeners, error);
    }
}
function createResolvedIteratorResultChunk(response, value, done) {
    return new ReactPromise("resolved_model", (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", null, response);
}
function resolveIteratorResultChunk(chunk, value, done) {
    resolveModelChunk(chunk, (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}");
}
function resolveModelChunk(chunk, value) {
    if ("pending" !== chunk.status) chunk.reason.enqueueModel(value);
    else {
        var resolveListeners = chunk.value, rejectListeners = chunk.reason;
        chunk.status = "resolved_model";
        chunk.value = value;
        null !== resolveListeners && (initializeModelChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
    }
}
function resolveModuleChunk(chunk, value) {
    if ("pending" === chunk.status || "blocked" === chunk.status) {
        var resolveListeners = chunk.value, rejectListeners = chunk.reason;
        chunk.status = "resolved_module";
        chunk.value = value;
        null !== resolveListeners && (initializeModuleChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
    }
}
var initializingHandler = null;
function initializeModelChunk(chunk) {
    var prevHandler = initializingHandler;
    initializingHandler = null;
    var resolvedModel = chunk.value;
    chunk.status = "blocked";
    chunk.value = null;
    chunk.reason = null;
    try {
        var value = JSON.parse(resolvedModel, chunk._response._fromJSON), resolveListeners = chunk.value;
        null !== resolveListeners && (chunk.value = null, chunk.reason = null, wakeChunk(resolveListeners, value));
        if (null !== initializingHandler) {
            if (initializingHandler.errored) throw initializingHandler.value;
            if (0 < initializingHandler.deps) {
                initializingHandler.value = value;
                initializingHandler.chunk = chunk;
                return;
            }
        }
        chunk.status = "fulfilled";
        chunk.value = value;
    } catch (error) {
        chunk.status = "rejected", chunk.reason = error;
    } finally{
        initializingHandler = prevHandler;
    }
}
function initializeModuleChunk(chunk) {
    try {
        var value = requireModule(chunk.value);
        chunk.status = "fulfilled";
        chunk.value = value;
    } catch (error) {
        chunk.status = "rejected", chunk.reason = error;
    }
}
function reportGlobalError(response, error) {
    response._closed = !0;
    response._closedReason = error;
    response._chunks.forEach(function(chunk) {
        "pending" === chunk.status && triggerErrorOnChunk(chunk, error);
    });
}
function createLazyChunkWrapper(chunk) {
    return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: chunk,
        _init: readChunk
    };
}
function getChunk(response, id) {
    var chunks = response._chunks, chunk = chunks.get(id);
    chunk || (chunk = response._closed ? new ReactPromise("rejected", null, response._closedReason, response) : createPendingChunk(response), chunks.set(id, chunk));
    return chunk;
}
function waitForReference(referencedChunk, parentObject, key, response, map, path) {
    function fulfill(value) {
        for(var i = 1; i < path.length; i++){
            for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, value === handler.chunk) value = handler.value;
            else if ("fulfilled" === value.status) value = value.value;
            else {
                path.splice(0, i - 1);
                value.then(fulfill, reject);
                return;
            }
            value = value[path[i]];
        }
        i = map(response, value, parentObject, key);
        parentObject[key] = i;
        "" === key && null === handler.value && (handler.value = i);
        if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(value = handler.value, key){
            case "3":
                value.props = i;
        }
        handler.deps--;
        0 === handler.deps && (i = handler.chunk, null !== i && "blocked" === i.status && (value = i.value, i.status = "fulfilled", i.value = handler.value, null !== value && wakeChunk(value, handler.value)));
    }
    function reject(error) {
        if (!handler.errored) {
            handler.errored = !0;
            handler.value = error;
            var chunk = handler.chunk;
            null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(chunk, error);
        }
    }
    if (initializingHandler) {
        var handler = initializingHandler;
        handler.deps++;
    } else handler = initializingHandler = {
        parent: null,
        chunk: null,
        value: null,
        deps: 1,
        errored: !1
    };
    referencedChunk.then(fulfill, reject);
    return null;
}
function loadServerReference(response, metaData, parentObject, key) {
    if (!response._serverReferenceConfig) return createBoundServerReference(metaData, response._callServer, response._encodeFormAction);
    var serverReference = resolveServerReference(response._serverReferenceConfig, metaData.id), promise = preloadModule(serverReference);
    if (promise) metaData.bound && (promise = Promise.all([
        promise,
        metaData.bound
    ]));
    else if (metaData.bound) promise = Promise.resolve(metaData.bound);
    else return promise = requireModule(serverReference), registerBoundServerReference(promise, metaData.id, metaData.bound, response._encodeFormAction), promise;
    if (initializingHandler) {
        var handler = initializingHandler;
        handler.deps++;
    } else handler = initializingHandler = {
        parent: null,
        chunk: null,
        value: null,
        deps: 1,
        errored: !1
    };
    promise.then(function() {
        var resolvedValue = requireModule(serverReference);
        if (metaData.bound) {
            var boundArgs = metaData.bound.value.slice(0);
            boundArgs.unshift(null);
            resolvedValue = resolvedValue.bind.apply(resolvedValue, boundArgs);
        }
        registerBoundServerReference(resolvedValue, metaData.id, metaData.bound, response._encodeFormAction);
        parentObject[key] = resolvedValue;
        "" === key && null === handler.value && (handler.value = resolvedValue);
        if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(boundArgs = handler.value, key){
            case "3":
                boundArgs.props = resolvedValue;
        }
        handler.deps--;
        0 === handler.deps && (resolvedValue = handler.chunk, null !== resolvedValue && "blocked" === resolvedValue.status && (boundArgs = resolvedValue.value, resolvedValue.status = "fulfilled", resolvedValue.value = handler.value, null !== boundArgs && wakeChunk(boundArgs, handler.value)));
    }, function(error) {
        if (!handler.errored) {
            handler.errored = !0;
            handler.value = error;
            var chunk = handler.chunk;
            null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(chunk, error);
        }
    });
    return null;
}
function getOutlinedModel(response, reference, parentObject, key, map) {
    reference = reference.split(":");
    var id = parseInt(reference[0], 16);
    id = getChunk(response, id);
    switch(id.status){
        case "resolved_model":
            initializeModelChunk(id);
            break;
        case "resolved_module":
            initializeModuleChunk(id);
    }
    switch(id.status){
        case "fulfilled":
            var value = id.value;
            for(id = 1; id < reference.length; id++){
                for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, "fulfilled" === value.status) value = value.value;
                else return waitForReference(value, parentObject, key, response, map, reference.slice(id - 1));
                value = value[reference[id]];
            }
            return map(response, value, parentObject, key);
        case "pending":
        case "blocked":
            return waitForReference(id, parentObject, key, response, map, reference);
        default:
            return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = id.reason) : initializingHandler = {
                parent: null,
                chunk: null,
                value: id.reason,
                deps: 0,
                errored: !0
            }, null;
    }
}
function createMap(response, model) {
    return new Map(model);
}
function createSet(response, model) {
    return new Set(model);
}
function createBlob(response, model) {
    return new Blob(model.slice(1), {
        type: model[0]
    });
}
function createFormData(response, model) {
    response = new FormData();
    for(var i = 0; i < model.length; i++)response.append(model[i][0], model[i][1]);
    return response;
}
function extractIterator(response, model) {
    return model[Symbol.iterator]();
}
function createModel(response, model) {
    return model;
}
function parseModelString(response, parentObject, key, value) {
    if ("$" === value[0]) {
        if ("$" === value) return null !== initializingHandler && "0" === key && (initializingHandler = {
            parent: initializingHandler,
            chunk: null,
            value: null,
            deps: 0,
            errored: !1
        }), REACT_ELEMENT_TYPE;
        switch(value[1]){
            case "$":
                return value.slice(1);
            case "L":
                return parentObject = parseInt(value.slice(2), 16), response = getChunk(response, parentObject), createLazyChunkWrapper(response);
            case "@":
                if (2 === value.length) return new Promise(function() {});
                parentObject = parseInt(value.slice(2), 16);
                return getChunk(response, parentObject);
            case "S":
                return Symbol.for(value.slice(2));
            case "F":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, loadServerReference);
            case "T":
                parentObject = "$" + value.slice(2);
                response = response._tempRefs;
                if (null == response) throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
                return response.get(parentObject);
            case "Q":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createMap);
            case "W":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createSet);
            case "B":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createBlob);
            case "K":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createFormData);
            case "Z":
                return resolveErrorProd();
            case "i":
                return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, extractIterator);
            case "I":
                return Infinity;
            case "-":
                return "$-0" === value ? -0 : -Infinity;
            case "N":
                return NaN;
            case "u":
                return;
            case "D":
                return new Date(Date.parse(value.slice(2)));
            case "n":
                return BigInt(value.slice(2));
            default:
                return value = value.slice(1), getOutlinedModel(response, value, parentObject, key, createModel);
        }
    }
    return value;
}
function missingCall() {
    throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.');
}
function ResponseInstance(bundlerConfig, serverReferenceConfig, moduleLoading, callServer, encodeFormAction, nonce, temporaryReferences) {
    var chunks = new Map();
    this._bundlerConfig = bundlerConfig;
    this._serverReferenceConfig = serverReferenceConfig;
    this._moduleLoading = moduleLoading;
    this._callServer = void 0 !== callServer ? callServer : missingCall;
    this._encodeFormAction = encodeFormAction;
    this._nonce = nonce;
    this._chunks = chunks;
    this._stringDecoder = new TextDecoder();
    this._fromJSON = null;
    this._rowLength = this._rowTag = this._rowID = this._rowState = 0;
    this._buffer = [];
    this._closed = !1;
    this._closedReason = null;
    this._tempRefs = temporaryReferences;
    this._fromJSON = createFromJSONCallback(this);
}
function resolveBuffer(response, id, buffer) {
    var chunks = response._chunks, chunk = chunks.get(id);
    chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(buffer) : chunks.set(id, new ReactPromise("fulfilled", buffer, null, response));
}
function resolveModule(response, id, model) {
    var chunks = response._chunks, chunk = chunks.get(id);
    model = JSON.parse(model, response._fromJSON);
    var clientReference = resolveClientReference(response._bundlerConfig, model);
    prepareDestinationWithChunks(response._moduleLoading, model[1], response._nonce);
    if (model = preloadModule(clientReference)) {
        if (chunk) {
            var blockedChunk = chunk;
            blockedChunk.status = "blocked";
        } else blockedChunk = new ReactPromise("blocked", null, null, response), chunks.set(id, blockedChunk);
        model.then(function() {
            return resolveModuleChunk(blockedChunk, clientReference);
        }, function(error) {
            return triggerErrorOnChunk(blockedChunk, error);
        });
    } else chunk ? resolveModuleChunk(chunk, clientReference) : chunks.set(id, new ReactPromise("resolved_module", clientReference, null, response));
}
function resolveStream(response, id, stream, controller) {
    var chunks = response._chunks, chunk = chunks.get(id);
    chunk ? "pending" === chunk.status && (response = chunk.value, chunk.status = "fulfilled", chunk.value = stream, chunk.reason = controller, null !== response && wakeChunk(response, chunk.value)) : chunks.set(id, new ReactPromise("fulfilled", stream, controller, response));
}
function startReadableStream(response, id, type) {
    var controller = null;
    type = new ReadableStream({
        type: type,
        start: function(c) {
            controller = c;
        }
    });
    var previousBlockedChunk = null;
    resolveStream(response, id, type, {
        enqueueValue: function(value) {
            null === previousBlockedChunk ? controller.enqueue(value) : previousBlockedChunk.then(function() {
                controller.enqueue(value);
            });
        },
        enqueueModel: function(json) {
            if (null === previousBlockedChunk) {
                var chunk = new ReactPromise("resolved_model", json, null, response);
                initializeModelChunk(chunk);
                "fulfilled" === chunk.status ? controller.enqueue(chunk.value) : (chunk.then(function(v) {
                    return controller.enqueue(v);
                }, function(e) {
                    return controller.error(e);
                }), previousBlockedChunk = chunk);
            } else {
                chunk = previousBlockedChunk;
                var chunk$52 = createPendingChunk(response);
                chunk$52.then(function(v) {
                    return controller.enqueue(v);
                }, function(e) {
                    return controller.error(e);
                });
                previousBlockedChunk = chunk$52;
                chunk.then(function() {
                    previousBlockedChunk === chunk$52 && (previousBlockedChunk = null);
                    resolveModelChunk(chunk$52, json);
                });
            }
        },
        close: function() {
            if (null === previousBlockedChunk) controller.close();
            else {
                var blockedChunk = previousBlockedChunk;
                previousBlockedChunk = null;
                blockedChunk.then(function() {
                    return controller.close();
                });
            }
        },
        error: function(error) {
            if (null === previousBlockedChunk) controller.error(error);
            else {
                var blockedChunk = previousBlockedChunk;
                previousBlockedChunk = null;
                blockedChunk.then(function() {
                    return controller.error(error);
                });
            }
        }
    });
}
function asyncIterator() {
    return this;
}
function createIterator(next) {
    next = {
        next: next
    };
    next[ASYNC_ITERATOR] = asyncIterator;
    return next;
}
function startAsyncIterable(response, id, iterator) {
    var buffer = [], closed = !1, nextWriteIndex = 0, $jscomp$compprop0 = {};
    $jscomp$compprop0 = ($jscomp$compprop0[ASYNC_ITERATOR] = function() {
        var nextReadIndex = 0;
        return createIterator(function(arg) {
            if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
            if (nextReadIndex === buffer.length) {
                if (closed) return new ReactPromise("fulfilled", {
                    done: !0,
                    value: void 0
                }, null, response);
                buffer[nextReadIndex] = createPendingChunk(response);
            }
            return buffer[nextReadIndex++];
        });
    }, $jscomp$compprop0);
    resolveStream(response, id, iterator ? $jscomp$compprop0[ASYNC_ITERATOR]() : $jscomp$compprop0, {
        enqueueValue: function(value) {
            if (nextWriteIndex === buffer.length) buffer[nextWriteIndex] = new ReactPromise("fulfilled", {
                done: !1,
                value: value
            }, null, response);
            else {
                var chunk = buffer[nextWriteIndex], resolveListeners = chunk.value, rejectListeners = chunk.reason;
                chunk.status = "fulfilled";
                chunk.value = {
                    done: !1,
                    value: value
                };
                null !== resolveListeners && wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
            }
            nextWriteIndex++;
        },
        enqueueModel: function(value) {
            nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !1);
            nextWriteIndex++;
        },
        close: function(value) {
            closed = !0;
            nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !0);
            for(nextWriteIndex++; nextWriteIndex < buffer.length;)resolveIteratorResultChunk(buffer[nextWriteIndex++], '"$undefined"', !0);
        },
        error: function(error) {
            closed = !0;
            for(nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = createPendingChunk(response)); nextWriteIndex < buffer.length;)triggerErrorOnChunk(buffer[nextWriteIndex++], error);
        }
    });
}
function resolveErrorProd() {
    var error = Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
    error.stack = "Error: " + error.message;
    return error;
}
function mergeBuffer(buffer, lastChunk) {
    for(var l = buffer.length, byteLength = lastChunk.length, i = 0; i < l; i++)byteLength += buffer[i].byteLength;
    byteLength = new Uint8Array(byteLength);
    for(var i$53 = i = 0; i$53 < l; i$53++){
        var chunk = buffer[i$53];
        byteLength.set(chunk, i);
        i += chunk.byteLength;
    }
    byteLength.set(lastChunk, i);
    return byteLength;
}
function resolveTypedArray(response, id, buffer, lastChunk, constructor, bytesPerElement) {
    buffer = 0 === buffer.length && 0 === lastChunk.byteOffset % bytesPerElement ? lastChunk : mergeBuffer(buffer, lastChunk);
    constructor = new constructor(buffer.buffer, buffer.byteOffset, buffer.byteLength / bytesPerElement);
    resolveBuffer(response, id, constructor);
}
function processFullBinaryRow(response, id, tag, buffer, chunk) {
    switch(tag){
        case 65:
            resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer);
            return;
        case 79:
            resolveTypedArray(response, id, buffer, chunk, Int8Array, 1);
            return;
        case 111:
            resolveBuffer(response, id, 0 === buffer.length ? chunk : mergeBuffer(buffer, chunk));
            return;
        case 85:
            resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1);
            return;
        case 83:
            resolveTypedArray(response, id, buffer, chunk, Int16Array, 2);
            return;
        case 115:
            resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2);
            return;
        case 76:
            resolveTypedArray(response, id, buffer, chunk, Int32Array, 4);
            return;
        case 108:
            resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4);
            return;
        case 71:
            resolveTypedArray(response, id, buffer, chunk, Float32Array, 4);
            return;
        case 103:
            resolveTypedArray(response, id, buffer, chunk, Float64Array, 8);
            return;
        case 77:
            resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8);
            return;
        case 109:
            resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8);
            return;
        case 86:
            resolveTypedArray(response, id, buffer, chunk, DataView, 1);
            return;
    }
    for(var stringDecoder = response._stringDecoder, row = "", i = 0; i < buffer.length; i++)row += stringDecoder.decode(buffer[i], decoderOptions);
    buffer = row += stringDecoder.decode(chunk);
    switch(tag){
        case 73:
            resolveModule(response, id, buffer);
            break;
        case 72:
            id = buffer[0];
            buffer = buffer.slice(1);
            response = JSON.parse(buffer, response._fromJSON);
            buffer = ReactDOMSharedInternals.d;
            switch(id){
                case "D":
                    buffer.D(response);
                    break;
                case "C":
                    "string" === typeof response ? buffer.C(response) : buffer.C(response[0], response[1]);
                    break;
                case "L":
                    id = response[0];
                    tag = response[1];
                    3 === response.length ? buffer.L(id, tag, response[2]) : buffer.L(id, tag);
                    break;
                case "m":
                    "string" === typeof response ? buffer.m(response) : buffer.m(response[0], response[1]);
                    break;
                case "X":
                    "string" === typeof response ? buffer.X(response) : buffer.X(response[0], response[1]);
                    break;
                case "S":
                    "string" === typeof response ? buffer.S(response) : buffer.S(response[0], 0 === response[1] ? void 0 : response[1], 3 === response.length ? response[2] : void 0);
                    break;
                case "M":
                    "string" === typeof response ? buffer.M(response) : buffer.M(response[0], response[1]);
            }
            break;
        case 69:
            tag = JSON.parse(buffer);
            buffer = resolveErrorProd();
            buffer.digest = tag.digest;
            tag = response._chunks;
            (chunk = tag.get(id)) ? triggerErrorOnChunk(chunk, buffer) : tag.set(id, new ReactPromise("rejected", null, buffer, response));
            break;
        case 84:
            tag = response._chunks;
            (chunk = tag.get(id)) && "pending" !== chunk.status ? chunk.reason.enqueueValue(buffer) : tag.set(id, new ReactPromise("fulfilled", buffer, null, response));
            break;
        case 78:
        case 68:
        case 87:
            throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");
        case 82:
            startReadableStream(response, id, void 0);
            break;
        case 114:
            startReadableStream(response, id, "bytes");
            break;
        case 88:
            startAsyncIterable(response, id, !1);
            break;
        case 120:
            startAsyncIterable(response, id, !0);
            break;
        case 67:
            (response = response._chunks.get(id)) && "fulfilled" === response.status && response.reason.close("" === buffer ? '"$undefined"' : buffer);
            break;
        default:
            tag = response._chunks, (chunk = tag.get(id)) ? resolveModelChunk(chunk, buffer) : tag.set(id, new ReactPromise("resolved_model", buffer, null, response));
    }
}
function createFromJSONCallback(response) {
    return function(key, value) {
        if ("string" === typeof value) return parseModelString(response, this, key, value);
        if ("object" === typeof value && null !== value) {
            if (value[0] === REACT_ELEMENT_TYPE) {
                if (key = {
                    $$typeof: REACT_ELEMENT_TYPE,
                    type: value[1],
                    key: value[2],
                    ref: null,
                    props: value[3]
                }, null !== initializingHandler) {
                    if (value = initializingHandler, initializingHandler = value.parent, value.errored) key = new ReactPromise("rejected", null, value.value, response), key = createLazyChunkWrapper(key);
                    else if (0 < value.deps) {
                        var blockedChunk = new ReactPromise("blocked", null, null, response);
                        value.value = key;
                        value.chunk = blockedChunk;
                        key = createLazyChunkWrapper(blockedChunk);
                    }
                }
            } else key = value;
            return key;
        }
        return value;
    };
}
function noServerCall() {
    throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.");
}
function createResponseFromOptions(options) {
    return new ResponseInstance(options.serverConsumerManifest.moduleMap, options.serverConsumerManifest.serverModuleMap, options.serverConsumerManifest.moduleLoading, noServerCall, options.encodeFormAction, "string" === typeof options.nonce ? options.nonce : void 0, options && options.temporaryReferences ? options.temporaryReferences : void 0);
}
function startReadingFromStream(response, stream) {
    function progress(_ref) {
        var value = _ref.value;
        if (_ref.done) reportGlobalError(response, Error("Connection closed."));
        else {
            var i = 0, rowState = response._rowState;
            _ref = response._rowID;
            for(var rowTag = response._rowTag, rowLength = response._rowLength, buffer = response._buffer, chunkLength = value.length; i < chunkLength;){
                var lastIdx = -1;
                switch(rowState){
                    case 0:
                        lastIdx = value[i++];
                        58 === lastIdx ? rowState = 1 : _ref = _ref << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                        continue;
                    case 1:
                        rowState = value[i];
                        84 === rowState || 65 === rowState || 79 === rowState || 111 === rowState || 85 === rowState || 83 === rowState || 115 === rowState || 76 === rowState || 108 === rowState || 71 === rowState || 103 === rowState || 77 === rowState || 109 === rowState || 86 === rowState ? (rowTag = rowState, rowState = 2, i++) : 64 < rowState && 91 > rowState || 35 === rowState || 114 === rowState || 120 === rowState ? (rowTag = rowState, rowState = 3, i++) : (rowTag = 0, rowState = 3);
                        continue;
                    case 2:
                        lastIdx = value[i++];
                        44 === lastIdx ? rowState = 4 : rowLength = rowLength << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                        continue;
                    case 3:
                        lastIdx = value.indexOf(10, i);
                        break;
                    case 4:
                        lastIdx = i + rowLength, lastIdx > value.length && (lastIdx = -1);
                }
                var offset = value.byteOffset + i;
                if (-1 < lastIdx) rowLength = new Uint8Array(value.buffer, offset, lastIdx - i), processFullBinaryRow(response, _ref, rowTag, buffer, rowLength), i = lastIdx, 3 === rowState && i++, rowLength = _ref = rowTag = rowState = 0, buffer.length = 0;
                else {
                    value = new Uint8Array(value.buffer, offset, value.byteLength - i);
                    buffer.push(value);
                    rowLength -= value.byteLength;
                    break;
                }
            }
            response._rowState = rowState;
            response._rowID = _ref;
            response._rowTag = rowTag;
            response._rowLength = rowLength;
            return reader.read().then(progress).catch(error);
        }
    }
    function error(e) {
        reportGlobalError(response, e);
    }
    var reader = stream.getReader();
    reader.read().then(progress).catch(error);
}
exports.createFromFetch = function(promiseForResponse, options) {
    var response = createResponseFromOptions(options);
    promiseForResponse.then(function(r) {
        startReadingFromStream(response, r.body);
    }, function(e) {
        reportGlobalError(response, e);
    });
    return getChunk(response, 0);
};
exports.createFromReadableStream = function(stream, options) {
    options = createResponseFromOptions(options);
    startReadingFromStream(options, stream);
    return getChunk(options, 0);
};
exports.createServerReference = function(id) {
    return createServerReference$1(id, noServerCall);
};
exports.createTemporaryReferenceSet = function() {
    return new Map();
};
exports.encodeReply = function(value, options) {
    return new Promise(function(resolve, reject) {
        var abort = processReply(value, "", options && options.temporaryReferences ? options.temporaryReferences : void 0, resolve, reject);
        if (options && options.signal) {
            var signal = options.signal;
            if (signal.aborted) abort(signal.reason);
            else {
                var listener = function() {
                    abort(signal.reason);
                    signal.removeEventListener("abort", listener);
                };
                signal.addEventListener("abort", listener);
            }
        }
    });
};
exports.registerServerReference = function(reference, id, encodeFormAction) {
    registerBoundServerReference(reference, id, null, encodeFormAction);
    return reference;
};


/***/ }),

/***/ 21709:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bootstrap: function() {
        return bootstrap;
    },
    error: function() {
        return error;
    },
    event: function() {
        return event;
    },
    info: function() {
        return info;
    },
    prefixes: function() {
        return prefixes;
    },
    ready: function() {
        return ready;
    },
    trace: function() {
        return trace;
    },
    wait: function() {
        return wait;
    },
    warn: function() {
        return warn;
    },
    warnOnce: function() {
        return warnOnce;
    }
});
const _picocolors = __webpack_require__(75317);
const _lrucache = __webpack_require__(38522);
const prefixes = {
    wait: (0, _picocolors.white)((0, _picocolors.bold)('○')),
    error: (0, _picocolors.red)((0, _picocolors.bold)('⨯')),
    warn: (0, _picocolors.yellow)((0, _picocolors.bold)('⚠')),
    ready: '▲',
    info: (0, _picocolors.white)((0, _picocolors.bold)(' ')),
    event: (0, _picocolors.green)((0, _picocolors.bold)('✓')),
    trace: (0, _picocolors.magenta)((0, _picocolors.bold)('»'))
};
const LOGGING_METHOD = {
    log: 'log',
    warn: 'warn',
    error: 'error'
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]('');
    } else {
        // Ensure if there's ANSI escape codes it's concatenated into one string.
        // Chrome DevTool can only handle color if it's in one string.
        if (message.length === 1 && typeof message[0] === 'string') {
            console[consoleMethod](' ' + prefix + ' ' + message[0]);
        } else {
            console[consoleMethod](' ' + prefix, ...message);
        }
    }
}
function bootstrap(...message) {
    // logging format: ' <prefix> <message>'
    // e.g. ' ✓ Compiled successfully'
    // Add spaces to align with the indent of other logs
    console.log('   ' + message.join(' '));
}
function wait(...message) {
    prefixedLog('wait', ...message);
}
function error(...message) {
    prefixedLog('error', ...message);
}
function warn(...message) {
    prefixedLog('warn', ...message);
}
function ready(...message) {
    prefixedLog('ready', ...message);
}
function info(...message) {
    prefixedLog('info', ...message);
}
function event(...message) {
    prefixedLog('event', ...message);
}
function trace(...message) {
    prefixedLog('trace', ...message);
}
const warnOnceCache = new _lrucache.LRUCache(10000, (value)=>value.length);
function warnOnce(...message) {
    const key = message.join(' ');
    if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
    }
}

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 22113:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 22142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored.contexts.AppRouterContext;

//# sourceMappingURL=app-router-context.js.map

/***/ }),

/***/ 22586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getComponentTypeModule: function() {
        return getComponentTypeModule;
    },
    getLayoutOrPageModule: function() {
        return getLayoutOrPageModule;
    }
});
const _segment = __webpack_require__(35499);
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== 'undefined';
    const isPage = typeof page !== 'undefined';
    const isDefaultPage = typeof defaultPage !== 'undefined' && loaderTree[0] === _segment.DEFAULT_SEGMENT_KEY;
    let mod = undefined;
    let modType = undefined;
    let filePath = undefined;
    if (isLayout) {
        mod = await layout[0]();
        modType = 'layout';
        filePath = layout[1];
    } else if (isPage) {
        mod = await page[0]();
        modType = 'page';
        filePath = page[1];
    } else if (isDefaultPage) {
        mod = await defaultPage[0]();
        modType = 'page';
        filePath = defaultPage[1];
    }
    return {
        mod,
        modType,
        filePath
    };
}
async function getComponentTypeModule(loaderTree, moduleType) {
    const { [moduleType]: module1 } = loaderTree[2];
    if (typeof module1 !== 'undefined') {
        return await module1[0]();
    }
    return undefined;
}

//# sourceMappingURL=app-dir-module.js.map

/***/ }),

/***/ 24207:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';

//# sourceMappingURL=metadata-constants.js.map

/***/ }),

/***/ 27924:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ClientSegmentRoot", ({
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
}));
const _jsxruntime = __webpack_require__(60687);
const _invarianterror = __webpack_require__(75539);
function ClientSegmentRoot(param) {
    let { Component, slots, params, promise } = param;
    if (true) {
        const { workAsyncStorage } = __webpack_require__(29294);
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = __webpack_require__(60824);
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {}
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map


/***/ }),

/***/ 28827:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AsyncMetadata: function() {
        return AsyncMetadata;
    },
    AsyncMetadataOutlet: function() {
        return AsyncMetadataOutlet;
    }
});
const _jsxruntime = __webpack_require__(60687);
const _react = __webpack_require__(43210);
const AsyncMetadata =  true ? (__webpack_require__(85429).ServerInsertMetadata) : 0;
function MetadataOutlet(param) {
    let { promise } = param;
    const { error, digest } = (0, _react.use)(promise);
    if (error) {
        if (digest) {
            // The error will lose its original digest after passing from server layer to client layer；
            // We recover the digest property here to override the React created one if original digest exists.
            ;
            error.digest = digest;
        }
        throw error;
    }
    return null;
}
function AsyncMetadataOutlet(param) {
    let { promise } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(MetadataOutlet, {
            promise: promise
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-metadata.js.map


/***/ }),

/***/ 28938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "collectSegmentData", ({
    enumerable: true,
    get: function() {
        return collectSegmentData;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _clientedge = __webpack_require__(52513);
const _staticedge = __webpack_require__(93972);
const _nodewebstreamshelper = __webpack_require__(77855);
const _scheduler = __webpack_require__(44523);
const _segmentvalueencoding = __webpack_require__(8670);
const _createerrorhandler = __webpack_require__(62713);
function onSegmentPrerenderError(error) {
    const digest = (0, _createerrorhandler.getDigestForWellKnownError)(error);
    if (digest) {
        return digest;
    }
// We don't need to log the errors because we would have already done that
// when generating the original Flight stream for the whole page.
}
async function collectSegmentData(shouldAssumePartialData, fullPageDataBuffer, staleTime, clientModules, serverConsumerManifest, fallbackRouteParams) {
    // Traverse the router tree and generate a prefetch response for each segment.
    // A mutable map to collect the results as we traverse the route tree.
    const resultMap = new Map();
    // Before we start, warm up the module cache by decoding the page data once.
    // Then we can assume that any remaining async tasks that occur the next time
    // are due to hanging promises caused by dynamic data access. Note we only
    // have to do this once per page, not per individual segment.
    //
    try {
        await (0, _clientedge.createFromReadableStream)((0, _nodewebstreamshelper.streamFromBuffer)(fullPageDataBuffer), {
            serverConsumerManifest
        });
        await (0, _scheduler.waitAtLeastOneReactRenderTask)();
    } catch  {}
    // Create an abort controller that we'll use to stop the stream.
    const abortController = new AbortController();
    const onCompletedProcessingRouteTree = async ()=>{
        // Since all we're doing is decoding and re-encoding a cached prerender, if
        // serializing the stream takes longer than a microtask, it must because of
        // hanging promises caused by dynamic data.
        await (0, _scheduler.waitAtLeastOneReactRenderTask)();
        abortController.abort();
    };
    // Generate a stream for the route tree prefetch. While we're walking the
    // tree, we'll also spawn additional tasks to generate the segment prefetches.
    // The promises for these tasks are pushed to a mutable array that we will
    // await once the route tree is fully rendered.
    const segmentTasks = [];
    const { prelude: treeStream } = await (0, _staticedge.unstable_prerender)(// RootTreePrefetch is not a valid return type for a React component, but
    // we need to use a component so that when we decode the original stream
    // inside of it, the side effects are transferred to the new stream.
    // @ts-expect-error
    /*#__PURE__*/ (0, _jsxruntime.jsx)(PrefetchTreeData, {
        shouldAssumePartialData: shouldAssumePartialData,
        fullPageDataBuffer: fullPageDataBuffer,
        fallbackRouteParams: fallbackRouteParams,
        serverConsumerManifest: serverConsumerManifest,
        clientModules: clientModules,
        staleTime: staleTime,
        segmentTasks: segmentTasks,
        onCompletedProcessingRouteTree: onCompletedProcessingRouteTree
    }), clientModules, {
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    // Write the route tree to a special `/_tree` segment.
    const treeBuffer = await (0, _nodewebstreamshelper.streamToBuffer)(treeStream);
    resultMap.set('/_tree', treeBuffer);
    // Now that we've finished rendering the route tree, all the segment tasks
    // should have been spawned. Await them in parallel and write the segment
    // prefetches to the result map.
    for (const [segmentPath, buffer] of (await Promise.all(segmentTasks))){
        resultMap.set(segmentPath, buffer);
    }
    return resultMap;
}
async function PrefetchTreeData({ shouldAssumePartialData, fullPageDataBuffer, fallbackRouteParams, serverConsumerManifest, clientModules, staleTime, segmentTasks, onCompletedProcessingRouteTree }) {
    // We're currently rendering a Flight response for the route tree prefetch.
    // Inside this component, decode the Flight stream for the whole page. This is
    // a hack to transfer the side effects from the original Flight stream (e.g.
    // Float preloads) onto the Flight stream for the tree prefetch.
    // TODO: React needs a better way to do this. Needed for Server Actions, too.
    const initialRSCPayload = await (0, _clientedge.createFromReadableStream)(createUnclosingPrefetchStream((0, _nodewebstreamshelper.streamFromBuffer)(fullPageDataBuffer)), {
        serverConsumerManifest
    });
    const buildId = initialRSCPayload.b;
    // FlightDataPath is an unsound type, hence the additional checks.
    const flightDataPaths = initialRSCPayload.f;
    if (flightDataPaths.length !== 1 && flightDataPaths[0].length !== 3) {
        console.error('Internal Next.js error: InitialRSCPayload does not match the expected ' + 'shape for a prerendered page during segment prefetch generation.');
        return null;
    }
    const flightRouterState = flightDataPaths[0][0];
    const seedData = flightDataPaths[0][1];
    const head = flightDataPaths[0][2];
    // Compute the route metadata tree by traversing the FlightRouterState. As we
    // walk the tree, we will also spawn a task to produce a prefetch response for
    // each segment.
    const tree = collectSegmentDataImpl(shouldAssumePartialData, flightRouterState, buildId, seedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, _segmentvalueencoding.ROOT_SEGMENT_KEY, segmentTasks);
    const isHeadPartial = shouldAssumePartialData || await isPartialRSCData(head, clientModules);
    // Notify the abort controller that we're done processing the route tree.
    // Anything async that happens after this point must be due to hanging
    // promises in the original stream.
    onCompletedProcessingRouteTree();
    // Render the route tree to a special `/_tree` segment.
    const treePrefetch = {
        buildId,
        tree,
        head,
        isHeadPartial,
        staleTime
    };
    return treePrefetch;
}
function collectSegmentDataImpl(shouldAssumePartialData, route, buildId, seedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, key, segmentTasks) {
    // Metadata about the segment. Sent as part of the tree prefetch. Null if
    // there are no children.
    let slotMetadata = null;
    const children = route[1];
    const seedDataChildren = seedData !== null ? seedData[2] : null;
    for(const parallelRouteKey in children){
        const childRoute = children[parallelRouteKey];
        const childSegment = childRoute[0];
        const childSeedData = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const childKey = (0, _segmentvalueencoding.encodeChildSegmentKey)(key, parallelRouteKey, Array.isArray(childSegment) && fallbackRouteParams !== null ? encodeSegmentWithPossibleFallbackParam(childSegment, fallbackRouteParams) : (0, _segmentvalueencoding.encodeSegment)(childSegment));
        const childTree = collectSegmentDataImpl(shouldAssumePartialData, childRoute, buildId, childSeedData, fallbackRouteParams, fullPageDataBuffer, clientModules, serverConsumerManifest, childKey, segmentTasks);
        if (slotMetadata === null) {
            slotMetadata = {};
        }
        slotMetadata[parallelRouteKey] = childTree;
    }
    if (seedData !== null) {
        // Spawn a task to write the segment data to a new Flight stream.
        segmentTasks.push(// Since we're already in the middle of a render, wait until after the
        // current task to escape the current rendering context.
        (0, _scheduler.waitAtLeastOneReactRenderTask)().then(()=>renderSegmentPrefetch(shouldAssumePartialData, buildId, seedData, key, clientModules)));
    } else {
    // This segment does not have any seed data. Skip generating a prefetch
    // response for it. We'll still include it in the route tree, though.
    // TODO: We should encode in the route tree whether a segment is missing
    // so we don't attempt to fetch it for no reason. As of now this shouldn't
    // ever happen in practice, though.
    }
    // Metadata about the segment. Sent to the client as part of the
    // tree prefetch.
    return {
        segment: route[0],
        slots: slotMetadata,
        isRootLayout: route[4] === true
    };
}
function encodeSegmentWithPossibleFallbackParam(segment, fallbackRouteParams) {
    const name = segment[0];
    if (!fallbackRouteParams.has(name)) {
        // Normal case. No matching fallback parameter.
        return (0, _segmentvalueencoding.encodeSegment)(segment);
    }
    // This segment includes a fallback parameter. During prerendering, a random
    // placeholder value was used; however, for segment prefetches, we need the
    // segment path to be predictable so the server can create a rewrite for it.
    // So, replace the placeholder segment value with a "template" string,
    // e.g. `[name]`.
    // TODO: This will become a bit cleaner once remove route parameters from the
    // server response, and instead add them to the segment keys on the client.
    // Instead of a string replacement, like we do here, route params will always
    // be encoded in separate step from the rest of the segment, not just in the
    // case of fallback params.
    const encodedSegment = (0, _segmentvalueencoding.encodeSegment)(segment);
    const lastIndex = encodedSegment.lastIndexOf('$');
    const encodedFallbackSegment = // NOTE: This is guaranteed not to clash with the rest of the segment
    // because non-simple characters (including [ and ]) trigger a base
    // 64 encoding.
    encodedSegment.substring(0, lastIndex + 1) + `[${name}]`;
    return encodedFallbackSegment;
}
async function renderSegmentPrefetch(shouldAssumePartialData, buildId, seedData, key, clientModules) {
    // Render the segment data to a stream.
    // In the future, this is where we can include additional metadata, like the
    // stale time and cache tags.
    const rsc = seedData[1];
    const loading = seedData[3];
    const segmentPrefetch = {
        buildId,
        rsc,
        loading,
        isPartial: shouldAssumePartialData || await isPartialRSCData(rsc, clientModules)
    };
    // Since all we're doing is decoding and re-encoding a cached prerender, if
    // it takes longer than a microtask, it must because of hanging promises
    // caused by dynamic data. Abort the stream at the end of the current task.
    const abortController = new AbortController();
    (0, _scheduler.waitAtLeastOneReactRenderTask)().then(()=>abortController.abort());
    const { prelude: segmentStream } = await (0, _staticedge.unstable_prerender)(segmentPrefetch, clientModules, {
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    const segmentBuffer = await (0, _nodewebstreamshelper.streamToBuffer)(segmentStream);
    if (key === _segmentvalueencoding.ROOT_SEGMENT_KEY) {
        return [
            '/_index',
            segmentBuffer
        ];
    } else {
        return [
            key,
            segmentBuffer
        ];
    }
}
async function isPartialRSCData(rsc, clientModules) {
    // We can determine if a segment contains only partial data if it takes longer
    // than a task to encode, because dynamic data is encoded as an infinite
    // promise. We must do this in a separate Flight prerender from the one that
    // actually generates the prefetch stream because we need to include
    // `isPartial` in the stream itself.
    let isPartial = false;
    const abortController = new AbortController();
    (0, _scheduler.waitAtLeastOneReactRenderTask)().then(()=>{
        // If we haven't yet finished the outer task, then it must be because we
        // accessed dynamic data.
        isPartial = true;
        abortController.abort();
    });
    await (0, _staticedge.unstable_prerender)(rsc, clientModules, {
        signal: abortController.signal,
        onError () {}
    });
    return isPartial;
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}

//# sourceMappingURL=collect-segment-data.js.map

/***/ }),

/***/ 29345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\layout-router.js")


/***/ }),

/***/ 30893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// eslint-disable-next-line import/no-extraneous-dependencies

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ClientPageRoot: function() {
        return _clientpage.ClientPageRoot;
    },
    ClientSegmentRoot: function() {
        return _clientsegment.ClientSegmentRoot;
    },
    HTTPAccessFallbackBoundary: function() {
        return _errorboundary.HTTPAccessFallbackBoundary;
    },
    LayoutRouter: function() {
        return _layoutrouter.default;
    },
    MetadataBoundary: function() {
        return _metadataboundary.MetadataBoundary;
    },
    OutletBoundary: function() {
        return _metadataboundary.OutletBoundary;
    },
    Postpone: function() {
        return _postpone.Postpone;
    },
    RenderFromTemplateContext: function() {
        return _renderfromtemplatecontext.default;
    },
    ViewportBoundary: function() {
        return _metadataboundary.ViewportBoundary;
    },
    actionAsyncStorage: function() {
        return _actionasyncstorageexternal.actionAsyncStorage;
    },
    collectSegmentData: function() {
        return _collectsegmentdata.collectSegmentData;
    },
    createMetadataComponents: function() {
        return _metadata.createMetadataComponents;
    },
    createPrerenderParamsForClientSegment: function() {
        return _params.createPrerenderParamsForClientSegment;
    },
    createPrerenderSearchParamsForClientPage: function() {
        return _searchparams.createPrerenderSearchParamsForClientPage;
    },
    createServerParamsForServerSegment: function() {
        return _params.createServerParamsForServerSegment;
    },
    createServerSearchParamsForServerPage: function() {
        return _searchparams.createServerSearchParamsForServerPage;
    },
    createTemporaryReferenceSet: function() {
        return _serveredge.createTemporaryReferenceSet;
    },
    decodeAction: function() {
        return _serveredge.decodeAction;
    },
    decodeFormState: function() {
        return _serveredge.decodeFormState;
    },
    decodeReply: function() {
        return _serveredge.decodeReply;
    },
    patchFetch: function() {
        return patchFetch;
    },
    preconnect: function() {
        return _preloads.preconnect;
    },
    preloadFont: function() {
        return _preloads.preloadFont;
    },
    preloadStyle: function() {
        return _preloads.preloadStyle;
    },
    prerender: function() {
        return _staticedge.unstable_prerender;
    },
    renderToReadableStream: function() {
        return _serveredge.renderToReadableStream;
    },
    serverHooks: function() {
        return _hooksservercontext;
    },
    taintObjectReference: function() {
        return _taint.taintObjectReference;
    },
    workAsyncStorage: function() {
        return _workasyncstorageexternal.workAsyncStorage;
    },
    workUnitAsyncStorage: function() {
        return _workunitasyncstorageexternal.workUnitAsyncStorage;
    }
});
const _serveredge = __webpack_require__(12907);
const _staticedge = __webpack_require__(93972);
const _layoutrouter = /*#__PURE__*/ _interop_require_default(__webpack_require__(29345));
const _renderfromtemplatecontext = /*#__PURE__*/ _interop_require_default(__webpack_require__(31307));
const _workasyncstorageexternal = __webpack_require__(29294);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _actionasyncstorageexternal = __webpack_require__(19121);
const _clientpage = __webpack_require__(16444);
const _clientsegment = __webpack_require__(16042);
const _searchparams = __webpack_require__(83091);
const _params = __webpack_require__(73102);
const _hooksservercontext = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(98479));
const _errorboundary = __webpack_require__(49477);
const _metadata = __webpack_require__(59521);
const _patchfetch = __webpack_require__(37719);
__webpack_require__(88170);
const _metadataboundary = __webpack_require__(46577);
const _preloads = __webpack_require__(72900);
const _postpone = __webpack_require__(61068);
const _taint = __webpack_require__(96844);
const _collectsegmentdata = __webpack_require__(28938);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// patchFetch makes use of APIs such as `React.unstable_postpone` which are only available
// in the experimental channel of React, so export it from here so that it comes from the bundled runtime
function patchFetch() {
    return (0, _patchfetch.patchFetch)({
        workAsyncStorage: _workasyncstorageexternal.workAsyncStorage,
        workUnitAsyncStorage: _workunitasyncstorageexternal.workUnitAsyncStorage
    });
}

//# sourceMappingURL=entry-base.js.map

/***/ }),

/***/ 31162:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNextRouterError", ({
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
}));
const _httpaccessfallback = __webpack_require__(8704);
const _redirecterror = __webpack_require__(49026);
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map


/***/ }),

/***/ 31307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js")


/***/ }),

/***/ 33123:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
const _segment = __webpack_require__(83913);
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return segment[0] + "|" + segment[1] + "|" + segment[2];
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 34822:
/***/ (() => {



/***/ }),

/***/ 35499:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 35656:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(14985);
const _jsxruntime = __webpack_require__(60687);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(43210));
const _navigationuntracked = __webpack_require__(93883);
const _isnextroutererror = __webpack_require__(88092);
const _navfailurehandler = __webpack_require__(12776);
const workAsyncStorage =  true ? (__webpack_require__(29294).workAsyncStorage) : 0;
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
// if we are revalidating we want to re-throw the error so the
// function crashes so we can maintain our previous cache
// instead of caching the error page
function HandleISRError(param) {
    let { error } = param;
    if (workAsyncStorage) {
        const store = workAsyncStorage.getStore();
        if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
            console.error(error);
            throw error;
        }
    }
    return null;
}
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if (false) {}
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                    style: styles.text,
                                    children: [
                                        "Application error: a ",
                                        digest ? 'server' : 'client',
                                        "-side exception has occurred while loading ",
                                        window.location.hostname,
                                        " (see the",
                                        ' ',
                                        digest ? 'server logs' : 'browser console',
                                        " for more information)."
                                    ]
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 35715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * Checks whether the given value is a NextError.
 * This can be used to print a more detailed error message with properties like `code` & `digest`.
 */ default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(69385);
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
}
function safeStringify(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (_key, value)=>{
        // If value is an object and already seen, replace with "[Circular]"
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return '[Circular]';
            }
            seen.add(value);
        }
        return value;
    });
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return Object.defineProperty(new Error((0, _isplainobject.isPlainObject)(err) ? safeStringify(err) : err + ''), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 36070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AlternatesMetadata", ({
    enumerable: true,
    get: function() {
        return AlternatesMetadata;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(61120));
const _meta = __webpack_require__(80407);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function AlternateLink({ descriptor, ...props }) {
    if (!descriptor.url) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
        ...props,
        ...descriptor.title && {
            title: descriptor.title
        },
        href: descriptor.url.toString()
    });
}
function AlternatesMetadata({ alternates }) {
    if (!alternates) return null;
    const { canonical, languages, media, types } = alternates;
    return (0, _meta.MetaFilter)([
        canonical ? AlternateLink({
            rel: 'canonical',
            descriptor: canonical
        }) : null,
        languages ? Object.entries(languages).flatMap(([locale, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    hrefLang: locale,
                    descriptor
                }))) : null,
        media ? Object.entries(media).flatMap(([mediaName, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    media: mediaName,
                    descriptor
                }))) : null,
        types ? Object.entries(types).flatMap(([type, descriptors])=>descriptors == null ? void 0 : descriptors.map((descriptor)=>AlternateLink({
                    rel: 'alternate',
                    type,
                    descriptor
                }))) : null
    ]);
}

//# sourceMappingURL=alternate.js.map

/***/ }),

/***/ 36536:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    resolveAlternates: function() {
        return resolveAlternates;
    },
    resolveAppLinks: function() {
        return resolveAppLinks;
    },
    resolveAppleWebApp: function() {
        return resolveAppleWebApp;
    },
    resolveFacebook: function() {
        return resolveFacebook;
    },
    resolveItunes: function() {
        return resolveItunes;
    },
    resolvePagination: function() {
        return resolvePagination;
    },
    resolveRobots: function() {
        return resolveRobots;
    },
    resolveThemeColor: function() {
        return resolveThemeColor;
    },
    resolveVerification: function() {
        return resolveVerification;
    }
});
const _utils = __webpack_require__(77341);
const _resolveurl = __webpack_require__(96258);
function resolveAlternateUrl(url, metadataBase, metadataContext) {
    // If alter native url is an URL instance,
    // we treat it as a URL base and resolve with current pathname
    if (url instanceof URL) {
        const newUrl = new URL(metadataContext.pathname, url);
        url.searchParams.forEach((value, key)=>newUrl.searchParams.set(key, value));
        url = newUrl;
    }
    return (0, _resolveurl.resolveAbsoluteUrlWithPathname)(url, metadataBase, metadataContext);
}
const resolveThemeColor = (themeColor)=>{
    var _resolveAsArrayOrUndefined;
    if (!themeColor) return null;
    const themeColorDescriptors = [];
    (_resolveAsArrayOrUndefined = (0, _utils.resolveAsArrayOrUndefined)(themeColor)) == null ? void 0 : _resolveAsArrayOrUndefined.forEach((descriptor)=>{
        if (typeof descriptor === 'string') themeColorDescriptors.push({
            color: descriptor
        });
        else if (typeof descriptor === 'object') themeColorDescriptors.push({
            color: descriptor.color,
            media: descriptor.media
        });
    });
    return themeColorDescriptors;
};
function resolveUrlValuesOfObject(obj, metadataBase, metadataContext) {
    if (!obj) return null;
    const result = {};
    for (const [key, value] of Object.entries(obj)){
        if (typeof value === 'string' || value instanceof URL) {
            result[key] = [
                {
                    url: resolveAlternateUrl(value, metadataBase, metadataContext)
                }
            ];
        } else {
            result[key] = [];
            value == null ? void 0 : value.forEach((item, index)=>{
                const url = resolveAlternateUrl(item.url, metadataBase, metadataContext);
                result[key][index] = {
                    url,
                    title: item.title
                };
            });
        }
    }
    return result;
}
function resolveCanonicalUrl(urlOrDescriptor, metadataBase, metadataContext) {
    if (!urlOrDescriptor) return null;
    const url = typeof urlOrDescriptor === 'string' || urlOrDescriptor instanceof URL ? urlOrDescriptor : urlOrDescriptor.url;
    // Return string url because structureClone can't handle URL instance
    return {
        url: resolveAlternateUrl(url, metadataBase, metadataContext)
    };
}
const resolveAlternates = (alternates, metadataBase, context)=>{
    if (!alternates) return null;
    const canonical = resolveCanonicalUrl(alternates.canonical, metadataBase, context);
    const languages = resolveUrlValuesOfObject(alternates.languages, metadataBase, context);
    const media = resolveUrlValuesOfObject(alternates.media, metadataBase, context);
    const types = resolveUrlValuesOfObject(alternates.types, metadataBase, context);
    const result = {
        canonical,
        languages,
        media,
        types
    };
    return result;
};
const robotsKeys = [
    'noarchive',
    'nosnippet',
    'noimageindex',
    'nocache',
    'notranslate',
    'indexifembedded',
    'nositelinkssearchbox',
    'unavailable_after',
    'max-video-preview',
    'max-image-preview',
    'max-snippet'
];
const resolveRobotsValue = (robots)=>{
    if (!robots) return null;
    if (typeof robots === 'string') return robots;
    const values = [];
    if (robots.index) values.push('index');
    else if (typeof robots.index === 'boolean') values.push('noindex');
    if (robots.follow) values.push('follow');
    else if (typeof robots.follow === 'boolean') values.push('nofollow');
    for (const key of robotsKeys){
        const value = robots[key];
        if (typeof value !== 'undefined' && value !== false) {
            values.push(typeof value === 'boolean' ? key : `${key}:${value}`);
        }
    }
    return values.join(', ');
};
const resolveRobots = (robots)=>{
    if (!robots) return null;
    return {
        basic: resolveRobotsValue(robots),
        googleBot: typeof robots !== 'string' ? resolveRobotsValue(robots.googleBot) : null
    };
};
const VerificationKeys = [
    'google',
    'yahoo',
    'yandex',
    'me',
    'other'
];
const resolveVerification = (verification)=>{
    if (!verification) return null;
    const res = {};
    for (const key of VerificationKeys){
        const value = verification[key];
        if (value) {
            if (key === 'other') {
                res.other = {};
                for(const otherKey in verification.other){
                    const otherValue = (0, _utils.resolveAsArrayOrUndefined)(verification.other[otherKey]);
                    if (otherValue) res.other[otherKey] = otherValue;
                }
            } else res[key] = (0, _utils.resolveAsArrayOrUndefined)(value);
        }
    }
    return res;
};
const resolveAppleWebApp = (appWebApp)=>{
    var _resolveAsArrayOrUndefined;
    if (!appWebApp) return null;
    if (appWebApp === true) {
        return {
            capable: true
        };
    }
    const startupImages = appWebApp.startupImage ? (_resolveAsArrayOrUndefined = (0, _utils.resolveAsArrayOrUndefined)(appWebApp.startupImage)) == null ? void 0 : _resolveAsArrayOrUndefined.map((item)=>typeof item === 'string' ? {
            url: item
        } : item) : null;
    return {
        capable: 'capable' in appWebApp ? !!appWebApp.capable : true,
        title: appWebApp.title || null,
        startupImage: startupImages,
        statusBarStyle: appWebApp.statusBarStyle || 'default'
    };
};
const resolveAppLinks = (appLinks)=>{
    if (!appLinks) return null;
    for(const key in appLinks){
        // @ts-ignore // TODO: type infer
        appLinks[key] = (0, _utils.resolveAsArrayOrUndefined)(appLinks[key]);
    }
    return appLinks;
};
const resolveItunes = (itunes, metadataBase, context)=>{
    if (!itunes) return null;
    return {
        appId: itunes.appId,
        appArgument: itunes.appArgument ? resolveAlternateUrl(itunes.appArgument, metadataBase, context) : undefined
    };
};
const resolveFacebook = (facebook)=>{
    if (!facebook) return null;
    return {
        appId: facebook.appId,
        admins: (0, _utils.resolveAsArrayOrUndefined)(facebook.admins)
    };
};
const resolvePagination = (pagination, metadataBase, context)=>{
    return {
        previous: (pagination == null ? void 0 : pagination.previous) ? resolveAlternateUrl(pagination.previous, metadataBase, context) : null,
        next: (pagination == null ? void 0 : pagination.next) ? resolveAlternateUrl(pagination.next, metadataBase, context) : null
    };
};

//# sourceMappingURL=resolve-basics.js.map

/***/ }),

/***/ 36875:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __webpack_require__(17974);
const _redirecterror = __webpack_require__(97860);
const actionAsyncStorage =  true ? (__webpack_require__(19121).actionAsyncStorage) : 0;
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 37413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(65239).vendored["react-rsc"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 37697:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDefaultMetadata: function() {
        return createDefaultMetadata;
    },
    createDefaultViewport: function() {
        return createDefaultViewport;
    }
});
function createDefaultViewport() {
    return {
        // name=viewport
        width: 'device-width',
        initialScale: 1,
        // visual metadata
        themeColor: null,
        colorScheme: null
    };
}
function createDefaultMetadata() {
    return {
        // Deprecated ones
        viewport: null,
        themeColor: null,
        colorScheme: null,
        metadataBase: null,
        // Other values are all null
        title: null,
        description: null,
        applicationName: null,
        authors: null,
        generator: null,
        keywords: null,
        referrer: null,
        creator: null,
        publisher: null,
        robots: null,
        manifest: null,
        alternates: {
            canonical: null,
            languages: null,
            media: null,
            types: null
        },
        icons: null,
        openGraph: null,
        twitter: null,
        verification: {},
        appleWebApp: null,
        formatDetection: null,
        itunes: null,
        facebook: null,
        pinterest: null,
        abstract: null,
        appLinks: null,
        archives: null,
        assets: null,
        bookmarks: null,
        category: null,
        classification: null,
        pagination: {
            previous: null,
            next: null
        },
        other: {}
    };
}

//# sourceMappingURL=default-metadata.js.map

/***/ }),

/***/ 38243:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(14985);
const _interop_require_wildcard = __webpack_require__(40740);
const _jsxruntime = __webpack_require__(60687);
const _routerreducertypes = __webpack_require__(59154);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(43210));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(51215));
const _approutercontextsharedruntime = __webpack_require__(22142);
const _fetchserverresponse = __webpack_require__(59008);
const _unresolvedthenable = __webpack_require__(89330);
const _errorboundary = __webpack_require__(35656);
const _matchsegments = __webpack_require__(14077);
const _handlesmoothscroll = __webpack_require__(86719);
const _redirectboundary = __webpack_require__(67086);
const _errorboundary1 = __webpack_require__(40099);
const _createroutercachekey = __webpack_require__(33123);
const _hasinterceptionrouteincurrenttree = __webpack_require__(68214);
const _useactionqueue = __webpack_require__(19129);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                'refetch'
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if (false) { var _domNode_parentElement; }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { tree, segmentPath, cacheNode, url } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const { tree: fullTree } = context;
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === 'object' && rsc !== null && typeof rsc.then === 'function' ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = cacheNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                '',
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            const navigatedAt = Date.now();
            cacheNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), {
                flightRouterState: refetchTree,
                nextUrl: includeNextUrl ? context.nextUrl : null
            }).then((serverResponse)=>{
                (0, _react.startTransition)(()=>{
                    (0, _useactionqueue.dispatchAppRouterAction)({
                        type: _routerreducertypes.ACTION_SERVER_PATCH,
                        previousTree: fullTree,
                        serverResponse,
                        navigatedAt
                    });
                });
                return serverResponse;
            });
            // Suspend while waiting for lazyData to resolve
            (0, _react.use)(lazyData);
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            // TODO-APP: overriding of url for parallel routes
            url: url
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { loading, children } = param;
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, url } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const parentTreeSegment = parentTree[0];
    const tree = parentTree[1][parallelRouterKey];
    const treeSegment = tree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(treeSegment);
    const stateKey = (0, _createroutercachekey.createRouterCacheKey)(treeSegment, true) // no search params
    ;
    // Read segment path from the parallel router cache node.
    let cacheNode = segmentMap.get(cacheKey);
    if (cacheNode === undefined) {
        // When data is not available during rendering client-side we need to fetch
        // it from the server.
        const newLazyCacheNode = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            loading: null,
            navigatedAt: -1
        };
        // Flight data fetch kicked off during render and put into the cache.
        cacheNode = newLazyCacheNode;
        segmentMap.set(cacheKey, newLazyCacheNode);
    }
    /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ // TODO: The loading module data for a segment is stored on the parent, then
    // applied to each of that parent segment's parallel route slots. In the
    // simple case where there's only one parallel route (the `children` slot),
    // this is no different from if the loading module data where stored on the
    // child directly. But I'm not sure this actually makes sense when there are
    // multiple parallel routes. It's not a huge issue because you always have
    // the option to define a narrower loading boundary for a particular slot. But
    // this sort of smells like an implementation accident to me.
    const loadingModuleData = parentCacheNode.loading;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
        value: /*#__PURE__*/ (0, _jsxruntime.jsx)(ScrollAndFocusHandler, {
            segmentPath: segmentPath,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles,
                errorScripts: errorScripts,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                    loading: loadingModuleData,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                        notFound: notFound,
                        forbidden: forbidden,
                        unauthorized: unauthorized,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_redirectboundary.RedirectBoundary, {
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                url: url,
                                tree: tree,
                                cacheNode: cacheNode,
                                segmentPath: segmentPath
                            })
                        })
                    })
                })
            })
        }),
        children: [
            templateStyles,
            templateScripts,
            template
        ]
    }, stateKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 38522:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "LRUCache", ({
    enumerable: true,
    get: function() {
        return LRUCache;
    }
}));
class LRUCache {
    constructor(maxSize, calculateSize){
        this.cache = new Map();
        this.sizes = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize || (()=>1);
    }
    set(key, value) {
        if (!key || !value) return;
        const size = this.calculateSize(value);
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return;
        }
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
        }
        this.cache.set(key, value);
        this.sizes.set(key, size);
        this.totalSize += size;
        this.touch(key);
    }
    has(key) {
        if (!key) return false;
        this.touch(key);
        return Boolean(this.cache.get(key));
    }
    get(key) {
        if (!key) return;
        const value = this.cache.get(key);
        if (value === undefined) {
            return undefined;
        }
        this.touch(key);
        return value;
    }
    touch(key) {
        const value = this.cache.get(key);
        if (value !== undefined) {
            this.cache.delete(key);
            this.cache.set(key, value);
            this.evictIfNecessary();
        }
    }
    evictIfNecessary() {
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            this.evictLeastRecentlyUsed();
        }
    }
    evictLeastRecentlyUsed() {
        const lruKey = this.cache.keys().next().value;
        if (lruKey !== undefined) {
            const lruSize = this.sizes.get(lruKey) || 0;
            this.totalSize -= lruSize;
            this.cache.delete(lruKey);
            this.sizes.delete(lruKey);
        }
    }
    reset() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    keys() {
        return [
            ...this.cache.keys()
        ];
    }
    remove(key) {
        if (this.cache.has(key)) {
            this.totalSize -= this.sizes.get(key) || 0;
            this.cache.delete(key);
            this.sizes.delete(key);
        }
    }
    clear() {
        this.cache.clear();
        this.sizes.clear();
        this.totalSize = 0;
    }
    get size() {
        return this.cache.size;
    }
    get currentSize() {
        return this.totalSize;
    }
}

//# sourceMappingURL=lru-cache.js.map

/***/ }),

/***/ 38637:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "setCacheBustingSearchParam", ({
    enumerable: true,
    get: function() {
        return setCacheBustingSearchParam;
    }
}));
const _hash = __webpack_require__(15102);
const _approuterheaders = __webpack_require__(91563);
const setCacheBustingSearchParam = (url, headers)=>{
    const uniqueCacheKey = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] || '0',
        headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER] || '0',
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER],
        headers[_approuterheaders.NEXT_URL]
    ].join(','));
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    const pairs = rawQuery.split('&').filter(Boolean);
    pairs.push(_approuterheaders.NEXT_RSC_UNION_QUERY + "=" + uniqueCacheKey);
    url.search = pairs.length ? "?" + pairs.join('&') : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-cache-busting-search-param.js.map


/***/ }),

/***/ 39444:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __webpack_require__(46453);
const _segment = __webpack_require__(83913);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 39695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored.contexts.ServerInsertedHtml;

//# sourceMappingURL=server-inserted-html.js.map

/***/ }),

/***/ 39844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(12907);
const createProxy = _serveredge.createClientModuleProxy;

//# sourceMappingURL=module-proxy.js.map

/***/ }),

/***/ 40099:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", ({
    enumerable: true,
    get: function() {
        return HTTPAccessFallbackBoundary;
    }
}));
const _interop_require_wildcard = __webpack_require__(40740);
const _jsxruntime = __webpack_require__(60687);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(43210));
const _navigationuntracked = __webpack_require__(93883);
const _httpaccessfallback = __webpack_require__(86358);
const _warnonce = __webpack_require__(50148);
const _approutercontextsharedruntime = __webpack_require__(22142);
class HTTPAccessFallbackErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (false) {}
    }
    static getDerivedStateFromError(error) {
        if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
            const httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
            return {
                triggeredStatus: httpStatus
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
            return {
                triggeredStatus: undefined,
                previousPathname: props.pathname
            };
        }
        return {
            triggeredStatus: state.triggeredStatus,
            previousPathname: props.pathname
        };
    }
    render() {
        const { notFound, forbidden, unauthorized, children } = this.props;
        const { triggeredStatus } = this.state;
        const errorComponents = {
            [_httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
            [_httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
            [_httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
        };
        if (triggeredStatus) {
            const isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
            const isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
            const isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
            // If there's no matched boundary in this layer, keep throwing the error by rendering the children
            if (!(isNotFound || isForbidden || isUnauthorized)) {
                return children;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                     false && /*#__PURE__*/ 0,
                    errorComponents[triggeredStatus]
                ]
            });
        }
        return children;
    }
    constructor(props){
        super(props);
        this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
    }
}
function HTTPAccessFallbackBoundary(param) {
    let { notFound, forbidden, unauthorized, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    const hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 40740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_wildcard)
/* harmony export */ });
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}



/***/ }),

/***/ 42292:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unstable_rethrow", ({
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
}));
const _dynamicrenderingutils = __webpack_require__(18238);
const _ispostpone = __webpack_require__(76299);
const _bailouttocsr = __webpack_require__(81208);
const _isnextroutererror = __webpack_require__(88092);
const _dynamicrendering = __webpack_require__(54717);
const _hooksservercontext = __webpack_require__(22113);
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map


/***/ }),

/***/ 42706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    accumulateMetadata: function() {
        return accumulateMetadata;
    },
    accumulateViewport: function() {
        return accumulateViewport;
    },
    resolveMetadata: function() {
        return resolveMetadata;
    },
    resolveViewport: function() {
        return resolveViewport;
    }
});
__webpack_require__(34822);
const _react = __webpack_require__(61120);
const _defaultmetadata = __webpack_require__(37697);
const _resolveopengraph = __webpack_require__(66483);
const _resolvetitle = __webpack_require__(57373);
const _utils = __webpack_require__(77341);
const _appdirmodule = __webpack_require__(22586);
const _interopdefault = __webpack_require__(6255);
const _resolvebasics = __webpack_require__(36536);
const _resolveicons = __webpack_require__(97181);
const _tracer = __webpack_require__(81289);
const _constants = __webpack_require__(14823);
const _segment = __webpack_require__(35499);
const _log = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(21709));
const _params = __webpack_require__(73102);
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function isFavicon(icon) {
    if (!icon) {
        return false;
    }
    // turbopack appends a hash to all images
    return (icon.url === '/favicon.ico' || icon.url.toString().startsWith('/favicon.ico?')) && icon.type === 'image/x-icon';
}
function mergeStaticMetadata(source, target, staticFilesMetadata, metadataContext, titleTemplates, leafSegmentStaticIcons) {
    var _source_twitter, _source_openGraph;
    if (!staticFilesMetadata) return;
    const { icon, apple, openGraph, twitter, manifest } = staticFilesMetadata;
    // Keep updating the static icons in the most leaf node
    if (icon) {
        leafSegmentStaticIcons.icon = icon;
    }
    if (apple) {
        leafSegmentStaticIcons.apple = apple;
    }
    // file based metadata is specified and current level metadata twitter.images is not specified
    if (twitter && !(source == null ? void 0 : (_source_twitter = source.twitter) == null ? void 0 : _source_twitter.hasOwnProperty('images'))) {
        const resolvedTwitter = (0, _resolveopengraph.resolveTwitter)({
            ...target.twitter,
            images: twitter
        }, target.metadataBase, {
            ...metadataContext,
            isStaticMetadataRouteFile: true
        }, titleTemplates.twitter);
        target.twitter = resolvedTwitter;
    }
    // file based metadata is specified and current level metadata openGraph.images is not specified
    if (openGraph && !(source == null ? void 0 : (_source_openGraph = source.openGraph) == null ? void 0 : _source_openGraph.hasOwnProperty('images'))) {
        const resolvedOpenGraph = (0, _resolveopengraph.resolveOpenGraph)({
            ...target.openGraph,
            images: openGraph
        }, target.metadataBase, {
            ...metadataContext,
            isStaticMetadataRouteFile: true
        }, titleTemplates.openGraph);
        target.openGraph = resolvedOpenGraph;
    }
    if (manifest) {
        target.manifest = manifest;
    }
    return target;
}
// Merge the source metadata into the resolved target metadata.
function mergeMetadata({ source, target, staticFilesMetadata, titleTemplates, metadataContext, buildState, leafSegmentStaticIcons }) {
    // If there's override metadata, prefer it otherwise fallback to the default metadata.
    const metadataBase = typeof (source == null ? void 0 : source.metadataBase) !== 'undefined' ? source.metadataBase : target.metadataBase;
    for(const key_ in source){
        const key = key_;
        switch(key){
            case 'title':
                {
                    target.title = (0, _resolvetitle.resolveTitle)(source.title, titleTemplates.title);
                    break;
                }
            case 'alternates':
                {
                    target.alternates = (0, _resolvebasics.resolveAlternates)(source.alternates, metadataBase, metadataContext);
                    break;
                }
            case 'openGraph':
                {
                    target.openGraph = (0, _resolveopengraph.resolveOpenGraph)(source.openGraph, metadataBase, metadataContext, titleTemplates.openGraph);
                    break;
                }
            case 'twitter':
                {
                    target.twitter = (0, _resolveopengraph.resolveTwitter)(source.twitter, metadataBase, metadataContext, titleTemplates.twitter);
                    break;
                }
            case 'facebook':
                target.facebook = (0, _resolvebasics.resolveFacebook)(source.facebook);
                break;
            case 'verification':
                target.verification = (0, _resolvebasics.resolveVerification)(source.verification);
                break;
            case 'icons':
                {
                    target.icons = (0, _resolveicons.resolveIcons)(source.icons);
                    break;
                }
            case 'appleWebApp':
                target.appleWebApp = (0, _resolvebasics.resolveAppleWebApp)(source.appleWebApp);
                break;
            case 'appLinks':
                target.appLinks = (0, _resolvebasics.resolveAppLinks)(source.appLinks);
                break;
            case 'robots':
                {
                    target.robots = (0, _resolvebasics.resolveRobots)(source.robots);
                    break;
                }
            case 'archives':
            case 'assets':
            case 'bookmarks':
            case 'keywords':
                {
                    target[key] = (0, _utils.resolveAsArrayOrUndefined)(source[key]);
                    break;
                }
            case 'authors':
                {
                    target[key] = (0, _utils.resolveAsArrayOrUndefined)(source.authors);
                    break;
                }
            case 'itunes':
                {
                    target[key] = (0, _resolvebasics.resolveItunes)(source.itunes, metadataBase, metadataContext);
                    break;
                }
            case 'pagination':
                {
                    target.pagination = (0, _resolvebasics.resolvePagination)(source.pagination, metadataBase, metadataContext);
                    break;
                }
            // directly assign fields that fallback to null
            case 'applicationName':
            case 'description':
            case 'generator':
            case 'creator':
            case 'publisher':
            case 'category':
            case 'classification':
            case 'referrer':
            case 'formatDetection':
            case 'manifest':
            case 'pinterest':
                // @ts-ignore TODO: support inferring
                target[key] = source[key] || null;
                break;
            case 'other':
                target.other = Object.assign({}, target.other, source.other);
                break;
            case 'metadataBase':
                target.metadataBase = metadataBase;
                break;
            default:
                {
                    if ((key === 'viewport' || key === 'themeColor' || key === 'colorScheme') && source[key] != null) {
                        buildState.warnings.add(`Unsupported metadata ${key} is configured in metadata export in ${metadataContext.pathname}. Please move it to viewport export instead.\nRead more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport`);
                    }
                    break;
                }
        }
    }
    mergeStaticMetadata(source, target, staticFilesMetadata, metadataContext, titleTemplates, leafSegmentStaticIcons);
}
function mergeViewport({ target, source }) {
    if (!source) return;
    for(const key_ in source){
        const key = key_;
        switch(key){
            case 'themeColor':
                {
                    target.themeColor = (0, _resolvebasics.resolveThemeColor)(source.themeColor);
                    break;
                }
            case 'colorScheme':
                target.colorScheme = source.colorScheme || null;
                break;
            default:
                // always override the target with the source
                // @ts-ignore viewport properties
                target[key] = source[key];
                break;
        }
    }
}
function getDefinedViewport(mod, props, tracingProps) {
    if (typeof mod.generateViewport === 'function') {
        const { route } = tracingProps;
        return (parent)=>(0, _tracer.getTracer)().trace(_constants.ResolveMetadataSpan.generateViewport, {
                spanName: `generateViewport ${route}`,
                attributes: {
                    'next.page': route
                }
            }, ()=>mod.generateViewport(props, parent));
    }
    return mod.viewport || null;
}
function getDefinedMetadata(mod, props, tracingProps) {
    if (typeof mod.generateMetadata === 'function') {
        const { route } = tracingProps;
        return (parent)=>(0, _tracer.getTracer)().trace(_constants.ResolveMetadataSpan.generateMetadata, {
                spanName: `generateMetadata ${route}`,
                attributes: {
                    'next.page': route
                }
            }, ()=>mod.generateMetadata(props, parent));
    }
    return mod.metadata || null;
}
async function collectStaticImagesFiles(metadata, props, type) {
    var _this;
    if (!(metadata == null ? void 0 : metadata[type])) return undefined;
    const iconPromises = metadata[type].map(async (imageModule)=>(0, _interopdefault.interopDefault)(await imageModule(props)));
    return (iconPromises == null ? void 0 : iconPromises.length) > 0 ? (_this = await Promise.all(iconPromises)) == null ? void 0 : _this.flat() : undefined;
}
async function resolveStaticMetadata(modules, props) {
    const { metadata } = modules;
    if (!metadata) return null;
    const [icon, apple, openGraph, twitter] = await Promise.all([
        collectStaticImagesFiles(metadata, props, 'icon'),
        collectStaticImagesFiles(metadata, props, 'apple'),
        collectStaticImagesFiles(metadata, props, 'openGraph'),
        collectStaticImagesFiles(metadata, props, 'twitter')
    ]);
    const staticMetadata = {
        icon,
        apple,
        openGraph,
        twitter,
        manifest: metadata.manifest
    };
    return staticMetadata;
}
// [layout.metadata, static files metadata] -> ... -> [page.metadata, static files metadata]
async function collectMetadata({ tree, metadataItems, errorMetadataItem, props, route, errorConvention }) {
    let mod;
    let modType;
    const hasErrorConventionComponent = Boolean(errorConvention && tree[2][errorConvention]);
    if (errorConvention) {
        mod = await (0, _appdirmodule.getComponentTypeModule)(tree, 'layout');
        modType = errorConvention;
    } else {
        const { mod: layoutOrPageMod, modType: layoutOrPageModType } = await (0, _appdirmodule.getLayoutOrPageModule)(tree);
        mod = layoutOrPageMod;
        modType = layoutOrPageModType;
    }
    if (modType) {
        route += `/${modType}`;
    }
    const staticFilesMetadata = await resolveStaticMetadata(tree[2], props);
    const metadataExport = mod ? getDefinedMetadata(mod, props, {
        route
    }) : null;
    metadataItems.push([
        metadataExport,
        staticFilesMetadata
    ]);
    if (hasErrorConventionComponent && errorConvention) {
        const errorMod = await (0, _appdirmodule.getComponentTypeModule)(tree, errorConvention);
        const errorMetadataExport = errorMod ? getDefinedMetadata(errorMod, props, {
            route
        }) : null;
        errorMetadataItem[0] = errorMetadataExport;
        errorMetadataItem[1] = staticFilesMetadata;
    }
}
// [layout.metadata, static files metadata] -> ... -> [page.metadata, static files metadata]
async function collectViewport({ tree, viewportItems, errorViewportItemRef, props, route, errorConvention }) {
    let mod;
    let modType;
    const hasErrorConventionComponent = Boolean(errorConvention && tree[2][errorConvention]);
    if (errorConvention) {
        mod = await (0, _appdirmodule.getComponentTypeModule)(tree, 'layout');
        modType = errorConvention;
    } else {
        const { mod: layoutOrPageMod, modType: layoutOrPageModType } = await (0, _appdirmodule.getLayoutOrPageModule)(tree);
        mod = layoutOrPageMod;
        modType = layoutOrPageModType;
    }
    if (modType) {
        route += `/${modType}`;
    }
    const viewportExport = mod ? getDefinedViewport(mod, props, {
        route
    }) : null;
    viewportItems.push(viewportExport);
    if (hasErrorConventionComponent && errorConvention) {
        const errorMod = await (0, _appdirmodule.getComponentTypeModule)(tree, errorConvention);
        const errorViewportExport = errorMod ? getDefinedViewport(errorMod, props, {
            route
        }) : null;
        errorViewportItemRef.current = errorViewportExport;
    }
}
const resolveMetadataItems = (0, _react.cache)(async function(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore) {
    const parentParams = {};
    const metadataItems = [];
    const errorMetadataItem = [
        null,
        null
    ];
    const treePrefix = undefined;
    return resolveMetadataItemsImpl(metadataItems, tree, treePrefix, parentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, workStore);
});
async function resolveMetadataItemsImpl(metadataItems, tree, /** Provided tree can be nested subtree, this argument says what is the path of such subtree */ treePrefix, parentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, workStore) {
    const [segment, parallelRoutes, { page }] = tree;
    const currentTreePrefix = treePrefix && treePrefix.length ? [
        ...treePrefix,
        segment
    ] : [
        segment
    ];
    const isPage = typeof page !== 'undefined';
    // Handle dynamic segment params.
    const segmentParam = getDynamicParamFromSegment(segment);
    /**
   * Create object holding the parent params and current params
   */ let currentParams = parentParams;
    if (segmentParam && segmentParam.value !== null) {
        currentParams = {
            ...parentParams,
            [segmentParam.param]: segmentParam.value
        };
    }
    const params = (0, _params.createServerParamsForMetadata)(currentParams, workStore);
    let layerProps;
    if (isPage) {
        layerProps = {
            params,
            searchParams
        };
    } else {
        layerProps = {
            params
        };
    }
    await collectMetadata({
        tree,
        metadataItems,
        errorMetadataItem,
        errorConvention,
        props: layerProps,
        route: currentTreePrefix// __PAGE__ shouldn't be shown in a route
        .filter((s)=>s !== _segment.PAGE_SEGMENT_KEY).join('/')
    });
    for(const key in parallelRoutes){
        const childTree = parallelRoutes[key];
        await resolveMetadataItemsImpl(metadataItems, childTree, currentTreePrefix, currentParams, searchParams, errorConvention, errorMetadataItem, getDynamicParamFromSegment, workStore);
    }
    if (Object.keys(parallelRoutes).length === 0 && errorConvention) {
        // If there are no parallel routes, place error metadata as the last item.
        // e.g. layout -> layout -> not-found
        metadataItems.push(errorMetadataItem);
    }
    return metadataItems;
}
const resolveViewportItems = (0, _react.cache)(async function(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore) {
    const parentParams = {};
    const viewportItems = [];
    const errorViewportItemRef = {
        current: null
    };
    const treePrefix = undefined;
    return resolveViewportItemsImpl(viewportItems, tree, treePrefix, parentParams, searchParams, errorConvention, errorViewportItemRef, getDynamicParamFromSegment, workStore);
});
async function resolveViewportItemsImpl(viewportItems, tree, /** Provided tree can be nested subtree, this argument says what is the path of such subtree */ treePrefix, parentParams, searchParams, errorConvention, errorViewportItemRef, getDynamicParamFromSegment, workStore) {
    const [segment, parallelRoutes, { page }] = tree;
    const currentTreePrefix = treePrefix && treePrefix.length ? [
        ...treePrefix,
        segment
    ] : [
        segment
    ];
    const isPage = typeof page !== 'undefined';
    // Handle dynamic segment params.
    const segmentParam = getDynamicParamFromSegment(segment);
    /**
   * Create object holding the parent params and current params
   */ let currentParams = parentParams;
    if (segmentParam && segmentParam.value !== null) {
        currentParams = {
            ...parentParams,
            [segmentParam.param]: segmentParam.value
        };
    }
    const params = (0, _params.createServerParamsForMetadata)(currentParams, workStore);
    let layerProps;
    if (isPage) {
        layerProps = {
            params,
            searchParams
        };
    } else {
        layerProps = {
            params
        };
    }
    await collectViewport({
        tree,
        viewportItems,
        errorViewportItemRef,
        errorConvention,
        props: layerProps,
        route: currentTreePrefix// __PAGE__ shouldn't be shown in a route
        .filter((s)=>s !== _segment.PAGE_SEGMENT_KEY).join('/')
    });
    for(const key in parallelRoutes){
        const childTree = parallelRoutes[key];
        await resolveViewportItemsImpl(viewportItems, childTree, currentTreePrefix, currentParams, searchParams, errorConvention, errorViewportItemRef, getDynamicParamFromSegment, workStore);
    }
    if (Object.keys(parallelRoutes).length === 0 && errorConvention) {
        // If there are no parallel routes, place error metadata as the last item.
        // e.g. layout -> layout -> not-found
        viewportItems.push(errorViewportItemRef.current);
    }
    return viewportItems;
}
const isTitleTruthy = (title)=>!!(title == null ? void 0 : title.absolute);
const hasTitle = (metadata)=>isTitleTruthy(metadata == null ? void 0 : metadata.title);
function inheritFromMetadata(target, metadata) {
    if (target) {
        if (!hasTitle(target) && hasTitle(metadata)) {
            target.title = metadata.title;
        }
        if (!target.description && metadata.description) {
            target.description = metadata.description;
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commonOgKeys = (/* unused pure expression or super */ null && ([
    'title',
    'description',
    'images'
]));
function postProcessMetadata(metadata, favicon, titleTemplates, metadataContext) {
    const { openGraph, twitter } = metadata;
    if (openGraph) {
        // If there's openGraph information but not configured in twitter,
        // inherit them from openGraph metadata.
        let autoFillProps = {};
        const hasTwTitle = hasTitle(twitter);
        const hasTwDescription = twitter == null ? void 0 : twitter.description;
        const hasTwImages = Boolean((twitter == null ? void 0 : twitter.hasOwnProperty('images')) && twitter.images);
        if (!hasTwTitle) {
            if (isTitleTruthy(openGraph.title)) {
                autoFillProps.title = openGraph.title;
            } else if (metadata.title && isTitleTruthy(metadata.title)) {
                autoFillProps.title = metadata.title;
            }
        }
        if (!hasTwDescription) autoFillProps.description = openGraph.description || metadata.description || undefined;
        if (!hasTwImages) autoFillProps.images = openGraph.images;
        if (Object.keys(autoFillProps).length > 0) {
            const partialTwitter = (0, _resolveopengraph.resolveTwitter)(autoFillProps, metadata.metadataBase, metadataContext, titleTemplates.twitter);
            if (metadata.twitter) {
                metadata.twitter = Object.assign({}, metadata.twitter, {
                    ...!hasTwTitle && {
                        title: partialTwitter == null ? void 0 : partialTwitter.title
                    },
                    ...!hasTwDescription && {
                        description: partialTwitter == null ? void 0 : partialTwitter.description
                    },
                    ...!hasTwImages && {
                        images: partialTwitter == null ? void 0 : partialTwitter.images
                    }
                });
            } else {
                metadata.twitter = partialTwitter;
            }
        }
    }
    // If there's no title and description configured in openGraph or twitter,
    // use the title and description from metadata.
    inheritFromMetadata(openGraph, metadata);
    inheritFromMetadata(twitter, metadata);
    if (favicon) {
        if (!metadata.icons) {
            metadata.icons = {
                icon: [],
                apple: []
            };
        }
        metadata.icons.icon.unshift(favicon);
    }
    return metadata;
}
function prerenderMetadata(metadataItems) {
    // If the index is a function then it is a resolver and the next slot
    // is the corresponding result. If the index is not a function it is the result
    // itself.
    const resolversAndResults = [];
    for(let i = 0; i < metadataItems.length; i++){
        const metadataExport = metadataItems[i][0];
        getResult(resolversAndResults, metadataExport);
    }
    return resolversAndResults;
}
function prerenderViewport(viewportItems) {
    // If the index is a function then it is a resolver and the next slot
    // is the corresponding result. If the index is not a function it is the result
    // itself.
    const resolversAndResults = [];
    for(let i = 0; i < viewportItems.length; i++){
        const viewportExport = viewportItems[i];
        getResult(resolversAndResults, viewportExport);
    }
    return resolversAndResults;
}
function getResult(resolversAndResults, exportForResult) {
    if (typeof exportForResult === 'function') {
        const result = exportForResult(new Promise((resolve)=>resolversAndResults.push(resolve)));
        resolversAndResults.push(result);
        if (result instanceof Promise) {
            // since we eager execute generateMetadata and
            // they can reject at anytime we need to ensure
            // we attach the catch handler right away to
            // prevent unhandled rejections crashing the process
            result.catch((err)=>{
                return {
                    __nextError: err
                };
            });
        }
    } else if (typeof exportForResult === 'object') {
        resolversAndResults.push(exportForResult);
    } else {
        resolversAndResults.push(null);
    }
}
function resolvePendingResult(parentResult, resolveParentResult) {
    // In dev we clone and freeze to prevent relying on mutating resolvedMetadata directly.
    // In prod we just pass resolvedMetadata through without any copying.
    if (false) {}
    resolveParentResult(parentResult);
}
async function accumulateMetadata(metadataItems, metadataContext) {
    const resolvedMetadata = (0, _defaultmetadata.createDefaultMetadata)();
    let titleTemplates = {
        title: null,
        twitter: null,
        openGraph: null
    };
    const buildState = {
        warnings: new Set()
    };
    let favicon;
    // Collect the static icons in the most leaf node,
    // since we don't collect all the static metadata icons in the parent segments.
    const leafSegmentStaticIcons = {
        icon: [],
        apple: []
    };
    const resolversAndResults = prerenderMetadata(metadataItems);
    let resultIndex = 0;
    for(let i = 0; i < metadataItems.length; i++){
        var _staticFilesMetadata_icon;
        const staticFilesMetadata = metadataItems[i][1];
        // Treat favicon as special case, it should be the first icon in the list
        // i <= 1 represents root layout, and if current page is also at root
        if (i <= 1 && isFavicon(staticFilesMetadata == null ? void 0 : (_staticFilesMetadata_icon = staticFilesMetadata.icon) == null ? void 0 : _staticFilesMetadata_icon[0])) {
            var _staticFilesMetadata_icon1;
            const iconMod = staticFilesMetadata == null ? void 0 : (_staticFilesMetadata_icon1 = staticFilesMetadata.icon) == null ? void 0 : _staticFilesMetadata_icon1.shift();
            if (i === 0) favicon = iconMod;
        }
        let pendingMetadata = resolversAndResults[resultIndex++];
        if (typeof pendingMetadata === 'function') {
            // This metadata item had a `generateMetadata` and
            // we need to provide the currently resolved metadata
            // to it before we continue;
            const resolveParentMetadata = pendingMetadata;
            // we know that the next item is a result if this item
            // was a resolver
            pendingMetadata = resolversAndResults[resultIndex++];
            resolvePendingResult(resolvedMetadata, resolveParentMetadata);
        }
        // Otherwise the item was either null or a static export
        let metadata;
        if (isPromiseLike(pendingMetadata)) {
            metadata = await pendingMetadata;
        } else {
            metadata = pendingMetadata;
        }
        mergeMetadata({
            target: resolvedMetadata,
            source: metadata,
            metadataContext,
            staticFilesMetadata,
            titleTemplates,
            buildState,
            leafSegmentStaticIcons
        });
        // If the layout is the same layer with page, skip the leaf layout and leaf page
        // The leaf layout and page are the last two items
        if (i < metadataItems.length - 2) {
            var _resolvedMetadata_title, _resolvedMetadata_openGraph, _resolvedMetadata_twitter;
            titleTemplates = {
                title: ((_resolvedMetadata_title = resolvedMetadata.title) == null ? void 0 : _resolvedMetadata_title.template) || null,
                openGraph: ((_resolvedMetadata_openGraph = resolvedMetadata.openGraph) == null ? void 0 : _resolvedMetadata_openGraph.title.template) || null,
                twitter: ((_resolvedMetadata_twitter = resolvedMetadata.twitter) == null ? void 0 : _resolvedMetadata_twitter.title.template) || null
            };
        }
    }
    if (leafSegmentStaticIcons.icon.length > 0 || leafSegmentStaticIcons.apple.length > 0) {
        if (!resolvedMetadata.icons) {
            resolvedMetadata.icons = {
                icon: [],
                apple: []
            };
            if (leafSegmentStaticIcons.icon.length > 0) {
                resolvedMetadata.icons.icon.unshift(...leafSegmentStaticIcons.icon);
            }
            if (leafSegmentStaticIcons.apple.length > 0) {
                resolvedMetadata.icons.apple.unshift(...leafSegmentStaticIcons.apple);
            }
        }
    }
    // Only log warnings if there are any, and only once after the metadata resolving process is finished
    if (buildState.warnings.size > 0) {
        for (const warning of buildState.warnings){
            _log.warn(warning);
        }
    }
    return postProcessMetadata(resolvedMetadata, favicon, titleTemplates, metadataContext);
}
async function accumulateViewport(viewportItems) {
    const resolvedViewport = (0, _defaultmetadata.createDefaultViewport)();
    const resolversAndResults = prerenderViewport(viewportItems);
    let i = 0;
    while(i < resolversAndResults.length){
        let pendingViewport = resolversAndResults[i++];
        if (typeof pendingViewport === 'function') {
            // this viewport item had a `generateViewport` and
            // we need to provide the currently resolved viewport
            // to it before we continue;
            const resolveParentViewport = pendingViewport;
            // we know that the next item is a result if this item
            // was a resolver
            pendingViewport = resolversAndResults[i++];
            resolvePendingResult(resolvedViewport, resolveParentViewport);
        }
        // Otherwise the item was either null or a static export
        let viewport;
        if (isPromiseLike(pendingViewport)) {
            viewport = await pendingViewport;
        } else {
            viewport = pendingViewport;
        }
        mergeViewport({
            target: resolvedViewport,
            source: viewport
        });
    }
    return resolvedViewport;
}
async function resolveMetadata(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore, metadataContext) {
    const metadataItems = await resolveMetadataItems(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore);
    return accumulateMetadata(metadataItems, metadataContext);
}
async function resolveViewport(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore) {
    const viewportItems = await resolveViewportItems(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore);
    return accumulateViewport(viewportItems);
}
function isPromiseLike(value) {
    return typeof value === 'object' && value !== null && typeof value.then === 'function';
}

//# sourceMappingURL=resolve-metadata.js.map

/***/ }),

/***/ 43210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored["react-ssr"].React;

//# sourceMappingURL=react.js.map

/***/ }),

/***/ 46033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(65239).vendored["react-rsc"].ReactDOM;

//# sourceMappingURL=react-dom.js.map

/***/ }),

/***/ 46453:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 46577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\metadata\\metadata-boundary.js")


/***/ }),

/***/ 49026:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __webpack_require__(52836);
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map


/***/ }),

/***/ 49477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\http-access-fallback\\error-boundary.js")


/***/ }),

/***/ 50148:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 51215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored["react-ssr"].ReactDOM;

//# sourceMappingURL=react-dom.js.map

/***/ }),

/***/ 51846:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map


/***/ }),

/***/ 52513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(20884);
} else {}


/***/ }),

/***/ 52637:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isPostpone", ({
    enumerable: true,
    get: function() {
        return isPostpone;
    }
}));
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
}

//# sourceMappingURL=is-postpone.js.map

/***/ }),

/***/ 52825:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if (false) {} else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if (false) {} else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if (false) {} else {
        return new Promise((r)=>setImmediate(r));
    }
}

//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ 52836:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RedirectStatusCode", ({
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
}));
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map


/***/ }),

/***/ 54717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackFallbackParamAccessed: function() {
        return trackFallbackParamAccessed;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(43210));
const _hooksservercontext = __webpack_require__(22113);
const _staticgenerationbailout = __webpack_require__(7797);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _workasyncstorageexternal = __webpack_require__(29294);
const _dynamicrenderingutils = __webpack_require__(18238);
const _metadataconstants = __webpack_require__(24207);
const _scheduler = __webpack_require__(52825);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: false,
                configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (false) {}
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (false) {}
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicExpression = expression;
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
                if (prerenderStore.validating === true) {
                    // We always log Request Access in dev at the point of calling the function
                    // So we mark the dynamic validation as not requiring it to be printed
                    dynamicTracking.syncDynamicLogged = true;
                }
            }
        }
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n')// Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        _react.default.unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    const controller = new AbortController();
    if (workUnitStore.cacheSignal) {
        // If we have a cacheSignal it means we're in a prospective render. If the input
        // we're waiting on is coming from another cache, we do want to wait for it so that
        // we can resolve this cache entry too.
        workUnitStore.cacheSignal.inputReady().then(()=>{
            controller.abort();
        });
    } else {
        // Otherwise we're in the final render and we should already have all our caches
        // filled. We might still be waiting on some microtasks so we wait one tick before
        // giving up. When we give up, we still want to render the content of this cache
        // as deeply as we can so that we can suspend as deeply as possible in the tree
        // or not at all if we don't end up waiting for the input.
        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
        // There are fallback route params, we should track these as dynamic
        // accesses.
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        if (workUnitStore) {
            // We're prerendering with dynamicIO or PPR or both
            if (workUnitStore.type === 'prerender') {
                // We are in a prerender with dynamicIO semantics
                // We are going to hang here and never resolve. This will cause the currently
                // rendering component to effectively be a dynamic hole
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
            } else if (workUnitStore.type === 'prerender-ppr') {
                // We're prerendering with PPR
                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
            } else if (workUnitStore.type === 'prerender-legacy') {
                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E608",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E534",
                enumerable: false,
                configurable: true
            });
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
                    value: "E573",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
                value: "E590",
                enumerable: false,
                configurable: true
            });
        }
    }
}

//# sourceMappingURL=dynamic-rendering.js.map

/***/ }),

/***/ 54838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppleWebAppMeta: function() {
        return AppleWebAppMeta;
    },
    BasicMeta: function() {
        return BasicMeta;
    },
    FacebookMeta: function() {
        return FacebookMeta;
    },
    FormatDetectionMeta: function() {
        return FormatDetectionMeta;
    },
    ItunesMeta: function() {
        return ItunesMeta;
    },
    PinterestMeta: function() {
        return PinterestMeta;
    },
    VerificationMeta: function() {
        return VerificationMeta;
    },
    ViewportMeta: function() {
        return ViewportMeta;
    }
});
const _jsxruntime = __webpack_require__(37413);
const _meta = __webpack_require__(80407);
const _constants = __webpack_require__(4871);
const _utils = __webpack_require__(77341);
// convert viewport object to string for viewport meta tag
function resolveViewportLayout(viewport) {
    let resolved = null;
    if (viewport && typeof viewport === 'object') {
        resolved = '';
        for(const viewportKey_ in _constants.ViewportMetaKeys){
            const viewportKey = viewportKey_;
            if (viewportKey in viewport) {
                let value = viewport[viewportKey];
                if (typeof value === 'boolean') {
                    value = value ? 'yes' : 'no';
                } else if (!value && viewportKey === 'initialScale') {
                    value = undefined;
                }
                if (value) {
                    if (resolved) resolved += ', ';
                    resolved += `${_constants.ViewportMetaKeys[viewportKey]}=${value}`;
                }
            }
        }
    }
    return resolved;
}
function ViewportMeta({ viewport }) {
    return (0, _meta.MetaFilter)([
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }),
        (0, _meta.Meta)({
            name: 'viewport',
            content: resolveViewportLayout(viewport)
        }),
        ...viewport.themeColor ? viewport.themeColor.map((themeColor)=>(0, _meta.Meta)({
                name: 'theme-color',
                content: themeColor.color,
                media: themeColor.media
            })) : [],
        (0, _meta.Meta)({
            name: 'color-scheme',
            content: viewport.colorScheme
        })
    ]);
}
function BasicMeta({ metadata }) {
    var _metadata_keywords, _metadata_robots, _metadata_robots1;
    const manifestOrigin = metadata.manifest ? (0, _utils.getOrigin)(metadata.manifest) : undefined;
    return (0, _meta.MetaFilter)([
        metadata.title !== null && metadata.title.absolute ? /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
            children: metadata.title.absolute
        }) : null,
        (0, _meta.Meta)({
            name: 'description',
            content: metadata.description
        }),
        (0, _meta.Meta)({
            name: 'application-name',
            content: metadata.applicationName
        }),
        ...metadata.authors ? metadata.authors.map((author)=>[
                author.url ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    rel: "author",
                    href: author.url.toString()
                }) : null,
                (0, _meta.Meta)({
                    name: 'author',
                    content: author.name
                })
            ]) : [],
        metadata.manifest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "manifest",
            href: metadata.manifest.toString(),
            // If it's same origin, and it's a preview deployment,
            // including credentials for manifest request.
            crossOrigin: !manifestOrigin && process.env.VERCEL_ENV === 'preview' ? 'use-credentials' : undefined
        }) : null,
        (0, _meta.Meta)({
            name: 'generator',
            content: metadata.generator
        }),
        (0, _meta.Meta)({
            name: 'keywords',
            content: (_metadata_keywords = metadata.keywords) == null ? void 0 : _metadata_keywords.join(',')
        }),
        (0, _meta.Meta)({
            name: 'referrer',
            content: metadata.referrer
        }),
        (0, _meta.Meta)({
            name: 'creator',
            content: metadata.creator
        }),
        (0, _meta.Meta)({
            name: 'publisher',
            content: metadata.publisher
        }),
        (0, _meta.Meta)({
            name: 'robots',
            content: (_metadata_robots = metadata.robots) == null ? void 0 : _metadata_robots.basic
        }),
        (0, _meta.Meta)({
            name: 'googlebot',
            content: (_metadata_robots1 = metadata.robots) == null ? void 0 : _metadata_robots1.googleBot
        }),
        (0, _meta.Meta)({
            name: 'abstract',
            content: metadata.abstract
        }),
        ...metadata.archives ? metadata.archives.map((archive)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "archives",
                href: archive
            })) : [],
        ...metadata.assets ? metadata.assets.map((asset)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "assets",
                href: asset
            })) : [],
        ...metadata.bookmarks ? metadata.bookmarks.map((bookmark)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "bookmarks",
                href: bookmark
            })) : [],
        ...metadata.pagination ? [
            metadata.pagination.previous ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "prev",
                href: metadata.pagination.previous
            }) : null,
            metadata.pagination.next ? /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                rel: "next",
                href: metadata.pagination.next
            }) : null
        ] : [],
        (0, _meta.Meta)({
            name: 'category',
            content: metadata.category
        }),
        (0, _meta.Meta)({
            name: 'classification',
            content: metadata.classification
        }),
        ...metadata.other ? Object.entries(metadata.other).map(([name, content])=>{
            if (Array.isArray(content)) {
                return content.map((contentItem)=>(0, _meta.Meta)({
                        name,
                        content: contentItem
                    }));
            } else {
                return (0, _meta.Meta)({
                    name,
                    content
                });
            }
        }) : []
    ]);
}
function ItunesMeta({ itunes }) {
    if (!itunes) return null;
    const { appId, appArgument } = itunes;
    let content = `app-id=${appId}`;
    if (appArgument) {
        content += `, app-argument=${appArgument}`;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "apple-itunes-app",
        content: content
    });
}
function FacebookMeta({ facebook }) {
    if (!facebook) return null;
    const { appId, admins } = facebook;
    return (0, _meta.MetaFilter)([
        appId ? /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            property: "fb:app_id",
            content: appId
        }) : null,
        ...admins ? admins.map((admin)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                property: "fb:admins",
                content: admin
            })) : []
    ]);
}
function PinterestMeta({ pinterest }) {
    if (!pinterest || !pinterest.richPin) return null;
    const { richPin } = pinterest;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        property: "pinterest-rich-pin",
        content: richPin.toString()
    });
}
const formatDetectionKeys = [
    'telephone',
    'date',
    'address',
    'email',
    'url'
];
function FormatDetectionMeta({ formatDetection }) {
    if (!formatDetection) return null;
    let content = '';
    for (const key of formatDetectionKeys){
        if (key in formatDetection) {
            if (content) content += ', ';
            content += `${key}=no`;
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "format-detection",
        content: content
    });
}
function AppleWebAppMeta({ appleWebApp }) {
    if (!appleWebApp) return null;
    const { capable, title, startupImage, statusBarStyle } = appleWebApp;
    return (0, _meta.MetaFilter)([
        capable ? (0, _meta.Meta)({
            name: 'mobile-web-app-capable',
            content: 'yes'
        }) : null,
        (0, _meta.Meta)({
            name: 'apple-mobile-web-app-title',
            content: title
        }),
        startupImage ? startupImage.map((image)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                href: image.url,
                media: image.media,
                rel: "apple-touch-startup-image"
            })) : null,
        statusBarStyle ? (0, _meta.Meta)({
            name: 'apple-mobile-web-app-status-bar-style',
            content: statusBarStyle
        }) : null
    ]);
}
function VerificationMeta({ verification }) {
    if (!verification) return null;
    return (0, _meta.MetaFilter)([
        (0, _meta.MultiMeta)({
            namePrefix: 'google-site-verification',
            contents: verification.google
        }),
        (0, _meta.MultiMeta)({
            namePrefix: 'y_key',
            contents: verification.yahoo
        }),
        (0, _meta.MultiMeta)({
            namePrefix: 'yandex-verification',
            contents: verification.yandex
        }),
        (0, _meta.MultiMeta)({
            namePrefix: 'me',
            contents: verification.me
        }),
        ...verification.other ? Object.entries(verification.other).map(([key, value])=>(0, _meta.MultiMeta)({
                namePrefix: key,
                contents: value
            })) : []
    ]);
}

//# sourceMappingURL=basic.js.map

/***/ }),

/***/ 55211:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return notFound;
    }
}));
const _httpaccessfallback = __webpack_require__(86358);
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 56526:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    copyNextErrorCode: function() {
        return copyNextErrorCode;
    },
    createDigestWithErrorCode: function() {
        return createDigestWithErrorCode;
    },
    extractNextErrorCode: function() {
        return extractNextErrorCode;
    }
});
const ERROR_CODE_DELIMITER = '@';
const createDigestWithErrorCode = (thrownValue, originalDigest)=>{
    if (typeof thrownValue === 'object' && thrownValue !== null && '__NEXT_ERROR_CODE' in thrownValue) {
        return `${originalDigest}${ERROR_CODE_DELIMITER}${thrownValue.__NEXT_ERROR_CODE}`;
    }
    return originalDigest;
};
const copyNextErrorCode = (source, target)=>{
    const errorCode = extractNextErrorCode(source);
    if (errorCode && typeof target === 'object' && target !== null) {
        Object.defineProperty(target, '__NEXT_ERROR_CODE', {
            value: errorCode,
            enumerable: false,
            configurable: true
        });
    }
};
const extractNextErrorCode = (error)=>{
    if (typeof error === 'object' && error !== null && '__NEXT_ERROR_CODE' in error && typeof error.__NEXT_ERROR_CODE === 'string') {
        return error.__NEXT_ERROR_CODE;
    }
    if (typeof error === 'object' && error !== null && 'digest' in error && typeof error.digest === 'string') {
        const segments = error.digest.split(ERROR_CODE_DELIMITER);
        const errorCode = segments.find((segment)=>segment.startsWith('E'));
        return errorCode;
    }
    return undefined;
};

//# sourceMappingURL=error-telemetry-utils.js.map

/***/ }),

/***/ 57373:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveTitle", ({
    enumerable: true,
    get: function() {
        return resolveTitle;
    }
}));
function resolveTitleTemplate(template, title) {
    return template ? template.replace(/%s/g, title) : title;
}
function resolveTitle(title, stashedTemplate) {
    let resolved;
    const template = typeof title !== 'string' && title && 'template' in title ? title.template : null;
    if (typeof title === 'string') {
        resolved = resolveTitleTemplate(stashedTemplate, title);
    } else if (title) {
        if ('default' in title) {
            resolved = resolveTitleTemplate(stashedTemplate, title.default);
        }
        if ('absolute' in title && title.absolute) {
            resolved = title.absolute;
        }
    }
    if (title && typeof title !== 'string') {
        return {
            template,
            absolute: resolved || ''
        };
    } else {
        return {
            absolute: resolved || title || '',
            template
        };
    }
}

//# sourceMappingURL=resolve-title.js.map

/***/ }),

/***/ 57391:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 57398:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NotFound;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _errorfallback = __webpack_require__(1765);
function NotFound() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorfallback.HTTPAccessErrorFallback, {
        status: 404,
        message: "This page could not be found."
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-error.js.map


/***/ }),

/***/ 59008:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _approuterheaders = __webpack_require__(91563);
const _appcallserver = __webpack_require__(11264);
const _appfindsourcemapurl = __webpack_require__(11448);
const _routerreducertypes = __webpack_require__(59154);
const _flightdatahelpers = __webpack_require__(74007);
const _appbuildid = __webpack_require__(59880);
const _setcachebustingsearchparam = __webpack_require__(38637);
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
// import { createFromReadableStream } from 'react-server-dom-webpack/client'
const { createFromReadableStream } =  true ? __webpack_require__(19357) : 0;
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
function doMpaNavigation(url) {
    return {
        flightData: urlToUrlWithoutFlightMarker(url).toString(),
        canonicalUrl: undefined,
        couldBeIntercepted: false,
        prerendered: false,
        postponed: false,
        staleTime: -1
    };
}
let abortController = new AbortController();
if (false) {}
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl, prefetchKind } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
    }
    if (false) {}
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        var _res_headers_get;
        // When creating a "temporary" prefetch (the "on-demand" prefetch that gets created on navigation, if one doesn't exist)
        // we send the request with a "high" priority as it's in response to a user interaction that could be blocking a transition.
        // Otherwise, all other prefetches are sent with a "low" priority.
        // We use "auto" for in all other cases to match the existing default, as this function is shared outside of prefetching.
        const fetchPriority = prefetchKind ? prefetchKind === _routerreducertypes.PrefetchKind.TEMPORARY ? 'high' : 'low' : 'auto';
        if (true) {
            if (false) {}
        }
        const res = await createFetch(url, headers, fetchPriority, abortController.signal);
        const responseUrl = urlToUrlWithoutFlightMarker(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!((_res_headers_get = res.headers.get('vary')) == null ? void 0 : _res_headers_get.includes(_approuterheaders.NEXT_URL));
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const staleTimeHeader = res.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
        const staleTime = staleTimeHeader !== null ? parseInt(staleTimeHeader, 10) : -1;
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        if (false) {}
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const flightStream = postponed ? createUnclosingPrefetchStream(res.body) : res.body;
        const response = await createFromNextReadableStream(flightStream);
        if ((0, _appbuildid.getAppBuildId)() !== response.b) {
            return doMpaNavigation(res.url);
        }
        return {
            flightData: (0, _flightdatahelpers.normalizeFlightData)(response.f),
            canonicalUrl: canonicalUrl,
            couldBeIntercepted: interception,
            prerendered: response.S,
            postponed,
            staleTime
        };
    } catch (err) {
        if (!abortController.signal.aborted) {
            console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return {
            flightData: url.toString(),
            canonicalUrl: undefined,
            couldBeIntercepted: false,
            prerendered: false,
            postponed: false,
            staleTime: -1
        };
    }
}
function createFetch(url, headers, fetchPriority, signal) {
    const fetchUrl = new URL(url);
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    if (false) {}
    if (false) {}
    return fetch(fetchUrl, {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    });
}
function createFromNextReadableStream(flightStream) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
    });
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 59154:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_PREFETCH = 'prefetch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
var PrefetchCacheEntryStatus = /*#__PURE__*/ function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
    return PrefetchCacheEntryStatus;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 59521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createMetadataComponents", ({
    enumerable: true,
    get: function() {
        return createMetadataComponents;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(61120));
const _basic = __webpack_require__(54838);
const _alternate = __webpack_require__(36070);
const _opengraph = __webpack_require__(11804);
const _icons = __webpack_require__(14114);
const _resolvemetadata = __webpack_require__(42706);
const _meta = __webpack_require__(80407);
const _httpaccessfallback = __webpack_require__(8704);
const _metadataconstants = __webpack_require__(67625);
const _asyncmetadata = __webpack_require__(12089);
const _ispostpone = __webpack_require__(52637);
const _searchparams = __webpack_require__(83091);
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function createMetadataComponents({ tree, parsedQuery, metadataContext, getDynamicParamFromSegment, appUsingSizeAdjustment, errorType, workStore, MetadataBoundary, ViewportBoundary, serveStreamingMetadata }) {
    const searchParams = (0, _searchparams.createServerSearchParamsForMetadata)(parsedQuery, workStore);
    function ViewportTree() {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(ViewportBoundary, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Viewport, {})
                }),
                appUsingSizeAdjustment ? /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                    name: "next-size-adjust",
                    content: ""
                }) : null
            ]
        });
    }
    function MetadataTree() {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(MetadataBoundary, {
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Metadata, {})
        });
    }
    function viewport() {
        return getResolvedViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorType);
    }
    async function Viewport() {
        try {
            return await viewport();
        } catch (error) {
            if (!errorType && (0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
                try {
                    return await getNotFoundViewport(tree, searchParams, getDynamicParamFromSegment, workStore);
                } catch  {}
            }
            // We don't actually want to error in this component. We will
            // also error in the MetadataOutlet which causes the error to
            // bubble from the right position in the page to be caught by the
            // appropriate boundaries
            return null;
        }
    }
    Viewport.displayName = _metadataconstants.VIEWPORT_BOUNDARY_NAME;
    function metadata() {
        return getResolvedMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorType);
    }
    async function resolveFinalMetadata() {
        let result;
        let error = null;
        try {
            result = await metadata();
            return {
                metadata: result,
                error: null,
                digest: undefined
            };
        } catch (metadataErr) {
            error = metadataErr;
            if (!errorType && (0, _httpaccessfallback.isHTTPAccessFallbackError)(metadataErr)) {
                try {
                    result = await getNotFoundMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore);
                    return {
                        metadata: result,
                        error,
                        digest: error == null ? void 0 : error.digest
                    };
                } catch (notFoundMetadataErr) {
                    error = notFoundMetadataErr;
                    // In PPR rendering we still need to throw the postpone error.
                    // If metadata is postponed, React needs to be aware of the location of error.
                    if (serveStreamingMetadata && (0, _ispostpone.isPostpone)(notFoundMetadataErr)) {
                        throw notFoundMetadataErr;
                    }
                }
            }
            // In PPR rendering we still need to throw the postpone error.
            // If metadata is postponed, React needs to be aware of the location of error.
            if (serveStreamingMetadata && (0, _ispostpone.isPostpone)(metadataErr)) {
                throw metadataErr;
            }
            // We don't actually want to error in this component. We will
            // also error in the MetadataOutlet which causes the error to
            // bubble from the right position in the page to be caught by the
            // appropriate boundaries
            return {
                metadata: result,
                error,
                digest: error == null ? void 0 : error.digest
            };
        }
    }
    async function Metadata() {
        const promise = resolveFinalMetadata();
        if (serveStreamingMetadata) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_asyncmetadata.AsyncMetadata, {
                    promise: promise
                })
            });
        }
        const metadataState = await promise;
        return metadataState.metadata;
    }
    Metadata.displayName = _metadataconstants.METADATA_BOUNDARY_NAME;
    async function getMetadataReady() {
        // Only warm up metadata() call when it's blocking metadata,
        // otherwise it will be fully managed by AsyncMetadata component.
        if (!serveStreamingMetadata) {
            await metadata();
        }
        return undefined;
    }
    async function getViewportReady() {
        await viewport();
        return undefined;
    }
    function StreamingMetadataOutlet() {
        if (serveStreamingMetadata) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_asyncmetadata.AsyncMetadataOutlet, {
                promise: resolveFinalMetadata()
            });
        }
        return null;
    }
    return {
        ViewportTree,
        MetadataTree,
        getViewportReady,
        getMetadataReady,
        StreamingMetadataOutlet
    };
}
const getResolvedMetadata = (0, _react.cache)(getResolvedMetadataImpl);
async function getResolvedMetadataImpl(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorConvention);
}
const getNotFoundMetadata = (0, _react.cache)(getNotFoundMetadataImpl);
async function getNotFoundMetadataImpl(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore, notFoundErrorConvention);
}
const getResolvedViewport = (0, _react.cache)(getResolvedViewportImpl);
async function getResolvedViewportImpl(tree, searchParams, getDynamicParamFromSegment, workStore, errorType) {
    const errorConvention = errorType === 'redirect' ? undefined : errorType;
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorConvention);
}
const getNotFoundViewport = (0, _react.cache)(getNotFoundViewportImpl);
async function getNotFoundViewportImpl(tree, searchParams, getDynamicParamFromSegment, workStore) {
    const notFoundErrorConvention = 'not-found';
    return renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, notFoundErrorConvention);
}
async function renderMetadata(tree, searchParams, getDynamicParamFromSegment, metadataContext, workStore, errorConvention) {
    const resolvedMetadata = await (0, _resolvemetadata.resolveMetadata)(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore, metadataContext);
    const elements = createMetadataElements(resolvedMetadata);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, _react.cloneElement)(el, {
                key: index
            });
        })
    });
}
async function renderViewport(tree, searchParams, getDynamicParamFromSegment, workStore, errorConvention) {
    const resolvedViewport = await (0, _resolvemetadata.resolveViewport)(tree, searchParams, errorConvention, getDynamicParamFromSegment, workStore);
    const elements = createViewportElements(resolvedViewport);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: elements.map((el, index)=>{
            return /*#__PURE__*/ (0, _react.cloneElement)(el, {
                key: index
            });
        })
    });
}
function createMetadataElements(metadata) {
    return (0, _meta.MetaFilter)([
        (0, _basic.BasicMeta)({
            metadata
        }),
        (0, _alternate.AlternatesMetadata)({
            alternates: metadata.alternates
        }),
        (0, _basic.ItunesMeta)({
            itunes: metadata.itunes
        }),
        (0, _basic.FacebookMeta)({
            facebook: metadata.facebook
        }),
        (0, _basic.PinterestMeta)({
            pinterest: metadata.pinterest
        }),
        (0, _basic.FormatDetectionMeta)({
            formatDetection: metadata.formatDetection
        }),
        (0, _basic.VerificationMeta)({
            verification: metadata.verification
        }),
        (0, _basic.AppleWebAppMeta)({
            appleWebApp: metadata.appleWebApp
        }),
        (0, _opengraph.OpenGraphMetadata)({
            openGraph: metadata.openGraph
        }),
        (0, _opengraph.TwitterMetadata)({
            twitter: metadata.twitter
        }),
        (0, _opengraph.AppLinksMeta)({
            appLinks: metadata.appLinks
        }),
        (0, _icons.IconsMetadata)({
            icons: metadata.icons
        })
    ]);
}
function createViewportElements(viewport) {
    return (0, _meta.MetaFilter)([
        (0, _basic.ViewportMeta)({
            viewport: viewport
        })
    ]);
}

//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ 59880:
/***/ ((module, exports) => {

"use strict";
// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map


/***/ }),

/***/ 60687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored["react-ssr"].ReactJsxRuntime;

//# sourceMappingURL=react-jsx-runtime.js.map

/***/ }),

/***/ 60824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _reflect = __webpack_require__(83717);
const _dynamicrendering = __webpack_require__(54717);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _invarianterror = __webpack_require__(75539);
const _reflectutils = __webpack_require__(84627);
const _dynamicrenderingutils = __webpack_require__(18238);
const _creatededupedbycallsiteservererrorlogger = __webpack_require__(14768);
const _scheduler = __webpack_require__(52825);
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createPrerenderParamsForClientSegment(underlyingParams, workStore) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        const fallbackParams = workStore.fallbackRouteParams;
        if (fallbackParams) {
            for(let key in underlyingParams){
                if (fallbackParams.has(key)) {
                    // This params object has one of more fallback params so we need to consider
                    // the awaiting of this params object "dynamic". Since we are in dynamicIO mode
                    // we encode this as a promise that never resolves
                    return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`params`');
                }
            }
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createPrerenderParams(underlyingParams, workStore, prerenderStore) {
    const fallbackParams = workStore.fallbackRouteParams;
    if (fallbackParams) {
        let hasSomeFallbackParams = false;
        for(const key in underlyingParams){
            if (fallbackParams.has(key)) {
                hasSomeFallbackParams = true;
                break;
            }
        }
        if (hasSomeFallbackParams) {
            // params need to be treated as dynamic because we have at least one fallback param
            if (prerenderStore.type === 'prerender') {
                // We are in a dynamicIO (PPR or otherwise) prerender
                return makeAbortingExoticParams(underlyingParams, workStore.route, prerenderStore);
            }
            // remaining cases are prerender-ppr and prerender-legacy
            // We aren't in a dynamicIO prerender but we do have fallback params at this
            // level so we need to make an erroring exotic params object which will postpone
            // if you access the fallback params
            return makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore);
        }
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return makeUntrackedExoticParams(underlyingParams);
}
function createRenderParams(underlyingParams, workStore) {
    if (false) {} else {
        return makeUntrackedExoticParams(underlyingParams);
    }
}
const CachedParams = new WeakMap();
function makeAbortingExoticParams(underlyingParams, route, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`params`');
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            Object.defineProperty(promise, prop, {
                get () {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    const error = createParamsAccessError(route, expression);
                    (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
                Object.defineProperty(promise, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    set (newValue) {
                        Object.defineProperty(promise, prop, {
                            value: newValue,
                            writable: true,
                            enumerable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
}
function makeUntrackedExoticParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            ;
            promise[prop] = underlyingParams[prop];
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingParams)));
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (// We are accessing a property that was proxied to the promise instance
                proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E307",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E482",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
}

//# sourceMappingURL=params.js.map

/***/ }),

/***/ 61068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ // When postpone is available in canary React we can switch to importing it directly

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Postpone", ({
    enumerable: true,
    get: function() {
        return _dynamicrendering.Postpone;
    }
}));
const _dynamicrendering = __webpack_require__(84971);

//# sourceMappingURL=postpone.js.map

/***/ }),

/***/ 62713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFlightReactServerErrorHandler: function() {
        return createFlightReactServerErrorHandler;
    },
    createHTMLErrorHandler: function() {
        return createHTMLErrorHandler;
    },
    createHTMLReactServerErrorHandler: function() {
        return createHTMLReactServerErrorHandler;
    },
    getDigestForWellKnownError: function() {
        return getDigestForWellKnownError;
    },
    isUserLandError: function() {
        return isUserLandError;
    }
});
const _stringhash = /*#__PURE__*/ _interop_require_default(__webpack_require__(67839));
const _formatservererror = __webpack_require__(7308);
const _tracer = __webpack_require__(81289);
const _pipereadable = __webpack_require__(42471);
const _bailouttocsr = __webpack_require__(51846);
const _hooksservercontext = __webpack_require__(98479);
const _isnextroutererror = __webpack_require__(31162);
const _iserror = __webpack_require__(35715);
const _errortelemetryutils = __webpack_require__(56526);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getDigestForWellKnownError(error) {
    // If we're bailing out to CSR, we don't need to log the error.
    if ((0, _bailouttocsr.isBailoutToCSRError)(error)) return error.digest;
    // If this is a navigation error, we don't need to log the error.
    if ((0, _isnextroutererror.isNextRouterError)(error)) return error.digest;
    // If this error occurs, we know that we should be stopping the static
    // render. This is only thrown in static generation when PPR is not enabled,
    // which causes the whole page to be marked as dynamic. We don't need to
    // tell the user about this error, as it's not actionable.
    if ((0, _hooksservercontext.isDynamicServerError)(error)) return error.digest;
    return undefined;
}
function createFlightReactServerErrorHandler(shouldFormatError, onReactServerRenderError) {
    return (thrownValue)=>{
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, _stringhash.default)(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if ((0, _pipereadable.isAbortError)(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, _iserror.getProperError)(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, _stringhash.default)(err.message + err.stack || '').toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, _formatservererror.formatServerError)(err);
        }
        // Record exception in an active span, if available.
        const span = (0, _tracer.getTracer)().getActiveScopeSpan();
        if (span) {
            span.recordException(err);
            span.setStatus({
                code: _tracer.SpanStatusCode.ERROR,
                message: err.message
            });
        }
        onReactServerRenderError(err);
        return (0, _errortelemetryutils.createDigestWithErrorCode)(thrownValue, err.digest);
    };
}
function createHTMLReactServerErrorHandler(shouldFormatError, isNextExport, reactServerErrors, silenceLogger, onReactServerRenderError) {
    return (thrownValue)=>{
        var _err_message;
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, _stringhash.default)(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if ((0, _pipereadable.isAbortError)(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, _iserror.getProperError)(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, _stringhash.default)(err.message + (err.stack || '')).toString();
        }
        // @TODO by putting this here and not at the top it is possible that
        // we don't error the build in places we actually expect to
        if (!reactServerErrors.has(err.digest)) {
            reactServerErrors.set(err.digest, err);
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, _formatservererror.formatServerError)(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = (0, _tracer.getTracer)().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: _tracer.SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger) {
                onReactServerRenderError == null ? void 0 : onReactServerRenderError(err);
            }
        }
        return (0, _errortelemetryutils.createDigestWithErrorCode)(thrownValue, err.digest);
    };
}
function createHTMLErrorHandler(shouldFormatError, isNextExport, reactServerErrors, allCapturedErrors, silenceLogger, onHTMLRenderSSRError) {
    return (thrownValue, errorInfo)=>{
        var _err_message;
        let isSSRError = true;
        allCapturedErrors.push(thrownValue);
        // If the response was closed, we don't need to log the error.
        if ((0, _pipereadable.isAbortError)(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = (0, _iserror.getProperError)(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (reactServerErrors.has(err.digest)) {
                // This error is likely an obfuscated error from react-server.
                // We recover the original error here.
                thrownValue = reactServerErrors.get(err.digest);
                isSSRError = false;
            } else {
            // The error is not from react-server but has a digest
            // from other means so we don't need to produce a new one
            }
        } else {
            err.digest = (0, _stringhash.default)(err.message + ((errorInfo == null ? void 0 : errorInfo.componentStack) || err.stack || '')).toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, _formatservererror.formatServerError)(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = (0, _tracer.getTracer)().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setStatus({
                    code: _tracer.SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger && // HTML errors contain RSC errors as well, filter them out before reporting
            isSSRError) {
                onHTMLRenderSSRError(err, errorInfo);
            }
        }
        return (0, _errortelemetryutils.createDigestWithErrorCode)(thrownValue, err.digest);
    };
}
function isUserLandError(err) {
    return !(0, _pipereadable.isAbortError)(err) && !(0, _bailouttocsr.isBailoutToCSRError)(err) && !(0, _isnextroutererror.isNextRouterError)(err);
}

//# sourceMappingURL=create-error-handler.js.map

/***/ }),

/***/ 62763:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MetadataBoundary: function() {
        return MetadataBoundary;
    },
    OutletBoundary: function() {
        return OutletBoundary;
    },
    ViewportBoundary: function() {
        return ViewportBoundary;
    }
});
const _metadataconstants = __webpack_require__(24207);
// We use a namespace object to allow us to recover the name of the function
// at runtime even when production bundling/minification is used.
const NameSpace = {
    [_metadataconstants.METADATA_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    },
    [_metadataconstants.VIEWPORT_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    },
    [_metadataconstants.OUTLET_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    }
};
const MetadataBoundary = // so it retains the name inferred from the namespace object
NameSpace[_metadataconstants.METADATA_BOUNDARY_NAME.slice(0)];
const ViewportBoundary = // so it retains the name inferred from the namespace object
NameSpace[_metadataconstants.VIEWPORT_BOUNDARY_NAME.slice(0)];
const OutletBoundary = // so it retains the name inferred from the namespace object
NameSpace[_metadataconstants.OUTLET_BOUNDARY_NAME.slice(0)];
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=metadata-boundary.js.map


/***/ }),

/***/ 65284:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Unauthorized;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _errorfallback = __webpack_require__(1765);
function Unauthorized() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorfallback.HTTPAccessErrorFallback, {
        status: 401,
        message: "You're not authorized to access this page."
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized-error.js.map


/***/ }),

/***/ 65773:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __webpack_require__(43210);
const _approutercontextsharedruntime = __webpack_require__(22142);
const _hooksclientcontextsharedruntime = __webpack_require__(10449);
const _getsegmentvalue = __webpack_require__(17388);
const _segment = __webpack_require__(83913);
const _navigationreactserver = __webpack_require__(80178);
const _serverinsertedhtmlsharedruntime = __webpack_require__(39695);
const useDynamicRouteParams =  true ? (__webpack_require__(54717).useDynamicRouteParams) : 0;
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(9608);
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 66483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    resolveImages: function() {
        return resolveImages;
    },
    resolveOpenGraph: function() {
        return resolveOpenGraph;
    },
    resolveTwitter: function() {
        return resolveTwitter;
    }
});
const _utils = __webpack_require__(77341);
const _resolveurl = __webpack_require__(96258);
const _resolvetitle = __webpack_require__(57373);
const _url = __webpack_require__(77359);
const _log = __webpack_require__(21709);
const OgTypeFields = {
    article: [
        'authors',
        'tags'
    ],
    song: [
        'albums',
        'musicians'
    ],
    playlist: [
        'albums',
        'musicians'
    ],
    radio: [
        'creators'
    ],
    video: [
        'actors',
        'directors',
        'writers',
        'tags'
    ],
    basic: [
        'emails',
        'phoneNumbers',
        'faxNumbers',
        'alternateLocale',
        'audio',
        'videos'
    ]
};
function resolveAndValidateImage(item, metadataBase, isStaticMetadataRouteFile) {
    if (!item) return undefined;
    const isItemUrl = (0, _resolveurl.isStringOrURL)(item);
    const inputUrl = isItemUrl ? item : item.url;
    if (!inputUrl) return undefined;
    // process.env.VERCEL is set to "1" when System Environment Variables are
    // exposed. When exposed, validation is not necessary since we are falling back to
    // process.env.VERCEL_PROJECT_PRODUCTION_URL, process.env.VERCEL_BRANCH_URL, or
    // process.env.VERCEL_URL for the `metadataBase`. process.env.VERCEL is undefined
    // when System Environment Variables are not exposed. When not exposed, we cannot
    // detect in the build environment if the deployment is a Vercel deployment or not.
    //
    // x-ref: https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
    const isUsingVercelSystemEnvironmentVariables = Boolean(process.env.VERCEL);
    const isRelativeUrl = typeof inputUrl === 'string' && !(0, _url.isFullStringUrl)(inputUrl);
    // When no explicit metadataBase is specified by the user, we'll override it with the fallback metadata
    // under the following conditions:
    // - The provided URL is relative (ie ./og-image).
    // - The image is statically generated by Next.js (such as the special `opengraph-image` route)
    // In both cases, we want to ensure that across all environments, the ogImage is a fully qualified URL.
    // In the `opengraph-image` case, since the user isn't explicitly passing a relative path, this ensures
    // the ogImage will be properly discovered across different environments without the user needing to
    // have a bunch of `process.env` checks when defining their `metadataBase`.
    if (isRelativeUrl && (!metadataBase || isStaticMetadataRouteFile)) {
        const fallbackMetadataBase = (0, _resolveurl.getSocialImageMetadataBaseFallback)(metadataBase);
        // When not using Vercel environment variables for URL injection, we aren't able to determine
        // a fallback value for `metadataBase`. For self-hosted setups, we want to warn
        // about this since the only fallback we'll be able to generate is `localhost`.
        // In development, we'll only warn for relative metadata that isn't part of the static
        // metadata conventions (eg `opengraph-image`), as otherwise it's currently very noisy
        // for common cases. Eventually we should remove this warning all together in favor of
        // devtools.
        const shouldWarn = !isUsingVercelSystemEnvironmentVariables && !metadataBase && ( true || 0);
        if (shouldWarn) {
            (0, _log.warnOnce)(`metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "${fallbackMetadataBase.origin}". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase`);
        }
        metadataBase = fallbackMetadataBase;
    }
    return isItemUrl ? {
        url: (0, _resolveurl.resolveUrl)(inputUrl, metadataBase)
    } : {
        ...item,
        // Update image descriptor url
        url: (0, _resolveurl.resolveUrl)(inputUrl, metadataBase)
    };
}
function resolveImages(images, metadataBase, isStaticMetadataRouteFile) {
    const resolvedImages = (0, _utils.resolveAsArrayOrUndefined)(images);
    if (!resolvedImages) return resolvedImages;
    const nonNullableImages = [];
    for (const item of resolvedImages){
        const resolvedItem = resolveAndValidateImage(item, metadataBase, isStaticMetadataRouteFile);
        if (!resolvedItem) continue;
        nonNullableImages.push(resolvedItem);
    }
    return nonNullableImages;
}
const ogTypeToFields = {
    article: OgTypeFields.article,
    book: OgTypeFields.article,
    'music.song': OgTypeFields.song,
    'music.album': OgTypeFields.song,
    'music.playlist': OgTypeFields.playlist,
    'music.radio_station': OgTypeFields.radio,
    'video.movie': OgTypeFields.video,
    'video.episode': OgTypeFields.video
};
function getFieldsByOgType(ogType) {
    if (!ogType || !(ogType in ogTypeToFields)) return OgTypeFields.basic;
    return ogTypeToFields[ogType].concat(OgTypeFields.basic);
}
const resolveOpenGraph = (openGraph, metadataBase, metadataContext, titleTemplate)=>{
    if (!openGraph) return null;
    function resolveProps(target, og) {
        const ogType = og && 'type' in og ? og.type : undefined;
        const keys = getFieldsByOgType(ogType);
        for (const k of keys){
            const key = k;
            if (key in og && key !== 'url') {
                const value = og[key];
                target[key] = value ? (0, _utils.resolveArray)(value) : null;
            }
        }
        target.images = resolveImages(og.images, metadataBase, metadataContext.isStaticMetadataRouteFile);
    }
    const resolved = {
        ...openGraph,
        title: (0, _resolvetitle.resolveTitle)(openGraph.title, titleTemplate)
    };
    resolveProps(resolved, openGraph);
    resolved.url = openGraph.url ? (0, _resolveurl.resolveAbsoluteUrlWithPathname)(openGraph.url, metadataBase, metadataContext) : null;
    return resolved;
};
const TwitterBasicInfoKeys = [
    'site',
    'siteId',
    'creator',
    'creatorId',
    'description'
];
const resolveTwitter = (twitter, metadataBase, metadataContext, titleTemplate)=>{
    var _resolved_images;
    if (!twitter) return null;
    let card = 'card' in twitter ? twitter.card : undefined;
    const resolved = {
        ...twitter,
        title: (0, _resolvetitle.resolveTitle)(twitter.title, titleTemplate)
    };
    for (const infoKey of TwitterBasicInfoKeys){
        resolved[infoKey] = twitter[infoKey] || null;
    }
    resolved.images = resolveImages(twitter.images, metadataBase, metadataContext.isStaticMetadataRouteFile);
    card = card || (((_resolved_images = resolved.images) == null ? void 0 : _resolved_images.length) ? 'summary_large_image' : 'summary');
    resolved.card = card;
    if ('card' in resolved) {
        switch(resolved.card){
            case 'player':
                {
                    resolved.players = (0, _utils.resolveAsArrayOrUndefined)(resolved.players) || [];
                    break;
                }
            case 'app':
                {
                    resolved.app = resolved.app || {};
                    break;
                }
            default:
                break;
        }
    }
    return resolved;
};

//# sourceMappingURL=resolve-opengraph.js.map

/***/ }),

/***/ 67086:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(40740);
const _jsxruntime = __webpack_require__(60687);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(43210));
const _navigation = __webpack_require__(65773);
const _redirect = __webpack_require__(36875);
const _redirecterror = __webpack_require__(97860);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirecterror.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirecterror.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 67839:
/***/ ((module) => {

(()=>{"use strict";var e={328:e=>{function hash(e){var r=5381,_=e.length;while(_){r=r*33^e.charCodeAt(--_)}return r>>>0}e.exports=hash}};var r={};function __nccwpck_require__(_){var a=r[_];if(a!==undefined){return a.exports}var t=r[_]={exports:{}};var i=true;try{e[_](t,t.exports,__nccwpck_require__);i=false}finally{if(i)delete r[_]}return t.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var _=__nccwpck_require__(328);module.exports=_})();

/***/ }),

/***/ 68214:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", ({
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
}));
const _interceptionroutes = __webpack_require__(72859);
function hasInterceptionRouteInCurrentTree(param) {
    let [segment, parallelRoutes] = param;
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di' || segment[2] === 'ci')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map


/***/ }),

/***/ 68524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(94041).vendored.contexts.ServerInsertedMetadata;

//# sourceMappingURL=server-inserted-metadata.js.map

/***/ }),

/***/ 68613:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unstable_rethrow", ({
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
}));
const unstable_rethrow =  true ? (__webpack_require__(42292).unstable_rethrow) : 0;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map


/***/ }),

/***/ 69385:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
} //# sourceMappingURL=is-plain-object.js.map


/***/ }),

/***/ 72639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_default)
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 72859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __webpack_require__(39444);
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = "/" + interceptedRoute;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map


/***/ }),

/***/ 72900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preconnect: function() {
        return preconnect;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preloadStyle: function() {
        return preloadStyle;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(46033));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function preloadStyle(href, crossOrigin, nonce) {
    const opts = {
        as: 'style'
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    _reactdom.default.preload(href, opts);
}
function preloadFont(href, type, crossOrigin, nonce) {
    const opts = {
        as: 'font',
        type
    };
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    _reactdom.default.preload(href, opts);
}
function preconnect(href, crossOrigin, nonce) {
    const opts = {};
    if (typeof crossOrigin === 'string') {
        opts.crossOrigin = crossOrigin;
    }
    if (typeof nonce === 'string') {
        opts.nonce = nonce;
    }
    ;
    _reactdom.default.preconnect(href, opts);
}

//# sourceMappingURL=preloads.js.map

/***/ }),

/***/ 73102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _reflect = __webpack_require__(43763);
const _dynamicrendering = __webpack_require__(84971);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _invarianterror = __webpack_require__(71617);
const _reflectutils = __webpack_require__(72609);
const _dynamicrenderingutils = __webpack_require__(68388);
const _creatededupedbycallsiteservererrorlogger = __webpack_require__(76926);
const _scheduler = __webpack_require__(44523);
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderParams(underlyingParams, workStore, workUnitStore);
            default:
        }
    }
    return createRenderParams(underlyingParams, workStore);
}
function createPrerenderParamsForClientSegment(underlyingParams, workStore) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        const fallbackParams = workStore.fallbackRouteParams;
        if (fallbackParams) {
            for(let key in underlyingParams){
                if (fallbackParams.has(key)) {
                    // This params object has one of more fallback params so we need to consider
                    // the awaiting of this params object "dynamic". Since we are in dynamicIO mode
                    // we encode this as a promise that never resolves
                    return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`params`');
                }
            }
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createPrerenderParams(underlyingParams, workStore, prerenderStore) {
    const fallbackParams = workStore.fallbackRouteParams;
    if (fallbackParams) {
        let hasSomeFallbackParams = false;
        for(const key in underlyingParams){
            if (fallbackParams.has(key)) {
                hasSomeFallbackParams = true;
                break;
            }
        }
        if (hasSomeFallbackParams) {
            // params need to be treated as dynamic because we have at least one fallback param
            if (prerenderStore.type === 'prerender') {
                // We are in a dynamicIO (PPR or otherwise) prerender
                return makeAbortingExoticParams(underlyingParams, workStore.route, prerenderStore);
            }
            // remaining cases are prerender-ppr and prerender-legacy
            // We aren't in a dynamicIO prerender but we do have fallback params at this
            // level so we need to make an erroring exotic params object which will postpone
            // if you access the fallback params
            return makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore);
        }
    }
    // We don't have any fallback params so we have an entirely static safe params object
    return makeUntrackedExoticParams(underlyingParams);
}
function createRenderParams(underlyingParams, workStore) {
    if (false) {} else {
        return makeUntrackedExoticParams(underlyingParams);
    }
}
const CachedParams = new WeakMap();
function makeAbortingExoticParams(underlyingParams, route, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`params`');
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            Object.defineProperty(promise, prop, {
                get () {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    const error = createParamsAccessError(route, expression);
                    (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
                Object.defineProperty(promise, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when dynamicIO is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    set (newValue) {
                        Object.defineProperty(promise, prop, {
                            value: newValue,
                            writable: true,
                            enumerable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
}
function makeUntrackedExoticParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            ;
            promise[prop] = underlyingParams[prop];
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingParams)));
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (// We are accessing a property that was proxied to the promise instance
                proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E307",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E482",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
}

//# sourceMappingURL=params.js.map

/***/ }),

/***/ 73298:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'Geist Mono', 'Geist Mono Fallback'","fontStyle":"normal"},
	"className": "__className_9a8899",
	"variable": "__variable_9a8899"
};


/***/ }),

/***/ 74007:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    }
});
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    var _segmentPath_;
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) != null ? _segmentPath_ : '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map(getFlightDataPartsFromPath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map


/***/ }),

/***/ 75317:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bgBlack: function() {
        return bgBlack;
    },
    bgBlue: function() {
        return bgBlue;
    },
    bgCyan: function() {
        return bgCyan;
    },
    bgGreen: function() {
        return bgGreen;
    },
    bgMagenta: function() {
        return bgMagenta;
    },
    bgRed: function() {
        return bgRed;
    },
    bgWhite: function() {
        return bgWhite;
    },
    bgYellow: function() {
        return bgYellow;
    },
    black: function() {
        return black;
    },
    blue: function() {
        return blue;
    },
    bold: function() {
        return bold;
    },
    cyan: function() {
        return cyan;
    },
    dim: function() {
        return dim;
    },
    gray: function() {
        return gray;
    },
    green: function() {
        return green;
    },
    hidden: function() {
        return hidden;
    },
    inverse: function() {
        return inverse;
    },
    italic: function() {
        return italic;
    },
    magenta: function() {
        return magenta;
    },
    purple: function() {
        return purple;
    },
    red: function() {
        return red;
    },
    reset: function() {
        return reset;
    },
    strikethrough: function() {
        return strikethrough;
    },
    underline: function() {
        return underline;
    },
    white: function() {
        return white;
    },
    yellow: function() {
        return yellow;
    }
});
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== 'dumb');
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = '' + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m');
const dim = formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m');
const italic = formatter('\x1b[3m', '\x1b[23m');
const underline = formatter('\x1b[4m', '\x1b[24m');
const inverse = formatter('\x1b[7m', '\x1b[27m');
const hidden = formatter('\x1b[8m', '\x1b[28m');
const strikethrough = formatter('\x1b[9m', '\x1b[29m');
const black = formatter('\x1b[30m', '\x1b[39m');
const red = formatter('\x1b[31m', '\x1b[39m');
const green = formatter('\x1b[32m', '\x1b[39m');
const yellow = formatter('\x1b[33m', '\x1b[39m');
const blue = formatter('\x1b[34m', '\x1b[39m');
const magenta = formatter('\x1b[35m', '\x1b[39m');
const purple = formatter('\x1b[38;2;173;127;168m', '\x1b[39m');
const cyan = formatter('\x1b[36m', '\x1b[39m');
const white = formatter('\x1b[37m', '\x1b[39m');
const gray = formatter('\x1b[90m', '\x1b[39m');
const bgBlack = formatter('\x1b[40m', '\x1b[49m');
const bgRed = formatter('\x1b[41m', '\x1b[49m');
const bgGreen = formatter('\x1b[42m', '\x1b[49m');
const bgYellow = formatter('\x1b[43m', '\x1b[49m');
const bgBlue = formatter('\x1b[44m', '\x1b[49m');
const bgMagenta = formatter('\x1b[45m', '\x1b[49m');
const bgCyan = formatter('\x1b[46m', '\x1b[49m');
const bgWhite = formatter('\x1b[47m', '\x1b[49m');

//# sourceMappingURL=picocolors.js.map

/***/ }),

/***/ 75539:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "InvariantError", ({
    enumerable: true,
    get: function() {
        return InvariantError;
    }
}));
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map


/***/ }),

/***/ 76299:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isPostpone", ({
    enumerable: true,
    get: function() {
        return isPostpone;
    }
}));
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
}

//# sourceMappingURL=is-postpone.js.map

/***/ }),

/***/ 76926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", ({
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
}));
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(61120));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Dynamic IO is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn =  false ? 0 : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache(// eslint-disable-next-line @typescript-eslint/no-unused-vars -- cache key
(key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if (false) { var _stack; } else {
            logErrorOrWarn(message);
        }
    };
}

//# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map

/***/ }),

/***/ 77341:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getOrigin: function() {
        return getOrigin;
    },
    resolveArray: function() {
        return resolveArray;
    },
    resolveAsArrayOrUndefined: function() {
        return resolveAsArrayOrUndefined;
    }
});
function resolveArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [
        value
    ];
}
function resolveAsArrayOrUndefined(value) {
    if (typeof value === 'undefined' || value === null) {
        return undefined;
    }
    return resolveArray(value);
}
function getOrigin(url) {
    let origin = undefined;
    if (typeof url === 'string') {
        try {
            url = new URL(url);
            origin = url.origin;
        } catch  {}
    }
    return origin;
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 77359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isFullStringUrl: function() {
        return isFullStringUrl;
    },
    parseUrl: function() {
        return parseUrl;
    },
    stripNextRscUnionQuery: function() {
        return stripNextRscUnionQuery;
    }
});
const _approuterheaders = __webpack_require__(9977);
const DUMMY_ORIGIN = 'http://n';
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}
function stripNextRscUnionQuery(relativeUrl) {
    const urlInstance = new URL(relativeUrl, DUMMY_ORIGIN);
    urlInstance.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    return urlInstance.pathname + urlInstance.search;
}

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 78671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ 
let path;
if (false) {} else {
    path = __webpack_require__(33873);
}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 80178:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/** @internal */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __webpack_require__(36875);
const _redirecterror = __webpack_require__(97860);
const _notfound = __webpack_require__(55211);
const _forbidden = __webpack_require__(80414);
const _unauthorized = __webpack_require__(80929);
const _unstablerethrow = __webpack_require__(68613);
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map


/***/ }),

/***/ 80407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Meta: function() {
        return Meta;
    },
    MetaFilter: function() {
        return MetaFilter;
    },
    MultiMeta: function() {
        return MultiMeta;
    }
});
const _jsxruntime = __webpack_require__(37413);
const _react = /*#__PURE__*/ _interop_require_default(__webpack_require__(61120));
const _nonnullable = __webpack_require__(89735);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function Meta({ name, property, content, media }) {
    if (typeof content !== 'undefined' && content !== null && content !== '') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            ...name ? {
                name
            } : {
                property
            },
            ...media ? {
                media
            } : undefined,
            content: typeof content === 'string' ? content : content.toString()
        });
    }
    return null;
}
function MetaFilter(items) {
    const acc = [];
    for (const item of items){
        if (Array.isArray(item)) {
            acc.push(...item.filter(_nonnullable.nonNullable));
        } else if ((0, _nonnullable.nonNullable)(item)) {
            acc.push(item);
        }
    }
    return acc;
}
function camelToSnake(camelCaseStr) {
    return camelCaseStr.replace(/([A-Z])/g, function(match) {
        return '_' + match.toLowerCase();
    });
}
const aliasPropPrefixes = new Set([
    'og:image',
    'twitter:image',
    'og:video',
    'og:audio'
]);
function getMetaKey(prefix, key) {
    // Use `twitter:image` and `og:image` instead of `twitter:image:url` and `og:image:url`
    // to be more compatible as it's a more common format.
    // `og:video` & `og:audio` do not have a `:url` suffix alias
    if (aliasPropPrefixes.has(prefix) && key === 'url') {
        return prefix;
    }
    if (prefix.startsWith('og:') || prefix.startsWith('twitter:')) {
        key = camelToSnake(key);
    }
    return prefix + ':' + key;
}
function ExtendMeta({ content, namePrefix, propertyPrefix }) {
    if (!content) return null;
    return MetaFilter(Object.entries(content).map(([k, v])=>{
        return typeof v === 'undefined' ? null : Meta({
            ...propertyPrefix && {
                property: getMetaKey(propertyPrefix, k)
            },
            ...namePrefix && {
                name: getMetaKey(namePrefix, k)
            },
            content: typeof v === 'string' ? v : v == null ? void 0 : v.toString()
        });
    }));
}
function MultiMeta({ propertyPrefix, namePrefix, contents }) {
    if (typeof contents === 'undefined' || contents === null) {
        return null;
    }
    return MetaFilter(contents.map((content)=>{
        if (typeof content === 'string' || typeof content === 'number' || content instanceof URL) {
            return Meta({
                ...propertyPrefix ? {
                    property: propertyPrefix
                } : {
                    name: namePrefix
                },
                content
            });
        } else {
            return ExtendMeta({
                namePrefix,
                propertyPrefix,
                content
            });
        }
    }));
}

//# sourceMappingURL=meta.js.map

/***/ }),

/***/ 80414:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "forbidden", ({
    enumerable: true,
    get: function() {
        return forbidden;
    }
}));
const _httpaccessfallback = __webpack_require__(86358);
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if (true) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map


/***/ }),

/***/ 80929:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unauthorized", ({
    enumerable: true,
    get: function() {
        return unauthorized;
    }
}));
const _httpaccessfallback = __webpack_require__(86358);
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if (true) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map


/***/ }),

/***/ 81208:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map


/***/ }),

/***/ 83091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringExoticSearchParamsForUseCache: function() {
        return makeErroringExoticSearchParamsForUseCache;
    }
});
const _reflect = __webpack_require__(43763);
const _dynamicrendering = __webpack_require__(84971);
const _workunitasyncstorageexternal = __webpack_require__(63033);
const _invarianterror = __webpack_require__(71617);
const _dynamicrenderingutils = __webpack_require__(68388);
const _creatededupedbycallsiteservererrorlogger = __webpack_require__(76926);
const _reflectutils = __webpack_require__(72609);
const _utils = __webpack_require__(8719);
const _scheduler = __webpack_require__(44523);
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createPrerenderSearchParams(workStore, workUnitStore);
            default:
        }
    }
    return createRenderSearchParams(underlyingSearchParams, workStore);
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (prerenderStore && prerenderStore.type === 'prerender') {
        // dynamicIO Prerender
        // We're prerendering in a mode that aborts (dynamicIO) and should stall
        // the promise to ensure the RSC side is considered dynamic
        return (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`searchParams`');
    }
    // We're prerendering in a mode that does not aborts. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve({});
}
function createPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    if (prerenderStore.type === 'prerender') {
        // We are in a dynamicIO (PPR or otherwise) prerender
        return makeAbortingExoticSearchParams(workStore.route, prerenderStore);
    }
    // The remaining cases are prerender-ppr and prerender-legacy
    // We are in a legacy static generation and need to interrupt the prerender
    // when search params are accessed.
    return makeErroringExoticSearchParams(workStore, prerenderStore);
}
function createRenderSearchParams(underlyingSearchParams, workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if (false) {} else {
            return makeUntrackedExoticSearchParams(underlyingSearchParams, workStore);
        }
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeAbortingExoticSearchParams(route, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            const error = createSearchAccessError(route, expression);
                            (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                const error = createSearchAccessError(route, expression);
                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            const error = createSearchAccessError(route, expression);
            (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no dynamicIO)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            if (workStore.dynamicShouldError) {
                                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                            } else if (prerenderStore.type === 'prerender-ppr') {
                                // PPR Prerender (no dynamicIO)
                                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                            } else {
                                // Legacy Prerender
                                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                            }
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no dynamicIO)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
                return false;
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            if (workStore.dynamicShouldError) {
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            } else if (prerenderStore.type === 'prerender-ppr') {
                // PPR Prerender (no dynamicIO)
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
            } else {
                // Legacy Prerender
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
            }
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests throw an error. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            (0, _utils.throwForSearchParamsAccessInUseCache)(workStore);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedExoticSearchParams(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (!_reflectutils.wellKnownProperties.has(prop)) {
            Object.defineProperty(promise, prop, {
                get () {
                    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(store, workUnitStore);
                    return underlyingSearchParams[prop];
                },
                set (value) {
                    Object.defineProperty(promise, prop, {
                        value,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    let promiseInitialized = false;
    const proxiedUnderlying = new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized) {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
                const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                (0, _dynamicrendering.trackDynamicDataInDynamicRender)(store, workUnitStore);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (store.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingSearchParams)));
    promise.then(()=>{
        promiseInitialized = true;
    });
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            Object.defineProperty(promise, prop, {
                get () {
                    return proxiedUnderlying[prop];
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && store.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
        // When we're rendering dynamically in dev we need to advance out of the
        // Prerender environment when we read Request data synchronously
        const requestStore = workUnitStore;
        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E249",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` should be awaited before using its properties. ` + `The following properties were not available through enumeration ` + `because they conflict with builtin or well-known property names: ` + `${describeListOfPropertyNames(missingProperties)}. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E2",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return `\`${properties[0]}\``;
        case 2:
            return `\`${properties[0]}\` and \`${properties[1]}\``;
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += `\`${properties[i]}\`, `;
                }
                description += `, and \`${properties[properties.length - 1]}\``;
                return description;
            }
    }
}

//# sourceMappingURL=search-params.js.map

/***/ }),

/***/ 83717:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReflectAdapter", ({
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
}));
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}

//# sourceMappingURL=reflect.js.map

/***/ }),

/***/ 83913:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map


/***/ }),

/***/ 84627:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
    }
    return "`" + target + "[" + JSON.stringify(prop) + "]`";
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map


/***/ }),

/***/ 85429:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ServerInsertMetadata", ({
    enumerable: true,
    get: function() {
        return ServerInsertMetadata;
    }
}));
const _react = __webpack_require__(43210);
const _serverinsertedmetadatasharedruntime = __webpack_require__(68524);
// Receives a metadata resolver setter from the context, and will pass the metadata resolving promise to
// the context where we gonna use it to resolve the metadata, and render as string to append in <body>.
const useServerInsertedMetadata = (metadataResolver)=>{
    const setMetadataResolver = (0, _react.useContext)(_serverinsertedmetadatasharedruntime.ServerInsertedMetadataContext);
    if (setMetadataResolver) {
        setMetadataResolver(metadataResolver);
    }
};
function ServerInsertMetadata(param) {
    let { promise } = param;
    // Apply use() to the metadata promise to suspend the rendering in SSR.
    const { metadata } = (0, _react.use)(promise);
    // Insert metadata into the HTML stream through the `useServerInsertedMetadata`
    useServerInsertedMetadata(()=>metadata);
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-inserted-metadata.js.map


/***/ }),

/***/ 86346:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ClientPageRoot", ({
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
}));
const _jsxruntime = __webpack_require__(60687);
const _invarianterror = __webpack_require__(75539);
function ClientPageRoot(param) {
    let { Component, searchParams, params, promises } = param;
    if (true) {
        const { workAsyncStorage } = __webpack_require__(29294);
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = __webpack_require__(9221);
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = __webpack_require__(60824);
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {}
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map


/***/ }),

/***/ 86358:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map


/***/ }),

/***/ 86719:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSmoothScroll", ({
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
}));
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map


/***/ }),

/***/ 88092:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNextRouterError", ({
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
}));
const _httpaccessfallback = __webpack_require__(86358);
const _redirecterror = __webpack_require__(97860);
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map


/***/ }),

/***/ 88170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createProxy } = __webpack_require__(39844)

module.exports = createProxy("C:\\Git\\ComplexAPI\\node_modules\\next\\dist\\client\\components\\error-boundary.js")


/***/ }),

/***/ 89330:
/***/ ((module, exports) => {

"use strict";
/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "unresolvedThenable", ({
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
}));
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map


/***/ }),

/***/ 89735:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "nonNullable", ({
    enumerable: true,
    get: function() {
        return nonNullable;
    }
}));
function nonNullable(value) {
    return value !== null && value !== undefined;
}

//# sourceMappingURL=non-nullable.js.map

/***/ }),

/***/ 89999:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Forbidden;
    }
}));
const _jsxruntime = __webpack_require__(37413);
const _errorfallback = __webpack_require__(1765);
function Forbidden() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorfallback.HTTPAccessErrorFallback, {
        status: 403,
        message: "This page could not be accessed."
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden-error.js.map


/***/ }),

/***/ 91563:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 91992:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isThenable", ({
    enumerable: true,
    get: function() {
        return isThenable;
    }
}));
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map


/***/ }),

/***/ 93883:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useUntrackedPathname", ({
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
}));
const _react = __webpack_require__(43210);
const _hooksclientcontextsharedruntime = __webpack_require__(10449);
/**
 * This checks to see if the current render has any unknown route parameters.
 * It's used to trigger a different render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workAsyncStorage } = __webpack_require__(29294);
        const workStore = workAsyncStorage.getStore();
        if (!workStore) return false;
        const { fallbackRouteParams } = workStore;
        if (!fallbackRouteParams || fallbackRouteParams.size === 0) return false;
        return true;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map


/***/ }),

/***/ 93972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(65239).vendored["react-rsc"].ReactServerDOMWebpackStaticEdge;

//# sourceMappingURL=react-server-dom-webpack-static-edge.js.map

/***/ }),

/***/ 94041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (false) {} else {
    if (false) {} else {
        if (false) {} else {
            if (false) {} else {
                module.exports = __webpack_require__(10846);
            }
        }
    }
}

//# sourceMappingURL=module.compiled.js.map

/***/ }),

/***/ 96258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSocialImageMetadataBaseFallback: function() {
        return getSocialImageMetadataBaseFallback;
    },
    isStringOrURL: function() {
        return isStringOrURL;
    },
    resolveAbsoluteUrlWithPathname: function() {
        return resolveAbsoluteUrlWithPathname;
    },
    resolveRelativeUrl: function() {
        return resolveRelativeUrl;
    },
    resolveUrl: function() {
        return resolveUrl;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(__webpack_require__(78671));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isStringOrURL(icon) {
    return typeof icon === 'string' || icon instanceof URL;
}
function createLocalMetadataBase() {
    return new URL(`http://localhost:${process.env.PORT || 3000}`);
}
function getPreviewDeploymentUrl() {
    const origin = process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
    return origin ? new URL(`https://${origin}`) : undefined;
}
function getProductionDeploymentUrl() {
    const origin = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    return origin ? new URL(`https://${origin}`) : undefined;
}
function getSocialImageMetadataBaseFallback(metadataBase) {
    const defaultMetadataBase = createLocalMetadataBase();
    const previewDeploymentUrl = getPreviewDeploymentUrl();
    const productionDeploymentUrl = getProductionDeploymentUrl();
    let fallbackMetadataBase;
    if (false) {} else {
        fallbackMetadataBase =  true && previewDeploymentUrl && process.env.VERCEL_ENV === 'preview' ? previewDeploymentUrl : metadataBase || productionDeploymentUrl || defaultMetadataBase;
    }
    return fallbackMetadataBase;
}
function resolveUrl(url, metadataBase) {
    if (url instanceof URL) return url;
    if (!url) return null;
    try {
        // If we can construct a URL instance from url, ignore metadataBase
        const parsedUrl = new URL(url);
        return parsedUrl;
    } catch  {}
    if (!metadataBase) {
        metadataBase = createLocalMetadataBase();
    }
    // Handle relative or absolute paths
    const pathname = metadataBase.pathname || '';
    const joinedPath = _path.default.posix.join(pathname, url);
    return new URL(joinedPath, metadataBase);
}
// Resolve with `pathname` if `url` is a relative path.
function resolveRelativeUrl(url, pathname) {
    if (typeof url === 'string' && url.startsWith('./')) {
        return _path.default.posix.resolve(pathname, url);
    }
    return url;
}
// The regex is matching logic from packages/next/src/lib/load-custom-routes.ts
const FILE_REGEX = /^(?:\/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+))(\/?|$)/i;
function isFilePattern(pathname) {
    return FILE_REGEX.test(pathname);
}
// Resolve `pathname` if `url` is a relative path the compose with `metadataBase`.
function resolveAbsoluteUrlWithPathname(url, metadataBase, { trailingSlash, pathname }) {
    // Resolve url with pathname that always starts with `/`
    url = resolveRelativeUrl(url, pathname);
    // Convert string url or URL instance to absolute url string,
    // if there's case needs to be resolved with metadataBase
    let resolvedUrl = '';
    const result = metadataBase ? resolveUrl(url, metadataBase) : url;
    if (typeof result === 'string') {
        resolvedUrl = result;
    } else {
        resolvedUrl = result.pathname === '/' ? result.origin : result.href;
    }
    // Add trailing slash if it's enabled for urls matches the condition
    // - Not external, same origin with metadataBase
    // - Doesn't have query
    if (trailingSlash && !resolvedUrl.endsWith('/')) {
        let isRelative = resolvedUrl.startsWith('/');
        let hasQuery = resolvedUrl.includes('?');
        let isExternal = false;
        let isFileUrl = false;
        if (!isRelative) {
            try {
                const parsedUrl = new URL(resolvedUrl);
                isExternal = metadataBase != null && parsedUrl.origin !== metadataBase.origin;
                isFileUrl = isFilePattern(parsedUrl.pathname);
            } catch  {
                // If it's not a valid URL, treat it as external
                isExternal = true;
            }
            if (// Do not apply trailing slash for file like urls, aligning with the behavior with `trailingSlash`
            !isFileUrl && !isExternal && !hasQuery) return `${resolvedUrl}/`;
        }
    }
    return resolvedUrl;
}

//# sourceMappingURL=resolve-url.js.map

/***/ }),

/***/ 96844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    taintObjectReference: function() {
        return taintObjectReference;
    },
    taintUniqueValue: function() {
        return taintUniqueValue;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(61120));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function notImplemented() {
    throw Object.defineProperty(new Error('Taint can only be used with the taint flag.'), "__NEXT_ERROR_CODE", {
        value: "E354",
        enumerable: false,
        configurable: true
    });
}
const taintObjectReference =  false ? 0 : notImplemented;
const taintUniqueValue =  false ? 0 : notImplemented;

//# sourceMappingURL=taint.js.map

/***/ }),

/***/ 97173:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(40740);
const _jsxruntime = __webpack_require__(60687);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(43210));
const _approutercontextsharedruntime = __webpack_require__(22142);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 97181:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    resolveIcon: function() {
        return resolveIcon;
    },
    resolveIcons: function() {
        return resolveIcons;
    }
});
const _utils = __webpack_require__(77341);
const _resolveurl = __webpack_require__(96258);
const _constants = __webpack_require__(4871);
function resolveIcon(icon) {
    if ((0, _resolveurl.isStringOrURL)(icon)) return {
        url: icon
    };
    else if (Array.isArray(icon)) return icon;
    return icon;
}
const resolveIcons = (icons)=>{
    if (!icons) {
        return null;
    }
    const resolved = {
        icon: [],
        apple: []
    };
    if (Array.isArray(icons)) {
        resolved.icon = icons.map(resolveIcon).filter(Boolean);
    } else if ((0, _resolveurl.isStringOrURL)(icons)) {
        resolved.icon = [
            resolveIcon(icons)
        ];
    } else {
        for (const key of _constants.IconKeys){
            const values = (0, _utils.resolveAsArrayOrUndefined)(icons[key]);
            if (values) resolved[key] = values.map(resolveIcon);
        }
    }
    return resolved;
};

//# sourceMappingURL=resolve-icons.js.map

/***/ }),

/***/ 97860:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __webpack_require__(17974);
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map


/***/ })

};
;
//# sourceMappingURL=423.js.map