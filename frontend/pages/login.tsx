import { Button } from "../components/Button";
import { MainTemplate } from "../templates/MainTemplate";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, actions) => {
      await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setLoginError(err);
        });

      actions.resetForm({ values: { email: "", password: "" } });
    },
  });
  return (
    <MainTemplate>
      <>
        <div className="container-fluid pt-3">
          <h2 className="text-center pb-2">Sign in</h2>
          <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
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
            {loginError && <div className="text-danger">{loginError}</div>}
            <Button
              text="Sign in"
              styles="d-flex w-100 mt-4 justify-content-center"
            />
          </form>
        </div>
      </>
    </MainTemplate>
  );
};

export default Login;
