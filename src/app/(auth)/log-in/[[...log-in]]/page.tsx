import { Metadata } from "next";

//Можно таким образом прописывать в каждой странице мета и они автоматом будут считываться сервером
export const metadata: Metadata = {
  title: "NextJS Page | Log In ",
};
// По умолчанию данные кэшируются
// можно управлять кэширование в fetch используя  свойствво revialidate

export default async function Page() {
  return <h3>Log In Page </h3>;
}
