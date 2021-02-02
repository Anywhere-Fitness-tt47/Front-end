import * as yup from "yup";

export default yup.object().shape({
  first_name: yup.string().required("Please enter your first name."),
  last_name: yup.string().required("Please enter your last name."),
  email: yup.string().email("Please enter a valid email address."),
  username: yup
    .string()
    .required("Username is required.")
    .min(5, "Username must have at least 5 characters."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must have at least 8 characters."),
  role: yup
    .string()
    .required("Role is required.")
    .oneOf(
      ["instructor", "client"],
      "Role must be either instructor or client."
    ),
});
