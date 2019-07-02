<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Your First Vue File!'
    }
  },
  methods: {
    greeting: function() {
      return 'heeeey!';
    }
  }
}
</script>

<style scoped>
</style>
