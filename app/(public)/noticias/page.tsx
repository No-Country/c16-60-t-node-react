import { noticias } from "@/data/noticias-data";
import { NoticiasCard } from "../_components/NoticiasCard";

const NoticiasPage = () => {
    return (
        <section className="flex flex-col">
            <h1 className="text-custom-purple text-5xl ml-16 mt-16 font-medium pl-4">Noticias</h1>
            <div className="grid grid-cols-3 gap-4 m-16">
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
