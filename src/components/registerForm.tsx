"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterSchema, registerSchema } from "@/lib/types";
import { userRegister } from "@/services/api/user/user-register.service";

export default function RegisterForm() {
  const { toast } = useToast();

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema), 
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      await userRegister(data);
      toast({
        title: "Account created!",
        description: "Time to access the app!",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Something gone wrong... Try again, please",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite um nome de usuário legal..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu melhor e-mail"
                    type="email"
                    {...field}
                  />
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
                  <Input
                    placeholder="Digite uma senha forte"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirme sua senha..."
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Registrar
        </Button>
      </form>
    </Form>
  );
}
