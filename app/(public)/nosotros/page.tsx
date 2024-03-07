import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { CardText } from "./_components/CardText";
import { HandHeart, HeartHandshake, MessageCircle } from "lucide-react";

const AboutUsPage = () => {
  const cardData = [
    {
      id: 1,
      title: "“Confianza”",
      description:
        "Tén la seguridad de que nosotros no buscamos generar ningún beneficio monetario de esta acción, queremos ser el nexo entre los damnificados y las personas que quieren ayudar.",
      icon: HandHeart,
    },
    {
      id: 2,
      title: "“Responsabilidad”",
      description:
        "Nos preocupamos de enviar los productos con la mayor rapidez y sobre todo de hacerle llegar a las personas que hayas elegido ayudar, nosotros nos encargamos del servicio de logística.",
      icon: HeartHandshake,
    },
    {
      id: 3,
      title: "“Comunicación”",
      description:
        "En nuestra plataforma podrás enviar un mensaje personalizado a la persona que buscas ayudar, queremos fomentar la solidaridad de la forma más humana posible usando la tecnología como medio.",
      icon: MessageCircle,
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center'>
      <CardText />
      <div className='flex flex-col justify-center items-center text-center my-14 w-[80%] gap-4'>
        <h2 className='text-gray-800 font-black text-6xl'>Sobre Nosotros</h2>
        <Separator className='bg-gray-400 w-4/5' />
      </div>
      <section className='flex gap-9 flex-col lg:flex-row items-center pb-10 pt-14 lg:py-10 xl:pt-16 px-2'>
        <div className='flex flex-col justify-center gap-5 lg:gap-2 flex-1 lg:p-5'>
          <h2 className='text-5xl lg:text-6xl lg:pb-4 text-gray-800 font-extrabold text-center text-wrap lg:text-left'>
            “Ayudamos a que mas personas se ayuden entre ellas”
          </h2>
          <p className='text-gray-600 text-base xl:text-lg text-wrap text-center px-2 lg:px-0 lg:text-left'>
            Cuando una persona ayuda a otra, esa persona ayuda a otra y esa
            ayuda otra, se crea una cadena de favores. Queremos ayudar a
            personas que quieren ayudar a otras personas que puedan estar cerca,
            dentro del mismo barrio, o pueden estar muy lejos, en otro país.
            Nuestra misión es conectar a personas con personas.
          </p>
        </div>
        <div className='h-full w-full flex-1 px-3 lg:px-0'>
          <Image
            src={"/smile-people.png"}
            width={400}
            height={400}
            alt={"Imagen-homepage"}
            className='w-full lg:h-[500px] object-cover rounded-xl'
          />
        </div>
      </section>
      <section className='pb-10 pt-14 lg:py-10 xl:pt-16 px-2'>
        <div className='flex flex-col items-center lg:items-start lg:flex-row'>
          <div className='h-full w-full order-1 lg:order-2 pb-5 lg:w-1/2 pt-5 lg:p-5 flex flex-col justify-center text-center lg:text-left gap-5 lg:gap-2 flex-1 lg:pr-9'>
            <h2 className='text-5xl lg:text-6xl lg:pb-4 text-gray-800 font-extrabold text-center text-wrap lg:text-left'>
              Donaciones y Compras Solidarias
            </h2>
            <p className='text-gray-600 text-base xl:text-lg text-wrap text-center px-2 lg:px-0 lg:text-left'>
              Nuestra plataforma no solo facilita las donaciones, sino que
              también permite la compra de productos que se entregan
              directamente a quienes más los necesitan. Cada compra es un acto
              de bondad que llega a aquellos en necesidad. Únete a nosotros y
              transforma vidas con tus donaciones y compras solidarias.
            </p>
          </div>
          <div className='h-full lg:w-1/2  order-1 px-3 lg:pr-6'>
            <Image
              src={"/donation-food.jpg"}
              width={400}
              height={400}
              alt={"Imagen-homepage"}
              className='w-full lg:h-[500px] object-cover rounded-xl'
            />
          </div>
        </div>
      </section>
      <div className='flex flex-col justify-center items-center text-center gap-4 my-14 px-10'>
        <p className='text-violet-700 font-bold text-xl'>Nuestra historia</p>
        <h2 className='text-gray-800 font-black text-5xl'>
          “Somos un grupo de amigos que ayuda a personas a ayudar a otras
          personas”
        </h2>
        <div className='py-7'>
          <Image
            src={"/about-us.png"}
            width={700}
            height={700}
            alt={"Imagen-homepage"}
            className='w-full object-cover rounded-xl'
          />
        </div>
        <p className='text-gray-600 text-base xl:text-lg text-center px-2 lg:px-0 w-5/6'>
          Smarthelp nace de la mente de cinco amigos que querían conectar a
          personas que querían ayudar con productos de primera necesidad,
          comprados desde el almacén del barrio, sin intermediarios, con
          mensajes personales de las mismas personas que les envían los
          productos. Creamos una cadena de favores que se replica
          constantemente. Trabajamos por una economía centrada en la vida,
          pensando en el acompañamiento integral de las personas, para dar
          respuesta a situaciones de vulnerabilidad y desempleo desde procesos
          comunitarios.
        </p>
      </div>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='py-10 text-gray-800 font-extrabold text-5xl'>“Nuestros valores”</h2>
          <div className='flex flex-row gap-5 text-center text-white w-5/6'>
            {cardData.map(({ id, title, description, icon: Icon }) => (
              <div
                className='bg-violet-700 p-5 rounded-xl gap-4 justify-center items-center flex flex-col'
                key={id}>
                <Icon size={40} />
                <h3 className='font-bold text-xl'>{title}</h3>
                <p className='font-normal text-base'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
