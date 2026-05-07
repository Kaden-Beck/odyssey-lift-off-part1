import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Track title"
    title: String!
    "Track Author and their information"
    author: Author!
    "URL string to the track's thumbnail image"
    thumbnail: String
    "Length of the track"
    length: Int
    "Count of modules in the track"
    modulesCount: Int
  }

  "Authors are individuals who develop the tracks"
  type Author {
    id: ID!
    "Author name"
    name: String!
    "URL string to the author's photo"
    photo: String
  }
`;
