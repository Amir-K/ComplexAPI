import { NextResponse } from 'next/server';

export async function GET() {
  const testData = {
    message: 'Hello from the test API!',
    timestamp: new Date().toISOString(),
    data: {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    },
  };

  return NextResponse.json(testData);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({
    message: 'Data received successfully',
    receivedData: body,
    timestamp: new Date().toISOString(),
  });
} 