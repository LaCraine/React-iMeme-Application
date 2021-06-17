import React from "react";
import MemeTemplate from ".././MemeTemplate";
import ".././MemeTemplate.css";

const Regular = (props) => {

  // filter only best memes based on up and down votes
  const topScoreMemes = props.memesDatabase.filter(
    (meme) => meme.upvotes + meme.downvotes > 5
  );

  const hotPageAllMemes = topScoreMemes.map((meme) => (
    <MemeTemplate
      key={meme.id}
      meme={meme}
      likeCounter={props.likeCounter}
      dislikeCounter={props.dislikeCounter}
    />
  ));

  return (
    <React.Fragment>
      <div>{hotPageAllMemes}</div>
    </React.Fragment>
  );
};

export default Regular;
