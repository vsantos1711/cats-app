"use client";
import { TRecoveryAccountSchema, recoveryAccountSchema } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type RecoveryAccountFormProps = {
  labelOne: string;
  labelTwo: string;
  placeholderOne: string;
  placeholderTwo: string;
  textButton: string;
  textButtonTwo: string;
};

export default function RecoveryAccountForm({
  labelOne,
  labelTwo,
  placeholderOne,
  placeholderTwo,
  textButton,
  textButtonTwo,
}: RecoveryAccountFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TRecoveryAccountSchema>({
    resolver: zodResolver(recoveryAccountSchema),
  });

  const onSubmit = async (data: TRecoveryAccountSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-2"
    >
      <Input id="email" type="text" placeholder={placeholderOne} />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <Input id="activationCode" type="text" placeholder={placeholderTwo} />
      {errors.activationCode && (
        <p className="text-red-500">{`${errors.activationCode.message}`}</p>
      )}

      <div className="flex items-center justify-between max-w-[450px]">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {textButton}
        </Button>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={isSubmitting}
        >
          {textButtonTwo}
        </Button>
      </div>
    </form>
  );
}
