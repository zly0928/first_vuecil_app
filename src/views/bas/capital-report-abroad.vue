<!-- 资金报告 -->
<template>

  <div>
    <titleHeader :title="msg"></titleHeader>
    <!--//向子组件传值 -->

    <div class="caption-flex">
      <van-tabs v-model="active" @change="onchange">
        <van-tab title="应收账款"></van-tab>
        <van-tab title="实收账款"></van-tab>
      </van-tabs>
      <i class="iconfont icon-paixu caption-icon" @click="showPopup"></i>
    </div>
    <van-list style="margin-top: 10px;">
      <van-cell
        v-for="(item,index) in payList"
        :key="index"
        :title="item.ZHCODE"
        :value="item.ENCODE"
      />
    </van-list>

    <!-- 排序弹窗 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
      <van-cell v-for="item in listSort" :key="item" :title="item"/>
    </van-popup>
  </div>
</template>

<script>
import titleHeader from "@/components/title-header"; //引用子组件页面
import {request} from "@/network/request";

export default {
  name: "capitalReportAbroad",
  components: {
    titleHeader,
  },
  data() {
    return {
      msg: this.$route.query.nm,
      active: 0,
      list: [],
      payList: [],
      listSort: ["排序1", "排序2"],
      show: false
    };
  },
  created() {
    let index = this.active + 1;
    this.list = this[`list${index}`]; // this.list1
    this.getCodes();
  },
  methods: {
    onchange(index) {
      this.list = this[`list${index + 1}`];
    },
    showPopup() {
      this.show = true;
    },
    getCodes() {
        request({
          url:'/inv/ReportBillReceivable/queryAllCompanyCodes'
        })
        .then(res =>{
          this.payList = res.data.payload;
        })
        .catch(err =>{
          console.log(err);
        })
    }
  }
};
</script>

<style>
.caption-flex {
  display: flex;
  align-items: center;
}
.caption-icon {
  flex-grow: 1;
}
.van-tabs {
  flex-grow: 2;
}
</style>
