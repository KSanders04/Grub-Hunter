import gql from "graphql-tag";

const queriesSchema = gql`
  type Query {
    allLocations: [Location]
    locationsById(id: String): [Location]
    onUserWishlist(userId: String): [Location]
  }
`;

export default queriesSchema;
