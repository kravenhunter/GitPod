import { signUpSchema } from "@/types";
import { NextResponse } from "next/server";

// получаем данные и проверяем  через ЗОД -схему
export async function POST(request: Request) {
  // спциально  типизируем тело  как неизвезный тип
  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }
  // проверяем  существуют ли в  объекте zodErrors какие либо ключи
  // если да то содздаем обхект ошибки
  // если объект  zodErrors пустой то отправляем успех
  return NextResponse.json(Object.keys(zodErrors).length > 0 ? { errors: zodErrors } : { success: true });
}
