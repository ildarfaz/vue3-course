<template>
    <input :value="value" @input="updateInput" class="input" type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "my-input",
    props: {
        value: [String, Number]
    },
    methods: {
        updateInput(event: any) {
            (this as any).$emit("update:value", event.target.value);
        }
    }
})
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
}
</style>
