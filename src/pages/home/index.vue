<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item @click="enterFirstPage" to="/home/firstPage"
        ><van-icon name="wap-home-o" />
        <div>首页</div></van-tabbar-item
      >
      <div v-if="billMode === 'watch'" class="billBox">
        <van-tabbar-item @click="enterBillWatch" to="/home/billWatch"
          ><van-icon name="balance-list-o" />
          <div>流水</div></van-tabbar-item
        >
      </div>
      <div v-if="billMode === 'edit'" class="billBox">
        <van-tabbar-item @click="enterBillEdit" to="/home/billEdit"
          ><van-icon name="edit" />
          <div>记账</div></van-tabbar-item
        >
      </div>
      <van-tabbar-item @click="enterPersonal" to="/home/personal">
        <van-icon name="friends-o" />
        <div>我的</div></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "home",
  components: {}
})
export default class extends Vue {
  private billMode: string = "watch";
  private active: number = 0;

  private enterFirstPage() {}
  private enterBillWatch() {
    this.billMode = "edit";
  }
  private enterBillEdit() {}
  private enterPersonal() {}
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  .van-tabbar-item {
    font-size: 20px;
    .van-icon {
      font-size: 30px;
    }
  }
}
</style>
