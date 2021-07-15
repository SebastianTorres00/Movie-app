import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
    render() {
        return (
            <div className="div-div-fav">
                <h2 className="h2-title">Películas Favoritas</h2>
                <ul>
                    {/* Aqui deberias poner tu lista de peliculas! */
                        this.props.moviesFavourites.map((movie) =>
                            <div key={movie.imdbID} className="div-fav">
                                <button onClick={() => this.props.removeMovieFavorite({ id: movie.imdbID })} className="btn-fav">X</button>
                                <Link to={`/movie/${movie.imdbID}`} className="link-fav"> {movie.Title} </Link>
                            </div>
                        )
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moviesFavourites: state.moviesFavourites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
