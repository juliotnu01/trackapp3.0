import { createStore } from 'vuex'

export default createStore({
  state: {
    unidad:{}
  },
  getters:{
    unidad: state => state.unidad
  },
  mutations: {
    setUnidad(state, data){
      state.unidad = data
    }
  },
})
