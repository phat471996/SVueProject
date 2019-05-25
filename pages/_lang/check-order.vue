<template>
    <div> 
       <div>  {{title}}  </div>
       <div> {{checkOrder}} </div>
       <img :src="flat" height="12" width="18"  > 
    </div>
   
</template>

<script>
export default {
head() {
    return { title: this.title }
},
data() {
  return {
    title: this.$t('about.title'),
    flat: this.$t('images.flat'),
    checkOrder: this.$t('links.checkOrder')
  }
}
}
</script>

<style>

</style>
