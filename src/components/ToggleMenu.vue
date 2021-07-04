<template>
  <div>
    <div v-if="show_background" class="background-effect"></div>
    <div
      v-click-outside="close_menu"
      class="toggle__menu-container"
      :class="active_menu_class"
    >
      <div class="decorator"></div>
      <img
        @click="$router.push('/')"
        src="@/assets/imgs/web2/doKument_logo_3.png"
        alt="logo"
      />

      <ul class="toggle__menu">
        <ToggleBtn
          class="always-visible"
          ref="toggle_btn_status"
          @toggle_menu="toggle_menu"
        />
        <li
          @click="close_menu"
          v-for="(link, key) in links"
          :key="key"
          class="toggle__menu-item"
        >
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import ToggleBtn from '@/components/buttons/ToggleBtn'

export default {
  components: {
    ToggleBtn
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      active_menu_class: 'close_menu',
      show_background: false
    }
  },
  computed: {
    links () {
      return {
        home: {
          name: this.$t('menu_btns.welcome'),
          to: '/'
        },
        accountance: {
          name: this.$t('menu_btns.accounting'),
          to: '/accounting'
        },

        services: {
          name: this.$t('menu_btns.social_services'),
          to: '/services'
        },
        about_us: {
          name: this.$t('menu_btns.about_us'),
          to: '/about-us'
        },
        pricelist: {
          name: this.$t('menu_btns.price_list'),
          to: '/pricelist'
        },
        promotion_accounting: {
          name: this.$t('menu_btns.promotion_accounting'),
          to: '/accounting-promotions'
        },
        promotion_services: {
          name: this.$t('menu_btns.promotion_services'),
          to: '/service-promotions'
        },
        usefull_forms: {
          name: this.$t('menu_btns.forms'),
          to: '/forms'
        },
        contacts: {
          name: this.$t('menu_btns.contacts'),
          to: '/contacts'
        },
        // blog: {
        //   name: this.$t('menu_btns.blog'),
        //   to: '/blog'
        // }
      }
    }
  },
  methods: {
    close_menu () {
      this.active_menu_class = 'close_menu'
      this.$refs.toggle_btn_status.switch_btn_off()
    },
    toggle_menu () {
      this.active_menu_class =
        this.active_menu_class === 'open_menu' ? 'close_menu' : 'open_menu'
    }
  },
  watch: {
    active_menu_class (v) {
      v === 'open_menu'
        ? (this.show_background = true)
        : (this.show_background = false)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  background: #fff;
  display: block;
  width: 100%;
  height: 100%;
  //margin: 0.6rem auto;
  padding: 1.2rem;
}
.always-visible {
  visibility: visible;
}
.background-effect {
  position: fixed;
  content: '';
  top: 0;
  right: 40rem;
  bottom: 0;
  width: calc(100% - 40rem);
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
}
.toggle__menu-container {
  visibility: hidden;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0rem;
  background-color: scale-color(#666, $lightness: 5%);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  width: 40rem;
  height: 100%;
  img {
    display: none;
  }
  .toggle__menu-item {
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    top: 8.5rem;
    display: block;
    text-align: center;
    font-size: 1.4rem;
    border-top: 1px solid #ccc;
  }
}
.open_menu {
  animation-name: open_menu;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}
.close_menu {
  animation-name: close_menu;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}
@keyframes open_menu {
  0% {
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
@keyframes close_menu {
  15% {
    visibility: hidden;
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .decorator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8.5rem;
    background: #fff;
    border-bottom: 2px solid rgb(238, 37, 37);
  }
  .toggle__menu-container {
    width: 100%;
    img {
      position: fixed;
      padding: 1.2rem;
      padding-left: 2rem;
      top: 0%;
      left: 0rem;
      // width: 25%;
      height: 8.5rem;
      display: block;
    }
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) and (orientation: landscape) {
  .toggle__menu-container {
    width: 100%;
    height: 100%;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 250px;
      height: 100px;
      background-color: #fff;
      clip-path: polygon(0 0, 100% 0, 73% 100%, 0% 100%);
    }
    img {
      pointer-events: none;
      position: fixed;
      padding: 1.2rem;
      padding-left: 2rem;
      top: 0%;
      left: 0rem;
      // width: 25%;
      height: 8.5rem;
      display: block;
    }
  }
  .decorator {
    width: 0;
  }
  .toggle__menu {
    margin: 0;
  }
  .toggle__menu-container {
    width: 100%;
    .toggle__menu-item {
      text-transform: uppercase;
      position: relative;
      top: 8.6rem;
      font-size: 1.2rem;

      &:nth-child(2) {
        border-top: 1px solid #bbb;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #bbb;
      }
      a {
        padding: 1rem;
      }
    }
  }
  .toggle__menu-container .toggle__menu-item a {
    border-radius: 0;
    width: 100%;
    margin: 0;
  }
}
</style>
