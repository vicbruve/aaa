import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export interface IRootState {}

export default new Vuex.Store<IRootState>({});
