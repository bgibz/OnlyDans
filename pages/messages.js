import Layout from "../components/layout";
import messageBox from "../components/messageBox";
import Loading from "../components/loading";
import Router from "next/router";
import Image from "next/image";
import useSWR from "swr";
import MessageBox from "../components/messageBox";

export default function Messages() {
  const { data, revalidate } = useSWR("/api/me", async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <Loading></Loading>;
  let loggedIn = false;
  //console.log(data);
  if (data.msg) {
    loggedIn = true;
  }
  if (loggedIn) {
    return (
      <Layout pageName="Messages">
        <MessageBox></MessageBox>
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
