<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button @click="showAddPost">Создать пост</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @addPost="addPost" />
        </my-dialog>
        <posts :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script lang="ts">
import PostForm from "@/components/PostForm.vue";
import Posts from "@/components/Posts.vue";
import { IPost, IApp } from "@/types/index";
import { defineComponent } from "vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";
export default defineComponent({
    components: {
        PostForm,
        Posts,
        MyDialog,
        MyButton
    },
    data(): IApp {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
        }
    },
    methods: {
        addPost(post: IPost): void {
            (this as any).posts.push(post);
            (this as any).dialogVisible = false;
        },
        removePost(post: IPost): void {
            (this as any).posts = (this as any).posts.filter(({ id }: IPost) => id !== post.id);
        },
        showAddPost(): void {
            (this as any).dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                (this as any).posts = data;
            } catch (e) {
                alert('Ошибка');
            } finally {
                this.isPostsLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    },
}
);
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
