import { NextResponse } from "next/server";

export async function GET() {
  // دیتای موقت برای دسته‌بندی‌ها
  const mockCategories = [
    { id: "1", name: "دسته‌بندی نمونه ۱" },
    { id: "2", name: "دسته‌بندی نمونه ۲" },
  ];

  return NextResponse.json(mockCategories);
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "دسته‌بندی با موفقیت ایجاد شد (دیتای موقت)" });
}