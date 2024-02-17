import { NoticiasCard } from "../_components/NoticiasCard";
import { noticias } from "@/data/noticias";

const NoticiasPage = () => {
  return (
    <section className='flex flex-col'>
      <h1 className='text-custom-purple text-5xl ml-16 mt-16 font-medium pl-4'>Noticias</h1>
      <div className='grid grid-cols-3 gap-4 m-16'>
        {noticias.map((noticia, index) => (
          <NoticiasCard
            key={index}
            imagen={noticia.imagen}
            nombreImagen={noticia.nombreImagen}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            link={noticia.link}
          />
        ))}
      </div>
    </section>
  );
};
export default NoticiasPage;
