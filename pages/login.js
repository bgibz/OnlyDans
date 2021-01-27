import React, { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import Loading from "../components/loading";
import useSWR from "swr";

export const siteTitle = "OnlyDans";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      setLoginError("Please provide a username and password");
      return;
    }
    //call api
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(r => {
        return r.json();
      })
      .then(data => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set("token", data.token, { expires: 1 });
          if (cookie.get("token")) {
            router.push("/");
            console.log("Welcome to OnlyDans");
          } else {
            setLoginError("Something went wrong, please try to login again.");
          }
          //Router.push("/");
        }
      })
      .catch(e => {
        setLoginError("Error - Unable to complete login");
      });
  }

  const { data, revalidate } = useSWR("/api/hello", async function(args) {
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
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="The best place on the 'net for Dan content"
          />
          <meta name="og:title" content={siteTitle} />
          <script
            src="https://kit.fontawesome.com/fbb51231af.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <main>
          <div className="px-4">
            <div className="container mx-auto px-4">
              <div
                className="flex flex-row"
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/OnlyDans.png"
                  width={404}
                  height={147}
                ></Image>
              </div>
              <div className="flex flex-row pb-4">
                <p className="text-center w-full">
                  Login to get the latest from Dan!
                </p>
              </div>
              <hr />
              <form onSubmit={handleSubmit} className="pt-2">
                <div className="sm:grid sm:grid-cols-3 sm:gap-2">
                  <div className="sm:col-start-2">
                    <div className="flex flex-row sm:w-full">
                      <div className="flex-row px-10 py-2 w-full">
                        <input
                          name="username"
                          type="text"
                          value={username}
                          placeholder="Username"
                          onChange={e => setUser(e.target.value)}
                          className="border border-gray-300 rounded-md mx-2 p-2 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row sm:w-full">
                      <div className="flex-row px-10 py-2 w-full">
                        <input
                          name="password"
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                          className="border border-gray-300 rounded-md mx-2 p-2 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full flex-row py-2">
                        <div className="px-10">
                          <button className="bg-blue-400 text-gray-100 m-2 p-4 rounded-md font-display focus:outline-none w-full focus:shadow-outline hover:bg-blue-600">
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      {loginError && (
                        <p style={{ color: "red" }}>{loginError}</p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return <Loading></Loading>;
  }
};

export default Login;
