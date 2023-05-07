<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "my-button"
})
</script>

<style lang="scss" scoped>
.btn {
    padding: 1rem 1.5rem;
    background: none;
    color: teal;
    border: 1px solid teal;
    border-radius: 3px;
}
</style>