<template>
    <form class="form" @submit.prevent>
        <h3>Создание поста</h3>
        <my-input v-model:value="newPost.title" type="text" placeholder="Название" />
        <my-input v-model:value="newPost.body" type="text" placeholder="Описание" />
        <my-button class="mybtn" @click="addPost">Создать</my-button>
    </form>
</template>

<script lang="ts">
import { IPostForm, INewPost } from "@/types/index";
import { defineComponent } from "vue";
export default defineComponent({
    data(): IPostForm {
        return {
            newPost: { title: "", body: "" } as INewPost,
        }
    },
    methods: {
        addPost(): void {
            if ((this as any).newPost.title && (this as any).newPost.body) {
                const newPost = { id: new Date().getTime(), ...(this as any).newPost };
                (this as any).$emit('addPost', newPost);
                (this as any).newPost = { title: "", body: "" };
            }

        }
    }
})
</script>

<style lang="scss" scoped>
.form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
}

.mybtn {
    margin-top: 1.5rem;
    align-self: flex-end;
}
</style>