<template>
  <div>
      <header-top />

      <header-middle />

      <header-sticky />
  </div>
</template>

<script>
import HeaderSticky from './HeaderSticky'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'


export default {
  components: {
    HeaderSticky,
    HeaderTop,
    HeaderMiddle
  },
}
</script>

<style >
.container {
   padding-right: 15px;
   padding-left: 15px;
   margin-right: auto;
   margin-left: auto;
   min-height:0px !important;
}
</style>
