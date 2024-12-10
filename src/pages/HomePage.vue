<script setup>

import { AppState } from '@/AppState';
import PostsCard from '@/components/PostsCard.vue';
import { ProfileModel } from '@/models/ProfileModel';
import { postsService } from '@/services/PostsService';
import { profileService } from '@/services/ProfileService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import PostForm from '@/components/PostForm.vue';

import { computed, onMounted } from 'vue';

const Posts = computed(() => AppState.Posts);
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPage)
let serch = ``

onMounted(() => {
  getposts()
})



async function serchPosts(event) {
  try {
    event.preventDefault()
    getposts()

    console.log()

  }
  catch (error) {
    Pop.error(error);
  }
}


async function getposts(pageNumber = 1) {
  try {
    await postsService.getposts(pageNumber, serch)
    logger.log()

  }
  catch (error) {
    Pop.error(error);
    logger.error(`[]`, error)
  }
}

</script>

<template>
  <div class="container">
    <nav>
      <form class="form-control" @submit="serchPosts"><input @change="e => { serch = e.target.value }" type="text">serch
      </form>
      <PostForm />
    </nav>
    <section class="row">
      <div v-for="post in Posts" :key="post.id" class="col-md-12 my-1">
        <PostsCard :postProp="post" />
      </div>
    </section>

    <div class="d-flex gap-5 align-items-center mb-3">
      <button @click="getposts(// @ts-ignore
      currentPage - 1)" class="btn btn-primary">previous</button>
      <span fw-bold>{{ currentPage }} of {{ totalPages }}</span>
      <button @click="getposts(// @ts-ignore
        // @ts-ignore
      currentPage + 1)" class="btn btn-primary">Next</button>
    </div>
  </div>

</template>

<style scoped lang="scss"></style>
