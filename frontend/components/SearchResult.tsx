import { RecipeItem } from "./RecipeItem";
import { IRecipeItem } from "../types/IRecipeItem";
import Image from "next/image";
import warning from "../public/img/warning.png";

export const SearchResult = ({ recipesData }: { recipesData: any }) => {
  return (
    <>
      {recipesData &&
        recipesData.recipes.data.map((recipe: IRecipeItem, index: number) => {
          return (
            <RecipeItem
              name={recipe.attributes.name}
              imageUrl={recipe.attributes.imageUrl}
              url={recipe.attributes.url}
              key={index}
            />
          );
        })}

      {recipesData && recipesData.recipes.data.length == 0 && (
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
    </>
  );
};
