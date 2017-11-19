<template>
  <div>
    <div class="topbtn clearfix">
      <span class="rightbtn" @click="handleEditClick()">编辑</span>
    </div>
    <div class="head">
      <img class="avatar" src="../../assets/avatar2.png">
      <h2 class="name">{{personInfo.name}}</h2>
    </div>
    <div class="infoList">
      <table class="tableStyle">
        <tr>
          <td class="tdLeft">
            <label class="msg">手机号码</label>
          </td>
          <td class="tdRight">
            <span class="msg">{{personInfo.tel}}</span>
          </td>
        </tr>
        <tr  v-if="personInfo.email">
          <td class="tdLeft">
            <label class="msg">电子邮箱</label>
          </td>
          <td class="tdRight">
            <span class="msg">{{personInfo.email}}</span>
          </td>
        </tr>
        <tr v-if="personInfo.address">
          <td class="tdLeft">
            <label class="msg">家庭住址</label>
          </td>
          <td class="tdRight">
            <span class="msg">{{personInfo.address}}</span>
          </td>
        </tr>
        <tr v-if="personInfo.job">
          <td class="tdLeft">
            <label class="msg">职位</label>
          </td>
          <td class="tdRight">
            <span class="msg">{{personInfo.job}}</span>
          </td>
        </tr>
        <tr v-if="personInfo.remarks">
          <td class="tdLeft">
            <label class="msg">备注</label>
          </td>
          <td class="tdRight">
            <span class="msg">{{personInfo.remarks}}</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="btnWrap">
      <button class="btnStyle" @click="deletePerson()">删除联系人</button>
    </div>
  </div>
</template>

<script>
import bus from '../../assets/eventBus';
export default {
  data: function () {
    return {
      personInfo: {},
      index: '',
      personList: []
    };
  },
  created: function () {
    this.getPersonInfo();
  },
  // 组件内的守卫,在当前路由改变，但是该组件被复用时调用
  beforeRouteUpdate: function (from, to, next) {
    next();
    this.getPersonInfo();
  },
  methods: {
    deletePerson: function () {
      this.personList.splice(this.index, 1);
      localStorage.fetchList = JSON.stringify(this.personList);
      // 组件间通信
      bus.$emit('personInfo');
      this.$router.push('/');
    },
    handleEditClick: function () {
      this.$router.push({path: '/infoEdit/' + this.$route.params.id});
    },
    getPersonInfo: function () {
      var id = parseInt(this.$route.params.id);
      var personList = this.personList = JSON.parse(localStorage.fetchList);
      for (var i = 0; i < personList.length; i++) {
        if (personList[i].id === id) {
          this.personInfo = personList[i];
          this.index = i;
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.topbtn {
  width: 100%;
  height: 80px;
  padding: 20px;
}

.rightbtn {
  float: right;
  cursor: pointer;
}

.head {
  width: 100%;
  padding: 0 50px;
}

.avatar,
.name {
  display: block;
  margin: 0 auto;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.name {
  padding: 20px 0;
  font-size: 20px;
  color: #333;
  text-align: center;
  border-bottom: 1px dashed #e0e0e0;
}

.infoList {
  width: 100%;
  padding: 40px 50px;
}

.tableStyle {
  width: 80%;
  margin: 0 auto;
}

.tdLeft,
.tdRight {
  height: 35px;
}

.tdLeft {
  width: 45%;
  padding-right: 20px;
  text-align: right;
}

.msg {
  font-size: 14px;
  color: #737373;
}

.btnWrap {
  width: 100%;
  text-align: center;
}

.btnStyle {
  min-width: 70px;
  height: 34px;
  padding: 0 20px;
  font-size: 16px;
  color: #fff;
  background-color: #00BC9B;
  border: 1px solid #10a784;
  border-radius: 3px;
}

.btnStyle:hover {
  background-color: #10a784;
}
</style>