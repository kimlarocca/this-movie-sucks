<template>
    <div class="card" :style="{ backgroundImage: `url('${image}')` }">
        <div v-if="count" class="count">{{count}}</div>
        <div v-if="title" class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            title: String,
            image: String,
            count: String
        }
    }
</script>

<style lang="scss">
    @import "src/assets/scss/variables";

    .card {
        width: 100%;
        height: 100vh * .25;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;

        .title {
            text-shadow: $text-shadow;
            position: absolute;
            bottom: 1.5rem;
            left: 2rem;
            color: $white;
            font-weight: 900;
            font-size: 1.5rem;
            line-height: 1.5rem;
            width: 50%;
        }

        .count {
            text-shadow: $text-shadow;
            position: absolute;
            top: -.5rem;
            right: .5rem;
            color: $white;
            font-weight: 900;
            font-size: 2.5rem;
        }
    }
</style>
