<template>
    <div class="post" v-for="post in posts">
        <div><strong>Название:</strong> {{ post.title }}</div>
        <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
</template>

<script lang="ts">
import { IPost } from "@/types/index"

export default ({
    props: {
        posts: {
            type: Object as () => IPost[],
            required: true
        },
    },
});

</script>
<style lang="scss" scoped>
.post {
    padding: 1.5rem;
    border: 2px solid teal;
    margin-top: 1.5rem;
}
</style>