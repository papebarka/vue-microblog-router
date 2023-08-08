import { ref } from 'vue'
import { testPosts } from './posts.js'

export function usePosts() {
    const posts = ref(testPosts)

    const addPost = (post) => {
        posts.value.push(post)
    }
    return {
        posts,
        addPost
    }
}