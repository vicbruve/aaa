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
          v-model="userId"
          right-icon="contact"
          label="账号"
          placeholder="请输入账号"
        />

        <van-field
          v-model="password"
          right-icon="bag-o"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <div class="confirm">
      <van-button type="info">登陆</van-button>
      <van-button type="info">注册</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "login",
  components: {}
})
export default class extends Vue {
  private userId: string = "";
  private password: string = "";
}
</script>

<style lang="scss" scoped>
.home {
  .headimg {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .inputbox {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .confirm {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-button {
      margin: 0 30px 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
