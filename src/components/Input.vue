<template>
  <div class="input-wrapper">
    <Typography tag="label" :for="inputId">{{ label }}</Typography>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :class="error && 'error'"
    />
    <Typography tag="span" v-if="error" class="error-message">{{ error }}</Typography>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import Typography from './Typography.vue'

export default defineComponent({
  name: 'InputComponent',
  components: { Typography },
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    modelValue: {
      type: String as PropType<string>,
      default: ''
    },
    type: {
      type: String as PropType<'text' | 'password' | 'email'>,
      default: 'text'
    },
    placeholder: {
      type: String as PropType<string>,
      default: ''
    },
    inputId: {
      type: String as PropType<string>,
      required: true
    },
    error: {
      type: String as PropType<string>,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input {
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    height: 40px;

    &:focus,
    &:hover {
      border-color: $main200;
    }

    &:focus {
      outline: none;
    }

    &.error {
      border: 1px solid $error300;

      &:focus,
      &:hover {
        border-color: $error500;
      }
    }
  }

  .error-message {
    color: $error300;
    font-size: 0.875rem;
  }
}
</style>
