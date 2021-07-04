import { db } from "../../db";

const state = () => ({
  loading: false,
  posts: [],
  post: {}
});
const getters = {};
const mutations = {
  START_LOADER(state) {
    state.loading = true;
  },
  STOP_LOADER(state) {
    state.loading = false;
  },
  SET_BLOG_POSTS(state, payload) {
    state.posts = payload;
  },
  SET_BLOG_POST(state, payload) {
    state.post = payload;
  },
};
const actions = {
  async create_post({ commit, dispatch }, payload) {
    try {
      commit("START_LOADER");
      
      await db.collection("blog_posts").add(payload);
      
      commit("STOP_LOADER");
    } catch (error) {
      console.log(error);
      commit("STOP_LOADER");
    }
  },
  async update_post({ commit, dispatch }, payload) {
    const post_id = payload.id;
    delete payload.id
    try {
      commit("START_LOADER");

      await db
        .collection("blog_posts")
        .doc(post_id)
        .update(payload);

        commit("STOP_LOADER");
    } catch (error) {
      console.log(error);
      commit("STOP_LOADER");
    }

    dispatch("fetch_all_posts");
  },
  async delete_post({ commit, dispatch }, payload) {
    try {
      commit("START_LOADER");

      await db
        .collection("blog_posts")
        .doc(payload.id)
        .delete();

        commit("STOP_LOADER");
    } catch (error) {
      console.log(error);
      commit("STOP_LOADER");
    }

    dispatch("fetch_all_posts");
  },
  async fetch_post({ commit }, post_id) {
    const post = await db.collection("blog_posts").doc(post_id).get();

    commit("SET_BLOG_POST", post.data());
  },
  async fetch_all_posts({ commit }) {
    const posts = [];

    commit("START_LOADER");
    const collection = await db
      .collection("blog_posts")
      .orderBy("date_published", "desc")
      .get();

    collection.forEach((doc) => {
      let post = { ...doc.data() };
      post.id = doc.id;
      posts.push(post);
    });
    commit("STOP_LOADER");
    commit("SET_BLOG_POSTS", posts);
  },
  // async fetch_all_posts({ commit }) {
  //   const posts = [];

  //   await db
  //     .collection("blog_posts")
  //     .orderBy("date_published", "desc")
  //     .onSnapshot(snapshot => {
  //       let changes = snapshot.docChanges();

  //       changes.forEach(change => {
  //         console.log(change);

  //         if (change.type == 'added' || change.type == 'modified') {
  //           let post = { ...change.doc.data() };
  //           post.id = change.doc.id;
  //           posts.push(post);
  //         }
  //       })
  //     });

  //   commit("SET_BLOG_POSTS", posts);
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
