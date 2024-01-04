import Button from "@/components/UI/Button";

type SignUpFormBtnProps = {
  isSubmitting: boolean;
  textButton: string;
};

export default function SignUpFormButton({
  isSubmitting,
  textButton,
}: SignUpFormBtnProps) {
  return (
    <div className="flex justify-between max-w-[450px] mb-5">
      <Button
        type="submit"
        variant="secondary"
        size="md"
        disabled={isSubmitting}
      >
        {textButton}
      </Button>
    </div>
  );
}
