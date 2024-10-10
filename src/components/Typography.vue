<template>
  <component :is="tag" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  name: 'Typography',
  props: {
    tag: {
      type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'label'>,
      default: 'p'
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      default: null
    }
  },
  methods: {
    handleClick(event: MouseEvent) {
      this.onClick && this.onClick(event)
    }
  }
})
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
label {
  color: $light200;
  font-family: 'Inter', sans-serif;
  margin: 0;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6,
p,
span,
label {
  font-size: 1rem;
}
</style>
