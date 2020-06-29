<template>
  <div>
    <login-form />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
  middleware: 'anonymous',
  components: {
    LoginForm
  },
}
</script>