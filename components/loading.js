import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-screen grid grid-rows-3 justify-center content-end">
      <div className="row-start-2">
        <Image
          src="/images/OnlyDans.png"
          width={606}
          height={220}
          className="animate-pulse"
        ></Image>
      </div>
    </div>
  );
}
