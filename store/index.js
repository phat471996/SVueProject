import Vuex from 'vuex';
import lang from './modules/lang';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      appLang: lang
    }
  });
};

export default createStore
  