"use client";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema, TCommentSchema } from "@/lib/types";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useToast } from "./ui/use-toast";
import { useAddComment } from "@/services/api/post/post-add-comment.service";

export default function CommentForm({ id }: { id: string }) {
  const { toast } = useToast();

  const form = useForm<TCommentSchema>({
    resolver: zodResolver(commentSchema),
  });

  const { mutate: addComment } = useAddComment(id);

  const onSubmit = async (data: TCommentSchema) => {
    addComment(data, {
      onSuccess: () => {
        toast({
          title: "Comentário adicionado!",
          description: "Seu comentário foi enviado com sucesso.",
          duration: 2000,
        });
        form.setValue("comment", "");
      },
      onError: () => {
        toast({
          title: "Erro",
          description: "Algo deu errado... Tente novamente, por favor.",
          variant: "destructive",
          duration: 2000,
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex items-center justify-between gap-4 "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  className="min-h-[60px] p-1 bg-gray-200 rounded sm:w-full dark:bg-slate-500 dark:border-gray-500 hover:ring-1 hover:ring-gray-900"
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
