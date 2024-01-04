import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import Input from "../UI/Input";
import { TSignUpSchema } from "@/lib/types";

type SignUpFormInputProps = {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors<TSignUpSchema>;
};

export default function SignUpFormInput({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
}: SignUpFormInputProps) {
  return (
    <Input
      label={label}
      id={id}
      type={type}
      placeholder={placeholder}
      register={register}
    >
      {errors.username && (
        <p className="text-red-500">{`${errors.username.message}`}</p>
      )}
    </Input>
  );
}
