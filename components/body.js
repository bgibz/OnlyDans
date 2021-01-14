export default function Body({ children, pageName }) {
  return (
    <>
      <div className="grid grid-cols-8 p-6">
        <div className="col-start-2 col-span-3 content-center">
          <h1 className="font-bold leading-8">{pageName}</h1>
        </div>
        <div className="col-start-2 col-span-6">
          <hr></hr>
        </div>
      </div>
      <div className="grid grid-cols-5 h-full">
        <div className="col-start-2 col-span-3">{children}</div>
      </div>
    </>
  );
}
