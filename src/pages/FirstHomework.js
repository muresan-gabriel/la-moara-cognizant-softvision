import React from "react";

const FirstHomework = () => {
  return (
    <section id="main-container">
      <h1>Your favourite pieces of pixel art in one place.</h1>
      <div class="pixel-art-container">
        <div class="pixel-art-box">
          <div class="img-container">
            <img src="img/woodland-inn.webp" alt="Woodland Inn" />
          </div>
          <h1>Woodland Inn</h1>
          <span>Author: Bagrash</span>
          <span>Posted on December 7, 2019</span>
          <button
            class="btn btn-external"
            onclick="javascript:window.open('https://www.reddit.com/r/PixelArt/comments/e7duot/oc_woodland_inn/')"
          >
            View Source
          </button>
        </div>
        <div class="pixel-art-box">
          <div class="img-container">
            <img
              src="old_first_course\homework_1\img\portal-asset.gif"
              alt="Portal Asset"
            />
          </div>
          <h1>Portal Asset</h1>
          <span>Author: RafaPixel</span>
          <span>Posted on April 26, 2022</span>
          <button
            class="btn btn-external"
            onclick="javascript:window.open('https://www.reddit.com/r/PixelArt/comments/uc25ud/a_new_portal_for_my_asset_pack/')"
          >
            View Source
          </button>
        </div>
        <div class="pixel-art-box">
          <div class="img-container">
            <img src="img/realistic-water.gif" alt="Realistic Water" />
          </div>
          <h1>Realistic Water</h1>
          <span>Author: RujiK</span>
          <span>Posted on September 27, 2019</span>
          <button
            class="btn btn-external"
            onclick="javascript:window.open('https://www.reddit.com/r/PixelArt/comments/uc25ud/a_new_portal_for_my_asset_pack/')"
          >
            View Source
          </button>
        </div>
        <div class="pixel-art-box">
          <div class="img-container">
            <img
              src="img/hyper-light-drifter.gif"
              height="200px"
              alt="Hyper Light Drifter"
            />
          </div>
          <h1>Hyper Light Drifter</h1>
          <span>Author: Journey_951</span>
          <span>Posted on August 25, 2018</span>
          <button
            class="btn btn-external"
            onclick="javascript:window.open('https://www.reddit.com/r/PixelArt/comments/9a95lb/hyper_light_drifter_fanart/')"
          >
            View Source
          </button>
        </div>
        <div class="pixel-art-box">
          <div class="img-container">
            <img src="img/three-flamingos.gif" alt="Three Flamingos" />
          </div>
          <h1>Three Flamingos</h1>
          <span>Author: v78</span>
          <span>Posted on January 12, 2022</span>
          <button
            class="btn btn-external"
            onclick="javascript:window.open('https://www.reddit.com/r/PixelArt/comments/s239lg/oc_three_flamingos_7_colors/')"
          >
            View Source
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstHomework;
