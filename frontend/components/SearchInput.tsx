import { useFormik } from "formik";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECIPES_BY_INGREDIENT } from "../graphql/query/recipes";
import { FaSearch } from "react-icons/fa";
import { SearchResult } from "./SearchResult";

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

  const { data } = useQuery(GET_RECIPES_BY_INGREDIENT, {
    variables: {
      ingredient: ingredients,
    },
  });

  return (
    <div className="d-flex justify-content-center w-75 mx-auto">
      <form
        className="custom-input"
        onSubmit={formik.handleSubmit}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            formik.handleSubmit();
          }
        }}
      >
        <div className="input-group mb-3 border border-2 rounded">
          <label htmlFor="ingredients" className="form-label" />
          <div className="position-relative p-2 d-flex align-items-center">
            <FaSearch className="text-secondary" />
          </div>
          <input
            type="text"
            className="form-control position-relative border-0"
            id="ingredients"
            aria-describedby="ingredients"
            placeholder="eggs, beckon, milk...."
            onChange={formik.handleChange}
            value={formik.values.ingredients}
          />
        </div>
        <SearchResult recipesData={data} />
      </form>
    </div>
  );
};
