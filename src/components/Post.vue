<script setup>
import { useRoute } from 'vue-router'
import { testPosts } from '../data/posts.js'

const route = useRoute()

const post = testPosts.find( elt => elt.id === parseInt(route.params.id, 10))

</script>

<template>
    <main>
        <h4>{{ post.title }}</h4>

        <p>
            {{ post.content }}
        </p>
    </main>
</template>

<script></script>