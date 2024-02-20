import {CausasData} from '../interfaces/causas'

export interface DonationsData {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  cause?: CausasData;
  causesId?: number;
}

