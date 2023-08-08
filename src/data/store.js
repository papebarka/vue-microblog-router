import { reactive, computed } from 'vue'
import { testPosts } from './posts.js'

class Store{
    constructor(){
        this.state = reactive({
            posts: testPosts,
            currentTag: null
        })
    }

    setHashtag(tag){
        this.state.currentTag = tag
    }

    likePost(post){
        const rightPost = this.state.posts.find( x => x.id === post.id)
        rightPost.likes += 1
    }

    get filteredPosts(){
        if (!store.state.currentTag){
            return store.state.posts
        }
            return store.state.posts.filter(
            post => post.hashtags.includes(store.state.currentTag)
        )
    }
}

export const store = new Store()