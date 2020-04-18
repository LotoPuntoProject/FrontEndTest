<template>
  <div class="ma-3 text-xs-center">
    <h2 class="headline grey--text text--darken-3">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: '',
      description: 'Representative page title that import this component'
    }
  }
}
</script>

<style>

</style>
