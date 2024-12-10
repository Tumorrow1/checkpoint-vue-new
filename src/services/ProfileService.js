import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/PostsModel.js"



class ProfileService {
    async getprofile(id) {
        const response = await api.get(`api/profiles/${id}`)
        logger.log(`got profiles`, response.data)
        AppState.activeProfile = response.data
    }

    async getPostsByProfile(id) {
        const response = await api.get(`api/profiles/${id}/posts`)
        logger.log(`got profile's posts`, response.data)
        AppState.Posts = response.data.posts.map(p => new Post(p))
        AppState.currentPage = response.data.page
        AppState.totalPage = response.data.totalPages

    }

    async getPosts(profileId, page) {
        const response = await api.get(`api/profiles/${profileId}/posts?page=${page}`)
        logger.log(`got profile's posts`, response.data)
        AppState.Posts = response.data.posts.map(p => new Post(p))
        AppState.currentPage = response.data.page
        AppState.totalPage = response.data.totalPages
    }
}


export const profileService = new ProfileService