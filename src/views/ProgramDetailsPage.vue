<template>
 <ProgramDetails/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProgramDetails from '../components/ProgramDetails.vue';
@Options({
  components: {
    ProgramDetails
  },
})
export default class ProgramDetailsPage extends Vue {}
</script>
