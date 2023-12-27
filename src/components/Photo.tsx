import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const photo = tv({
  base: "relative w-full min-h-32 sm:min-h-60",
  variants: {
    variant: {
      "xg-top-right": "md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-4",
      "xg-top-left": "md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3",
      "xg-bot-right": "md:row-start-2 md:row-end-4 md:col-start-2 md:col-end-4",
      "xg-bot-left": "md:row-start-2 md:row-end-4 md:col-start-1 md:col-end-3",
    },
  },
});

type Photo = ComponentProps<"img"> &
  VariantProps<typeof photo> & {
    url: string | StaticImageData;
    alt?: string;
  };

export default function Photo({
  variant,
  url,
  alt = "a cat image",
  className,
}: Photo) {
  return (
    <div className={photo({ variant, className })}>
      <Image
        placeholder="blur"
        src={url}
        alt={alt}
        fill
        className="object-cover rounded animate-fade-in hover:opacity-75 hover:scale-[1.02]  dark:border-none shadow-lg"
      />
    </div>
  );
}
