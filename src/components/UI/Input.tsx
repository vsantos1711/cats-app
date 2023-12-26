type InputProps = {
  label: string;
  id: string;
  type: string;
};

export default function Input({ id, label, type }: InputProps) {
  return (
    <div className="flex flex-col pb-5 gap-1">
      <label htmlFor={id} className="font-normal">
        {label}
      </label>
      <input
        className="bg-[#E8F0FE] duration-300 rounded p-2 hover:ring-2 ring-[#3d397c] dark:ring-[#4badce] border dark:text-black max-w-[450px]"
        type={type}
        id={id}
      />
    </div>
  );
}
