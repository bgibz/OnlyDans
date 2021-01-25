export default function Body({ children, pageName }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-8 p-6">
        <div className="sm:col-start-2 sm:col-span-3 content-center">
          <h1 className="font-bold leading-8">{pageName}</h1>
        </div>
        <div className="sm:col-start-2 sm:col-span-6">
          <hr></hr>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="sm:col-start-2 sm:col-span-3 content-center">
          {children}
        </div>
      </div>
    </>
  );
}
