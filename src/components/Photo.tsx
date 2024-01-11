import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { FaEye } from "react-icons/fa";

const photo = tv({
  base: "relative w-full min-h-32 sm:min-h-60 hover:scale-[1.02] transition duration-150 ",
  variants: {
    variant: {
      "top-right": "md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-4",
      "top-left": "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3",
      "bot-right": "md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-4",
      "bot-left": "md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-3",
    },
  },
});

type PhotoProps = ComponentProps<"img"> &
  VariantProps<typeof photo> & {
    url: string | StaticImageData;
    alt?: string;
    views?: string | number;
    clickEvent: () => void;
  };

export default function Photo({
  variant,
  url,
  alt = "a cat image",
  className,
  views,
  clickEvent,
}: PhotoProps) {
  return (
    <div className={photo({ variant, className })} onClick={clickEvent}>
      <div>
        <Image
          placeholder="blur"
          src={url}
          alt={alt}
          fill
          className="object-cover rounded shadow-lg animate-fade-in dark:border-none"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-2 text-white bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100">
        <FaEye size={32} />
        <span>{views}</span>
      </div>
    </div>
  );
}
