import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/lazy";
//import { Player, BigPlayButton } from "video-react";

export default function Feed({ allPostsData }) {
  return (
    <div className="h-screen flex flex-col">
      <div>
        {allPostsData.map(
          ({ author, user, date, media, data, mediaformat, content }) => (
            <div className="w-7/8 p-3 pl-0" key={data.id}>
              <div className="flex justify-between">
                <div>
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
                  <p className="mb-6">{content}</p>
                  {mediaformat == "jpg" ? (
                    <div>
                      {" "}
                      <div>
                        <div className="flex border border-solid border-grey rounded object-center bg-gray-200">
                          <div className="object-center p-3 post_img_wrap">
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
                <div className="pb-2">
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-grey-dark hover:no-underline hover:text-blue-light"
                    >
                      <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-grey-dark hover:no-underline hover:text-red"
                    >
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </a>
                  </span>
                  <span className="mr-8">
                    <a
                      href="#"
                      className="text-grey-dark hover:no-underline hover:text-teal"
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

function renderMedia(media) {
  return media ? <h1>Found Media</h1> : <h1>Null Media</h1>;
}

/**
 * TODO:
 *
 * Map Posts to a post component
 * Author, Date, Body, Media
 */
