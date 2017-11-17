<template>
  <div id="app" class="main">
    <div class="leftBox">
      <contacts></contacts>
    </div>
    <div class="rightBox">
      <detail v-show="!editShow"></detail>
      <infoEdit v-show="editShow"></infoEdit>
    </div>
    <router-view/>
  </div>
</template>

<script>
import contacts from '@/components/contacts/contacts'
import detail from '@/components/detail/detail'
import infoEdit from '@/components/infoEdit/infoEdit'

export default {
  data: function() {
    return {
      editShow :false
    }
  },
  components: {
    "contacts": contacts,
    "detail": detail,
    "infoEdit": infoEdit
  }
}
</script>

<style>
.main{position: relative; width: 960px;height:100%;margin:0 auto;}
.leftBox,.rightBox{position: absolute;top: 50px;bottom: 50px; border:1px solid #e0e0e0;background-color: #fff;}
.leftBox{left: 0; width: 250px;}
.rightBox{left:250px;width: 710px;border-left: none;}
</style>
