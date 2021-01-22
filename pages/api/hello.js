import { delBasePath } from "next/dist/next-server/lib/router/router";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay(time) {
  await timeout(time);
  return "Hello";
}

export default async (req, res) => {
  await delay(3000);
  res.statusCode = 200;
  res.json({ msg: "Hello" });
};
