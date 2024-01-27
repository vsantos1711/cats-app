"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRecoverySchema, recoverySchema } from "@/lib/types";

export default function LoginForm() {
  const form = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema),
    defaultValues: {
      activationCode: "",
    },
  });

  const onSubmit = async (data: TRecoverySchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 3000));
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail do Usuário</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Seu e-mail na plataforma..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="activationCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código de confirmação</FormLabel>
                <FormControl>
                  <Input
                    placeholder="O código enviado para o seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between max-w-md">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Enviar E-mail
          </Button>
          <Button
            type="submit"
            variant="tertiary"
            disabled={form.formState.isSubmitting}
          >
            Recuperar senha
          </Button>
        </div>
      </form>
    </Form>
  );
}
