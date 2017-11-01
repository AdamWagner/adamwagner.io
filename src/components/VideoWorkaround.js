import React from "react";

function objectToStyle(obj) {
  return Object.entries(obj)
               .reduce((styleString, entry) => (
                  styleString + entry[0] + ':' + entry[1] + ';'
               ), '');
}

const VideoWorkaround = ({ src, style }) => (
  <div dangerouslySetInnerHTML={{ __html: `
    <video
      style=${objectToStyle(style)}
      muted
      autoplay
      playsinline
      src="${src}"
    />
  ` }}
  />
);


export default VideoWorkaround;
