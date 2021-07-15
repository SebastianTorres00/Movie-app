import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';


export class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        console.log(props)
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getMovies(this.state.title)
    }

    render() {
        const { title } = this.state;

        return (
            <div>
                {/* <h2>Buscador</h2> */}
                <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
                    {/* <label className="label" htmlFor="title">Película: </label> */}
                    <input
                        type="text"
                        id="title"
                        autoComplete="off"
                        value={title}
                        onChange={(e) => this.handleChange(e)}
                        className="input"
                        placeholder="Batman..."
                    />
                    <button type="submit" className="btn-form">BUSCAR</button>
                </form>
                <ul className="ul-movie">
                    {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
                        this.props.movies.map((movie) =>
                            <div key={movie.imdbID} className='pelicula'>
                                <div className="second-pelicula">
                                    <Link to={`/movie/${movie.imdbID}`} className='pelicula-title'> {movie.Title} </Link>
                                    <Link to={`/movie/${movie.imdbID}`}>
                                        <img src={`${movie.Poster}`} alt="" className="pelicula-img" />
                                    </Link>


                                    <button className='fav' onClick={() =>
                                        this.props.addMovieFavorite(movie)}>+</button>

                                </div>
                            </div>
                        )}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

        movies: state.moviesLoaded

    };
}


function mapDispatchToProps(dispatch) {
    return {
        addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
        getMovies: title => dispatch(getMovies(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

