import React from "react";
import "./MemeTemplate.css";

export default function MemeTemplate(props) {
  const { id, title, upvotes, downvotes, image } = props.meme;

  return (
    <section>
      <h1>
        <span className="title">{title}</span>
      </h1>
      <img src={image} alt="test" />
      <main>
        <div className="middle-wrapper">
          <div className="like-wrapper">
            <button className="like-button" onClick={() => props.likeCounter(id)}>
              <span className="like-counter">{upvotes}</span>
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button className="like-button" onClick={() => props.dislikeCounter(id)}>
              <span className="like-counter">{downvotes}</span>
              <i className="fas fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
