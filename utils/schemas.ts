import { object, string } from "yup";

export const loginFormSchema = object({
  username: string().required(),
  password: string().required(),
  /* .min(8, "Password is too short - should be 8 chars minimum.")
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
			"Password can only contain Latin letters."
		), */
});

export const appFormSchema = Object({});
export const consoleFormSchema = Object({});
