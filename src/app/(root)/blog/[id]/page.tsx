import { notFound } from "next/navigation";
import { Product } from "../page";

type PostPageProps = {
  params: {
    id: string;
  };
};

async function getData(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UT-8",
    },
  });
  // Выведем на экран ошибку пользователю

  if (!response.ok) {
    throw new Error("Unable to fetch product");
  }
  const data = (await response.json()) as Product;
  return data;
}
export default async function Page({ params }: PostPageProps) {
  try {
    const product = await getData(Number(params.id));
    return <div>My Post: {product.title} </div>;
  } catch (error) {
    console.log(error);
    return notFound();
  }
}
