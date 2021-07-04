<template>
  <div class="header__container">
    <!-- <Langs /> -->
    <header>
      <div id="navbar" class="img__container">
        <img @click="$router.push('/')" src="@/assets/imgs/web2/doKument_logo_2.png" alt="logo" />
        <p v-if="email" class="user-email">
          Здравейте, {{ email }}
          <button @click="signOut">Отписване</button>
        </p>
        <div class="acc-service-heading">
          <p>{{ $t('heading') }}</p>
        </div>
      </div>
      <div class="navigation-btns__wrapper">
        <div class="navigation-btns__container">
          <div class="btns__container">
            <nav-btn
              v-for="(value, key, i) in menu"
              :class="{ arrow: i === 1 || i === 4 }"
              :key="key"
              :data="value"
            >
              <dropdown-container v-if="i === 1">
                <nav-btn
                  :data="{
                    name: $t('menu_btns.accounting'),
                    to: '/accounting'
                  }"
                ></nav-btn>
                <nav-btn
                  :data="{
                    name: $t('menu_btns.social_services'),
                    to: '/services'
                  }"
                ></nav-btn>
              </dropdown-container>
              <dropdown-container v-if="i === 4">
                <nav-btn
                  :data="{
                    name: $t('menu_btns.accounting'),
                    to: '/accounting-promotions'
                  }"
                ></nav-btn>
                <nav-btn
                  :data="{
                    name: $t('menu_btns.social_services'),
                    to: '/service-promotions'
                  }"
                ></nav-btn>
              </dropdown-container>
            </nav-btn>
          </div>
        </div>
      </div>
    </header>
    <Langs />
    <ToggleMenu />
  </div>
</template>

<script>
import DropdownContainer from "@/components/DropdownContainer";
import NavBtn from "@/components/buttons/NavBtn";
import ToggleMenu from "@/components/ToggleMenu";
import Langs from "@/components/widgets/Langs";
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",
  components: {
    NavBtn,
    ToggleMenu,
    DropdownContainer,
    Langs,
  },
  methods: {
    ...mapActions("user", ["sign_out"]),
    signOut() {
      this.sign_out();
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapState("user", ["email"]),
    menu() {
      return {
        home: {
          name: this.$t("menu_btns.welcome"),
          to: "/",
        },
        other: {
          name: this.$t("menu_btns.services"),
          to: "",
        },
        about_us: {
          name: this.$t("menu_btns.about_us"),
          to: "/about-us",
        },
        price_list: {
          name: this.$t("menu_btns.price_list"),
          to: "/pricelist",
        },
        promotions: {
          name: this.$t("menu_btns.promotions"),
          to: "",
        },
        forms: {
          name: this.$t("menu_btns.forms"),
          to: "/forms",
        },
        contacts: {
          name: this.$t("menu_btns.contacts"),
          to: "/contacts",
        },
        // blog: {
        //   name: this.$t("menu_btns.blog"),
        //   to: "/blog",
        // },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow {
  cursor: default;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 44%;
    right: 11px;

    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    border: solid #fff;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
  }
}
.user-email {
  position: fixed;
  top: 12.7rem;
  right: 0;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: right;
  background: #ccc;
}
.header__container {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  -webkit-box-shadow: 0px 1px 10px 1px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0px 1px 10px 1px rgba(194, 194, 194, 1);
  box-shadow: 0px 1px 10px 1px rgba(194, 194, 194, 1);
  //opacity: 0.97;
  width: 100%;
  &-btns__container {
    width: 70%;
  }
}
.btns__container {
  display: flex;
}
.img__container {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 8rem;
  width: 85%;
  transition: 0.4s;
  img {
    position: relative;
    top: 50%;
    transform: translateY(-75%);
    cursor: pointer;
    max-width: 100%;
    max-height: 80%;
    font-size: 10rem;
  }
}
.acc-service-heading {
  position: relative;
  color: #ccc;
  font-family: $secondary-font;
  font-size: calc(28px * 1.618);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateX(-42%);
  p {
    font-size: 45px;
    transform: translateY(-12%);
  }
  &::before {
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%) skew(-30deg);
    content: "";
    width: 130%;
    height: 121%;
    background: #333;
    z-index: -1;
  }
}
.navigation-btns__wrapper {
  border-top: 2px solid crimson;
  background: #666;
}
.navigation-btns__container {
  //width: 85%;
  margin: 0 auto;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.lang-icons__container {
  visibility: hidden;
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
  .lang-icon {
    cursor: pointer;
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:nth-child(1) {
      background-image: url("../assets/imgs/web2/bg.png");
    }
    &:nth-child(2) {
      background-image: url("../assets/imgs/web2/gb.png");
    }
    &:nth-child(3) {
      background-image: url("../assets/imgs/web2/pl.png");
    }
    &:nth-child(4) {
      background-image: url("../assets/imgs/web2/cz.png");
    }
    &:nth-child(5) {
      background-image: url("../assets/imgs/web2/sk.png");
    }
    &:nth-child(6) {
      background-image: url("../assets/imgs/web2/ru.png");
    }
    &:nth-child(7) {
      background-image: url("../assets/imgs/flag_imgs/ro.png");
    }
    &:nth-child(8) {
      background-image: url("../assets/imgs/flag_imgs/pt.png");
    }
  }
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .acc-service-heading {
    transform: translateX(-50%);
  }
  .navigation-btns__container {
    width: 100%;
  }
  .img__container {
    width: 100%;
  }
  img {
    margin-left: 2rem;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .acc-service-heading {
    display: none;
  }
  .header__container {
    background: #fff;
  }
  .user-email {
    top: 12rem;
    margin: 0;
    padding: 0.5rem;
    width: 100%;
    text-align: right;
    background: rgb(255, 156, 43);
    button {
      margin-left: 1.5rem;
      padding: 0.5rem;
    }
  }
  .navigation-btns__container {
    display: none;
  }
  .img__container {
    &::before {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      background: scale-color(#666, $lightness: 5%);
      width: 30rem;
      height: 100%;
      clip-path: polygon(80% 0, 100% 0%, 100% 100%, 41% 100%);
    }
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .img__container {
    &::before {
      display: none;
    }
  }
}
</style>
