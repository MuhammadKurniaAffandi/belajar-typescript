// menggunakan type alias untuk union type
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // implementasi optional properties dengan menggunakan tanda tanya (?)
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // implementasi optional properties dengan menggunakan tanda tanya (?)
};
