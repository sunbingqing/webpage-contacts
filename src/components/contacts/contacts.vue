<template>
    <div class="wrap">
        <div class="headerBox">
            <div class="header clearfix">
                <h2 class="title">联系人</h2>
                <span class="addIcon"></span>
            </div>
            <div class="searchBox">
                <div class="search">
                    <input type="text" class="searchInput" placeholder="搜索">
                    <i class="searchIcon"></i>
                </div>
            </div>
        </div>
        <ul class="contentBox">
            <li class="listStyle">
                <img src="../../assets/avatar1.png" class="avatar">
                <span class="name">huhuhu</span>
            </li>
            <li class="listStyle">
                <img src="../../assets/avatar1.png" class="avatar">
                <span class="name">huhuhu</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.headerBox{width: 100%;padding-top: 6px; border-bottom: 1px solid #e0e0e0;}
.header{width: 100%;padding: 0 10px;}
.title{float: left;padding-left: 5px;line-height: 50px;font-size: 24px;color: #333;}
.addIcon{float: right;width: 30px;height: 50px;background:url("../../assets/add.png") no-repeat center;cursor: pointer;}
.searchBox{width: 100%;padding: 10px;}
.search{position: relative; width: 100%;height: 30px;border-radius: 3px;border: 1px solid #e0e0e0;}
.searchInput{width: 100%;padding: 0 30px 0 10px;height: 100%;border:none;}
.searchIcon{position: absolute;top: 0;right: 0; display: inline-block;width: 30px;height: 28px;background: url("../../assets/search.png") no-repeat center;cursor: pointer;}
.contentBox{position: absolute;top: 108px;bottom: 0; width: 100%;}
.listStyle{width: 100%;height: 54px;padding: 8px 20px;font-size: 0; border-bottom: 1px dashed #e0e0e0;cursor: pointer;}
.listStyle:hover{background-color: #eff8fd;}
.avatar,.name{display: inline-block;vertical-align: middle;}
.avatar{width: 38px;height: 38px;border-radius: 50%;}
.name{padding-left:10px;font-size: 14px;color: #737373;}
</style>

