<template>
  <button @click="handleClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      default: () => {}
    }
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled) this.onClick(event)
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  background-color: $main400;
  color: $light100;
  border: none;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: $main500;
  }

  &:disabled {
    background-color: $light500;
    cursor: not-allowed;
  }
}
</style>
