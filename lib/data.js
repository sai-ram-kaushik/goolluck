import { gql, GraphQLClient } from "graphql-request";

export const getStockMarketTraining = async () => {
  const endPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

  const graphQLClient = new GraphQLClient(endPoint);

  const query = gql`
    {
      stockMarketTrainings {
        title
        id
        time
        price
      }
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

export const stockMarketCourses = async (slug) => {
  const query = gql`
    query GetStockMarketCourseDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};