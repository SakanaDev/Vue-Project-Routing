<script>
import { RouterLink, RouterView } from 'vue-router';

/* import Weather from "./components/Weather.vue";
import Map from "./components/Map.vue";
import About from './components/About.vue';

export default {
  data() {
    return {
      showWeather: true,
      showMap: false,
      showAbout: false,
    };
  },
  components: {
    Weather,
    Map,
    About,
  },
  methods: {
    toggleView(view) {
      if (view === 'weather') {
        this.showWeather = true;
        this.showMap = false;
        this.showAbout = false;
      } else if (view === 'map') {
        this.showWeather = false;
        this.showMap = true;
        this.showAbout = false;
      } else if (view === 'about') {
        this.showWeather = false;
        this.showMap = false;
        this.showAbout = true;
      }
    },
  },
}; */
</script>

<template>
  <header>
    <h1>Latamergence</h1>
    <div class="menu">
      <!-- <button @click="toggleView('weather')">Tiempo</button>
      <button @click="toggleView('map')">Mapa</button>
      <button @click="toggleView('about')">About</button> -->
      <RouterLink to="/weather" class="link">Tiempo</RouterLink>
      <RouterLink to="/map" class="link">Mapa</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
    </div>
  </header>
  <div>
    <!-- <Weather v-if="showWeather"></Weather>
    <Map v-if="showMap"></Map>
    <About v-if="showAbout"></About> -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
  header {
    color: white;
    background: #084558;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    height: auto;
    padding: 0.0001em 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1em 1em 1em 1em;
    margin-right: 1.55em;
    margin-left: 1.55em;
    margin-top: 1em;
    margin-bottom: 0em;
    position: sticky;
    z-index: 10;
  }

  header .menu {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 14px 0px;
    height: 80%;
    gap: 1em;
  }

  header button {
    padding: 20px;
    border: none;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: large;
    font-weight: 500;
    border-radius: 1em;
  }

  header button:hover {
    background: #125569;
  }

  header .link {
    padding: 20px;
    border: none;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: large;
    font-weight: 500;
    border-radius: 1em;
    text-decoration: none;
  }

  header .link:hover {
    background: #125569;
  }
</style>
