<template>
    <div class="home">
        <Hero
                v-if="movies"
                :quote="randomQuote"
                :image="featuredMovie.image"
                :tabletImage="featuredMovie.tabletImage"
                :mobileImage="featuredMovie.mobileImage"
        />
        <div class="grid-x">
            <div class="cell medium-4 large-3"></div>
            <div class="cell medium-4 large-3"><card :title="movies[0].title" count="01" :image="'https://image.tmdb.org/t/p/w780' + movies[0].backdrop_path"/></div>
            <div class="cell medium-4 large-3"><card :title="movies[1].title" count="02" :image="'https://image.tmdb.org/t/p/w780' + movies[1].backdrop_path"/></div>
            <div class="cell medium-4 large-3"><card :title="movies[2].title" count="03" :image="'https://image.tmdb.org/t/p/w780' + movies[2].backdrop_path"/></div>
        </div>
    </div>
</template>

<script>
    import quotes from "../assets/json/bad-movies"
    import axios from "axios"
    import Hero from '../components/Hero.vue'
    import Card from '../components/Card.vue'

    export default {
        name: 'Home',
        components: {
            Hero,
            Card
        },
        data () {
            return {
                movies: [],
                quotes: quotes
            }
        },
        mounted () {
            axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=83d3415a37a96ef11c1ae22b98c556da&language=en-US&page=1')
                .then(response => (this.movies = response.data.results))
        },
        computed: {
            featuredMovie () {
                let random = Math.floor(Math.random() * this.movies.length)
                return {
                    "image": 'https://image.tmdb.org/t/p/original' + this.movies[random].backdrop_path,
                    "tabletImage": 'https://image.tmdb.org/t/p/w1280' + this.movies[random].backdrop_path,
                    "mobileImage": 'https://image.tmdb.org/t/p/w780' + this.movies[random].backdrop_path,
                    "title": this.movies[random].title,
                }
            },
            randomQuote () {
                let random = Math.floor(Math.random() * this.quotes.length)
                return this.quotes[random].quote
            }
        }
    }
</script>
