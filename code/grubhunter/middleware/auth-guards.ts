import { GraphQLError } from 'graphql'
import { JWT } from 'next-auth/jwt'
 
interface paramInterface {
  user_id: string
  location_id: string
}
 
interface contextInterface {
  token: JWT
}
 
export const authGuard = (
  param: paramInterface,
  context: contextInterface,
): boolean | GraphQLError => {
  if (!context) {
    return new GraphQLError("User is not authenticated", {
      extensions: { code: "UNAUTHENTICATED", http: { status: 500 } },
    });
  }
 
  if (!context.token) {
    return new GraphQLError("User is not authenticated", {
      extensions: { code: "UNAUTHENTICATED", http: { status: 500 } },
    });
  }
 
  if (!context.token.fdlst_private_userId) {
    return new GraphQLError("User is not authenticated", {
      extensions: { code: "UNAUTHENTICATED", http: { status: 500 } },
    });
  }
 
  if (context.token.fdlst_private_userId !== param.user_id) {
    return new GraphQLError("User is not authorized", {
      extensions: { code: "UNAUTHORIZED", http: { status: 500 } },
    });
  }
 
  return true;
};