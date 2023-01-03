import { Button } from "./Button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

export const SearchInput = () => {
  const [ingredients, setIngredients] = useState<string>();

  const formik = useFormik({
    initialValues: {
      ingredients: "",
    },
    onSubmit: (values, actions) => {
      setIngredients(values.ingredients);
      actions.resetForm({ values: { ingredients: "" } });
    },
  });

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <div className="container-fluid pt-1 pb-5 mb-5">
      <form className="mx-auto custom-input" onSubmit={formik.handleSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="ingredients" className="form-label" />

          <input
            type="text"
            className="form-control rounded"
            id="ingredients"
            aria-describedby="ingredients"
            placeholder="eggs, beckon, milk...."
            onChange={formik.handleChange}
            value={formik.values.ingredients}
          />
          <Button text="Search" styles="ms-2" />
        </div>
      </form>
    </div>
  );
};
