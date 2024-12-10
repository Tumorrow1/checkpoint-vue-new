<script setup>



import { AppState } from '@/AppState';
import { Post } from '@/models/PostsModel';
import { postsService } from '@/services/PostsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';

import { computed } from 'vue';


const props = defineProps({
    postProp: { type: Post, required: true }

})
const Posts = computed(() => AppState.Posts)
const account = computed(() => AppState.account)

async function deleatPost() {
    try {
        const message = `are you sure you want to deleat`
        const confirmed = await Pop.confirm(message)
        if (!confirmed) { return }
        const postId = props.postProp.id
        await postsService.deleatPost(postId)


    }
    catch (error) {
        Pop.meow(error);
    }
}
</script>

<template>
    <div class="card" style="width">
        <div class="card-body">
            <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
                <img :src="postProp.creator.picture" class="creator-img" alt="img">
            </router-link>

            <div class="d-flex align-items-center justify-content-between">
                <h3 class="card-titel">
                    {{ postProp.creator.name }}
                </h3>
                <div v-if="postProp.imgUrl">
                    <img class="img-fluid" :src="postProp.imgUrl" alt="">
                </div>
                <span>
                    {{ postProp.timestamp }}
                </span>
                <div class="d-flex justify-content-end gap-3 align-items-center">
                    <button v-if="postProp.creatorId == account?.id" @click="deleatPost()" class="btn btn-danger"
                        type="button" title="Delete Post">Delete</button>
                </div>

            </div>
            <p class="card-text">{{ postProp.body }}</p>
            <!-- TODO make the button work - send a post request to the server -->
            <button class="d-flex btn card-link justify-content-end">
                💗 {{ postProp.likes.length }}
            </button>

        </div>

    </div>


</template>


<style lang="scss" scoped>
.card-img-top {
    height: 30dvh;
    object-fit: cover;
}

.creator-img {
    height: 5rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}
</style>

export class