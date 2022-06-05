import React from "react";
import Header from "./assets/img/side-content-header.png"

function SideContent() {
  return (
    <div id="side-content">
      <div>
        <div></div>
        <img src={Header}></img>
        <h2>Website Redesign</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
          est aperiam cumque cum nam in, amet odio rerum sequi libero repellat
          error enim! Ad dicta amet odit velit molestiae!
        </p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default SideContent;
