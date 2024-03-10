//React
import React from "react";

//Components
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <TopNavigation />
      {children}
      <Footer />
    </div>
  );
}
