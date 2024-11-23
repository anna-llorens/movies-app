const fallbackImage = "https://via.placeholder.com/200x300?text=No+Image";

export const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackImage;
      }}
    />
  );
};
