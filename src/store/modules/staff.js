import { db, storage } from "../../db";
import router from "../../router";

const getFileRef = (name) => {
  const storageRef = storage.ref();
  return storageRef.child(name);
}

const state = () => ({
  file: {},
  staff_members: [],
  staff_member: {}
})

const getters = {};

const mutations = {
  SET_FILE(state, payload) {
    state.file = payload;
  },
  RESET_FILE(state) {
    state.file = "";
  },
  SET_STAFF_MEMBERS(state, payload) {
    state.staff_members = payload.sort((a, b) => new Date(a.data.created.seconds) - new Date(b.data.created.seconds));
  },
  SET_STAFF_MEMBER(state, payload) {
    state.staff_member = payload;
  }
};

const actions = {
  async get_staff_member({ dispatch, commit }, id) {
    const docRef = db.collection('staff').doc(id);
    try {
      dispatch('widgets/start_loader', null, { root: true });
      const doc = await docRef.get();

      commit('SET_STAFF_MEMBER', doc.data());
      dispatch('widgets/stop_loader', null, { root: true });
    } catch (error) {
      console.log(error);
      dispatch('widgets/stop_loader', null, { root: true });
    }
  },
  async get_file({ dispatch, commit }, ref) {
    try {
      dispatch('widgets/start_loader', null, { root: true });
      const fileRef = await storage.getFileRef(ref);
      commit('SET_FILE', fileRef);

      dispatch('widgets/stop_loader', null, { root: true });
    } catch (error) {
      console.log(error);
      dispatch('widgets/stop_loader', null, { root: true });
    }
  },
  async get_all_staff({ dispatch, commit }) {
    const docRef = db.collection('staff')

    try {
      dispatch('widgets/start_loader', null, { root: true });
      const doc = await docRef.get();
      const result = [];

      doc.forEach(d => result.push({ id: d.id, data: d.data() }));
      commit('SET_STAFF_MEMBERS', result)

      dispatch('widgets/stop_loader', null, { root: true });
    } catch (error) {
      console.log(error);
      dispatch('widgets/stop_loader', null, { root: true });
    }
  },
  async add_staff({ commit, dispatch, state }, payload) {
    try {
      let ajaxObj = { ...payload };
      const fileRef = getFileRef(state.file.name);

      dispatch('widgets/start_loader', null, { root: true });
      await fileRef.put(state.file);
      const url = await fileRef.getDownloadURL();

      ajaxObj.imgSrc = url;
      ajaxObj.fileRef = state.file.name;
      ajaxObj.created = new Date();

      await db.collection("staff").add(ajaxObj);
      commit('RESET_FILE');

      dispatch('get_all_staff');
      dispatch('widgets/stop_loader', null, { root: true });
      router.push('/about-us');
    } catch (error) {
      console.log(error);
      dispatch('widgets/stop_loader', null, { root: true });
    }
  },
  async edit_staff({ commit, dispatch, state }, { id, updatedStaff }) {
    try {
      let fileRef;
      if (state.file.name && state.file.name !== updatedStaff.fileRef) {
        const oldFileRef = getFileRef(updatedStaff.fileRef); // GET OLD FILE REF SO WE CAN REMOVE IT WHEN UPDATING THE STORAGE
        fileRef = getFileRef(state.file.name);

        dispatch('widgets/start_loader', null, { root: true });
        await oldFileRef.delete();      // REMOVE THE OLD FILE FROM THE STORAGE
        await fileRef.put(state.file);  // ADD THE NEW FILE TO THE STORAGE

        const url = await fileRef.getDownloadURL();

        updatedStaff.imgSrc = url;
        updatedStaff.fileRef = state.file.name;
      }
      // DELETE FILE KEY IN CASE WE DONT WANT TO UPDATE THE FILE FIELD
      if (!(state.file && state.file.name)) delete updatedStaff.fileRef;

      await db.collection("staff").doc(id).update(updatedStaff);
      commit('RESET_FILE');

      dispatch('get_all_staff');
      dispatch('widgets/stop_loader', null, { root: true });
      router.push('/about-us');

    } catch (error) {
      console.log(error);
      dispatch('widgets/stop_loader', null, { root: true });
    }
  },
  async delete_staff({ dispatch }, { id, fileRef }) {
    const refFile = getFileRef(fileRef);
    const docRef = db.collection('staff').doc(id);
    try {
      dispatch('widgets/start_loader', null, { root: true });
      await Promise.all([refFile.delete(), docRef.delete()])
      dispatch('get_all_staff');
      dispatch('widgets/stop_loader', null, { root: true });
    } catch (error) {
      console.error(error)
      dispatch('widgets/stop_loader', null, { root: true });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}