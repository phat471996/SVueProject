<template>
    <b-navbar toggleable="lg" type="dark" variant="dark"  >
        <b-container>
            <b-navbar-toggle target="nav-collapse-top"></b-navbar-toggle>
            <b-collapse id="nav-collapse-top" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/check-order">{{checkOrder}}</b-nav-item>
                    <b-nav-item to="/check-order">Lịch sử mua hàng</b-nav-item>
                    <b-dropdown-over>
                        <template slot="title">
                          <div class="nav-link dropdown-toggle">
                              <img :src="flat" height="12" width="18" :alt="locate" > 
                              <span class="">{{locate}}</span> 
                          </div>
                        </template>
                        <b-dropdown-item v-for="locate in locates.filter(x => {return x != locate })" 
                              v-bind:key="locate" 
                              v-on:click="setLang(locate)"
                              >
                                <img :src="flat" height="12" width="18" :alt="locate">
                                {{ locate }}
                        </b-dropdown-item>
                    </b-dropdown-over>
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
import BDropdownOver from './BDropdownOver'
export default {
  props: {
    transition: "ssss"
  },
  data() {
    return {
      dropup: true
    }
  },
  components: {
    BDropdownOver
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
      this.$router.push(currentPath);
      
    }
  }
}
</script>

<style scoped>

</style>
