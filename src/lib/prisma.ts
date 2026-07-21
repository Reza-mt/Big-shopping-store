// یک Proxy هوشمند که جلوی کرش کردن تمام توابع Prisma را می‌گیرد
const prismaMock: any = new Proxy(
  {},
  {
    get: (target, prop) => {
      // اگر به ویژگی‌هایی مثل $connect یا $disconnect دسترسی پیدا شد
      if (typeof prop === "string" && prop.startsWith("$")) {
        return async () => {};
      }
      
      // برای تمام مدل‌ها (مثل product, user, category و ...)
      return new Proxy(
        {},
        {
          get: () => async () => [], // خروجی پیش‌فرض: آرایه خالی برای findMany/findUnique/create/و...
        }
      );
    },
  }
);

export default prismaMock;
export const prisma = prismaMock;