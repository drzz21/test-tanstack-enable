import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', () => {
	const count = ref<number>(0);
	const responseData = ref<any>(null);
	const doubleCount = computed(() => count.value * 2);

	const increment = () => {
		count.value++;
	};

	const decrement = () => {
		count.value--;
	};

	const fetchInfo = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		responseData.value = await res.json();
	};

	return { count, responseData, doubleCount, increment, decrement,fetchInfo };
});
