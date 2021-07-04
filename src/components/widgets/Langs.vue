<template>
  <div class="container">
    <div class="options-list__container">
      <div
        v-for="(v, k) in data"
        :key="k"
        class="locales"
        @click="select_lang(v.lang)"
      >
        <div class="locale__container">
          <img
            class="flag"
            :class="{ 'item--greyscaled': v.lang !== $i18n.locale }"
            :src="data[v.lang].img"
            alt="lang-flag"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false,
      data: {
        bg: {
          img: require('@/assets/imgs/web2/bg.png'),
          lang: 'bg'
        },
        en: {
          img: require('@/assets/imgs/web2/gb.png'),
          lang: 'en'
        },
        pl: {
          img: require('@/assets/imgs/web2/pl.png'),
          lang: 'pl'
        }
      }
    }
  },
  methods: {
    toggle_langs_menu () {
      this.opened = !this.opened
    },
    select_lang (lang) {
      localStorage.setItem('lang', lang)
      const locale = localStorage.getItem('lang')
      this.$i18n.locale = locale
      this.toggle_langs_menu()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  top: 3px;
  right: 5px;
  flex-direction: flex-end;
  z-index: 1;
}
.locale__container {
  display: flex;
  align-items: center;
}
.options-list__container {
  display: flex;
  flex-direction: flex-end;
  align-items: center;
}
.item--greyscaled {
  filter: grayscale(1);
}
.active-flag,
.flag {
  cursor: pointer;
  width: 35px;
  margin: 0.25em;
}
.flag:hover {
  filter: grayscale(0);
}
.locale {
  margin: 0.25em;
  color: rgb(27, 27, 27);

  font-size: 14px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 991.98px) {
  .container {
    padding: 1em;
    position: relative;
    top: 0;
    left: auto;
    display: flex;
    justify-content: flex-end;
    //transform: translateX(-15%);
    right: 0;
  }
}
@media (max-width: 575.98px) {
}
</style>
