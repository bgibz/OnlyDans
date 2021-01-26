export default function Message({ text, user }) {
  let msgClass = "bg-gray-300 bg-opacity-75 rounded-lg m-2 w-3/4";
  if (user === "Dan") {
    msgClass = "bg-blue-300 bg-opacity-75 rounded-lg m-2 w-3/4";
  }

  return (
    <div className="text-left m-2 flex flex-row">
      <div className="flex-none pt-1">
        <img
          alt="Avatar"
          src="/images/profile.png"
          className="msg-img inline-block mx-2"
        ></img>
      </div>
      <div className="flex-initial">
        <div className={msgClass}>
          <p className="sm:ml-8 ml-4">
            {"  "}
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
