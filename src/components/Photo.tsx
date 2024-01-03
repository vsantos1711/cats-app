import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { FaEye } from "react-icons/fa";

const photo = tv({
  base: "relative w-full min-h-32 sm:min-h-60 hover:scale-[1.02] transition duration-150 ",
  variants: {
    variant: {
      "xg-top-right": "md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-4",
      "xg-top-left": "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3",
      "xg-bot-right": "md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-4",
      "xg-bot-left": "md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-3",
    },
  },
});

type PhotoProps = ComponentProps<"img"> &
  VariantProps<typeof photo> & {
    url: string | StaticImageData;
    alt?: string;
    views?: string | number;
  };

export default function Photo({
  variant,
  url,
  alt = "a cat image",
  className,
  views,
}: PhotoProps) {
  return (
    <div className={photo({ variant, className })}>
      <div>
        <Image
          placeholder="blur"
          src={url}
          alt={alt}
          fill
          className="object-cover rounded animate-fade-in dark:border-none shadow-lg "
        />
      </div>
      <div className="absolute inset-0 flex gap-2 items-center justify-center opacity-0 hover:opacity-100  bg-gray-500 bg-opacity-50 text-white">
        <FaEye size={32} />
        <span>{views}</span>
      </div>
    </div>
  );
}
