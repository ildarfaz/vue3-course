<template>
    <div class="app">
        <post-form @addPost="addPost" />
        <posts :posts="posts" />
    </div>
</template>

<script lang="ts">
import PostForm from "@/components/PostForm.vue";
import Posts from "@/components/Posts.vue";
import { IPost, IApp } from "@/types/index";
export default {
    components: {
        PostForm, Posts
    },
    data(): IApp {
        return {
            posts: [{ id: 0, title: "JavaScript", body: "Test" }]
        }
    },
    methods: {
        addPost(post: IPost): void {
            (this as any).posts.push(post);
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

.app {
    padding: 2rem;
    font-size: 1.8rem;
}
</style>
