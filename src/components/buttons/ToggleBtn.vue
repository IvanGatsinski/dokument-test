<template>
  <div @click="toggle_menu" :class="active_toggle_btn_class" id="nav-icon3">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active_toggle_btn_class: ''
    }
  },
  methods: {
    toggle_menu () {
      this.active_toggle_btn_class === ''
        ? (this.active_toggle_btn_class = 'open')
        : (this.active_toggle_btn_class = '')
      this.$emit('toggle_menu')
    },
    switch_btn_off () {
      this.active_toggle_btn_class = ''
    }
  },
  watch: {
    active_toggle_btn_class (value) {
      value
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto')
    }
  }
}
</script>

<style lang="scss" scoped>
/* Icon 3 */

#nav-icon3 {
  display: none;
  width: 4rem;
  height: 3rem;
  position: absolute;
  top: 2.5rem;
  right: 2.75rem;
  /* margin: 50px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 120%;
  background: rgb(255, 255, 255);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 13px;
}

#nav-icon3 span:nth-child(4) {
  top: 26px;
}

#nav-icon3.open span:nth-child(1) {
  top: 13px;
  width: 0%;
  left: 50%;
  background: #ccc;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  background: #ccc;
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background: #ccc;
}

#nav-icon3.open span:nth-child(4) {
  top: 13px;
  width: 0%;
  left: 50%;
  background: #ccc;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  #nav-icon3 {
    display: block;
  }
  #nav-icon3 span {
    background-color: #999;
  }
    #nav-icon3.open span:nth-child(1),
  #nav-icon3.open span:nth-child(2),
  #nav-icon3.open span:nth-child(3),
  #nav-icon3.open span:nth-child(4) {
     background-color: #FFF;
  }
}
@media (max-width: 991.98px) and (orientation: landscape) {
  //  #nav-icon3 span {
  //    background: #FFF !important;
  //  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  #nav-icon3 span,
  #nav-icon3.open span:nth-child(1),
  #nav-icon3.open span:nth-child(2),
  #nav-icon3.open span:nth-child(3),
  #nav-icon3.open span:nth-child(4) {
    background-color: #999;
  }
}
</style>
