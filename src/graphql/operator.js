import { gql } from "@apollo/client";

export const GET_ALL_OPERATORS = gql`
  query GetAllOperators {
    getAllOperators {
      id
      dni
      name
      last_name
      total_week
    }
  }
`
