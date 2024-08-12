<template>
    <div class="box">
        <div class="contactsAdd-top">
        <p style="cursor: pointer;" @click="cancel">Cancle</p>
        <p style="cursor: pointer;" @click="Done" class="done">Done</p>
      </div>
      
      <h1 class="title">{{ ContactOneData.name }}</h1>
      <div class="acvtorimage">
        <img src="/src/assets/girl.png" alt="">
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
    import { useRouter,useRoute } from "vue-router";
    const route = useRoute()
    const router = useRouter()

    let Contacts = ref([])
    let ContactOneData = ref({})
    onMounted(()=>{
        Contacts.value = JSON.parse(localStorage.getItem('Contacts'))
        ContactOneData.value = JSON.parse(route.query.obj)
    })
    function cancel(){
        router.push("/ContactsDetail?obj=" + JSON.stringify(ContactOneData.value));
    }
    function Done(){
        let count = 0
        Contacts.value.forEach((v,index,arr)=>{
            arr++
            if(v.id == ContactOneData.value.id){
                Contacts.value[index] = { ...v, ...ContactOneData.value };
            }
        })
        localStorage.setItem('Contacts',JSON.stringify(Contacts.value))
        router.push("/ContactsDetail?obj=" + JSON.stringify(ContactOneData.value));
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
     /* font-size: 6vw; */
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
     width: 12vw;
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
     padding: 0 50px;
     background-color: #e6e9f5;
   }
   h1{
     text-align: center;
   }
   .contactsAdd-top{
     display: flex;
     justify-content: space-between;
     width: 90%;
     margin: 0px auto;
     font-size: 30px;
   }
   .done{
     text-align: right;
   }
   .title{
     margin-top: 40px;
     font-weight: bold;
   }
   .acvtorimage{
     display: flex;
     justify-content: center;
     margin: 40px 0;
   }
   .acvtorimage img{
     width: 50px;
     object-fit: cover;
   }
   .DetailContent{
     width: 100%;
     background-color: #fff;
     padding: 30px 0;
   }
   .DetailContent-box{
     width: 90%;
     margin: 0px auto;
   }
   .DetailContent-box p{
    border: none;
   }
   .DetailContent-box h2{
     font-size: 20px;
     font-weight: bold;
   }
   .DetailContent-box input {
     width: 95%;
     padding: 0 2.5%;
     line-height: 40px;
     height: 40px;
     background-color: #ededed;
     border-radius: 0;
     font-size: 20px;
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
  