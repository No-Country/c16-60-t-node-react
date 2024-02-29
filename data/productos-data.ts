import { ProductsData } from "../interfaces/productos";
import { Category } from "./category-data";

export const products: ProductsData[] = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg",
    name: "Bidon de 20 Lts de Agua",
    category: Category.BEBIDA,
    price: 135,
    quantity: 20,
    description:
      "PranaMar el sabor del mar, se presenta como una opción natural y equilibrada para rehidratar el cuerpo. Rica en minerales esenciales, como sodio, potasio y magnesio, ayuda a restablecer los electrolitos perdidos durante la actividad física intensa o la deshidratación. Su composición se asemeja a la del plasma sanguíneo, lo que facilita una absorción rápida y eficiente de los nutrientes, contribuyendo así a mantener un equilibrio hídrico adecuado y a mejorar el rendimiento físico. Es importante destacar que debe llevarse a cabo de manera gradual, en caso de dudas puede consultar con un especialista.",
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg/v1/fill/w_500,h_375,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5a5a9d_3cd847a4406140acb18d33acbb7918c3~mv2.jpg",
    name: "Bidon de 20 Lts de Agua",
    category: Category.LIMPIEZA,
    price: 135,
    quantity: 20,
    description:
      "PranaMar el sabor del mar, se presenta como una opción natural y equilibrada para rehidratar el cuerpo. Rica en minerales esenciales, como sodio, potasio y magnesio, ayuda a restablecer los electrolitos perdidos durante la actividad física intensa o la deshidratación. Su composición se asemeja a la del plasma sanguíneo, lo que facilita una absorción rápida y eficiente de los nutrientes, contribuyendo así a mantener un equilibrio hídrico adecuado y a mejorar el rendimiento físico. Es importante destacar que debe llevarse a cabo de manera gradual, en caso de dudas puede consultar con un especialista.",
  },
  {
    id: 3,
    image: "	https://http2.mlstatic.com/D_NQ_NP_969724-MLA74245733727_012024-O.webp",
    name: "Detergente para Limpieza",
    category: Category.LIMPIEZA,
    price: 98,
    quantity: 20,
    description:
      "Descubre la solución definitiva para mantener tu hogar impecable con nuestro detergente para limpieza. Formulado con poderosos agentes desengrasantes y activos, nuestro producto penetra profundamente para eliminar la suciedad más difícil en todo tipo de superficies. Desde la cocina hasta el baño, este detergente garantiza una limpieza eficaz y duradera, dejando un fresco aroma a limpio. Su fórmula concentrada asegura un rendimiento óptimo con cada uso, mientras que su acción biodegradable respeta el medio ambiente. Simplifica tus tareas domésticas y confía en nuestro detergente para mantener tu hogar reluciente y libre de impurezas.",
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_742819-MLU74408303093_022024-O.webp",
    name: "Fideos de arroz",
    category: Category.ALIMENTOS_SECOS,
    price: 112,
    quantity: 20,
    description:
      "Deléitate con la exquisita textura y sabor de nuestros fideos de arroz, una opción nutritiva y versátil para tus platos favoritos. Elaborados con los mejores granos de arroz y siguiendo técnicas tradicionales, nuestros fideos garantizan una experiencia culinaria auténtica y satisfactoria. Su suave consistencia y rápida cocción los convierten en la elección perfecta para sopas, salteados o platos fríos. Además, son naturalmente libres de gluten, ideales para aquellos con dietas especiales. Descubre la calidad y el sabor incomparables de nuestros fideos de arroz, y transforma tus comidas en auténticos festines de la cocina asiática.",
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_670957-MLA70460510773_072023-V.jpg",
    name: "Arroz",
    category: Category.ALIMENTOS_SECOS,
    price: 135,
    quantity: 20,
    description:
      "Embárcate en un viaje de sabores y tradición con nuestro arroz premium, cuidadosamente seleccionado de los campos más fértiles. Cultivado con esmero y cosechado en su punto óptimo de maduración, cada grano de nuestro arroz es un tesoro de calidad y sabor incomparables. Su textura perfectamente esponjosa y su sabor delicado hacen de cada bocado una experiencia gastronómica única. Ya sea como acompañamiento o ingrediente principal, nuestro arroz se adapta a una amplia variedad de recetas, desde platos exóticos hasta las preparaciones más reconfortantes del hogar. Descubre la excelencia culinaria con nuestro arroz premium y eleva tus comidas a otro nivel.",
  },
  {
    id: 7,
    image: "https://http2.mlstatic.com/D_NQ_NP_686178-MLU74332003605_012024-O.webp",
    name: "Atun en lata",
    category: Category.ALIMENTOS_CONSERVADOS,
    price: 85,
    quantity: 20,
    description:
      "Sumérgete en una experiencia culinaria extraordinaria con nuestro atún en lata de calidad premium. Capturado en las aguas más cristalinas y envasado con cuidado para preservar su frescura y sabor inigualables, cada lata de atún es una delicia gourmet lista para disfrutar. Rico en proteínas y ácidos grasos omega-3, nuestro atún es una opción nutritiva y versátil para tus comidas. Desde ensaladas frescas hasta exquisitos platos cocinados, nuestro atún en lata añade un toque de exquisitez a cualquier receta. Descubre la diferencia con nuestro atún en lata premium y deleita tu paladar con la calidad y el sabor que mereces.",
  },
  {
    id: 8,
    image: "https://http2.mlstatic.com/D_NQ_NP_628033-MLU72636991469_112023-O.webp",
    name: "Caballa en Conserva",
    category: Category.ALIMENTOS_CONSERVADOS,
    price: 135,
    quantity: 20,
    description:
      "Sumérgete en el delicioso mundo del mar con nuestra caballa en conserva, capturada en aguas cristalinas y preservada con el máximo cuidado para garantizar su frescura y sabor excepcionales. Cada filete de caballa se selecciona con precisión y se envasa en aceite de la más alta calidad, resaltando su jugosidad y textura tierna. Rico en ácidos grasos omega-3 y proteínas, este manjar marino es una opción nutritiva y deliciosa para tus comidas. Ya sea en ensaladas, sándwiches o como acompañamiento, nuestra caballa en conserva añade un toque gourmet a tus platos, transportándote a la costa con cada bocado.",
  },
  {
    id: 9,
    image: "https://http2.mlstatic.com/D_NQ_NP_744966-MLA52629292897_112022-O.webp",
    name: "Jabon",
    category: Category.PRODUCTOS_HIGIENE,
    price: 85,
    quantity: 20,
    description:
      "Experimenta una limpieza suave y eficaz con nuestro jabón de manos, diseñado para cuidar y proteger tu piel con cada lavado. Enriquecido con ingredientes hidratantes y suavizantes, este jabón deja tus manos irresistiblemente suaves y perfumadas, sin resecarlas. Su fórmula delicada y libre de irritantes es ideal para toda la familia, incluso para pieles sensibles. Disponible en una variedad de fragancias frescas y revitalizantes, transforma cada momento de higiene en un placer aromático. Confía en nuestro jabón de manos para mantener la limpieza y el bienestar de tus manos, día tras día, con una sensación de frescura y confort incomparables.",
  },
  {
    id: 10,
    image: "https://http2.mlstatic.com/D_NQ_NP_928642-MLA74141740939_012024-O.webp",
    name: "Bolsas de residuo",
    category: Category.PRODUCTOS_LIMPIEZA,
    price: 100,
    quantity: 20,
    description:
      "Aborda la gestión de residuos de manera eficiente y confiable con nuestras bolsas de residuos de alta resistencia. Diseñadas para adaptarse a las necesidades de tu hogar o negocio, nuestras bolsas ofrecen una capacidad generosa y una durabilidad excepcional. Fabricadas con materiales resistentes y respetuosos con el medio ambiente, aseguran una contención segura de todo tipo de desechos, desde residuos domésticos hasta desechos comerciales. Su diseño práctico y fácil de manejar las convierte en la elección perfecta para mantener tus espacios limpios y ordenados. Confía en nuestras bolsas de residuos para una solución efectiva y responsable en la gestión de desechos.",
  },
  {
    id: 11,
    image: "https://http2.mlstatic.com/D_NQ_NP_910713-MLU73128393648_122023-O.webp",
    name: "Papel higienico",
    category: Category.PRODUCTOS_HIGIENE,
    price: 135,
    quantity: 20,
    description:
      "Experimenta el máximo confort y suavidad en cada uso con nuestro papel higiénico premium. Diseñado con capas extra suaves y absorbentes, nuestro papel garantiza una limpieza delicada y eficaz, cuidando la piel más sensible. Su resistencia y durabilidad lo convierten en la elección perfecta para el uso diario, mientras que su textura suave proporciona una sensación de frescura incomparable. Con nuestro papel higiénico, puedes confiar en una higiene impecable en cada momento. Descubre la calidad superior y el rendimiento excepcional de nuestro papel higiénico premium y disfruta de una experiencia de confort y bienestar en cada uso.",
  },
  {
    id: 12,
    image: "https://http2.mlstatic.com/D_NQ_NP_845480-MLU72787800319_112023-O.webp",
    name: "Pañales XXG",
    category: Category.PRODUCTOS_HIGIENE,
    price: 135,
    quantity: 20,
    description:
      "Brinda a tu bebé el máximo confort y protección con nuestros pañales XXG, diseñados para adaptarse a las necesidades de los pequeños más grandes. Con un ajuste seguro y suave, estos pañales ofrecen una absorción excepcional y una barrera antifugas confiable, manteniendo a tu bebé seco y cómodo durante más tiempo. Su diseño ergonómico y materiales suaves garantizan la máxima comodidad, mientras que su núcleo absorbente de alta tecnología proporciona una protección duradera día y noche. Confía en nuestros pañales XXG para brindarle a tu bebé la libertad de explorar y jugar sin preocupaciones, ¡porque cada momento es importante para su desarrollo feliz!",
  },
  {
    id: 13,
    image: "https://http2.mlstatic.com/D_NQ_NP_998128-MLA74111690720_012024-O.webp",
    name: "Fideos Matarazo",
    category: Category.ALIMENTOS_SECOS,
    price: 100,
    quantity: 20,
    description:
      "Embárcate en un viaje culinario inigualable con nuestros fideos Matarazzo, una deliciosa opción que ha conquistado los paladares más exigentes desde hace generaciones. Elaborados con los mejores ingredientes y siguiendo la tradición artesanal, nuestros fideos garantizan una textura perfecta y un sabor incomparable en cada bocado. Su versatilidad los hace ideales para crear una amplia variedad de platillos, desde clásicas recetas italianas hasta exquisitas preparaciones gourmet. Descubre el secreto de nuestra calidad y sabor únicos con los fideos Matarazzo, y convierte cada comida en una experiencia memorable llena de auténtico sabor y tradición.",
  },
  {
    id: 15,
    image: "https://http2.mlstatic.com/D_NQ_NP_601168-MLA74246731371_012024-O.webp",
    name: "Yerba Mate",
    category: Category.ALIMENTOS_NECESIDAD,
    price: 133,
    quantity: 20,
    description:
      "Descubre el sabor auténtico de la tradición sudamericana con nuestra yerba mate premium, cuidadosamente seleccionada de las mejores plantaciones. Cultivada bajo el sol tropical y cosechada con esmero, nuestra yerba mate ofrece un equilibrio perfecto entre sabor robusto y aroma fresco. Rica en antioxidantes y nutrientes, esta infusión revitalizante es ideal para acompañarte en tus momentos de energía y concentración. Disfruta de su sabor único y estimulante tanto caliente como frío, compartiendo la alegría de una buena conversación o sumergiéndote en un momento de tranquilidad. Eleva tu experiencia con nuestra yerba mate premium y siente la pasión de la cultura gaucha en cada sorbo.",
  },
];
