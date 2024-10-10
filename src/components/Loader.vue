<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Loader'
})
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 4rem 0;
  box-sizing: border-box;
}
.loader {
  border: 0.5rem solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.5rem solid $main400;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
