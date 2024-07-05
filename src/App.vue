<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { useGlobalStore } from './store/global.store';

import axios from 'axios';
import { toRefs, computed } from 'vue';

const globalStore = useGlobalStore();
// const { hasIdSolicitud } = toRefs(globalStore); 

const { data } = useQuery({
	queryKey: ['projects', globalStore.id_solicitud],
	queryFn: () => axios.get(`https://api.kanye.rest/`),
	enabled: computed(()=>globalStore.hasIdSolicitud),
	// enabled: true,
});


const assignId = () => {
	globalStore.assignGlobalValue('id_solicitud', '10');
};
</script>

<template>
	<div>
		id solicitud:
		{{ globalStore.id_solicitud }}
	</div>
	<div>
		has id solicitud:
		{{ !!globalStore.hasIdSolicitud }}
	</div>
	<div>
		<button @click="assignId()">assign id solicitud</button>
	</div>
	<div v-if="data">
		{{ data.data.quote }}
	</div>
</template>
