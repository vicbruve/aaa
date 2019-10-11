<template>
  <div class="home">
    <div class="headimg">
      <van-image
        round
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="cover"
      />
    </div>
    <div class="inputbox">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
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
    <div class="confirm">
      <van-button type="info">信息按钮</van-button>
      <van-button type="info">信息按钮</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {
  @Prop(String)
  username?: string;

  @Prop(String)
  password?: string;
}
</script>

<style lang="scss" scoped>
.home {
  .inputbox {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .confirm {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
