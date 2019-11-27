<template>
  <div>
    <van-popup v-model="showPicker" position="bottom">
      <van-area :area-list="areaList" value="110101" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "vantTimePicker"
})
export default class VanTimePicker extends Vue {
  private showPicker: boolean = false;
}
</script>

<style scoped></style>
