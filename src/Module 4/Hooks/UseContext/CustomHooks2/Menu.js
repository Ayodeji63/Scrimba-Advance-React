import React from "react";
import Toggler from "./Toggler";
import useToggler from "./useToggler";
function Menu(props) {
  const [on, toggle] = useToggler(true)
   return (
    <div>
      <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
      <nav style={{ display: on ? "block" : "none" }}>
        <h6>Signed in as Coder123</h6>
        <p>
          <a>Your Profile</a>
        </p>
        <p>
          <a>Your Repositories</a>
        </p>
        <p></p>
        <p>
          <a>Your Gists</a>
        </p>
      </nav>
    </div>
  );
}

export default Menu;
