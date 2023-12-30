import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
};

export default function Input({
  id,
  label,
  type,
  placeholder,
  register,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 pb-1">
      <label htmlFor={id} className="font-normal">
        {label}
      </label>
      <input
        className="bg-[#dee8fa] duration-300 rounded p-2 hover:ring-2 ring-[#3d397c] dark:ring-[#4badce] border border-indigo-500 dark:text-black max-w-[450px]"
        placeholder={placeholder}
        type={type}
        id={id}
        {...register}
      />
    </div>
  );
}
