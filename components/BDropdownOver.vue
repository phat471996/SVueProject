<template>
    <div class="nav-item dropdown cursor-pointer" @mouseleave="onMouseOut" @mouseover="onMouseOver">
        <slot name="title"></slot>
        <transition :name="transition" >
            <div v-if="isHover" class="m-dropdown-menu">
                <slot ></slot>
            </div>
        </transition>         
    </div>
</template>

<script>
export default {
    props: {
        transition: {
            default: 'slide-fade',
            type: String
        }
    },
    data() {
        return {
            isHover: false,
        }
    },
    created() {
        console.log(this.transition)
    },
    methods: {
        onMouseOver(evt) {
            this.isHover = true;
        },
        onMouseOut(evt) {
            this.isHover = false;
        }
    },
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
