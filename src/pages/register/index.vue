<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="registerInputbox">
      <van-cell-group>
        <van-field
          v-model="userName"
          required
          clearable
          label="手机号"
          placeholder="请输入注册手机号"
        />

        <van-field
          v-model="nickname"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="userPassword"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />

        <van-field
          v-model="userPasswordAn"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          required
        />
      </van-cell-group>
    </div>
    <div class="registerButton" @click="AppRegister">
      <van-button type="info" size="large">注册</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  validateName,
  validatePassword,
  validateSamePassword
} from "@/utils/validator";
import { register, login } from "@/api/auth";

@Component({
  name: "register",
  components: {}
})
export default class extends Vue {
  private userName: string = "";
  private userPassword: string = "";
  private userPasswordAn: string = "";
  private nickname: string = "";

  public AppRegister() {
    if (!validateName(this.userName)) {
      return this.$dialog.alert({
        message: "手机号码格式不正确，请重新输入"
      });
    }

    if (!validateName(this.userName)) {
      return this.$dialog.alert({
        message: "手机号码格式不正确，请重新输入"
      });
    }

    if (!this.nickname) {
      return this.$dialog.alert({
        message: "用户名不能为空，请重新输入"
      });
    }

    if (!validatePassword(this.userPassword)) {
      return this.$dialog.alert({
        message: "密码长度至少为6位，请重新输入"
      });
    }

    if (!validateSamePassword(this.userPassword, this.userPasswordAn)) {
      this.userPassword = "";
      this.userPasswordAn = "";
      return this.$dialog.alert({
        message: "两次输入密码不一致"
      });
    }

    register(this.userName, this.userPassword, this.nickname);
  }
}
</script>

<style lang="scss" scoped>
.registerInputbox {
  margin-left: 5%;
  margin-right: 5%;
}

.registerButton {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 100px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
