<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="corretForm.billId"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
      />

      <van-field
        readonly
        clickable
        label="城市"
        :value="value"
        placeholder="选择城市"
        @click="showPicker = true"
      />

      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>

      <van-field
        v-model="corretForm.account"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />

      <van-field
        v-model="corretForm.message"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button @click="postCorret">修改</van-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "BillCorret"
})
export default class BillCorret extends Vue {
  private created() {
    this.a = this.$route.query;
  }
  private a: any;
  private corretForm = {
    message: "",
    account: "",
    billId: "",
    sortId: 0
  };
  private value = "111";
  private showPicker = false;
  private columns = ["杭州", "宁波", "温州", "嘉兴", "湖州"];

  private onConfirm(value: string, index: number) {
    this.value = value;
    this.showPicker = false;
    this.corretForm.sortId = index;
  }

  private postCorret() {
    console.log(this.corretForm.sortId);
  }
}
</script>

<style lang="scss" scoped></style>
