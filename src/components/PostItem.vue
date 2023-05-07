<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>

<script lang="ts">
import { IPost } from "@/types/index"
import { defineComponent } from "vue";
export default  defineComponent({
    props: {
        post: {
            type: Object as () => IPost,
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>