"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginFormSchema } from "../../../utils/schemas";

const LoginForm = () => {
  const [errorPassword, setErrorPassword] = useState<string>();
  const [errorUsername, setErrorUsername] = useState<string>();
  const router = useRouter();
  const [status, setStatus] = useState<string>();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setStatus("loading");
      const username = values.username;
      const password = values.password;
      const signin = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (signin?.error === null) {
        router.refresh();
        //router.replace("/");
      } else {
        setStatus(undefined);
        const credentialsError = JSON.parse(signin?.error as string);
        if (credentialsError.type === "Password") {
          setErrorUsername(undefined);
          setErrorPassword("Wrong Password");
        } else {
          setErrorUsername("Wrong Username");
        }
      }
    },
    validationSchema: loginFormSchema,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:w-50 max-w-[90%]"
      >
        <label htmlFor="username">Username</label>
        <input
          className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {errorUsername !== undefined ? (
          <div className="font-bold text-[#ff0033] text-sm ml-2">
            {errorUsername}
          </div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {errorPassword !== undefined ? (
          <div className="font-bold text-[#ff0033] text-sm ml-2">
            {errorPassword}
          </div>
        ) : null}
        <button
          type="submit"
          className="flex items-center justify-center h-8 py-6 mt-3 text-center text-white rounded-lg bg-btn-bg disabled:opacity-80"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
