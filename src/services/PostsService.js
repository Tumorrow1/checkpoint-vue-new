import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/PostsModel.js";





class Postsservice {

    async deleatPost(postId) {
        const response = await api.delete(`api/posts/${postId}`)
        logger.log(`deleat car`, response.data)
    }
    async getProfilesByCreatorId(profileId) {
        const response = await api.get(`api/profiles?creatorId=${profileId}`)
        logger.log(`got profiles by creator Id, response.data`)
    }
    async getposts(pagenumber = 1, query) {
        const response = await api.get(`api/posts?page=${pagenumber}${query ? `&query=${query}` : ""}`)

        logger.log(`got posts`, response.data)
        const Posts = response.data.posts.map(postPOJO => new Post(postPOJO))
        AppState.Posts = Posts
        AppState.currentPage = response.data.page
        AppState.totalPage = response.data.totalPages
    }

    async CreatePost(editablePostData) {
        const response = await api.post(`api/posts`, editablePostData)
        logger.log(`create Post`, response.data)
    }


}




export const postsService = new Postsservice()