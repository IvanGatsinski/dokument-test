import { db, storage } from "../../db";
import router from "../../router";

const state = () => ({
  pricelist_item: {},
  pricelist_items: [],
});

const getters = {};

const mutations = {
  SET_PRICELIST_ITEMS(state, payload) {
    state.pricelist_items = payload;
  },
  SET_PRICELIST_ITEM(state, payload) {
    state.pricelist_item = payload;
  },
};

const actions = {
  async get_pricelist_item({ dispatch, commit }, id) {
    dispatch("widgets/start_loader", null, { root: true });
    try {
      const docRef = db.collection("pricelist").doc(id);
      const item = await docRef.get();

      commit("SET_PRICELIST_ITEM", item.data());
      dispatch("widgets/stop_loader", null, { root: true });
    } catch (error) {
      dispatch("widgets/stop_loader", null, { root: true });
    }
  },
  async get_all_pricelist_items({ dispatch, commit }) {
    dispatch("widgets/start_loader", null, { root: true });

    const docRef = await db.collection("pricelist").get();
    const result = [];

    docRef.forEach((d) => result.push({ id: d.id, data: d.data() }));

    commit("SET_PRICELIST_ITEMS", result);
    dispatch("widgets/stop_loader", null, { root: true });
  },
  async add_pricelist_item({ dispatch }, data) {
    dispatch("widgets/start_loader", null, { root: true });

    try {
      await db.collection("pricelist").add(data);
      dispatch("widgets/stop_loader", null, { root: true });
    } catch (error) {
      dispatch("widgets/stop_loader", null, { root: true });
    }
    router.push("/pricelist");
  },
  async edit_pricelist_item({ dispatch }, { id, item }) {
    dispatch("widgets/start_loader", null, { root: true });

    try {
      await db
        .collection("pricelist")
        .doc(id)
        .update(item);

      dispatch("widgets/stop_loader", null, { root: true });
    } catch (error) {
      dispatch("widgets/stop_loader", null, { root: true });
    }
    router.push("/pricelist");
  },
  async delete_pricelist_item({ dispatch }, id) {
    dispatch("widgets/start_loader", null, { root: true });
    const docRef = db.collection("pricelist").doc(id);
    try {
      await docRef.delete();

      dispatch("get_all_pricelist_items");
      dispatch("widgets/stop_loader", null, { root: true });
    } catch (error) {
      dispatch("widgets/stop_loader", null, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
