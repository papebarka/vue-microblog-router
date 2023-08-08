<script setup>
import { reactive } from 'vue'
import { usePosts } from '../data/usePosts.js'

const postStore = usePosts()

const newPost = reactive(
    {
        title: "",
        content: ""
    }
)

const submit = () => {
    postStore.addPost({
        id: postStore.posts.value.length + 1,
        title: newPost.title,
        content: newPost.content
    })
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