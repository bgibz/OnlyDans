import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faEnvelope,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="border-b bg-white grid grid-cols-5 grid-flow-col items-center sm:justify-between p-4 pb-0 shadow-lg pb-4 navigation">
        <div className="flex items-center justify-between mb-2 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <a
              className="no-underline text-grey-darkest hover:text-black"
              href="#"
            >
              <img
                className="object-contain h-12 w-auto"
                src="/images/OnlyDans.png"
              ></img>
            </a>
          </h1>
        </div>
        <div>
          <Link href="/">
            <a className="cursor-pointer">
              <FontAwesomeIcon icon={faHome} size="sm" />
              <span className="hide-mobile"> Home</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/notifications">
            <a className="cursor-pointer">
              <FontAwesomeIcon icon={faBell} />
              <span className="hide-mobile"> Notifications</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/messages">
            <a className="cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="hide-mobile"> Messages</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a className="cursor-pointer">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="hide-mobile"> About</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
