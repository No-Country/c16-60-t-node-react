export interface ProductsData {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    causeId: number;
}

//model Products {
//    id       Int     @id @default(autoincrement())
//    image    String  
//    name     String
//    price    Float
//    quantity Int
//    Cause    Causes? @relation(fields: [causesId], references: [id])
//    causesId Int
//}
