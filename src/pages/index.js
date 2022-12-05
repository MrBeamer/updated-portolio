import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Main from "../components/Main";

const IndexPage = () => {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Skills />
      </Main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael Beamer | Frontend Engineer</title>;
    <meta
      name="description"
      content="Frontend Engineer based in Berlin. Building websites, small web applications, or anything in between."
    />
  </>
);
