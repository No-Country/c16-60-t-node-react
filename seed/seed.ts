import { causas } from "../data/causas-data";
import { noticias } from "../data/noticias-data";
import prisma from "../lib/db";

export async function Seed() {
  await Promise.all([
    await prisma.notice.deleteMany(),
    await prisma.causes.deleteMany(),
    await prisma.donations.deleteMany(),
  ]);

  await prisma.notice.createMany({
    data: noticias,
  });

  await prisma.causes.createMany({
    data: causas,
  });

  

  console.log("Seed ... Agregado correctamente");
}

(() => {
  if (process.env.NODE_ENV !== "production") {
    Seed();
  }
})();
