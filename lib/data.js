import { gql, GraphQLClient } from "graphql-request";

export const getStockMarketTraining = async () => {
  const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

  const graphQLClient = new GraphQLClient(endPoint);

  const query = gql`
    {
      stockMarketCourses {
        title
        desc
        slug
        backDrop {
          url
          id
          width
          height
        }
      }
    }
  `;

  return graphQLClient.request(query);
};