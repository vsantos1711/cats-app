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
      className="flex flex-col w-full gap-2 pb-5"
    >
      <Input id="text" type="text" placeholder={placeholderOne} />
      {errors.username && (
        <p className="text-red-500">{`${errors.username.message}`}</p>
      )}

      <Input id="email" type="email" placeholder={placeholderTwo} />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <Input id="password" type="password" placeholder={placeholderThree} />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}

      <Input
        id="confirmPassword"
        type="password"
        placeholder={placeholderFour}
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
        className="mb-10 font-normal text-gray-500 underline decoration-solid max-w-fit dark:text-gray-200"
      >
        {textLink}
      </Link>
    </form>
  );
}
