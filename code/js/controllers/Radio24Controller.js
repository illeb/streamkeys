"use strict";
(function() {
  var BaseController = require("BaseController");

  new BaseController({
    siteName: "Radio 24",
    playPause: "#btn#player-full .actions .play-onplay",
    playNext: "#player-full .actions #nextButton",
    playPrev: "#player-full .actions #prevButton",

    playState: "#btnplay.btn_big_play--pause",
    song: "#player-title",
    artist: "#player-abstract a",
    album: "#album_name a"
  });
})();
