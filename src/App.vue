<template>
  <header>
    <Typography>LOGO</Typography>
    <Button @click="$router.push({ name: 'login' })" v-if="$route.name !== 'login'">
      <Typography tag="span">Log in</Typography>
    </Button>
  </header>

  <main>
    <RouterView />
  </main>

  <footer><Typography>Footer content</Typography></footer>
</template>

<script lang="ts">
import Sidebar from './layout/Sidebar.vue'
import Typography from './components/Typography.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: { Sidebar, Typography, Button }
}
</script>

<style scoped lang="scss">
header {
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $dark400;
  height: 80px;
}

main {
  flex-grow: 1;
  min-height: calc(100vh - 120px); // 120 = footerHeight + headereight
}

footer {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $dark500;

  p {
    font-size: 14px;
  }
}
</style>
