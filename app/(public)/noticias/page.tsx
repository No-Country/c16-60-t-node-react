import { noticias } from "@/data/noticias-data";
import { NoticiasCard } from "../_components/NoticiasCard";

const NoticiasPage = () => {
    return (
        <section className="flex flex-col">
            <h1 className="flex text-5xl  mt-16 font-medium justify-center sm:justify-start sm:ml-16 sm:pl-4">Noticias</h1>
            <div className="grid grid-cols-1 gap-4 m-16 sm:grid-cols-2 lg:grid-cols-3">
                {noticias.map((noticia) => (
                    <NoticiasCard
                        key={noticia.id}
                        imagen={noticia.image}
                        nombreImagen={noticia.title}
                        titulo={noticia.title}
                        descripcion={noticia.description}
                        link={""}
                    />
                ))}
            </div>
        </section>
    );
};
export default NoticiasPage;
