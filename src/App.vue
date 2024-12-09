<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import { AdService } from './services/AdService';

AdService.getAds()

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <div v-for="ad in AppState.Ads" :key="ad.id">
          <img :src="ad.tall" alt="" class="img-fluid">
        </div>
      </div>

      <div class="col-md-10">
        <router-view />
      </div>
    </div>

  </main>
  <footer class="bg-light text-dark">
    made by 🥷
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
