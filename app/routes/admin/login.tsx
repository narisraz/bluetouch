import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { RiErrorWarningLine } from "react-icons/ri";
import { parseFormAny, useZorm } from "react-zorm";
import { z } from "zod";

import { i18nextServer } from "app/integrations/i18n";
import { createAuthSession, getAuthSession, signInWithEmail } from "~/auth";
import { ButtonContained } from "~/shared/components/button-contained";
import { FormLabel } from "~/shared/components/form-label";
import { Input } from "~/shared/components/input";
import { assertIsPost } from "~/shared/utils";
import { AdminRouteId, getRouteById } from "~/shared/utils/admin.routes";

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);
  const t = await i18nextServer.getFixedT(request, "auth");
  const title = t("login.title");

  if (authSession) return redirect("/notes");

  return json({ title });
}

const LoginFormSchema = z.object({
  email: z
    .string()
    .email("Email invalide")
    .transform((email) => email.toLowerCase()),
  password: z.string().min(1, "Mot de passe obligatoire"),
});

export async function action({ request }: ActionArgs) {
  assertIsPost(request);
  const formData = await request.formData();
  const result = await LoginFormSchema.safeParseAsync(parseFormAny(formData));

  if (!result.success) {
    return json(
      {
        errors: result.error,
      },
      { status: 400 }
    );
  }

  const { email, password } = result.data;

  const authSession = await signInWithEmail(email, password);

  if (!authSession) {
    return json(
      { errors: { email: "invalid-email-password", password: null } },
      { status: 400 }
    );
  }

  return createAuthSession({
    request,
    authSession,
    redirectTo: getRouteById(AdminRouteId.DASHBOARD).url,
  });
}

export const meta: MetaFunction = ({ data }) => ({
  title: data.title,
});

export default function LoginPage() {
  const zo = useZorm("LoginFormSchema", LoginFormSchema);
  const actionData = useActionData()

  const {state} = useTransition();
  const { t } = useTranslation("auth");

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto bg-surface p-8">
        <Form ref={zo.ref} method="post" className="space-y-4" replace>
          <div className="w-full text-center text-4xl">Login</div>
          {actionData?.errors && 
            <div className="flex items-center gap-2 rounded bg-error p-4 text-white"> 
              <RiErrorWarningLine />
              Email ou mot de passe incorrecte
            </div>
          }
          <table className="table-auto border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <FormLabel>Email</FormLabel>
                <td>
                  <Input
                    name={zo.fields.email()}
                    placeholder="Login"
                    type="text"
                    className="w-80"
                    error={zo.errors.email()?.message}
                  />                
                </td>
              </tr>
              <tr>
                <FormLabel>Mot de passe</FormLabel>
                <td>
                  <Input
                    name={zo.fields.password()}
                    placeholder="Mot de passe"
                    type="password"
                    className="w-80"
                    error={zo.errors.password()?.message}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <ButtonContained type="submit" className="w-full justify-center uppercase" loading={state == "submitting"}>Se connecter</ButtonContained>
        </Form>
      </div>
    </div>
  );
}
