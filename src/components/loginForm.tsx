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
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "@/lib/types";
import { userLogin } from "@/services/api/user/user-login.service";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    try {
      await userLogin(data);
      toast({
        title: "Login",
        description: "Login realizado com sucesso!",
        duration: 2000,
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Erro",
        description: "Something gone wrong!",
        variant: "destructive",
        duration: 2000,
      });
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Acessar
        </Button>
      </form>
    </Form>
  );
}
