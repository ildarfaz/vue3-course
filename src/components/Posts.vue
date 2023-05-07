<template>
    <div v-if="posts.length">
        <h3>Список постов</h3>
        <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
    </div>
    <h3 v-else class="warning">Список постов пуст</h3>
</template>

<script lang="ts">
import { IPost } from "@/types/index"
import PostItem from "@/components/PostItem.vue";
import { defineComponent } from "vue";
export default defineComponent({
    components: { PostItem },
    props: {
        posts: {
            type: Object as () => IPost[],
            required: true
        },
    },
});

</script>
<style lang="scss" scoped>
h3 {
    margin-top: 1.5rem;
}
.warning {
    color: red;
}
</style>