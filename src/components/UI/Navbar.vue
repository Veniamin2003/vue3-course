<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 10px;" @click="$router.push('/store')">store</my-button>
      <my-button style="margin-left: 10px;" @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #9fbebe;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>