<template>
  <div>
      <h2>Modificar formulario escrito por: {{comentario.usuario.nombre}} </h2>

<div class="container p-3 mb-2 bg-secondary bg-opacity-50 text-white">
       <div class="form w-50 m-auto">
      <div>
        <label>Usuario:</label>
        <input class="form-control" v-model="comentario.usuario.nombre" />
      </div>
      <div>
        <label> Comentario realizado:</label>
        <textarea class="form-control" v-model="comentario.comento"></textarea>
      </div>

      <div class="mt-3">
        <button @click="modificarComentario" class="btn boton btn-success d-grid gap-2 mx-auto">Actualizar</button>
      </div>
    </div>
</div>
<!-- {{comentario}} -->
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    props:["id"],

    methods: {
    ...mapActions(["modificar_Comentario"]),
    modificarComentario() {
      const { comentario } = this;
      this.modificar_Comentario(comentario);
      this.$router.push("/administracion");
    },
  },

    computed: {
    ...mapGetters(["getComentarioById"]),
    comentario() {
      const { id } = this;
      return {
        ...this.getComentarioById(+id),
        nombreUsuario: { ...this.getComentarioById(+id).usuario },
      };
    },
  },
};
</script>

<style scoped>
h2{
  padding-top: 40px;
}
.container{
  max-width: 60%;
}
</style>