import { Link } from "@/navigation";
type SignUpFormLinkProps = {
  textLink: string;
};

export default function SignUpFormLink({ textLink }: SignUpFormLinkProps) {
  return (
    <Link
      href="/login"
      className="font-normal underline decoration-solid mb-10 max-w-fit text-gray-500 dark:text-gray-200"
    >
      {textLink}
    </Link>
  );
}
