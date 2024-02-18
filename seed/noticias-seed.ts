import { noticias } from "../data/noticias-data";
import prisma from "../lib/db";

export async function seedNoticias() {
    await prisma.notice.deleteMany();
    await prisma.notice.createMany({
        data: noticias,
    });

    console.log("Seed noticias... Agregado correctamente");
}

(() => {
    if (process.env.NODE_ENV !== "production") {
        seedNoticias();
    }
})();
