<template>
  <div class="home">
    <ProgramList/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProgramList from '../components/ProgramList.vue';
import InputField from '../components/InputField.vue';
@Options({
  components: {
    ProgramList,
    InputField
  },
})
export default class Home extends Vue {}
</script>
