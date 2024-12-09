import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/PostsModel.js').Post[]} */
  Posts: [],
  currentPage: 0,
  totalPage: 0,

  // Profiles: [],

  /** @type {import('./models/ProfileModel.js').ProfileModel} */
  activeProfile: null,

  /** @type {import('./models/AdsModel.js').Ad[]} */
  Ads: [],


})

