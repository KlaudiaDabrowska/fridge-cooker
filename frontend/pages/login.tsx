import { Button } from "../components/Button";
import { MainTemplate } from "../templates/MainTemplate";

const Login = () => {
  return (
    <MainTemplate>
      <>
        <div className="container-fluid pt-3">
          <h2 className="text-center pb-2">Sign in</h2>
          <form className="mx-auto w-25">
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
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <Button text="Sign in" styles="d-flex w-100 mt-3" />
          </form>
        </div>
      </>
    </MainTemplate>
  );
};

export default Login;
