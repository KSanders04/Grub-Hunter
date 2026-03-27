import gql from "graphql-tag";
import customTypes from "./locations/custom.gql";
import queries from "./locations/queries.gql";
import mutations from "./locations/mutations.gql";

export const schema = gql`
  ${customTypes}
  ${queries}
  ${mutations}
`;