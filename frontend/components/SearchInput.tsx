import { Button } from "./Button";
import { useFormik } from "formik";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECIPES_BY_INGREDIENT } from "../graphql/query/recipes";
import { RecipeItem } from "./RecipeItem";
import { IRecipeItem } from "../types/IRecipeItem";

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

  console.log(data);

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
          <div>Sorry, we couldn`t find any recipe</div>
        )}
      </form>
    </div>
  );
};
