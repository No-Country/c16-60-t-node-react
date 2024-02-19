export interface CausasData {
  id: number;
  title: string;
  description: string;
  published?: boolean;
  createdAt: Date;
  donations?: any[]
}

/* 
model Causes {
    id          Int         @id @default(autoincrement())
    title       String
    description String
    createdAt   DateTime    @default(now())
    Donations   Donations[]
}
*/