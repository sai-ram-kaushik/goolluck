import request, { gql, GraphQLClient } from "graphql-request";

const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getStockMarketTraining = async () => {
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

export const getStockMarketCourseDetails = async (slug) => {
  const graphQLClient = new GraphQLClient(endPoint);

  const query = gql`
    query getStockMarketCourseDetails($slug: String) {
      stockMarketCourses(where: { slug: $slug }) {
        title
        desc
        slug
        duration
        mode
        price
        requirement
        rewards
        backDrop {
          url
          id
          width
          height
        }
      }
      courseContents {
        courseTitle
        courseContentDetails
      }
    }
  `;

  const variables = {
    slug,
  };

  return graphQLClient.request(query, variables);
};
