import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
  locales: ['en', 'vn', 'kr'],
  locale: 'en',
  counter: 0,
  defaultLocale: 'en'
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}