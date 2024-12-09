<script setup>
import { AppState } from '@/AppState';
import PostsCard from '@/components/PostsCard.vue';
import { Post } from '@/models/PostsModel';
import { ProfileModel } from '@/models/ProfileModel';
import { postsService } from '@/services/PostsService';
import { profileService } from '@/services/ProfileService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { applyStyles } from '@popperjs/core';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()




const id = route.params.profileId

const profile = computed(() => AppState.activeProfile)
const post = computed(() => AppState.Posts)
// TODO fire off request to get profile by id

onMounted(() => {
    profileService.getprofile(id)
    profileService.getPostsByProfile(id)
    console.log(profile);

})


// TODO fire off request to get posts by profile id

// function setProfile(){
//     profileService.setProfile(props.profileProp)
// }


</script>


<template>
    <div>


    </div>
    <div class="card col-8 align-content-center" v-if="profile">
        <img :src="profile.coverImg" class="profile-coverImg" alt="">
        <img v-if="profile" :src="profile.picture" class="profile-picture" alt="...">
        <h5 class="card-title">{{ profile.name }}</h5>
        {{ profile.class }}
        <div class="card-body">

            <p>{{ profile.bio }}</p>
            <p v-if="profile.graduated"><span class="mdi mdi-school"></span></p>
            <a :href="profile.github" v-if="profile.github"><span class="mdi mdi-github"></span></a>
            <a :href="profile.linkedIn" v-if="profile.linkedIn"><span class="mdi mdi-linkedin"></span></a>
            <a href="#" class="btn btn-primary">Go somewhere</a>

            <section class="row">
                <div v-for="post in Post" :key="post.id" class="col-md-4 mb-3">
                    <PostsCard :post-prop="post" />
                </div>
            </section>
        </div>
    </div>
</template>




<style lang="scss" scoped>
.profile-picture {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;

}

.profile-coverImg {
    height: 25rem;
    object-fit: cover;

}
</style>