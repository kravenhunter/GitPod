import { getAllAlbums } from "@/lib/actions/album.action";
import { getAllProducts } from "@/lib/actions/product.action";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

//Можно таким образом прописывать в каждой странице мета и они автоматом будут считываться сервером
export const metadata: Metadata = {
  title: "NextJS | Home ",
};

// По умолчанию данные кэшируются
// можно управлять кэширование в fetch используя  свойствво revialidate
// async function getData() {
//   const response = await fetch("https://fakestoreapi.com/products", {
//     headers: {
//       "Content-Type": "application/json; charset=UT-8",
//     },

//     next: {
//       revalidate: 3600, // говорим что данные будут сохраняться на 1 мин а дальше перезапрашиваться
//     },
//   });
//   // Выведем на экран ошибку пользователю
//   if (!response.ok) throw new Error("Unable to fetch products");

//   return (await response.json()) as Product[];
// }

// async function getAlboms() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
//     headers: {
//       "Content-Type": "application/json; charset=UT-8",
//     },

//     next: {
//       revalidate: 3600, // говорим что данные будут сохраняться на 1 мин а дальше перезапрашиваться
//     },
//   });
//   // Выведем на экран ошибку пользователю
//   if (!response.ok) throw new Error("Unable to fetch products");

//   return (await response.json()) as IAlbum[];
// }
export default async function BestPractices() {
  const prodactPromise = getAllProducts();
  const albumsPromise = getAllAlbums();
  const [products, albums] = await Promise.all([prodactPromise, albumsPromise]);
  console.log(products);

  return (
    <div className='products__container flex flex-wrap gap-8'>
      {products?.map((product) => (
        <div
          key={product.id}
          className='item bg-white rounded-xl flex flex-col gap-y-5 pb-5 max-w-[300px] shadow-lg'>
          <div className='cover  max-w-[300px] max-h-[200px] bg-white'>
            <Image
              className='w-[300px] h-[200px]'
              src={product.image}
              alt={product.title}
              title={product.title}
              width={300}
              height={200}
            />
          </div>
          <div className='sub flex gap-x-8 pl-5'>
            <span className='rounded p-[5px] bg-green-100 text-[16px]'>$ {product.price}</span>
            <span className='rounded p-[5px] bg-gray-100  text-[16px]'> {product.category}</span>
          </div>
          <div className='px-5'>
            <Link className='text-[1.2vw] font-semibold' href={`/blog/${product.id}`}>
              {product.title}
            </Link>
          </div>
          <p className='rating pl-5 text-[16px]'> Raiting: {product.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}
