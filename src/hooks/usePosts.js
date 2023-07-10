import axios from "axios";
import {onMounted, ref} from "@vue/runtime-core";

export function usePosts(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);

    const fetching = async () => {
        debugger
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
    }

    /*onMounted(async () => {
        debugger
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
    });*/
    debugger

    onMounted(() => {
        console.log("sdsd")
    })

    return {
        posts, isPostsLoading, totalPages
    }

}