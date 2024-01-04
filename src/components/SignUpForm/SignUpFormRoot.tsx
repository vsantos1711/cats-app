import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, cloneElement } from "react";
import { UseFormHandleSubmit, useForm } from "react-hook-form";

type SignUpFormRootProps = {
  children: any;
};

export default function SignUpFormRoot({ children }: SignUpFormRootProps) {
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
      {cloneElement(children, { register })}
    </form>
  );
}
