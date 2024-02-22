import Image from "next/image"

const AboutUs = () => {
  return (
    <section className="container pb-10">
        <h2 className="text-3xl py-10 text-violet-700 font-bold text-center lg-text-left">Causas en las que colaboramos</h2>

        <div className="hidden lg:flex flex-col">
            <div className='flex lg:gap-9 flex-col lg:flex-row h-[60vh]'>
                <div className="prefab-cabin-img h-full flex-1 rounded-2xl">
                    
                </div>
                <div  className="flex-1 h-full w-full">
                        <h2 className="text-xl py-10  font-bold text-center lg:text-left">Casas prefabricadas para familias afectadas por desastres naturales</h2>
                        <p className="text-sm text-justify">En medio de la devastación causada por desastres naturales, las casas prefabricadas emergen como una solución crucial para proporcionar refugio rápido y seguro a las familias afectadas. Estas estructuras prefabricadas, diseñadas con materiales resistentes y ensambladas con rapidez, ofrecen un refugio temporal vital mientras se reconstruyen comunidades enteras. Más allá de su pronta disponibilidad, estas casas también pueden adaptarse para resistir las condiciones climáticas extremas, brindando una medida de seguridad y estabilidad en tiempos de crisis.</p>
                </div>
            </div>

            <div className='flex lg:gap-9 flex-col lg:flex-row h-[60vh]'>
                <div  className="flex-1 h-full">
                        <h2 className="text-xl py-10  font-bold text-center lg:text-left">Iniciativa de donación de útiles escolares</h2>
                        <p className="text-sm text-justify">Reconocemos la importancia de contar con los recursos adecuados para el aprendizaje, y es por eso que nos comprometemos a proporcionar herramientas fundamentales para el desarrollo académico de cada estudiante. Desde lápices y cuadernos hasta calculadoras científicas y libros de texto, nuestra ayuda llega a todas las etapas educativas. Creemos que al equipar a los estudiantes con los materiales necesarios, no solo aliviamos la carga financiera para las familias, sino que también fomentamos un entorno propicio para el aprendizaje y el crecimiento.</p>
                </div>
                <div className="student-img  flex-1 rounded-2xl w-full h-full">
                    
                </div>
            </div>
        </div>


        <div className="flex flex-col  lg:hidden">
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold text-center ">Casas prefabricadas para familias afectadas por desastres naturales</h2>
                <div className="prefab-cabin-img h-[30vh] rounded-2xl"></div>
                <p className="text-justify">En medio de la devastación causada por desastres naturales, las casas prefabricadas emergen como una solución crucial para proporcionar refugio rápido y seguro a las familias afectadas. Estas estructuras prefabricadas, diseñadas con materiales resistentes y ensambladas con rapidez, ofrecen un refugio temporal vital mientras se reconstruyen comunidades enteras. Más allá de su pronta disponibilidad, estas casas también pueden adaptarse para resistir las condiciones climáticas extremas, brindando una medida de seguridad y estabilidad en tiempos de crisis.</p>
            </div>
            <div className="flex flex-col gap-6 ">
                <h2 className="text-xl font-bold text-center pt-10">Iniciativa de donación de útiles escolares</h2>
                <div className="student-img h-[30vh] rounded-2xl"></div>
                <p className="text-justify">Reconocemos la importancia de contar con los recursos adecuados para el aprendizaje, y es por eso que nos comprometemos a proporcionar herramientas fundamentales para el desarrollo académico de cada estudiante. Desde lápices y cuadernos hasta calculadoras científicas y libros de texto, nuestra ayuda llega a todas las etapas educativas. Creemos que al equipar a los estudiantes con los materiales necesarios, no solo aliviamos la carga financiera para las familias, sino que también fomentamos un entorno propicio para el aprendizaje y el crecimiento. </p>
            </div>
        </div>

    </section>
  )
}

export default AboutUs