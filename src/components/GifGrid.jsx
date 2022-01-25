import React from "react";
import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounce animate__repeat-2">
        {category}
      </h3>
      {loading && (
        <p className="card animate__animated animate__flash animate__repeat-2">
          Loading...
        </p>
      )}
      <div className="card-grid ">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
