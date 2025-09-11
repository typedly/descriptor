export interface User {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  createdAt: Date;
  roles: string[];
  address?: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

export class UserClass implements User {
  name: string = '';
  age: number = 0;
  email: string = '';
  isActive: boolean = false;
  createdAt: Date = new Date();
  roles: string[] = [];
  address?: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  } = undefined;

  // protected _name: string = '';
}

export const userClass = new UserClass();
