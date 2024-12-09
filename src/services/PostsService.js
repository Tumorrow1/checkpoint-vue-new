import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/PostsModel.js";




class Postsservice {
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
}




export const postsService = new Postsservice()