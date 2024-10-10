<template>
  <PageWrapper>
    <Loader v-if="loading" />
    <Typography v-else-if="error">{{ error }}</Typography>

    <div v-else class="wrapper">
      <Typography tag="h1">{{ data?.title }}</Typography>
      <Typography>{{ data?.release_date }}</Typography>
      <Typography>{{ data?.overview }}</Typography>

      <!-- TO DO: recommended movies based on this one, cover image ...  -->
    </div>
  </PageWrapper>
</template>

<script lang="ts">
import { ENDPOINTS } from '@/constants'
import { fetchMixin } from '@/hooks/fetchmixin/fetchmixin'
import type { MovieI } from '@/hooks/fetchmixin/types'
import { defineComponent } from 'vue'
import Typography from '@/components/Typography.vue'
import Loader from '@/components/Loader.vue'
import PageWrapper from '@/layout/PageWrapper.vue'

export default defineComponent({
  name: 'Movie',
  mixins: [fetchMixin<MovieI>()],
  components: { Typography, Loader, PageWrapper },
  computed: {
    movieId() {
      return this.$route.params.id
    }
  },
  async mounted() {
    this.fetchData(ENDPOINTS.movie_details, Number(this.$route.params.id))
  }
})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
