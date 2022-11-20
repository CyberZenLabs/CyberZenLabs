import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^[^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=\[\]\<\>][A-я\d][^0-9\#\@\!\&\*\\\(\)\{\}\|\~\`\'\"\;\:\.\,\$\^\ \%\-\_\+\=[\]<\>]{0,100}$/,
      "Only letters are allowed"
    )
    .required("Name is required"),
  email: yup.string().email("Incorrect email").required("Email is required"),
});
