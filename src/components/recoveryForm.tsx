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
import { TRecoverySchema, recoverySchema } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "@/navigation";

export default function LoginForm() {
  const t = useTranslations("RecoveryPage");
  const form = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema),
  });

  const onSubmit = async (data: TRecoverySchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
                <FormLabel>{t("label-one")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("placeholder-one")}
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
                <FormLabel>{t("label-two")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("placeholder-two")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between max-w-md">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {t("button")}
          </Button>
          <Button
            type="submit"
            variant="tertiary"
            disabled={form.formState.isSubmitting}
          >
            {t("button-two")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
