<template>
  <div class="edi">
    <h1>Administración Comentarios</h1>

    <!-- {{getJuegosyComentarios}} -->

    <div
      v-if="getJuegosyComentarios.length == 0"
      class="alert alert-danger w-75 m-auto"
    >
      Aún no se ingresa ningún comentario de gamePC
    </div>

    <table v-else class="table w-75 m-auto table-striped table-hover">
      <thead class="table-primary">
        <tr>
          <th>Id</th>
          <th>Usuario</th>
          <th>Juego PC</th>
          <th>Tu comentario</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(adminComentario, i) in getJuegosyComentarios" :key="i">
          <td>{{ adminComentario.infoUsuario.id }}</td>
          <td>{{ adminComentario.infoUsuario.nombreUsuario.nombre }}</td>
          <td>{{ adminComentario.infoUsuario.idGame }}</td>
          <td>{{ adminComentario.infoUsuario.comento }}</td>
          <td>
            <button
              @click="EditarComentario(adminComentario.infoUsuario.id)"
              class="btn btn-primary mx-3">Editar
            </button>

            <button
              @click="eliminarComentario(adminComentario.infoUsuario.id)"
              class="btn btn-danger">Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <hr />

    <!-- {{getJuegosyComentarios}} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getJuegosyComentarios"]),
  },
  
/* Aquí envía al store (index.js) */
  methods: {
    ...mapActions(["eliminarComentario"]),
    /* alert("Comentario eliminada"); */

    EditarComentario(id) {
      alert(id);
      this.$router.push(`/editar/${id}`);
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #25406f !important;
  color: #e0eaf3;
}
.edi {
  padding-top: 40px;
}
</style>