<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
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
            v-model="userName"
            right-icon="contact"
            label="手机号"
            placeholder="请输入手机号"
          />

          <van-field
            v-model="userPassword"
            right-icon="bag-o"
            type="password"
            label="密码"
            placeholder="请输入密码"
          />
        </van-cell-group>
      </div>
      <div class="confirm">
        <van-button type="info" @click="AppLogin">登陆</van-button>
        <van-button type="info" @click="handleRegister">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { login } from "@/api/auth";
import { validateName, validatePassword } from "@/utils/validator";
import { TokenModule } from "@/store/modules/token";
import { userInfoModoule } from "@/store/modules/userinfo";

@Component({
  name: "login",
  components: {}
})
export default class extends Vue {
  private userName: string = "";
  private userPassword: string = "";

  private handleRegister() {
    this.$router.push({
      path: "/register"
    });
  }

  private AppLogin() {
    if (!validateName(this.userName)) {
      return this.$dialog.alert({
        message: "手机号码格式不正确，请重新输入"
      });
    }

    if (!validatePassword(this.userPassword)) {
      return this.$dialog.alert({
        message: "密码长度至少为6位，请重新输入"
      });
    }

    login(this.userName, this.userPassword)
      .then(res => {
        TokenModule.saveUserToken(res.data.token);
        userInfoModoule.saveUsername(this.userName);
        this.$router.push("/home");
      })
      .catch(error => {
        this.$dialog.alert({ message: "登陆失败" });
      });
  }
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
