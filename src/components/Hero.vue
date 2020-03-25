<template>
    <section class="hero">
        <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>
        <div class="tablet-background" :style="{ backgroundImage: `url('${tabletImage}')` }"></div>
        <div class="mobile-background" :style="{ backgroundImage: `url('${mobileImage}')` }"></div>
        <div class="content">
            <div class="quote">{{ quote }}</div>
            <form>
                <label for="search" class="hide-ally-element">search movies by keyword</label>
                <input id="search" placeholder="search for movies"/>
            </form>
        </div>
        <div class="shit">shit</div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
        props: {
            quote: String,
            image: String,
            tabletImage: String,
            mobileImage: String
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/variables";

    $padding-mobile: 1rem;
    $margin: 1rem;
    $content-max-width: 768px;
    $color: white;

    .hero {
        display: flex;
        height: 100vh * .75;
        width: 100%;
        position: relative;
        overflow: hidden;

        .desktop-background,
        .tablet-background,
        .mobile-background {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }

        .desktop-background {
            @media all and (max-width: $breakpoint-tablet) {
                display: none;
            }
        }

        .tablet-background {
            display: none;
            @media all and (max-width: $breakpoint-tablet) {
                display: block;
            }
        }

        .mobile-background {
            display: none;
            @media all and (max-width: $breakpoint-mobile) {
                display: block;
            }
        }

        .content {
            width: 100%;
            max-width: $breakpoint-mobile;
            z-index: 10;
            text-align: center;
            align-self: center;
            margin: 0 auto;

            @media all and (max-width: $breakpoint-mobile) {
                background-size: contain;
                padding: $padding-mobile;
            }

            .quote {
                color: $white;
                text-shadow: $text-shadow;
                font-size: 2rem;
                font-weight: 900;
                margin-bottom: 1rem;
            }

            input {
                border: solid 2px $white;
                box-shadow: 0px 0px 1rem #222;
                padding: .75rem 1.25rem;
                color: $white;
                border-radius: 3rem;
                font-size: 1rem;
                width: 320px;
                background: rgba(0,0,0,.5) url("../assets/images/search.svg") no-repeat center right 2rem;
                background-size: 20px;

                &:focus {
                    outline: none;
                    box-shadow: 0px 0px 0.5rem #0066ff;
                }

                &::placeholder {
                    color: $white;
                    text-shadow: $text-shadow;
                    font-size: 1rem;
                }
            }
        }

        .shit {
            position: absolute;
            bottom: -8.5rem;
            left: -1rem;
            font-family: $secondary-font-family;
            font-weight: 900;
            font-size: 16rem;
            color: $color;
            z-index: 10;
            letter-spacing: -.5rem;
        }
    }
</style>
