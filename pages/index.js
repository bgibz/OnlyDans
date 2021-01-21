import Layout from "../components/layout";
import Feed from "../components/feed";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import cookie from "js-cookie";
import useSWR from "swr";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  const { data, revalidate } = useSWR("/api/me", async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  console.log(data);
  if (data.userName) {
    loggedIn = true;
  }
  if (loggedIn) {
    return (
      <Layout pageName="Home">
        <Feed allPostsData={allPostsData}></Feed>
      </Layout>
    );
  } else {
    return <Link href="/login">Login</Link>;
  }
}
