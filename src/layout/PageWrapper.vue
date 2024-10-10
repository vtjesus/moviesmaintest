<template>
  <div class="page-wrapper">
    <Sidebar />
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/layout/Sidebar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageWrapper',
  components: { Sidebar }
})
</script>

<style scoped lang="scss">
.page-wrapper {
  height: 100%;
  display: flex;
}
.content-wrapper {
  padding: 1rem 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
