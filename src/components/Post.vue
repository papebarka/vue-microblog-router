<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '../data/usePosts.js'

const route = useRoute()

const postStore = usePosts()

const getPost = computed( () => {
    return postStore.posts.value.find( elt => elt.id === parseInt(route.params.id, 10))
})

const post = getPost
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