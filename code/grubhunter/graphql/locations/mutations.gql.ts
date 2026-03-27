import gql from 'graphql-tag';

const mutations = gql`
  type Mutation {
    addWishlist(userId: String, locationId: String): Location
    removeWishlist(userId: String, locationId: String): Location
  }
`;

export default mutations;