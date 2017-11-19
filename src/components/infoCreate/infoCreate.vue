<template>
  <div>
    <div class="topbtn clearfix">
      <span class="leftbtn" @click="close()">取消</span>
      <span class="rightbtn" @click="saveMsg()">完成</span>
    </div>
    <div class="head">
      <label class="avatar">
        <img src="../../assets/avatar2.png">
        <input type="file" style="display:none;">
      </label>
      <span class="name">
        <input v-model="msg.name" type="text" class="nameInput" placeholder="请输入联系人姓名">
      </span>
    </div>
    <div class="infoList">
      <table class="tableStyle">
        <tr>
          <td class="tdLeft">
            <label class="msg">手机号码</label>
          </td>
          <td class="tdRight"><input v-model="msg.tel" class="inputMsg" type="text" placeholder="请输入手机号码"></td>
        </tr>
        <tr>
          <td class="tdLeft">
            <label class="msg">电子邮箱</label>
          </td>
          <td class="tdRight"><input v-model="msg.email" class="inputMsg" type="text" placeholder="请输入电子邮箱"></td>
        </tr>
        <tr>
          <td class="tdLeft">
            <label class="msg">家庭住址</label>
          </td>
          <td class="tdRight"><input v-model="msg.address" class="inputMsg" type="text" placeholder="请输入家庭住址"></td>
        </tr>
        <tr>
          <td class="tdLeft">
            <label class="msg">职位</label>
          </td>
          <td class="tdRight"><input v-model="msg.job" class="inputMsg" type="text" placeholder="请输入职位"></td>
        </tr>
        <tr>
          <td class="tdLeft">
            <label class="msg">备注</label>
          </td>
          <td class="tdRight"><input v-model="msg.remarks" class="inputMsg" type="text" placeholder="备注信息"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import bus from '../../assets/eventBus';
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      msg: {
        id: '',
        name: '',
        tel: '',
        email: '',
        address: '',
        job: '',
        remarks: ''
      }
    };
  },
  methods: {
    // 保存信息
    saveMsg: function () {
      var personList = [];
      var msg = {};
      if (localStorage.fetchList) {
        personList = JSON.parse(localStorage.fetchList);
        msg.id = personList[personList.length - 1].id + 1;
      } else {
        msg.id = 1;
      }
      if (!this.msg.name) {
        alert('请输入联系人姓名！');
        return;
      } else {
        msg.name = this.msg.name;
      }
      if (!this.msg.tel) {
        alert('请输入电话号码！');
        return;
      } else {
        msg.tel = this.msg.tel;
      }
      msg.email = this.msg.email;
      msg.address = this.msg.address;
      msg.job = this.msg.job;
      msg.remarks = this.msg.remarks;
      personList.push(msg);
      localStorage.fetchList = JSON.stringify(personList);
      // 组件间通信
      bus.$emit('personInfo');
      // 返回联系人详情
      this.$router.push({path: '/detail/' + msg.id});
    },
    // 取消操作
    close: function () {
      this.$router.go(-1);
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

.leftbtn,
.rightbtn {
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.leftbtn {
  float: left;
}

.rightbtn {
  float: right;
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

.nameInput {
  padding-bottom: 5px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #e0e0e0;
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
  height: 40px;
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

.inputMsg {
  width: 80%;
  height: 30px;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
}
</style>