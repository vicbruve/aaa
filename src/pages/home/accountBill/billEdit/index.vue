<template>
  <div class="billEdit">
    <van-cell-group>
      <van-field
        v-model="EditForm.billId"
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
        v-model="EditForm.account"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />

      <van-field
        v-model="EditForm.message"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button @click="postEdit">修改</van-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "BillEdit"
})
export default class BillEdit extends Vue {
  private created() {
    this.a = this.$route.query;
  }
  private a: any;
  private EditForm = {
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
    this.EditForm.sortId = index;
  }

  private postEdit() {
    console.log(this.EditForm.sortId);
  }
}
</script>

<style lang="scss" scoped>
.billEdit {
  margin-top: 55px;
}
</style>
