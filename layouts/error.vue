
<template>
<div>
	<h1>404</h1>
	<nuxt-link to="/">Home</nuxt-link>
</div>
   
</template>

<script>
export default {
  props: ['error'],
  layout: '404' // you can set a custom layout for the error page
}
</script>

<style>

</style>
