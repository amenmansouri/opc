<template>
  <InputField
    :placeholder="'typing a key to search'"
    :label="'Search'"
    :value="search"
    :onChange="setSearch"
  />
  <button @click="fetch(search)">search</button>
  <div v-if="search.length===0">
      press key to search for programs ! :)
      
  </div>
  <ProgramCard v-else
    :key="program?.id"
    v-for="program in programs"
    :program="program"
  />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import ProgramCard from "./ProgramCard.vue";
import { ActionTypes } from "../store/actions";
import InputField from "./InputField.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ProgramList",
  components: { ProgramCard, InputField },
  data: () => {
    return { search: "game" as string };
  },
  setup: () => {
    const store = useStore();
    const fetch = (search: string) => {
      store.dispatch(ActionTypes.GetProgramItems, search);
    };
    const programs = computed(() => store.state.programs);
    return { programs, fetch };
  },
  methods: {
    setSearch(event: InputEvent): void {
      this.search = (event.target as HTMLInputElement).value;
    },
  },
});
</script>
