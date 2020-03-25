import axios from 'axios'

export default {
    getPopularMovies: params => axios.get('https://api.themoviedb.org/3/movie/popular?api_key=83d3415a37a96ef11c1ae22b98c556da&language=en-US&page=1', { params })
}
