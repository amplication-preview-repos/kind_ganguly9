import { JsonValue } from "type-fest";

export type MarketplaceListing = {
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  paymentDetails: JsonValue;
  price: number | null;
  seller: JsonValue;
  title: string | null;
  updatedAt: Date;
};
