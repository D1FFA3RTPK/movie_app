import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return <div className="movie_container">
        <img className="movie_poster" src={poster} alt={title} title={title}/>
        <div className="movie_info">
            <h3 className="movie_title">{title}<span className="movie_title_year"> - {year}</span></h3>
        </div>
        <ul className="movie_genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="movie_genre">{genre}</li>
                })}
            </ul>
        <p className="movie_summary">{summary}</p>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;