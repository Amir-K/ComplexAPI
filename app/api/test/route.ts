import { NextResponse } from "next/server";

export function withInstrumentation(
  handler: (req: Request) => Promise<Response>
): (req: Request) => Promise<Response> {
  return async (req: Request): Promise<Response> => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await handler(req);
    return response;
  };
}

export const GET = withInstrumentation(async () => {
  const testData = {
    message: "Hello from the test API!",
    timestamp: new Date().toISOString(),
    data: {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
    },
  };

  return NextResponse.json(testData);
});


