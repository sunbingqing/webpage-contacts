<template>
    <div>
        <div class="topbtn clearfix">
            <span class="leftbtn">取消</span>
            <span class="rightbtn">完成</span>
        </div>
        <div class="head">
            <img class="avatar" src="../../assets/avatar2.png">
            <h2 class="name">huhuhu</h2>
        </div>
        <div class="infoList">
            <table class="tableStyle">
                <tr>
                    <td class="tdLeft"><label class="msg">手机号码</label></td>
                    <td class="tdRight"><input class="inputMsg" type="text" placeholder="请输入手机号码"></td>
                </tr>
                <tr>
                    <td class="tdLeft"><label class="msg">电子邮箱</label></td>
                    <td class="tdRight"><input class="inputMsg" type="text" placeholder="请输入电子邮箱"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.topbtn{width: 100%;height: 80px;padding: 20px;}
.leftbtn,.rightbtn{font-size: 16px;color: #333;cursor: pointer;}
.leftbtn{float: left;}
.rightbtn{float: right;}
.head{width: 100%;padding: 0 50px;}
.avatar,.name{display: block;margin: 0 auto;}
.avatar{width: 120px;height: 120px;border-radius: 50%;}
.name{padding: 20px 0; font-size: 20px;color: #333; text-align: center;border-bottom: 1px dashed #e0e0e0;}
.infoList{width: 100%;padding: 40px 50px;}
.tableStyle{width:80%;margin: 0 auto;}
.tdLeft,.tdRight{height: 40px;}
.tdLeft{width: 45%; padding-right: 20px; text-align: right;}
.msg{font-size: 14px;color: #737373;}
.inputMsg{width: 80%;height: 30px;padding: 0 12px; border:1px solid #e0e0e0;border-radius: 3px;}
</style>