import React, { useRef } from "react";

export default function ProjectImage({
  image,
  className = "",
  loading = "lazy",
  zoomable = true,
  caption = image.caption,
}) {
  const dialogRef = useRef(null);
  const imageClassName =
    image.fit === "contain" ? "case-image--contain" : "";

  return (
    <figure className={`case-image ${imageClassName} ${className}`.trim()}>
      {zoomable ? (
        <button
          className="case-image__trigger"
          type="button"
          aria-label={`View larger image: ${image.alt}`}
          onClick={() => dialogRef.current?.showModal()}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={loading}
            decoding="async"
          />
        </button>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={loading}
          decoding="async"
        />
      )}
      {caption && <figcaption>{caption}</figcaption>}
      {zoomable && (
        <dialog
          ref={dialogRef}
          className="case-image__lightbox"
          aria-label={`Expanded image: ${image.alt}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.currentTarget.close();
            }
          }}
        >
          <form method="dialog">
            <button className="case-image__close" type="submit">
              Close
            </button>
          </form>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            decoding="async"
          />
          {caption && <p>{caption}</p>}
        </dialog>
      )}
    </figure>
  );
}
