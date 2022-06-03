import { createStore } from 'vuex'

export default createStore({
  state: {
    unidad:{},
    TOKEN: '',
    sid: '',
    notificaciones:[],
    loadingBar: false,
    data_sesa:{}

  },
  getters:{
    unidad: state => state.unidad,
    TOKEN: state => state.TOKEN,
    sid: state => state.sid,
    notificaciones: state => state.notificaciones,
    loadingBar: state => state.loadingBar,
    data_sesa: state => state.data_sesa,

  },
  mutations: {
    setDaSesa(state, data){
      state.data_sesa = data
    },
    SetloadingBar(state, data){
      state.loadingBar = data
    },
    setUnidad(state, data){
      state.unidad = data
    },
    setTOKEN(state, data){
      state.TOKEN = data
    },
    setSid(state, data){
      state.sid = data
    },
    setNotificaciones(state: any, data: any){
      state.notificaciones.push(data)
    }

  },
})
