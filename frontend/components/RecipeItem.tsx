import Link from "next/link";
import { IRecipeItem } from "../types/IRecipeItem";

export const RecipeItem = ({
  name,
  imageUrl,
  url,
}: IRecipeItem["attributes"]) => {
  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <div className="card-text d-flex">
            <img
              src={imageUrl}
              style={{ height: "5vh", width: "5vw" }}
              alt={name}
            />
            <Link href={url} legacyBehavior>
              <a className="ms-5 d-flex align-items-center text-decoration-none fw-bold">
                {name}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
