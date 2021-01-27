import Layout from "../components/layout";
import Loading from "../components/loading";
import Router from "next/router";
import Image from "next/image";
import useSWR from "swr";

export default function About() {
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
      <Layout pageName="About">
        <h2>OnlyDans is your number one resource for Dan content.</h2>
        <div className="py-4">
          <p>
            <strong>OnlyDans</strong> was created with Dan in mind. From day
            one, this project was built to give his legions of adoring fans the
            most unfiltered access to Dan's daily life. Whether he's wrangling
            wires in his big, heavy, coveralls, out on the town in his best
            dress sweats, or relaxing at the beach, OnlyDans allows Dan to
            connect with you. Browse Dan's latest posts, watch a video, or shoot
            Dan message. It's all possible with OnlyDans!
          </p>
        </div>
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
