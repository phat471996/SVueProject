<template>
    <b-navbar toggleable="lg" type="dark" variant="success" ref='navbarsticky'>
        <b-container>
            <b-navbar-brand to="/">Category</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse-bottom"></b-navbar-toggle>

            <b-collapse id="nav-collapse-bottom" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/admin">Link</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-container>
      
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
            sticky: null
        }
    },
    mounted() {
        window.onscroll = this.OnScroll
        this.sticky = this.$refs.navbarsticky.offsetTop;
    },
    methods: {
        OnScroll(){
        if (window.pageYOffset >= this.sticky) {
            this.$refs.navbarsticky.classList.add("sticky")
        } else {
            this.$refs.navbarsticky.classList.remove("sticky");
        }
        
        }
    },
    destroyed () {
         window.onscroll = null;
    }

}
</script>

<style scoped>
 .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  .sticky + .container {
  padding-top: 60px;
}
</style>
