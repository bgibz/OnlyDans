export default function Inbox() {
  return (
    <div className="grid grid-cols-3">
      <div className="border-solid border-l-2 border-t-2 border-b-2 border-opacity-40 border-blue-200 rounded ">
        <div className="m-4">
          <p> [img] Dan @Dan</p>
          <p> Text preview...</p>
        </div>
      </div>
      <div className="col-span-2 border-solid border-2 border-opacity-40 border-blue-200 rounded">
        <div className="text-left h-36 m-4">
          <div className="bg-blue-200 bg-opacity-75 rounded-lg m-4">
            <p className="ml-8">
              {"  "}
              What's up big boy? Like what you see? I have some steamy new posts
              coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
