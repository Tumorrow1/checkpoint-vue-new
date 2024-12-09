export class Post {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    this.likes = data.likes
    this.id = data.id
    this.timestamp = new Date(data.createdAt).toDateString()
    this.name = data.name


  }
}


