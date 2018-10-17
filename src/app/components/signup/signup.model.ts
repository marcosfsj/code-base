export class Signup {
    id: number;
    userName: string;
    email: string;
    gender: string;
    hobbies: string[];

    constructor(id: number, userName: string, email: string, male: string, hobbies: string[]) {
      this.id = id;
      this.userName = userName;
      this.email = email;
      this.gender = male;
      this.hobbies = hobbies;
    }

  }
