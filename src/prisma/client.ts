// ساخت یک Proxy موقت برای خنثی‌سازی خطاهای Prisma
const prismaMock: any = new Proxy(
  {},
  {
    get: (target, prop) => {
      if (typeof prop === "string" && prop.startsWith("$")) {
        return async () => {};
      }
      return new Proxy(
        {},
        {
          get: () => async () => [],
        }
      );
    },
  }
);

export default prismaMock;
export const prisma = prismaMock;