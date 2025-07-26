import React from "react";

export const ImageDisplay = ({
  src,
  alt = "Image preview",
  className = "",
  style = {},
  placeholder = "https://blog.photobucket.com/hubfs/upload_pics_online.png", // fallback placeholder
}) => {
  return (
    <img
      src={src || placeholder}
      alt={alt}
      className={`object-cover ${className}`}
      style={style}
      draggable={false}
    />
  );
};
