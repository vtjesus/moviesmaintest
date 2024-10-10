<template>
  <div class="wrapper">
    <Typography tag="h1">{{ formTitle }}</Typography>

    <form @submit.prevent="handleSubmit">
      <Input
        v-if="action === 'SIGN_UP'"
        label="Name"
        v-model="formData.name"
        placeholder="Enter your name"
        input-id="name"
        :error="errors.name"
      />
      <Input
        label="Username"
        v-model="formData.username"
        placeholder="Enter your username"
        input-id="username"
        :error="errors.username"
      />
      <Input
        label="Password"
        v-model="formData.password"
        placeholder="Enter your password"
        input-id="password"
        :error="errors.password"
        type="password"
      />
      <Button>
        <Typography tag="span">
          {{ action === 'LOG_IN' ? 'Log in' : 'Sign up' }}
        </Typography>
      </Button>
    </form>

    <div class="switch-action">
      <Typography tag="span" v-html="text" />
      <button @click="switchAction">
        <Typography tag="span">{{ buttonText }}</Typography>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Input from '@/components/Input.vue'
import PageWrapper from '@/layout/PageWrapper.vue'
import Typography from '@/components/Typography.vue'
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

interface FormData {
  name: string
  username: string
  password: string
}

type Errors = {
  [K in keyof FormData]?: string
}

interface ComponentData {
  formData: FormData
  errors: Errors
  action: 'LOG_IN' | 'SIGN_UP'
}

export default defineComponent({
  name: 'HomeView',
  components: { Typography, Input, PageWrapper, Button },
  data(): ComponentData {
    return {
      formData: {
        name: '',
        username: '',
        password: ''
      },
      errors: {
        name: '',
        username: '',
        password: ''
      },
      action: 'LOG_IN'
    }
  },
  computed: {
    text(): string {
      return this.action === 'LOG_IN'
        ? "Still don't have an account?<br />Click here to  "
        : 'Already have an account?<br />Click here to  '
    },
    buttonText(): string {
      return this.action === 'LOG_IN' ? 'Sign up' : 'Log in'
    },
    formTitle(): string {
      return this.action === 'LOG_IN' ? 'Login' : 'Sign Up'
    },
    fields(): (keyof FormData)[] {
      return ['name', 'username', 'password']
    }
  },

  methods: {
    resetForm() {
      this.formData = {
        name: '',
        username: '',
        password: ''
      }
      this.errors = {
        name: '',
        username: '',
        password: ''
      }
    },
    switchAction() {
      this.action = this.action === 'LOG_IN' ? 'SIGN_UP' : 'LOG_IN'
      this.resetForm()
    },
    handleSubmit() {
      // validate fields
      this.fields.forEach((field) => {
        if (field === 'name' && this.action !== 'SIGN_UP') return // skip  name field if action is not SIGN_UP

        if (!this.formData[field]) this.errors[field] = 'This field is required'
      })

      //prevent from submiting if there are any errors
      if (Object.values(this.errors).some((error) => error)) return

      console.log(this.formData)

      //reset
      this.resetForm()
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        //remove err if theres value
        this.fields.forEach((field) => {
          if (newVal[field] && this.errors[field]) {
            this.errors[field] = ''
          }
        })
      },
      deep: true
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  padding: 1rem;
  box-sizing: border-box;
  margin: 1rem auto;
  background-color: $dark300;

  & h1 {
    color: $main100;
  }
}
.switch-action {
  & span {
    font-size: 0.875rem;
    color: $light400;
  }

  & button {
    border: none;
    background-color: transparent;
    padding: 0;
    display: inline;

    & span {
      color: $main300;
    }

    &:hover {
      cursor: pointer;
      & span {
        color: $main400;
      }
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & button {
    align-self: flex-end;
  }
}
</style>
