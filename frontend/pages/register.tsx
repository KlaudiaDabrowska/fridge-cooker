import { Button } from "../components/Button";
import { MainTemplate } from "../templates/MainTemplate";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation/register";
import Link from "next/link";
import * as Yup from "yup";

const Register = () => {
  const [register, { data: createUser, error: createUserError }] =
    useMutation(CREATE_USER);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        await register({
          variables: {
            username: values.username,
            email: values.email,
            password: values.password,
          },
        });
      } catch (e) {
        console.log(e);
      }
      actions.resetForm({ values: { email: "", password: "", username: "" } });
    },
  });

  return (
    <MainTemplate>
      <>
        <div className="container-fluid pt-3">
          <h2 className="text-center pb-2">Sign up</h2>
          <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="form-label"
                placeholder="user"
              >
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-danger">{formik.errors.username}</div>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="form-label"
                placeholder="email@email.com"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            {createUser?.register?.user && (
              <div className="text-success text-center">
                Thanks for register! Now you can{" "}
                <Link href="/login" className="text-decoration-none">
                  login!
                </Link>
              </div>
            )}
            {createUserError && (
              <div className="text-danger text-center">
                {createUserError.message ===
                  "Email or Username are already taken" &&
                  createUserError.message}
              </div>
            )}
            <Button
              text="Sign up"
              styles="d-flex w-100 mt-4 justify-content-center"
            />
          </form>
        </div>
      </>
    </MainTemplate>
  );
};

export default Register;
