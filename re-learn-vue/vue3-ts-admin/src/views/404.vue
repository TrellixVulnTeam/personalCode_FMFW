<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counter = ref(store.state.counter)
console.log(counter)
</script>

<template>
<div>404 {{ counter}}<a-button type="primary">Primary Button</a-button></div>
</template>

<style lang="scss" scoped>
</style>
