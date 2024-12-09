import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"



class ProfileService {
    async getprofile(id) {
        const response = await api.get(`api/profiles/${id}`)
        logger.log(`got profiles`, response.data)
        AppState.activeProfile = response.data
    }

    async getPostsByProfile(id) {
        const response = await api.get(`api/profiles/${id}/posts`)
        logger.log(`got profile's posts`, response.data)

    }
}


export const profileService = new ProfileService