import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainPage from "./MainPage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MainPage />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
