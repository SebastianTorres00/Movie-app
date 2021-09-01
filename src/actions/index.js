export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const ALERT = 'ALERT';
export const addMovieFavorite = (payload) => (dispach) => {
    dispach({
        type: ALERT,
        payload: alert("Has agregado una pelicula a favoritos")
    })

    dispach({
        type: ADD_MOVIE_FAVORITE,
        payload
    })
}

export function getMovies(name) {
    return function (dispatch) {
        return fetch('http://www.omdbapi.com/?apikey=20e5b2a8&s=' + name)
            .then(r => r.json())
            .then(json => dispatch({
                type: GET_MOVIES,
                payload: json,
            }))
    }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch('http://www.omdbapi.com/?apikey=20e5b2a8&i=' + id)
            .then(r => r.json())
            .then(json => dispatch({
                type: GET_MOVIE_DETAIL,
                payload: json,
            }))
    }
}
export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}
