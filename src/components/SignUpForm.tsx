"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignUpSchema, signUpSchema } from "@/lib/types";

type SignUpFormProps = {
  labelOne: string;
  labelTwo: string;
  labelThree: string;
  labelFour: string;
  placeholderOne: string;
  placeholderTwo: string;
  placeholderThree: string;
  placeholderFour: string;
  textButton: string;
  textLink: string;
};

export default function SignUpForm({
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  placeholderOne,
  placeholderTwo,
  placeholderThree,
  placeholderFour,
  textButton,
  textLink,
}: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full pb-5  flex flex-col gap-2"
    >
      <Input
        label={labelOne}
        id="text"
        type="text"
        placeholder={placeholderOne}
        register={register("username")}
      />
      {errors.username && (
        <p className="text-red-500">{`${errors.username.message}`}</p>
      )}

      <Input
        label={labelTwo}
        id="email"
        type="email"
        placeholder={placeholderTwo}
        register={register("email")}
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <Input
        label={labelThree}
        id="password"
        type="password"
        placeholder={placeholderThree}
        register={register("password")}
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}

      <Input
        label={labelFour}
        id="confirmPassword"
        type="password"
        placeholder={placeholderFour}
        register={register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}

      <div className="flex justify-between max-w-[450px] mb-5">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {textButton}
        </Button>
      </div>
      <Link
        href="/login"
        className="font-normal underline decoration-solid mb-10 max-w-fit text-gray-500 dark:text-gray-200"
      >
        {textLink}
      </Link>
    </form>
  );
}
