import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  // Handle `create` and `update` actions on the User model
  if (params.model === "User") {
    if (params.action === "create" || params.action === "update") {
      const data = params.args.data;

      if (data.password) {
        const saltRounds = 10; // Adjust if needed
        data.password = await bcrypt.hash(data.password, saltRounds);
      }
    }
  }

  // Proceed to the next middleware or the database query
  return next(params);
});

export default prisma;