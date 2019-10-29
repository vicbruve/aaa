<template>
  <div class="registerBox">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "register",
  components: {}
})
export default class extends Vue {
  private userId: string = "";
  private password: string = "";
}
</script>

<style lang="scss" scoped>
.registerBox {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
