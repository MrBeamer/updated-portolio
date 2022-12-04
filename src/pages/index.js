import * as React from "react";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <Header />
      <main></main>
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
