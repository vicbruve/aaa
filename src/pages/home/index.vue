<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "home",
  components: {}
})
export default class extends Vue {}
</script>

<style lang="scss" scoped></style>
