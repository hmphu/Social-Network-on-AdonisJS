'use strict'
const Post = use('App/Models/Post')

class ApiController {
  async initialApp({auth}){
    try{
      const latestPosts = await Post.query().where('user_id', '=', 1).fetch()
      return {
        userInfo: auth.user,
        latestPosts
      }
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = ApiController