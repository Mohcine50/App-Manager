import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Form from "@/app/components/form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <main>
      <h2>Sign in</h2>
      <Form />
    </main>
  );
}
