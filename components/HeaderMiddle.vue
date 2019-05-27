<template>
    <b-navbar toggleable="lg" type="dark" variant="info"  >
        <b-container>
            <b-navbar-brand to="/">
            <b-img src="http://vimoshop.net/wp-content/uploads/2019/05/logo.png" fluid alt="Responsive image"></b-img>
            </b-navbar-brand>
            
            <b-nav-form class="form-search" @submit.prevent="handleSearch">
                <b-form-input size="sm" class="input-search bg-info" variant="info"  placeholder="Search"></b-form-input>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Tất cả danh mục">
                        <b-dropdown-item > 
                        
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                     
                </b-navbar-nav>
               
            </b-nav-form>

           <b-dropdown-over>
                <template slot="title">
                    <img src="https://banner2.kisspng.com/20180329/fow/kisspng-shopping-cart-software-computer-icons-cart-5abcd0d6d48402.9794554415223236708705.jpg"
                        height="20" width="20" > 
                </template>
                <b-dropdown-item > 
                    hihi
                </b-dropdown-item>
            </b-dropdown-over>
        </b-container>
    </b-navbar>
</template>

<script>
import BDropdownOver from './BDropdownOver'
export default {
    methods: {
        handleSearch: function(evt) {
            console.log(evt)
        }
    },
    components: {
        BDropdownOver
    }
}
</script>

<style scoped>
.form-search {
    min-width: 60%;
}

.input-search {
    min-width: 70%;
}
</style>
