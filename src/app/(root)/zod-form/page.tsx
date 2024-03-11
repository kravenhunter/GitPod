"use client";
import { signUpSchema, type SignUpSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
  confirm: string;
}
const initForm = () => ({
  email: "",
  password: "",
  confirm: "",
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setError,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    // Создаем sleepper  на 2 секунды
    // await new Promise((resolve: any) => setTimeout(resolve, 2000));

    const respone = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!respone.ok) {
      alert("Submitted form failed");
      return;
    }

    const responseData = await respone.json();

    if (responseData.errors) {
      const errors = responseData.errors;

      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirm) {
        setError("confirm", {
          type: "server",
          message: errors.confirm,
        });
      } else {
        alert("Submitted went  wrong");
      }
      return;
    }

    reset();
  };
  // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setForm((prev) => {
  //     prev[e.target.name as keyof IForm] = e.target.value;
  //     return prev;
  //   });
  // };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        {/* {errors.length > 0 && (
          <ul>
            {errors.map((error, i) => (
              <li key={i} className="bg-red-100 text-red-500 px-4 py-2 rounded">
                {error}
              </li>
            ))}
          </ul>
        )} */}

        {/* <input name="email" type="email" required maxLength={50} placeholder="Email" className="px-4 py-2 rounded" /> */}
        <input {...register("email")} name="email" type="email" placeholder="Email" className="text-black px-4 py-2 rounded" />
        {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}
        <input {...register("password")} name="password" type="password" placeholder="Password" className="text-black px-4 py-2 rounded" />
        {errors.password && <p className="text-red-500 ">{errors.password.message}</p>}
        <input {...register("confirm")} name="confirm" type="password" placeholder="Confirm password" className="text-black px-4 py-2 rounded" />
        {errors.confirm && <p className="text-red-500 ">{errors.confirm.message}</p>}
        <button disabled={isSubmitted} type="submit" className={`bg-blue-500 disabled:bg-gray-500 py-2 rounded`}>
          Submit data
        </button>
      </form>
    </main>
  );
}
