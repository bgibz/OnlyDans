import Layout from "../components/layout";
import Loading from "../components/loading";
import Notifications_Picker from "../components/notifications_picker";
import Router from "next/router";
import Image from "next/image";
import useSWR from "swr";

export default function Home({ allPostsData }) {
  const { data, revalidate } = useSWR("/api/me", async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <Loading></Loading>;
  let loggedIn = false;
  console.log(data);
  console.log(data.msg);
  if (data.msg) {
    loggedIn = true;
  }
  loggedIn = true;
  if (loggedIn) {
    return (
      <Layout pageName="Notifications">
        <Notifications_Picker></Notifications_Picker>
        <div className="py-8 px-2">
          <h4 className="text-gray-400">No New Notifications!</h4>
        </div>
      </Layout>
    );
  } else {
    console.log("redirect");
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
