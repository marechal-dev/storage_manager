import { randomUUID as generateUUID } from "crypto";

class Product {
  id?: string;
  title: string;
  price: number;
  quantity: number;
  created_at: Date;
  modified_at?: Date | null;

  constructor() {
    if (!this.id) {
      this.id = generateUUID();
    }
  }
}

export { Product };
