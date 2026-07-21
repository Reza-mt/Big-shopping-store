export const getUserByEmail = async (email: string) => {
  return {
    id: "1",
    name: "کاربر تست",
    email: email || "test@example.com",
    role: "ADMIN",
  };
};

export const getUserById = async (id: string) => {
  return {
    id: id || "1",
    name: "کاربر تست",
    email: "test@example.com",
    role: "ADMIN",
  };
};