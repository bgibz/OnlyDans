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
      <header className="border-b md:grid grid-cols-5 grid-flow-col md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
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
            <a>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/notifications">
            <a>
              <FontAwesomeIcon icon={faBell} /> Notifications
            </a>
          </Link>
        </div>
        <div>
          <Link href="/messages">
            <a>
              <FontAwesomeIcon icon={faEnvelope} /> Messages
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
