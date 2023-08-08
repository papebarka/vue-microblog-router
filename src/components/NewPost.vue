<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from '../data/usePosts.js'

const postStore = usePosts()

const router = useRouter()

const newPost = reactive(
    {
        title: "",
        content: ""
    }
)

const submit = () => {
    const id = postStore.posts.value.length + 1
    postStore.addPost({
        id: id,
        title: newPost.title,
        content: newPost.content
    })
    router.push(`/posts/${id}`)
}
</script>

<template>
    <main>
        <h3>New Post</h3>
        <form @submit.prevent="submit">
            <div>
                <input
                    type="text"
                    v-model="newPost.title"
                    placeholder="Title" 
                />
            </div>
            <div>
                <textarea
                 v-model="newPost.content"
                 cols="30"
                 rows="10"
                />
            </div>

            <button>Add</button>
        </form>
    </main>
</template>

<style></style>