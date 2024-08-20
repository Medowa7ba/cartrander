// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
import cars from "@/data/cars.json";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const car = cars.find(e =>{
    return e.id === parseInt(id)
  });

  if (!car) {
    throw createError({
      statusCode: 404,
      statusMessage: `Car with ID of ${id} does not exist`,
    });
  }

  return car;
});