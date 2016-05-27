// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"
import Player from './player'
import socket from "./socket"
import Video from "./video";

let video = document.getElementById("video")

if(video) {
  Player.init(video.id, video.getAttribute("data-player-id"), () => {
    console.log("player ready!")
  })
}

Video.init(socket, document.getElementById("video"))

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".
