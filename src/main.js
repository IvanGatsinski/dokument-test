import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faPlus, faAngleDoubleDown,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vClickOutside from "v-click-outside";
import VuePageTransition from "vue-page-transition";
import { firestorePlugin } from "vuefire";
import Vue2Editor from "vue2-editor";
import store from "./store/index";
import VueI18n from "vue-i18n";
// import messages from './i18n.js';
import en from "./lang-en.js";
import bg from "./lang-bg.js";
import pl from "./lang-pl.js";

library.add(faCheck, faPlus, faAngleDoubleDown);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "bg", // set locale
  fallbackLocale: "bg",
  messages: {
    en,
    bg,
    pl
  },
});

Vue.use(Vue2Editor);
Vue.use(firestorePlugin);
Vue.use(vClickOutside);
Vue.use(VuePageTransition);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
