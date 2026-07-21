import { NextResponse } from "next/server";

export async function GET() {
  // دیتای موقت برای برندها بدون نیاز به پریزما
  const mockBrands = [
    { id: "1", name: "برند نمونه ۱" },
    { id: "2", name: "برند نمونه ۲" },
  ];

  return NextResponse.json(mockBrands);
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "برند با موفقیت ایجاد شد (دیتای موقت)" });
}