<script setup>
    //import { RouterView } from 'vue-router'
    import { usePosts } from '../data/usePosts.js'

    const postStore = usePosts()

    const posts = postStore.posts
</script>

<template>
    <main>
        Dans Posts
        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
            >
                <router-link :to="`/posts/${post.id}`">
                    {{ post.title }}
                </router-link>
            </li>
        </ul>
        <RouterView />
    </main>
</template>

<script></script>