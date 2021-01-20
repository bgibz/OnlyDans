import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/lazy";
//import { Player, BigPlayButton } from "video-react";

export default function Feed({ allPostsData }) {
  function onHeartClick(icon, id) {
    let search = icon + id;
    let target = document.getElementById(search);
    if (target.style.color === "red") {
      target.style.color = "black";
      target = document.getElementById("likes" + id);
      target.innerHTML = parseInt(target.innerHTML) - 1;
    } else {
      target.style.color = "red";
      target = document.getElementById("likes" + id);
      target.innerHTML = parseInt(target.innerHTML) + 1;
    }
  }

  function onShareClick(id) {
    if (navigator.share) {
      navigator
        .share({
          id: id,
          text: "Post from OnlyDans",
          url: "www.google.ca"
        })
        .then(() => console.log("Success!"))
        .catch(e => console.log("Error Sharing", e));
    } else {
      console.log("Unable to share using this browser");
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div>
        {allPostsData.map(
          ({ author, user, date, media, data, mediaformat, content }) => (
            <div
              className="w-7/8 sm:p-3 sm:pl-0"
              key={data.id}
              id={"dan" + data.id}
            >
              <div className="flex justify-between">
                <div className="pl-2 sm:pl-0">
                  <span className="font-bold">
                    <a href="#" className="text-black">
                      {author}
                    </a>
                  </span>{" "}
                  <span className="text-grey-dark">{user}</span>{" "}
                  <span className="text-grey-dark">&middot;</span>{" "}
                  <span className="text-grey-dark">{date}</span>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="mb-6 pl-2 sm:pl-0">{content}</p>
                  {mediaformat == "jpg" ? (
                    <div>
                      {" "}
                      <div>
                        <div className="flex border border-solid border-grey rounded object-center bg-gray-200">
                          <div className="object-center p-1 post_img_wrap">
                            <img
                              src={media}
                              height="50%"
                              width="50%"
                              alt="image attached to post"
                              className="post_img"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : mediaformat == "mp4" ? (
                    <div>
                      {" "}
                      <div>
                        <div className="flex border border-solid border-grey rounded object-center bg-gray-200">
                          <div className="player-wrapper">
                            <ReactPlayer
                              className="react-player"
                              url={media}
                              width="100%"
                              height="100%"
                              controls
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
                <div className="pb-2 sm:pl-0 pl-2">
                  <span className="mr-8">
                    <a
                      href={void 0}
                      onClick={() => onHeartClick("heart", data.id)}
                      className="text-grey-dark hover:no-underline hover:text-red"
                      id={"heart" + data.id}
                    >
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>{" "}
                    </a>
                    <span id={"likes" + data.id}>{data.likes}</span>
                  </span>
                  <span className="mr-8">
                    <a
                      href={void 0}
                      onClick={async () => onShareClick(data.id)}
                      className="text-grey-dark hover:no-underline hover:text-teal shareIcon"
                    >
                      <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                    </a>
                  </span>
                </div>
              </div>
              <hr></hr>
            </div>
          )
        )}
      </div>
    </div>
  );
}
