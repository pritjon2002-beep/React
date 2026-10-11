import { useState } from "react";

export default function LikeButton() {
  const [IsLiked, setIsLiked] = useState(false);

  function toggle() {
    setIsLiked(!IsLiked);
    console.log(IsLiked);
    
  }

  let likeStyle = {color:"red"};

  return (
    <div>
      <p onClick={toggle}>
        {" "}
        {IsLiked ? 
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        : 
          <i className="fa-regular fa-heart"></i>
        }
      </p>
    </div>
  );
}
