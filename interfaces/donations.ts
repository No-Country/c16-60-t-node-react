export interface DonationsData {
  id: number;
  amount: number;
  title: string;
  description: string;
  createdAt?: Date;
  causesId: number;
  userId: string;
}
