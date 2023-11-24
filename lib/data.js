import { gql, GraphQLClient } from "graphql-request";

export const getStockMarketTraining = async () => {
  const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_API

  const graphQLClient = new GraphQLClient(endPoint);

  const query = gql`
    {
      stockMarketTrainings {
        title
        id
        date
        time
        price
      }
      stockMarketCourses {
        title
        desc
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
