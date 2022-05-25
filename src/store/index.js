import Vue from "vue";
import Vuex from "vuex";
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex);

const state = {
  user: null,
  chicken: null,
  userId: null
}

export default new Vuex.Store({
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    iduser: (state) => {
      return state.userId;
    }
  },
  mutations: {
    user(state, user) {
      state.user = user
      state.userId = user._id
    }
  },
  actions: {
    user(context, user) {
      db.delete().then(() => {
        db.collection('users').add(user).then(() => {
          context.commit('user', user);
        })
      })
    },
    checkPayment(context, user) {
      db.delete().then(() => {
        db.collection('users').add(user).then(() => {
          context.commit('user', user);
        })
      })
    },
    getUser({ commit }) {
      db.collection('users').get().then(user => {
        commit('user', user[0]);
      })
    },
    deleteUser({ commit }) {
      db.delete().then(() => {
        commit('user', null);
      })
    }
  },
  modules: {},
});
