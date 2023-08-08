<script setup>
    //import { RouterView } from 'vue-router'
    import { testPosts } from '../data/posts.js'
</script>

<template>
    <main>
        Dans Posts
        <ul>
            <li
                v-for="post in testPosts"
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