import Layout from "../components/newLayout";
import Feed from "../components/feed";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout pageName="Home">
      <Feed allPostsData={allPostsData}></Feed>
    </Layout>
  );
}
