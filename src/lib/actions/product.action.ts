"use server";

import { handleError } from "@/lib/utils";
import { Product } from "@/types/index";

const url = "https://fakestoreapi.com/products";
// Здесь можно писать  логику  испольнения запросов crud(обращения к БД или внешним api) вместо  обращения к api
// и они будут исполняться   на серверной стороне
export const getAllProducts = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json; charset=UT-8",
      },

      next: {
        revalidate: 3600, // говорим что данные будут сохраняться на 1 мин а дальше перезапрашиваться
      },
    });
    // Выведем на экран ошибку пользователю
    if (!response.ok) throw new Error("Unable to fetch products");

    return (await response.json()) as Product[];
  } catch (error) {
    handleError(error);
  }
};
