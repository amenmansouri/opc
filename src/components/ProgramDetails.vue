<template>
  <div >
    <div> {{program?.title[0]?.value}} -- Seasons  ( {{ program?.seasons.length  }} -- {{ program?.parentalrating}}) </div>
    <div :key="index" v-for="(season,index) in program?.seasons">
        <div>{{season?.menutitle[0]?.value}} ____ {{season?.subtitle}}</div>
        <div :key="index" v-for="(episode,index) in season?.episodes">
          <br/>
          <div>________ {{episode.title[0]?.value}}__ {{episode?.subtitle}}</div>
          <br/>
          <div>________ {{episode.pitch}}</div>
          <br/>
          <div>________ {{episode.summary}}</div>
          <br/>
          <div :key="index" v-for="(desc,index) in episode?.descriptions">{{Object.keys(desc)}}</div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ActionTypes } from "@/store/actions";
import {ProgramDetails} from "../store/state"
import { computed, defineComponent, onMounted } from "vue"; 
import { useStore } from "vuex";
export default defineComponent({
  name: "ProgramDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
    category:{
      type: String,
      required: true,
    }
  },

  methods: {
    formatDuration(value: string): string {
      return value.substring(2, value.length).toLowerCase();
    },
    formatUrl(value: string): string {
      return "https://statics.ocs.fr".concat(value);
    },
  },
  setup:(props)=>{
    const store=useStore()
    onMounted(()=>{ store.dispatch(ActionTypes.GetProgramItem,props)})
    const program = computed(():ProgramDetails => store.state.programDetails);
    return { program };    
  }
  
});
</script>