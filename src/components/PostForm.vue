<script setup>
import { ref } from 'vue';
import { postsService } from '../services/PostsService';
import { logger } from '@/utils/Logger';

const editablePostData = ref({
    body: '',
    imgUrl: '',
})

async function CreatePost() {
    try {
        await postsService.CreatePost(editablePostData.value)

    }
    catch (error) {
        logger.error(error)
    }
}

</script>


<template>
    <form @submit.prevent="CreatePost">
        <label>
            Title:
            <input v-model="editablePostData.imgUrl" type="url" />
        </label>
        <label>
            Content:
            <textarea v-model="editablePostData.body" required></textarea>
        </label>
        <button type="submit">Create Post</button>
    </form>


</template>


<style lang="scss" scoped></style>