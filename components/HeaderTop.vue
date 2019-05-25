<template>
    <b-navbar toggleable="lg" type="dark" variant="dark"  >
        <b-container>
            <b-navbar-toggle target="nav-collapse-top"></b-navbar-toggle>
            <b-collapse id="nav-collapse-top" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/check-order">{{checkOrder}}</b-nav-item>
                    <b-nav-item to="/check-order">Lịch sử mua hàng</b-nav-item>
                    <li class="nav-item dropdown cursor-pointer" @mouseleave="onMouseOut" @mouseover="onMouseOver">
                      <div class="nav-link dropdown-toggle">
                        <img :src="flat" height="12" width="18" :alt="locate" > 
                        <span class="">{{locate}}</span> 
                      </div>
                       <transition name="slide-fade" >
                          <div v-if="isHover" class="m-dropdown-menu">
                            <div  class="dropdown-item cursor-pointer"
                                  v-for="locate in locates.filter(x => {return x != locate })" 
                                  v-bind:key="locate" 
                                  v-on:click="setLang(locate)"> 
                                <img :src="flat" height="12" width="18" :alt="locate">
                                {{ locate }}
                            </div>    
                          </div>
                        </transition>         
                    </li>
                   
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto" right>
                    <b-nav-item to="/check-order">Liên hệ</b-nav-item>
                    <b-nav-item to="/check-order">Bộ sưu tập</b-nav-item>
                    <b-nav-item to="/check-order">Sự kiện</b-nav-item>
                    <b-nav-item to="/check-order">Chăm sóc khách hàng</b-nav-item>
                    <b-nav-item to="/check-order">Đăng ký</b-nav-item>
                    <b-nav-item to="/check-order">Đăng nhập</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      dropup: true,
      isHover: false
    }
  },
  computed: {
    ...mapGetters({
        locates: 'getLocates',
        locate: 'getLocate',
        defaultLocale: 'defaultLocale',
    }),
    flat: function() {
        return this.$t('images.flat')
    },
    checkOrder: function() {
        return this.$t('links.checkOrder');
    } 
  },
  mounted() {
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
  },
  methods: {
    ...mapActions({
      setLang: 'setLang'
    }),
    onMouseOver(evt) {
      //this.$refs.langDropdown.classList.add('fade-enter');
      //this.$refs.langDropdown.classList.add('fade-enter-active');
      //console.log(this.$refs.langDropdown)
      this.isHover = true;
      
    },
    onMouseOut(evt) {
      
      this.isHover = false;
    }
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
      this.$router.push(currentPath);
      
    }
  }
}
</script>

<style scoped>
.m-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
