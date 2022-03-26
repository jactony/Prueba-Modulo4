<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: #25406f">
      <div class="container">
        <a class="navbar-brand" href="#">GamePC</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <i class="bi bi-house-door-fill"></i>
                <router-link to="/"> Home</router-link> |</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/opinion">
                  <i class="bi bi-chat-text-fill"></i> Comentarios</router-link> |</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/administracion">
                  <i class="bi bi-gear-fill"></i> Administración</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: #b1c6db;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  background-color: rgb(203, 218, 223);
}
</style>