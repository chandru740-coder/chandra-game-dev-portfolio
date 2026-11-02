import React from "react";

export default function ImageSlot({
  name,
  label,
  hint,
  alt,
  className = "",
}) {
  return (
    <figure
      className={`image-slot ${className}`.trim()}
      data-slot={name}
      data-alt={alt}
    >
      <div className="image-slot__placeholder" aria-hidden="true">
        <span>{label}</span>
        <span>{hint}</span>
      </div>
    </figure>
  );
}
