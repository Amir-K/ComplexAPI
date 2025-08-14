import { NextResponse } from "next/server";
import { withInstrumentation } from "livedebugger";

export const GET = withInstrumentation(async () => {
  try {
    const response = await fetch(
      `https://balanceservice.livelybush-67f33f33.canadacentral.azurecontainerapps.io/api/balancechange`
    );
    const data = (await response.json()) as { result: number[]; timestamp: string; error?: string };

    if (!response.ok) {
      throw new Error(data.error || "Calculation service error");
    }

    const calculations = data.result.map((val, index) => {
      const previousBalance =
        index === 0 ? 0 : data.result.slice(0, index).reduce((acc, curr) => acc + curr, 0);
      const change = val;
      const newBalance = previousBalance + change;

      return {
        previousBalance,
        change,
        newBalance,
      };
    });

    setTimeout(() => {
      return NextResponse.json({
        calculations,
        timestamp: data.timestamp,
      });
    }, 5000);

    // return NextResponse.json({
    //   calculations,
    //   timestamp: data.timestamp,
    // });
  } catch (error) {
    console.error("Error in calculation:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}); 