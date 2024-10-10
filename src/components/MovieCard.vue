<template>
  <div class="movie-card">
    <img :src="imgUrl(posterPath)" :alt="title" />
    <div>
      <Typography tag="span">Genres: {{ genreNames.join(', ') }}</Typography>
      <Typography tag="span">Year: {{ releaseYear }}</Typography>
      <Typography tag="span">Vote Average: {{ voteAverage }}</Typography>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { IMG_BASE_URL } from '../constants'
import Typography from './Typography.vue'

export default defineComponent({
  name: 'MovieCard',
  components: { Typography },
  props: {
    posterPath: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    genreNames: {
      type: Array as PropType<string[]>,
      required: true
    },
    releaseDate: {
      type: String,
      required: true
    },
    voteAverage: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    imgUrl: (path: string) => `${IMG_BASE_URL}${path}`
  },
  computed: {
    releaseYear() {
      return new Date(this.releaseDate).getFullYear()
    }
  }
})
</script>

<style scoped lang="scss">
.movie-card {
  background-color: $dark300;
  text-align: center;
  border-radius: 0.125rem;
  transition: 0.2s ease-in;
  overflow: hidden;
  border: 1px solid $dark500;

  & span {
    font-size: 14px;
  }

  & img {
    width: 100%;
    height: auto;
    border-radius: 0.125rem 0.125rem 0 0;
  }

  & > div {
    padding: 0.25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.15);
  }
}
</style>
