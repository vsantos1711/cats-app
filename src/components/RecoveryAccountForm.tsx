"use client";
import { TRecoveryAccountSchema, recoveryAccountSchema } from "@/lib/types";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
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
      className="w-full flex flex-col gap-2"
    >
      <Input
        label={labelOne}
        id="email"
        type="text"
        placeholder={placeholderOne}
        register={register("email")}
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <Input
        label={labelTwo}
        id="activationCode"
        type="text"
        placeholder={placeholderTwo}
        register={register("activationCode")}
      />
      {errors.activationCode && (
        <p className="text-red-500">{`${errors.activationCode.message}`}</p>
      )}

      <div className="flex items-center justify-between max-w-[450px]">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isSubmitting}
        >
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
