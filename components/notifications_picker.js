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

  function triggerActive(keyWord) {
    setActiveView(keyWord);
  }

  return (
    <div className="flex flex-row justify-between px-2">
      <div id="All" className={activeView === "All" ? "text-blue-400" : ""}>
        <a
          href="#all"
          className="cursor-pointer"
          onClick={() => triggerActive("All")}
        >
          <FontAwesomeIcon icon={faGlobe} />
          <span className="hide-mobile"> All</span>
        </a>
      </div>
      <div
        id="Subscribed"
        className={activeView === "Subscribed" ? "text-blue-400" : ""}
      >
        <a
          href="#subscribed"
          className="cursor-pointer"
          onClick={() => triggerActive("Subscribed")}
        >
          <FontAwesomeIcon icon={faUnlock} />
          <span className="hide-mobile"> Subscribed</span>
        </a>
      </div>
      <div
        id="Tipped"
        className={activeView === "Tipped" ? "text-blue-400" : ""}
      >
        <a
          href="#tipped"
          className="cursor-pointer"
          onClick={() => triggerActive("Tipped")}
        >
          <FontAwesomeIcon icon={faCreditCard} />
          <span className="hide-mobile"> Tipped</span>
        </a>
      </div>
      <div
        id="Promotions"
        className={activeView === "Promotions" ? "text-blue-400" : ""}
      >
        <a
          href="#promotions"
          className="cursor-pointer"
          onClick={() => triggerActive("Promotions")}
        >
          <FontAwesomeIcon icon={faTags} />
          <span className="hide-mobile"> Promotions</span>
        </a>
      </div>
    </div>
  );
}
