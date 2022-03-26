import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nuevoArrayJuego: [],
    nuevoArrayComentario: []
  },
  getters: {
  },

  mutations: {
    SET_JUEGOS(state, juegos) {
      state.nuevoArrayJuego = juegos;
    },
    AGREGAR_COMENTARIO(state, comentario) {
      state.nuevoArrayComentario.push(comentario);
    },
    ELIMINAR_COMENTARIO(state, indice) {
      state.nuevoArrayComentario.splice(indice, 1);
    },
    //agregar modificaciones
    MODIFICAR_COMENTARIO(state, { indice, comentario }) {
      const nuevoArrayComentario = [...state.nuevoArrayComentario];
      nuevoArrayComentario[indice] = comentario;
      state.nuevoArrayComentario = nuevoArrayComentario;
    }
  },

  actions: {

    //Acción para eliminar un registro
    eliminarComentario({ commit, state }, id) {
      const { nuevoArrayComentario } = state;
      const borrarRegistro = nuevoArrayComentario.findIndex((o) => o.id === id);
      commit("ELIMINAR_COMENTARIO", borrarRegistro);
      alert("Comentario eliminada");
    },

    //Modificar o actualizar registro
    modificar_Comentario({ commit, state }, comentario) {
      const { nuevoArrayComentario } = state;
      const { id } = comentario;
      const indiceComentario = nuevoArrayComentario.findIndex((o) => o.id === id);
      commit("MODIFICAR_COMENTARIO", { indice: indiceComentario, comentario });
    },

    //Construir lo que es los comentarios paso-4
    async get_Juegos({ commit }) {

      const url = "/games.json";
      const playJuegos = await axios.get(url);
      const { data: juegos } = playJuegos;
      commit("SET_JUEGOS", juegos);
    }

  },
  getters: {// paso-5 hacer los getters (video-2)
    getJuegosyComentarios(state) {
      const { nuevoArrayJuego, nuevoArrayComentario } = state;
      const getFullData = []
      nuevoArrayComentario.forEach(comentario => {
        const juegoConComentario = nuevoArrayJuego.find(game => game.nombre === comentario.nombre);

      //Unimos el juego con los comentarios del modal
        const juegoYcomentarioJuntos = {
          infoUsuario: { ...comentario },
          infoJuego: { ...juegoConComentario },
        };

        getFullData.push(juegoYcomentarioJuntos);

      });

      return getFullData;
    },
    // Va al bloque modificar comentario
    getComentarioById: (state) => (id) => {
      const { nuevoArrayComentario } = state;
      const comentario = nuevoArrayComentario.find((o) => o.id === id);
      return comentario;
    }
  }
});
store.dispatch("get_Juegos");

export default store;
