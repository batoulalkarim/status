import React from 'react';
import star from "../../images/star.png";

function Stars({size, rating}) {

  return (
    <div className="rating-stars">
      <img src={star} alt="star" height={size} width={rating>=1 ? size : size*rating} />
      <img src={star} alt="star" height={size} width={rating>=2 ? size : size*(Math.max(0,(rating-1)))} />
      <img src={star} alt="star" height={size} width={rating>=3 ? size : size*(Math.max(0,(rating-2)))} />
      <img src={star} alt="star" height={size} width={rating>=4 ? size : size*(Math.max(0,(rating-3)))} />
      <img src={star} alt="star" height={size} width={rating>=5 ? size : size*(Math.max(0,(rating-4)))} />
    </div>
  )
}

export default Stars;