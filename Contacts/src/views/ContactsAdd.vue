<template>
    <div class="box">
      <div class="contactsAdd-top">
        <p style="cursor: pointer;" @click="cancel">Cancle</p>
        <p style="cursor: pointer;" @click="Done" class="done">Done</p>
      </div>
      
        <h1 class="title">New Contacts</h1>
      <div class="acvtorimage">
        <!-- <input accept="image/*" @click="changeimg" type="file" id="fileimg" style="font-size: 0;width: 0;height: 0;"> -->
        <label for="fileimg">
          <img @click="click_acatorimg" src="/src/assets/girl.png" alt="">
        </label>
        
      </div>
      <div class="DetailContent">
        <div class="DetailContent-box">
          <h2>Name</h2>
          <p><input type="text" v-model="ContactOneData.name" placeholder="Please enter Mobile"></p>
        </div>
        <div class="DetailContent-box">
          <h2>Mobile</h2>
          <p><input type="number" v-model="ContactOneData.phone" placeholder="Please enter Mobile"></p>
        </div>
        <div class="DetailContent-box">
          <h2>Email</h2>
          <p><input type="text" v-model="ContactOneData.email" placeholder="Please enter Email"></p>
        </div>
        <div class="DetailContent-box">
          <h2>Address</h2>
          <p><input type="text" v-model="ContactOneData.address" placeholder="Please enter Address"></p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
    import { mount } from "@vue/test-utils";
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";

    let Contacts = ref([])
    let imageinput = ref('')
    Contacts.value = JSON.parse(localStorage.getItem('Contacts'))
    const router = useRouter()
    
    let ContactOneData = ref({
        id:Contacts.value.length + 1,
        name:'',
        phone:'',
        email:'',
        address:'',
    })

    function cancel(){
        router.push('/')
    }
    function Done(){
        Contacts.value.push(ContactOneData.value)
        localStorage.setItem('Contacts',JSON.stringify(Contacts.value))
        router.push('/')
    }

    function click_acatorimg(){
      // document.querySelector('#fileimg')
      const fileimg = ref(null)
      // console.log(fileimg)
      fileimg.value?.click()
    }
    function changeimg(e){
      console.log(imageinput.value)
    }
  </script>
  <style>
    *{margin: 0;padding: 0;}

@media screen and (max-width: 700px) {
  body{
      width: 100%;
      background-color: #e6e9f5;
    }
    .contactsAdd-top{
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0px auto;
      font-size: 6vw;
    }
    .done{
      text-align: right;
    }
    .title{
      margin-top: 20vw;
      font-weight: bold;
    }
    .acvtorimage{
      display: flex;
      justify-content: center;
      margin: 10vw 0;
    }
    .acvtorimage img{
      width: 15vw;
      object-fit: contain;
    }

    h1{
      text-align: center;
    }
    .DetailContent{
      margin-top: 30vw;
      width: 100%;
      background-color: #fff;
      padding: 5vw 0;
    }
    .DetailContent-box{
      width: 90%;
      margin: 1vw auto;
    }
    .DetailContent-box h2{
      font-size: 4vw;
      font-weight: bold;
    }
    .DetailContent-box input {
      width: 95%;
      padding: 0 2.5%;
      line-height: 8vw;
      height: 8vw;
      background-color: #ededed;
      border-radius: 0;
    }
    .DetailContent-deletebutton {
      display: flex;
      justify-content: center;
    }
    .DetailContent-deletebutton button{
      width: 80%;
      height: 10vw;
      margin: 10vw auto;
      line-height: 10vw;
      background-color: #c8c8d9;
      border: none;
      text-align: center;
      border-radius: 35px;
    }
}
@media screen and (min-width: 700px) {
  .box{
      width: 500px;
      height: 100vh;
      background-color: #e6e9f5;
    }
    h1{
      font-size: 20px;
      text-align: center;
      
    }
    .contactsAdd-top{
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0px auto;
      font-size: 20px;
      
    }
    .done{
      text-align: right;
    }
    .title{
      margin-top: 50px;
      font-weight: bold;
    }
    .acvtorimage{
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
    .acvtorimage img{
      width: 50px;
      object-fit: cover;
    }
    .DetailContent{
      width: 100%;
      background-color: #fff;
      padding: 10px 0;
      margin-top: 100px;
    }
    .DetailContent-box{
      width: 90%;
      margin: 10px auto;
    }
    .DetailContent-box h2{
      font-size: 10px;
      font-weight: bold;
    }
    .DetailContent-box input {
      width: 95%;
      padding: 0 2.5%;
      line-height: 30px;
      height: 30px;
      background-color: #ededed;
      border-radius: 0;
      margin-top: 10px;
    }
    .DetailContent-deletebutton {
      display: flex;
      justify-content: center;
    }
    .DetailContent-deletebutton button{
      width: 80%;
      height: 10vw;
      line-height: 10vw;
      background-color: #c8c8d9;
      border: none;
      text-align: center;
      border-radius: 35px;
    }
}

    
  </style>
  