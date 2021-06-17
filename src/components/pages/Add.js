import React from "react";

export default function Add() {
  return (
    <React.Fragment>
      <div className="add-meme-wrapper">
        <div className="add-meme-text">
          You have a really awesome idea for your own meme and you would like to
          show it to the world, right?{" "}
        </div>
        <div className="add-meme-text">
          You can make your creativity a reality by purchasing the premium
          package for just $79.99, which will allow you to create unlimited
          memes - both bad and good.
        </div>
        <div className="add-meme-text">
          So don't waste your time and contact us!*
        </div>
        <div className="add-meme-text-notification">*Actually, you can't because this option is not available and probably
        never will be, but we appreciate your interest.</div>
      </div>
    </React.Fragment>
  );
}
