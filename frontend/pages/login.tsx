import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import pizzaMaker from "../public/img/letsCook.png";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { data } = useSession();

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
    <>
      <Navbar />
      <>
        {/* dekstop */}
        <div className="justify-content-center d-sm-flex d-none mt-5 pt-5">
          <div className="d-flex flex-column justify-content-center align-items-center mx-5 w-25">
            <h2 className="mb-5">Sign in</h2>
            <form className="mx-auto w-75" onSubmit={formik.handleSubmit}>
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
                  className="form-control w-100"
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
              <button className="d-flex w-100 mt-4 justify-content-center custom-btn">
                Sign in
              </button>
            </form>
          </div>
          <Image
            src={pizzaMaker}
            alt="pizzaMaker"
            height={500}
            width={500}
            quality={100}
            className="mx-5"
          />
        </div>
        {/* mobile */}
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-3 d-sm-none">
          <div className="d-flex flex-column justify-content-center align-items-center me-3">
            <h2 className="mb-5">Sign in</h2>
            <form className="mx-auto" onSubmit={formik.handleSubmit}>
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
                  className="form-control w-100"
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
              <button className="d-flex w-100 mt-4 justify-content-center custom-btn">
                Sign in
              </button>
            </form>
          </div>

          <Image
            src={pizzaMaker}
            alt="pizzaMaker"
            height={400}
            width={400}
            quality={100}
            className="mt-5"
          />
        </div>
      </>
    </>
  );
};

export default Login;
