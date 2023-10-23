import React from "react";
import os2 from "../assets/Our Special/Os1.png";

function Menu() {
  return (
    <>
      <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
        <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
        <div class="flex justify-center -mt-8">
          <img
            src={os2}
            class="rounded-full border-solid border-white border-2 -mt-3"
          />
          {/* <img src={os2} class="rounded-full border-solid border-white border-2 -mt-3">		 */}
        </div>
        <div class="text-center px-3 pb-6 pt-2">
          <h3 class="text-white text-sm bold font-sans">Olivia Dunham</h3>
          <p class="mt-2 font-sans font-light text-white">
            Hello, i'm from another the other side!
          </p>
        </div>
        <div class="flex justify-center pb-3 text-white">
          <div class="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Photos</span>
          </div>
          <div class="text-center">
            <h2>42</h2>
            <span>Friends</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
