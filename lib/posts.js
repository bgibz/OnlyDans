import fs from "fs";
import path from "path";
import matter from "gray-matter";

//const postsDirectory = path.join(process.cwd(), "danPosts");
const danDirectory = path.join(process.cwd(), "danPosts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(danDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(danDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    let format = "";
    if (matterResult.data.media) {
      let strings = matterResult.data.media.split(".");
      format = strings[1];
    }
    // Combine the data with the id
    return {
      id: matterResult.data.id,
      author: matterResult.data.author,
      user: matterResult.data.user,
      date: matterResult.data.date,
      media: matterResult.data.media,
      mediaformat: format,
      data: matterResult.data,
      content: matterResult.content
    };
  });
  //console.log(allPostsData);
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
