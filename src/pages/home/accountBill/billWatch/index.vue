<template>
  <div class="watchBill">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <van-button @click="getB">get</van-button>
      <van-button @click="postB">post</van-button>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      </van-collapse>
      <div class="billContent" v-for="item in list" :key="item.category">
        <p v-if="item.type == 2">这是时间</p>
        <router-link
          class="billBody"
          :to="{ path: '/home/billCorret', query: { id: item.category } }"
        >
          <div class="billIco">
            <van-image
              width="85"
              height="70"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <div class="billInfo">
            <span>{{ getCategory(item.category) }}</span>
            <p>{{ item.remark }}</p>
          </div>
          <div class="billAccount">
            <span>{{ item.money }}</span>
          </div>
        </router-link>
        <van-divider content-position="right" />
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getBill, postBill } from "@/api/bill";
import { userInfoModoule } from "@/store/modules/userinfo";
@Component({
  name: "BillWatch"
})
export default class BillWatch extends Vue {
  private a = "这是看账";
  private loading: boolean = false;
  private finished: boolean = true;
  private username: string = userInfoModoule.username;
  private list: any[] = [
    { remark: "hhh", money: 100, category: 1 },
    { category: 2 },
    { category: 3 },
    { category: 4 },
    { category: 5 },
    { category: 6 },
    { category: 7 }
  ];
  private activeNames: string[] = ["1"];

  private getB() {
    getBill(this.username, "0", 0).then(result => {
      this.list = result.data;
    });
  }
  private postB() {
    postBill("总资产", 1111, "1111", this.username, "0", 0);
  }
  private getCategory(a: number) {
    let category: string = "";
    switch (a) {
      case 0:
        category = "今天是星期日";
        break;
      case 1:
        category = "今天是星期一";
        break;
      case 2:
        category = "今天是星期二";
        break;
      case 3:
        category = "今天是星期三";
        break;
      case 4:
        category = "今天是星期四";
        break;
      case 5:
        category = "今天是星期五";
        break;
      case 6:
        category = "今天是星期六";
        break;
      default:
        category = "今天是星期八";
    }
    return category;
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  text-decoration: none;
  color: none;
}
a {
  text-decoration: none;
  color: none;
}
.watchBill {
  margin-bottom: 11px;
  margin-top: 100px;
  .billBody {
    display: flex !important;
    justify-content: space-around !important;
    align-items: center;
    .billIco {
      width: 20%;
      height: 20%;
    }
  }
}
</style>
