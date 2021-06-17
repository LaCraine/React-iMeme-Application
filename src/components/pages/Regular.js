import React from "react";
import MemeTemplate from ".././MemeTemplate";
import ".././MemeTemplate.css";

const Regular = (props) => {
    
  const regularPageAllMemes = props.memesDatabase.map((meme) => (

    <MemeTemplate
      key={meme.id}
      meme={meme}
      likeCounter={props.likeCounter}
      dislikeCounter={props.dislikeCounter}
    />
  ));

  return (
    <React.Fragment>
      <div>
        {regularPageAllMemes}
      </div>
    </React.Fragment>
  );
};

export default Regular;
