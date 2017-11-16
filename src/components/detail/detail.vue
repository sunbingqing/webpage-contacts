<template>
    <div>
        <div class="topbtn clearfix"><span class="rightbtn">编辑</span></div>
        <div class="head">
            <img class="avatar" src="../../assets/avatar2.png">
            <h2 class="name">huhuhu</h2>
        </div>
        <div class="infoList">
            <table class="tableStyle">
                <tr>
                    <td class="tdLeft"><label class="msg">手机号码</label></td>
                    <td class="tdRight"><span class="msg">135******30</span></td>
                </tr>
                <tr>
                    <td class="tdLeft"><label class="msg">电子邮箱</label></td>
                    <td class="tdRight"><span class="msg">92882937@123.com</span></td>
                </tr>
            </table>
        </div>
        <div class="btnWrap">
            <button class="btnStyle">删除联系人</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.topbtn{width: 100%;height: 80px;padding: 20px;}
.rightbtn{float: right;cursor: pointer;}
.head{width: 100%;padding: 0 50px;}
.avatar,.name{display: block;margin: 0 auto;}
.avatar{width: 120px;height: 120px;border-radius: 50%;}
.name{padding: 20px 0; font-size: 20px;color: #333; text-align: center;border-bottom: 1px dashed #e0e0e0;}
.infoList{width: 100%;padding: 40px 50px;}
.tableStyle{width:80%;margin: 0 auto;}
.tdLeft,.tdRight{height: 35px;}
.tdLeft{width: 45%; padding-right: 20px; text-align: right;}
.msg{font-size: 14px;color: #737373;}
.btnWrap{width: 100%;text-align: center;}
.btnStyle{min-width: 70px;height: 34px;padding: 0 20px;font-size: 16px;color: #fff;background-color: #00BC9B;border:1px solid #10a784;border-radius: 3px;}
.btnStyle:hover{background-color: #10a784;}
</style>