"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>();
  const [errorUsername, setErrorUsername] = useState<string>();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      redirect: false,
    }).then((value) => {
      if (value?.error === null) {
        router.replace("/");
      } else {
        const credentialsError = JSON.parse(value?.error as string);
        if (credentialsError.type === "Password") {
          setErrorPassword("Worong Password");
        } else {
          setErrorUsername("Wrong Username");
        }
      }
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:w-50 max-w-[90%]"
      >
        <label htmlFor="username">Username</label>
        <input
          className="h-8 px-4 py-5 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errorUsername !== undefined ? (
          <div className="text-red-600">{errorUsername}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          className="h-8 px-4 py-5 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorPassword !== undefined ? (
          <div className="text-red-600">{errorPassword}</div>
        ) : null}
        <button
          type="submit"
          className="flex items-center justify-center h-8 py-6 mt-3 text-center text-white rounded-lg bg-btn-bg"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default Form;
