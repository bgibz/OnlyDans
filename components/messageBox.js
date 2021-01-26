import Message from "./message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function MessageBox() {
  function handleSubmitMsg(e) {
    e.preventDefault();
    console.log("Msg received");
  }

  return (
    <div className="grid sm:grid-cols-3 grid-cols-5 h-fill relative pr-2">
      <div>
        <div className="m-4 sm:flex sm:flex-row">
          <div className="flex-initial">
            <img
              alt="Avatar"
              src="/images/profile.png"
              className="profile-img inline-block mx-2"
            ></img>
          </div>
          <div className="flex-initial">
            <p className="pt-4 hide-mobile">
              <strong>Dan</strong>
            </p>
          </div>
          <div className="flex-initial"></div>
        </div>
      </div>
      <div className="sm:col-span-2 col-span-4 border-solid border-2 border-opacity-40 border-blue-600 rounded relative bg-blue-50">
        <Message
          text="What's up baby? I have some steamy new
                posts coming soon. &#128521; &#x1F609;"
        ></Message>
        <Message text="I can't wait for you to see what I'm cooking up 👨‍🍳🔥🍆"></Message>
        <Message text="Had myself a day!😤 Changed so many lightbulbs out there. Now I'm ready to turn something else on &#x1F609;"></Message>

        <form
          className="absolute bottom-0 left-0 w-full flex"
          onSubmit={handleSubmitMsg}
        >
          <input className="block text-blue-600 bg-blue-200 border-2 border-blue-200 rounded-full h-12 w-3/4 p-2"></input>
          <button className="rounded-full bg-blue-600 h-12 w-12 absolute bottom-0 right-1">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-white mr-1"
            ></FontAwesomeIcon>
          </button>
        </form>
      </div>
    </div>
  );
}
