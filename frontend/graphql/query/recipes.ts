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
