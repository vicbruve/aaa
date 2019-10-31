<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item @click="onClickIcon"
        ><van-icon name="chat" />
        <div>首页</div></van-tabbar-item
      >
      <div v-if="billMode === 'watch'" class="billBox">
        <van-tabbar-item@click="onClickIcon" 
          ><van-icon name="cart-o" />
          <div>流水</div></van-tabbar-item
        >
      </div>
      <div v-if="billMode === 'edit'" class="billBox">
        <van-tabbar-item icon="cart-o" @click="onClickIcon"
          >记账</van-tabbar-item
        >
      </div>
      <van-tabbar-item icon="cart-o" @click="onClickIcon">我的</van-tabbar-item>
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

  @Watch("this.route.name", { immediate: true, deep: true })
  onModeChange(newVal: any, oldVal: any) {
    this.billMode === "";
  }
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
