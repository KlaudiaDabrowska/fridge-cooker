import { useFormik } from "formik";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECIPES_BY_INGREDIENT } from "../graphql/query/recipes";
import { RecipeItem } from "./RecipeItem";
import { IRecipeItem } from "../types/IRecipeItem";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import warning from "../public/img/warning.png";

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
    <div className="d-flex w-50 align-items-center">
      <form
        className="mx-auto w-100 custom-input"
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

        {data &&
          data.recipes.data.map((recipe: IRecipeItem, index: number) => {
            return (
              <RecipeItem
                name={recipe.attributes.name}
                imageUrl={recipe.attributes.imageUrl}
                url={recipe.attributes.url}
                key={index}
              />
            );
          })}

        {data && data.recipes.data.length == 0 && (
          <div className="justify-content-center mt-1 d-sm-flex d-none ">
            <div className="d-flex flex-column justify-content-center align-items-center me-3">
              <Image
                src={warning}
                alt="warning"
                height={200}
                width={200}
                className="ms-3"
              />{" "}
            </div>
            <div className="d-flex align-items-center">
              Sorry, we couldn`t find any recipe
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
