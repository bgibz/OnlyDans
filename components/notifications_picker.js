import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUnlock,
  faCreditCard,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Notifications_Picker() {
  const [activeView, setActiveView] = useState("all");

  return (
    <div className="flex flex-row justify-between px-2">
      <div id="All" className="text-blue-400">
        <a className="cursor-pointer">
          <FontAwesomeIcon icon={faGlobe} />
          <span className="hide-mobile"> All</span>
        </a>
      </div>
      <div id="Subscribed">
        <a className="cursor-pointer">
          <FontAwesomeIcon icon={faUnlock} />
        </a>
        <span className="hide-mobile"> Subscribed</span>
      </div>
      <div id="Tipped">
        <a className="cursor-pointer">
          <FontAwesomeIcon icon={faCreditCard} />
        </a>
        <span className="hide-mobile"> Tipped</span>
      </div>
      <div id="Promotions">
        <FontAwesomeIcon icon={faTags} />
        <a className="cursor-pointer">
          <span className="hide-mobile"> Promotions</span>
        </a>
      </div>
    </div>
  );
}
