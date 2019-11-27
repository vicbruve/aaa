<template>
  <div>
    <div class="topbar">
      <van-nav-bar
        :title="this.$route.meta.title"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-right="onClickRight"
      >
        <p slot="title" v-show="!isBillWatch">{{ this.$route.meta.title }}</p>
        <van-dropdown-menu slot="title" v-show="isBillWatch">
          <van-dropdown-item title="筛选">
            <van-switch-cell v-model="switch1" title="包邮" />
            <van-switch-cell v-model="switch2" title="团购" />
          </van-dropdown-item>
        </van-dropdown-menu>
        <svg class="icon" aria-hidden="true" slot="right" v-show="isBillWatch">
          <use xlink:href="#icon-tubiao"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="right" v-show="isBillEdit">
          <use xlink:href="#icon-_dayinxiaopiao"></use>
        </svg>
      </van-nav-bar>
      <div class="searchBar" v-show="isBillWatch">
        <van-field
          readonly
          clickable
          :value="searchYear"
          placeholder="选择日期"
          @click="showTimePicker = true"
        />
        <p>年</p>
        <van-field
          readonly
          clickable
          :value="searchMonth"
          placeholder="选择日期"
          @click="showTimePicker = true"
        />
        <p>月</p>
        <van-field
          readonly
          clickable
          :value="searchDay"
          placeholder="选择日期"
          @click="showTimePicker = true"
        />
        <p>日</p>
        <van-popup v-model="showTimePicker" position="top">
          <van-picker
            show-toolbar
            :columns="YearColumns"
            @cancel="showTimePicker = false"
            @confirm="onYpConfirm"
          />
        </van-popup>
      </div>
    </div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home/firstPage"
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
        <van-tabbar-item to="/home/billEdit"
          ><van-icon name="edit" />
          <div>记账</div></van-tabbar-item
        >
      </div>
      <van-tabbar-item to="/home/personal">
        <van-icon name="friends-o" />
        <div>我的</div></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { loadCookie } from "../../api/test";
import { AppModule } from "@/store/modules/app";

@Component({
  name: "home"
})
export default class Home extends Vue {
  private active: number = 0;
  private showSearch: boolean = false;
  private showTimePicker: boolean = false;
  private searchYear: string = "";
  private searchMonth: string = "";
  private searchDay: string = "";
  private YearColumns = ["2017", "2018", "2019", "2020", "2021"];
  private switch1 = false;
  private switch2 = false;
  private MonthColumns = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];

  get billMode() {
    return AppModule.billMode;
  }
  private enterBillWatch() {
    AppModule.OnEditMode();
  }

  private onClickRight() {
    this.showSearch = true;
  }

  get isBillWatch() {
    return this.$route.path === "/home/billWatch";
  }

  get isBillEdit() {
    return this.$route.path === "/home/billEdit";
  }

  private onYpConfirm(value: string, index: number) {
    this.searchYear = value;
    this.showTimePicker = false;
  }
}
</script>

<style lang="scss">
.topbar {
  .van-nav-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    position: fixed;
    top: 0;
    .van-ellipsis {
      font-size: 18px;
    }
    .van-nav-bar__text {
      font-size: 18px;
    }
    .van-nav-bar__title {
      font-size: 18px;
    }
    .van-nav-bar__right {
      .icon {
        font-size: 28px;
      }
    }
  }
  .searchBar {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 45px;
    z-index: 9999;
    background-color: #fff;
    .van-field {
      width: 63px;
      height: 38px;
      margin: 0 5px;
      &:nth-child(3) {
        width: 50px;
      }
      &:nth-child(5) {
        width: 50px;
      }
    }
    p {
      white-space: nowrap;
    }
  }
}
.van-tabbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  .van-tabbar-item {
    font-size: 18px;
    flex: auto;
    width: 125px;
    .van-icon {
      font-size: 28px;
    }
  }
}
.popContent {
  width: 200px;
  height: 200px;
}
</style>
