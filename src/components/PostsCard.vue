<script setup>



import { Post } from '@/models/PostsModel';
import { postsService } from '@/services/PostsService';


defineProps({
    postProp: { type: Post, required: true }
})
</script>

<template>
    <div class="card" style="width">
        <div class="card-body">
            <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
                <img :src="postProp.imgUrl" class="creator-img" alt="img">
            </router-link>

            <div class="d-flex align-items-center justify-content-between">
                <h3 class="card-titel">
                    {{ postProp.creator.name }}
                </h3>
                <span>
                    {{ postProp.timestamp }}
                </span>

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