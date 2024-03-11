import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(5, "Password mast be  at least 5 characters"),
    confirm: z.string().min(5, "Password mast be  at least 5 characters"),
    // url: z.string().url(),
    // dateTime: z.date(),
    // isFree: z.boolean()
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password must match",
    path: ["confirm"],
  });

// получаем тип  схемы для типизирования формы
export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
