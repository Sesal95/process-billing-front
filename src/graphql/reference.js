import { gql } from "@apollo/client";

export const GET_ALL_REFERENCES = gql`
query GetAllReferences {
  getAllReferences {
    id
    type
    StepsReferences {
      id
      id_ref
      id_step
      steps_order
      Step {
        id
        description
      }
    }
  }
}
`;
