"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TLoginSchema, loginSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userLogin } from "@/services/api/user/user-login.service";
import { useRouter } from "@/navigation";
import { userStore } from "@/store/user-store";
import { useToast } from "./ui/use-toast";

export default function LoginForm() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const user = userStore();
  const { toast } = useToast();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    try {
      const res = await userLogin(data);
      user.setUserName(res.username);
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
                <FormLabel>{t("label-one")}</FormLabel>
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
                <FormLabel>{t("label-two")}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
