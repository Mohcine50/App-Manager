"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      callbackUrl: window.location.origin,
      redirect: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Form;
