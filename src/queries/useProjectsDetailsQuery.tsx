//React
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useProjectsDetailsQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "projectsData" } }) {
        nodes {
          name
          childrenJson {
            data {
              title
              screenshotsNum
              screenshots
              shortDescription
              description
              skills
              haveRepo
              haveWebsite
              repo
              website
            }
          }
        }
      }
    }
  `);
  return data.allFile.nodes[0].childrenJson[0].data;
};

export default useProjectsDetailsQuery;
