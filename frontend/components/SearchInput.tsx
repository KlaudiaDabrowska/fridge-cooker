import { Button } from "./Button";

export const SearchInput = () => {
  return (
    <div className="container-fluid pt-5 pb-5 mb-5">
      <form className="mx-auto custom-input">
        <div className="input-group mb-3">
          <label htmlFor="ingredients" className="form-label" />

          <input
            type="text"
            className="form-control rounded"
            id="emaingredientsil"
            aria-describedby="ingredientsHelp"
            placeholder="eggs, beckon, milk...."
          />
          <Button text="Search" styles="ms-2" />
        </div>
      </form>
    </div>
  );
};
