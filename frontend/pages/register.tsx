import { Button } from "../components/Button";
import { MainTemplate } from "../templates/MainTemplate";
import { useFormik } from "formik";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            </div>
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
