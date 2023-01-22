<template>
    <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
</template>

<script lang="ts">
import { Post } from "@/components/models/Post"

export default ({
    props: {
        posts: {
            type: Object as () => Post[],
            required: true
        },
    },
});
</script>

<style scoped>
.post {
    padding: 1.5rem;
    border: 2px solid teal;
    margin-top: 1.5rem;
}
</style>