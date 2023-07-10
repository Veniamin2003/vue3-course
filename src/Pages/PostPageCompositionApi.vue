<template>
  <div >
    <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск..."/>

    <div class="app__btns">
      <my-button>
        Создать пост
      </my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"/>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts"
               v-if="!isPostsLoading"/>
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue"
import PostForm from "@/components/PostForm.vue"
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import {onMounted, ref} from "@vue/runtime-core";
import axios from "axios";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm
  },

  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ]
    }
  },

  setup() {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);
    let limit = 10;
    debugger
    onMounted(async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: 1,
            _limit: limit,
          }
        });
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
        posts.value = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        isPostsLoading.value = false;
      }
    });


    //const {posts, isPostsLoading, totalPages} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      isPostsLoading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }

}
</script>
<style>


.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}

</style>