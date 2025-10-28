import { NextResponse } from "next/server";
import { withReturn0 } from "@return-0/node";

export const GET = withReturn0(async () => {
  return NextResponse.json({ status: "ok" });
}); 