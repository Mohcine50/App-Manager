import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/app/components/loginform";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Apps Manager | Login",
  description: "Apps and consoles Manager",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-7">
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase text-indigo">
          Apps Manager
        </h1>
        <h2 className="text-xl font-semibold">Sign In</h2>
      </div>
      <LoginForm />
    </main>
  );
}
