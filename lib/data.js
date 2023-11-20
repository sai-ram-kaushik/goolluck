import { gql, GraphQLClient } from "graphql-request";

export const getStockMarketTraining = async () => {
  const endPoint =
    "https://api-ap-south-1.hygraph.com/v2/clp79zdsf1p7601ufg4io0qri/master";

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
