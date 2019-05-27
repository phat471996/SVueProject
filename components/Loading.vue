<template lang="html">
  <div class="loading-page" v-if="loading">
    <img src="/load.gif" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true;
    },
    finish () {
      this.loading = false;
    
    }
  }
}
</script>

<style scoped>
    .loading-page {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #3333338c;
        z-index: 1001;
        
    }
    body.loading-page {
        overflow: hidden;
    }

    .loading-page img {width: 50px;transform: translate(-50%,-50%);top:50%;left: 50%;position: absolute;}
</style>