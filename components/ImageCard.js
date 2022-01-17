import React from 'react'

export default function ImageCard({ imgUrl, imgTitle="Sample Photos", imgAuthor="Lakas D P", imgUpload="01-01-2021" }) {
  return (
    <div className="image-card-component">
      <div className="card-asset-wrapper"></div>

      <div className="card-info-wrapper">
        <div className="card-title">{imgTitle}</div>
        <div className="card-author-and-date">
          <p className="author-text">{imgAuthor}</p>
          <p className="date-text">{imgUpload}</p>
        </div>
      </div>
    </div>
  )
}
