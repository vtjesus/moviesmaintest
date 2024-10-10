<template>
  <aside>
    <nav>
      <RouterLink
        v-for="link in links"
        :key="link.text"
        :to="link.href"
        :class="{ active: isActive(link.href) }"
      >
        {{ link.text }}
      </RouterLink>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { isSubString } from '@/utils/isSubString'

export default defineComponent({
  name: 'Sidebar',
  computed: {
    links() {
      return [
        { text: 'Home', href: { name: 'home' } },
        { text: 'Now Playing', href: { name: 'movie-list', params: { movieList: 'now_playing' } } },
        { text: 'Popular', href: { name: 'movie-list', params: { movieList: 'popular' } } },
        { text: 'Top rated', href: { name: 'movie-list', params: { movieList: 'top_rated' } } }
      ]
    }
  },
  methods: {
    isActive(route: RouteLocationRaw): boolean {
      const resolvedRoute = this.$router.resolve(route)
      return isSubString(this.$route.path, resolvedRoute.href)
    }
  }
})
</script>

<style lang="scss" scoped>
aside {
  padding: 2rem 1rem;
  border-right: 1px solid $light500;
  min-width: 170px;
  position: sticky;
  height: 100%;
  top: 1em;
  bottom: 1em;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: 0.2s ease-in;
  font-weight: bold;
  white-space: nowrap;
  color: $light200;

  &:hover,
  &.active {
    background-color: $dark300;
  }

  &.router-link-exact-active {
    color: $dark500;
    background-color: $light400;
  }
}
</style>
