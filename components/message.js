export default function Message({ text }) {
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
        <div className="bg-blue-300 bg-opacity-75 rounded-lg m-2 w-3/4">
          <p className="ml-8">
            {"  "}
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
