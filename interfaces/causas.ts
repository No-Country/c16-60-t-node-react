//TODO: crear interfas de donaciones
import { DonationData } from "../interfaces/donations";
export interface CausasData {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  donations?: DonationData[];
}
