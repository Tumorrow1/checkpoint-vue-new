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
  <main>
    <div>
      <div v-for="ad in AppState.Ads" :key="ad.id" class="col-md-12 justify-content-end">
        <a href=""> <img :src="ad.tall" alt=""></a>
      </div>
    </div>
    <router-view />
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
