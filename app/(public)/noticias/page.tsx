import { noticias } from "@/data/noticias-data";
import { NoticiasCard } from "./_components/NoticiasCard";

const NoticiasPage = () => {
  return (
    <section className='flex flex-col max-w-screen-xl m-auto'>
      <h1 className='flex justify-center text-5xl font-medium my-16 sm:mt-20 sm:mb-4 lg:justify-start lg:ml-16'>
        Noticias
      </h1>
      <div className='grid grid-cols-1 gap-5 m-4 sm:m-16 sm:grid-cols-2 lg:grid-cols-3 '>
        {noticias.map((noticia) => (
          <NoticiasCard
            key={noticia.id}
            imagen={noticia.image}
            nombreImagen={noticia.title}
            titulo={noticia.title}
            descripcion={noticia.description}
            fecha={noticia.createdAt.toLocaleString("es-ES", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZoneName: "short",
            })}
          />
        ))}
      </div>
    </section>
  );
};
export default NoticiasPage;
