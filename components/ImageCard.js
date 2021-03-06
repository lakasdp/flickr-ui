import React from 'react'
import Image from 'next/image';

export default function ImageCard({ 
  index, 
  title="No Title", 
  url,
  author }) {
  return (
    <div className="image-card-component" key={index}>
      <div className="card-asset-wrapper">
        { url ? <Image src={url} height="200" width="288" placeholder="/img-placeholder.png"/> : "" }
      </div>

      <div className="card-info-wrapper">
        <div className="card-title">{title}</div>
        <div className="card-author">
          <p className="author-text">By: {author} </p>
        </div>
      </div>
    </div>
  )
}