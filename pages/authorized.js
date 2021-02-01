import Loading from "../components/loading";
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
  //console.log(data);
  //console.log(data.msg);
  if (data.msg) {
    loggedIn = true;
  }
  if (loggedIn) {
    Router.push("/");
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
  } else {
    //console.log("redirect");
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
