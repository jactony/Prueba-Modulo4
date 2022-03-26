<template>
  <div class="home">
    <h1>Listado de Juegos de PC</h1><br />

    <!-- {{$store.state}} -->
    <div class="container bg-success p-2 text-dark bg-opacity-25 pt-3">
      <div class="row galeria">
        <div class="col" v-for="(game, i) in nuevoArrayJuego" :key="i">
          <img
            :src="(Url = game.background_image)"
            class="card-img-top"
            alt="..."/>
            
          <div class="card-body border border-dark bg-white">
            <ul class="list-group list-group-flush">
              <h5 class="card-title fw-bold">{{ game.name }}</h5>
              
              <li class="list-group-item">Rating: {{ game.rating }}</li>
              <li class="list-group-item">Creación: {{ game.released }}</li>
              <li class="list-group-item">Actualización: {{ game.updated }}</li>
            </ul>

            <button
              @click="juegosSeleccionado = game.name"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn boton btn-success d-grid gap-2 mx-auto">
              Comentar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Ventana Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content miModal p-4">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
          <div class="modal-body miModal w-80 m-auto">
            <h5>Opinión del video-juego:</h5>
            <h3>{{ juegosSeleccionado }}</h3>
            <hr />
            <div>
              <label>Ingresa tu nombre: </label>
              <input
                v-model="comentario.usuario.nombre"
                class="form-control"
                type="text"/>
            </div>
            <div class="p-4">
              <label>Opinión o comentario</label>
              <textarea
                v-model="comentario.comento"
                class="form-control"></textarea>
            </div>
            <div class="mt-4">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="agregarComentario"
                class="btn btn-primary">
                Agregar comentario
              </button>

              <button
                type="button"
                class="btn btn-danger m-3"
                data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
          <!-- {{ comentario }} -->
        </div>
      </div>
    </div>
    <hr />

    <!-- {{ nuevoArrayComentario }} -->
    <hr />
    <!-- {{ getJuegosyComentarios }} -->
    <hr />
  </div>
</template>

<script>
// @ es un alias para acceder a la ruta ../src
/* import HelloWorld from '@/components/HelloWorld.vue'; */
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "HelloView",
  // aqui va lo del mapMutations
  methods: {
    ...mapMutations(["AGREGAR_COMENTARIO"]),
    agregarComentario() {
      const { juegosSeleccionado, Url } = this;
  // resolver problema de mutabilidad paso-5
      const comentario = {
        ...this.comentario,
        nombreUsuario: { ...this.comentario.usuario },
      };
      comentario.idGame = juegosSeleccionado;
      comentario.imageUrl = Url;
      comentario.id = Math.floor(Math.random() * 999);

      this.AGREGAR_COMENTARIO(comentario);

  // Limpiar los campos del modal del nombre y comentario
      this.comentario.usuario = { nombre: "" };
      this.comentario.comento = "";
    },
  },

  //Aquí va el comentario del modal
  data() {
    return {
      juegosSeleccionado: null,
      comentario: {
        usuario: {
          nombre: "",
        },
        comento: "",
      },
    };
  },
  //Hasta aquí *****

  computed: {
    ...mapState(["nuevoArrayJuego", "nuevoArrayComentario"]),
    ...mapGetters(["getJuegosyComentarios"]),
  },
};
</script>

<style>
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  text-align: left;
}
h1 {
  font-weight: bold;
}
.home {
  padding-top: 40px;
}
.miModal {
  background-color: rgb(219, 210, 197);
}

@media (max-width: 998px) {
  .galeria {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    margin: auto;
    text-align: left;
  }
}

@media (max-width: 720px) {
  .galeria {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 100%;
    margin: auto;
    text-align: left;
  }
}
</style>