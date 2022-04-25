import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const registerUser = Yup.object().shape({
  email: Yup.string().email().required("email reqired"),
  password: Yup.string().min(4).max(20).required("password is required"),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password and Confirm Password does not match"
  ),
});

const Signup = ({ setShowLogin }) => {
  const { createUser } = useContext(AuthContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUser),
  });
  //
  const handleSignupSubmit = async (e) => {
    var formData = getValues();
    console.log(formData);

    const { email, password } = getValues();
    console.log(email);

    await createUser(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(handleSignupSubmit)}>
      <h2>Sign Up!</h2>
      <fieldset>
        <legend>Create Account</legend>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              formNoValidate
            />
          </li>
          <p className="validationError">{errors.email?.message}</p>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              formNoValidate
            />
          </li>
          <p className="validationError">{errors.password?.message}</p>
          <li>
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password2"
              {...register("password2")}
              formNoValidate
            />
          </li>
          <p className="validationError">{errors.password2?.message}</p>
        </ul>
      </fieldset>
      <br />
      <button type="submit" value="Submit">
        Submit
      </button>
      <button type="button" onClick={() => setShowLogin(true)}>
        Have an Account?
      </button>
    </form>
  );
};

export default Signup;
