import { randomUUID as generateUUID } from "crypto";

class User {
  id?: string;
  name: string;
  email: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = generateUUID();
    }
  }
}

export { User };
