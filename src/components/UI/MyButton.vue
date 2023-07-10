<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
  padding: 10px 25px;
  background: none;
  border: 1px solid teal;
  transition-duration: 0.5s;
}
</style>