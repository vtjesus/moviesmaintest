<template>
  <div class="slider-wrapper">
    <Typography tag="h5">{{ title }}</Typography>

    <Loader v-if="loading" />
    <Typography v-else-if="error">{{ error }}</Typography>
    <div v-else class="carousel-wrapper">
      <carousel
        :items-to-show="6"
        :items-to-scroll="6"
        :wrap-around="false"
        :snap-align="'start'"
        :transition="500"
        class="custom-carousel"
        :pause-autoplay-on-hover="true"
        :breakpoints="breakpoints"
      >
        <slide v-for="movie in data" :key="movie.id">
          <RouterLink :to="{ name: 'movie', params: { id: movie.id } }">
            <div class="movie-slide">
              <img
                :src="getPosterUrl(movie.poster_path)"
                :alt="movie.title"
                class="movie-image"
              /></div
          ></RouterLink>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { defineComponent } from 'vue'
import { fetchMixin } from '../hooks/fetchmixin/fetchmixin'
import type { MovieI } from '@/hooks/fetchmixin/types'
import Loader from './Loader.vue'
import Typography from './Typography.vue'

export default defineComponent({
  name: 'Slider',
  props: {
    endpoint: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  mixins: [fetchMixin<MovieI[]>()],
  components: {
    Carousel,
    Slide,
    Navigation,
    Loader,
    Typography
  },
  computed: {
    breakpoints() {
      return {
        992: {
          itemsToShow: 5,
          itemsToScroll: 5
        },
        768: {
          itemsToShow: 4,
          itemsToScroll: 4
        },
        576: {
          itemsToShow: 3,
          itemsToScroll: 3
        },
        480: {
          itemsToShow: 2,
          itemsToScroll: 2
        }
      }
    }
  },
  methods: {
    getPosterUrl(path: string) {
      return `https://image.tmdb.org/t/p/w500${path}`
    }
  },
  async mounted() {
    await this.fetchData(this.endpoint)
  }
})
</script>

<style lang="scss">
.slider-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.carousel-wrapper {
  padding: 0 20px;
  box-sizing: border-box;
}
.custom-carousel {
  padding: 0;
}

/* slides */
.movie-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 0.5em;
  transition: transform 0.3s;
  border-radius: 8px;
  z-index: 2000000;
}

.movie-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.movie-slide:hover {
  transform: scale(1.1);
}

/* arrows */
.carousel__prev {
  left: -40px;
}
.carousel__next {
  right: -40px;
}
.carousel__prev,
.carousel__next {
  color: $light300;
}
.carousel__prev:hover,
.carousel__next:hover {
  color: $light300;
}
</style>
