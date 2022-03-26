<template>
  <div class="opinion">
    <!-- {{getJuegosyComentarios}} -->
    <div class="container">
      <div
        v-if="getJuegosyComentarios.length == 0"
        class="alert alert-danger w-75 m-auto">
        <h2>Aquí verás comentarios de los juegos</h2>
        <h4>!Upps!! No hay comentarios en este momento</h4>
      </div>

      <div v-else>
        <h2>Estos son tus comentarios de los juegos</h2>
    <!-- Acordeon de bootstrap -->
        <div class="accordion" id="accordionExample">
          <div
            class="accordion-item"
            v-for="(adminComentario, i) in getJuegosyComentarios"
            :key="i">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                <dt>
                  Comentario realizado por:
                  {{ adminComentario.infoUsuario.nombreUsuario.nombre }}. Para
                  el juegoPC: {{ adminComentario.infoUsuario.idGame }}
                </dt>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body text-start">
                <h5>
                  <strong> Opinión sobre el Juego: </strong
                  >{{ adminComentario.infoUsuario.comento }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- acordeon de bootstrap -->
    </div>
    <!-- {{getJuegosyComentarios}} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getJuegosyComentarios"]),
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  padding: 30px;
}

h2 {
  font-weight: bold;
}
th {
  font-size: 0.9em;
}
.about {
  padding-top: 40px;
}
</style>