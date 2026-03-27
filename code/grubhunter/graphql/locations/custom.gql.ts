import gql from "graphql-tag";

const customTypes = gql`
  directive @cacheControl(maxAge: Int) on FIELD_DEFINITION | OBJECT

  type Location @cacheControl(maxAge: 300) {
    _id: String
    address: String
    zipcode: String
    borough: String
    cuisine: String
    grade: String
    name: String
    on_wishlist: [String] @cacheControl(maxAge: 60)
    location_id: String
  }
`;

export default customTypes;
 