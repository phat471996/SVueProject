<template>
<div>
<b-navbar toggleable="lg" type="dark" variant="dark"  >
      <b-navbar-brand to="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse-top"></b-navbar-toggle>

      <b-collapse id="nav-collapse-top" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">Link</b-nav-item>
           <b-nav-item-dropdown >
             <template slot="button-content">
               <img :src="flat" height="12" width="18" :alt="locate" > {{locate}} 
              </template>
              <b-dropdown-item v-for="locate in locates" v-bind:key="locate" v-on:click="setLang(locate)"> 
                <img :src="flat" height="12" width="18" :alt="locate">
                {{ locate }}
              </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

         

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

<b-navbar toggleable="lg" type="dark" variant="info"  >
  <div class="container">
    <b-navbar-brand to="/">
      <b-img src="http://vimoshop.net/wp-content/uploads/2019/05/logo.png" fluid alt="Responsive image"></b-img>
    </b-navbar-brand>
      
      <b-nav-form class="form-search">
          <b-form-input size="sm" class="input-search bg-info" variant="info"  placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> 
  </div>
</b-navbar>

  <header-sticky />
 
</div>
   
</template>

<script>
import HeaderSticky from './HeaderSticky'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    HeaderSticky
  },
  data() {
    return {
      flat: this.$t('images.flat')
    }
  },
  computed: {
    ...mapGetters({
        locates: 'getLocates',
        locate: 'getLocate',
        defaultLocale: 'defaultLocale',
    })
  },
  mounted() {
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
  },
  methods: {
    ...mapActions({
      setLang: 'setLang'
    })
  },
  watch: {
    locate(newValue, oldValue) {
      let currentPath = this.$router.history.current.fullPath;
      if(newValue === this.defaultLocale) {
        currentPath = currentPath.substring(3, currentPath.length);
      }
      else
      {
        let locale = currentPath.substring(1, 3);
        if(this.locates.includes(locale)){
          currentPath =  '/' + newValue + currentPath.substring(3, currentPath.length);
        }
        else
        {
          currentPath = '/' + newValue + currentPath
        }
        
      }
      //let newRoute = this.$router.history.current.fullPath.replace(new RegExp('^/'+oldValue), '/' + newValue)
      this.$router.push(currentPath)
    }
  }
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
 
 .dropdown-menu { 
   background-color: rebeccapurple; 
  }
</style>
