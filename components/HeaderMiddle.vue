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
                <b-button size="sm" class="my-2 my-sm-0" type="submit">
                    
                </b-button>
            </b-nav-form>

            <b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover</b-button>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    methods: {
        handleSearch: function(evt) {
            console.log(evt)
        }
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
