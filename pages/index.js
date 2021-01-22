import Layout from "../components/layout";
import Feed from "../components/feed";
import { getSortedPostsData } from "../lib/posts";
import Loading from "../components/loading";
import Router from "next/router";
import Image from "next/image";
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
  if (!data) return <Loading></Loading>;
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
    Router.push("/login");
    return (
      <div className="h-screen w-screen grid grid-rows-3 justify-center content-end">
        <div className="row-start-2">
          <Image
            src="/images/OnlyDans.png"
            width={606}
            height={220}
            className="animate-none"
          ></Image>
        </div>
      </div>
    );
  }
}
