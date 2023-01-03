import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query GET_RECIPES {
    recipes {
      data {
        attributes {
          ingredients {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_RECIPES_BY_INGREDIENT = gql`
  query GET_RECIPES_BY_INGREDIENT($ingredient: String!) {
    recipes(filters: { ingredients: { name: { eq: $ingredient } } }) {
      data {
        attributes {
          name
          imageUrl
          url
        }
      }
    }
  }
`;
