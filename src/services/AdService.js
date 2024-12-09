import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { Ad } from "@/models/AdsModel.js";
import { AppState } from "@/AppState.js";

class Adservice {
    // async getAdByCreatorId(profileId) {
    // const response = await api.get(`api/profiles?creatorId=${profileId}`)
    // logger.log(`got ad by creator Id, response.data`)

    async getAds() {
        const response = await api.get(`api/ads`)
        // return response.data


        // logger.log(`got ads`, response.data)
        const ads = response.data.map(adPOJO => new Ad(adPOJO))

        AppState.Ads = ads
        // AppState.currentPage = response.data.page
        // AppState.totalPage = response.data.totalPages
    }
}




export const AdService = new Adservice()