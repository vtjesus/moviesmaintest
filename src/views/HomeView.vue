<template>
  <PageWrapper>
    <div class="wrapper">
      <div v-for="({ title, endpoint }, key) in movieLists" :key="key">
        <Slider :title="title" :endpoint="endpoint" />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
import Input from '@/components/Input.vue'
import PageWrapper from '@/layout/PageWrapper.vue'
import Typography from '@/components/Typography.vue'
import { defineComponent } from 'vue'
import Slider from '@/components/Slider.vue'
import { MOVIE_LISTS } from '@/constants'

export default defineComponent({
  name: 'HomeView',
  components: { Typography, Input, PageWrapper, Slider },
  computed: {
    movieLists() {
      return MOVIE_LISTS
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
