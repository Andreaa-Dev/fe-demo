export type Product = {
  _id: string;
  name: string;
};

export type ProductCart = Product & {
  quantity: number;
};

export type ProductOrder = ProductCart & {
  createAt: Date;
  orderItems: ProductCart;
  userId: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
};
