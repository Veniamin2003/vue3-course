<template>
  <div>
    <div>
      <h1>Пост с ID = {{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>