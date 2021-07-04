import firebase from "firebase/app";
import router from "../../router";

const state = () => ({
  email: "",
});
const getters = {};
const mutations = {
  SET_USER(state, payload) {
    state.email = payload.email;
  },
  SIGN_OUT(state) {
    state.email = "";
  },
};
const actions = {
  set_user({ commit }, payload) {
    commit("SET_USER", payload);
  },
  async sign_up({ commit }, payload) {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);
    } catch (error) {
      console.log(error);
    }
  },
  async sign_in({ commit }, payload) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  },
  async sign_out({ commit }) {
    try {
      await firebase.auth().signOut();
      commit("SIGN_OUT");
    } catch (error) {
      console.log(error);
    }
  },
  async check_user() {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
