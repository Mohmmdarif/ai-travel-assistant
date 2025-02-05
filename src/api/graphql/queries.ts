import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      currency
      capital
    }
  }
`;

export const GET_COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currency
      phone
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
