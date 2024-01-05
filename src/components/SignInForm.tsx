"use client";
import { TSignInSchema, signInSchema } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type SignInFormProps = {
  labelOne: string;
  labelTwo: string;
  textButton: string;
};

export default function SignInForm({
  labelOne,
  labelTwo,
  textButton,
}: SignInFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">
      <Input
        label={labelOne}
        id="text"
        type="text"
        register={register("username")}
      />
      {errors.username && (
        <p className="text-red-500">{`${errors.username.message}`}</p>
      )}

      <Input
        label={labelTwo}
        id="password"
        type="password"
        register={register("password")}
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {textButton}
      </Button>
    </form>
  );
}
