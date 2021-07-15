import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }


    render() {
        return (
            <div className="movie-detail-all-two">
                <div className="movie-detail-all">
                    <div className="movie-detail">
                        <h1 className="detail-h1">Detalles :</h1>
                        <img src={`${this.props.movies.Poster}`} alt="" className="img-details" />
                        <div className="details-all">
                            <h1 className="h1-title">Titulo : {this.props.movies.Title}</h1>
                            <h3 className="h3-año">Año de salida : {this.props.movies.Year}</h3>
                            <h3 className="h3-actores">Actores : {this.props.movies.Actors}</h3>
                            <h3 className="h3-premios">Premios : {this.props.movies.Awards}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (movie) => dispatch(getMovieDetail(movie))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);