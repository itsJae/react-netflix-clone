import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { movieId } = useParams();
  us;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
    </section>
  );
}

export default DetailPage;
