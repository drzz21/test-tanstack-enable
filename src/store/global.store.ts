import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore(
  "globalStore",
  () => {
    const globalInfo = ref<any>({
      id_solicitud: "",
      // id_solicitud: "55",
      folio: "123456",
      // id_solicitud: "69",
      // folio: "",
    });

    const assignGlobalValue = (valName: string, newVal: string) => {
      globalInfo.value[valName] = newVal;
    };
    const id_solicitud = computed(() => globalInfo.value.id_solicitud);
    const folio = computed(() => globalInfo.value.folio);

    const hasIdSolicitud = computed(() => id_solicitud.value !== "");

    return {
      globalInfo,
      assignGlobalValue,
      id_solicitud,
      folio,
      hasIdSolicitud,
    };
  }
);
