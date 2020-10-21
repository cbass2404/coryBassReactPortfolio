import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem(props) {
  // Data that we'll need
  // - background images: thumb_image_url
  // - logo: logo_url
  // - description: description
  // - id: id

  const { id, description, thumb_image_url, logo_url } = props.item;

  return (
    <div>
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
