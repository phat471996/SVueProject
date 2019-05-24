<template>
    <div> {{title}} </div>
</template>

<script>
export default {
head() {
    return { title: this.title }
},
data() {
  return {
    title: this.$t('about.title')
  }
}
}
</script>

<style>

</style>
