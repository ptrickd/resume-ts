import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useImagesQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "screenshot" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);
  return data.allFile.nodes;
};

export default useImagesQuery;
