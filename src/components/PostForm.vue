<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input v-model="newPost.title" class="input" type="text" placeholder="Название" />
        <input v-model="newPost.body" class="input" type="text" placeholder="Описание" />
        <button class="btn" @click="addPost">Создать</button>
    </form>
</template>

<script lang="ts">

export default {

    data() {
        return {
            newPost: {
                title: "" as string,
                body: "" as string
            }
        }
    },
    methods: {
        addPost() {
            if ((this as any).newPost.title && (this as any).newPost.body) {
                const newPost = { id: new Date(), ...(this as any).newPost };
                (this as any).$emit('addPost', newPost);
                (this as any).newPost = { title: "", body: "" };
            }

        }
    }
}
</script>

<style scoped>
.form {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
}

.btn {
    margin-top: 1.5rem;
    width: 8rem;
    height: 3rem;
    background: none;
    color: teal;
    border: 1px solid teal;
    align-self: flex-end;
    border-radius: 3px;
}
</style>