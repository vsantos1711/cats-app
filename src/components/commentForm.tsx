"use client";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { commentSchema, TCommentSchema } from "@/lib/types";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CommentForm() {
  const form = useForm<TCommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (data: TCommentSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 2000));
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex items-center justify-between w-full "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Add a comment..."
                  className="p-1 bg-gray-200 rounded w-60 dark:bg-slate-500 dark:border-gray-500 hover:ring-1 hover:ring-gray-900"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="text-gray-400 transition dark:text-gray-300 hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-transparent"
        >
          <Logo />
        </Button>
      </form>
    </Form>
  );
}
