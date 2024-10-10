<template>
  <PageWrapper>
    <Typography tag="h3">{{ title }}</Typography>

    <Loader v-if="loading" />
    <Typography v-else-if="error">{{ error }}</Typography>

    <div v-else class="movies">
      <ul class="movie-list">
        <li v-for="movie in data" :key="movie.id">
          <RouterLink
            :to="{
              name: 'movie-list__movie',
              params: { movieList: $route.params.movieList, id: movie.id }
            }"
          >
            <!--TODO: fetch genres and display them  -->
            <MovieCard
              :posterPath="movie.poster_path"
              :title="movie.original_title"
              :releaseDate="movie.release_date"
              :voteAverage="movie.vote_average"
              :genreNames="['to do...']"
              :id="movie.id"
            />
          </RouterLink>
        </li>
      </ul>
      <!-- TO DO: pagination  -->
      <Typography :style="{ alignSelf: 'flex-end' }">PAGINATION...</Typography>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fetchMixin } from '@/hooks/fetchmixin/fetchmixin'
import { type MovieI } from '@/hooks/fetchmixin/types'
import Typography from '@/components/Typography.vue'
import PageWrapper from '@/layout/PageWrapper.vue'
import Loader from '@/components/Loader.vue'
import MovieCard from '@/components/MovieCard.vue'
import { MOVIE_LISTS } from '@/constants'

export default defineComponent({
  name: 'MovieList',
  mixins: [fetchMixin<MovieI[]>()],
  components: { PageWrapper, Typography, Loader, MovieCard },
  data() {
    return {
      title: ''
    }
  },
  watch: {
    $route: {
      immediate: true, //call immediatelly if the route changes
      handler(newRoute) {
        this.title =
          MOVIE_LISTS[newRoute.params.movieList as keyof typeof MOVIE_LISTS].title || 'Movies'
        this.fetchData(MOVIE_LISTS[newRoute.params.movieList as keyof typeof MOVIE_LISTS].endpoint)
      },
      deep: true
    }
  }
})
</script>

<style scoped lang="scss">
.movie-list {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 62rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 30rem) {
    grid-template-columns: 3fr;
  }
}
.movies {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
h3 {
  margin-bottom: 1.5rem;
}
</style>
