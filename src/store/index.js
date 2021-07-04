import Vue from 'vue'
import Vuex from 'vuex'
import staff from './modules/staff'
import user from './modules/user'
import blog_posts from './modules/blog_posts'
import widgets from './modules/widgets';
import pricelist from './modules/pricelist';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      staff,
      user,
      blog_posts,
      widgets,
      pricelist
    }
  })