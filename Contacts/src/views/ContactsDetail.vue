<template>
  <div class="box" >
    <div class="ContactsDetail-top">
      <img style="cursor: pointer;" @click="back" src="/src/assets/left.png" alt="">
      <button @click="Edit_Contact">Edit</button>
    </div>
    <h1>{{ ContactOneData.name }}</h1>
    <div class="acvtorimage">
      <img src="/src/assets/girl.png" alt="">
    </div>
    <div class="DetailContent">
      <div class="DetailContent-box">
        <h2>Mobile</h2>
        <p>{{ ContactOneData.phone }}</p>
      </div>
      <div class="DetailContent-box">
        <h2>Email</h2>
        <p>{{ ContactOneData.email }}</p>
      </div>
      <div class="DetailContent-box">
        <h2>Address</h2>
        <p>{{ ContactOneData.address }}</p>
      </div>
    </div>
    <div class="DetailContent-deletebutton">
      <button class="button" @click="deleteContact">Delete Contact</button>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, ref } from "vue";
  import { useRoute,useRouter } from "vue-router";
  const route = useRoute()
  const router = useRouter()
  let ContactOneData = ref({})
  let Contacts = ref([])
  onMounted(()=>{
    Contacts.value = JSON.parse(localStorage.getItem('Contacts'))
    ContactOneData.value = JSON.parse(route.query.obj)
  })

  function deleteContact(){
    Contacts.value.forEach((v,index)=>{
      if(v.id == ContactOneData.value.id){
        Contacts.value.splice(index,1)
      }
    })
    localStorage.setItem('Contacts',JSON.stringify(Contacts.value))
    router.push('/')
  }

  function back(){
    router.push('/')
  }

  function Edit_Contact(){
    router.push('/ContactsEdit?obj=' + JSON.stringify(ContactOneData.value))
  }
</script>
<style>
  *{margin: 0;padding: 0;}
  @media screen and (max-width: 700px) {
    body{
      width: 100%;
      background-color: #e6e9f5;
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
  .ContactsDetail-top{
    width: 95%;
    height: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
  }
  .ContactsDetail-top img{
    width: 7vw;
    object-fit: contain;
  }
  .ContactsDetail-top button{
    width: 10vw;
    height: 6vw;
    line-height: 6vw;
    border-radius: 45px;
    border: none;
    background-color: #c8c8d9;
  }
  h1{
    text-align: center;
    margin-top: 20vw;
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
  .DetailContent-box p {
    width: 100%;
    line-height: 7vw;
    border-bottom: 1px solid darkgray;
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
  .acvtorimage{
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
  .acvtorimage img{
    width: 50px;
    object-fit: contain;
  }
  .ContactsDetail-top{
    width: 95%;
    /* height: 200px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
  }
  .ContactsDetail-top img{
    width: 30px;
    object-fit: contain;
  }
  .ContactsDetail-top button{
    width: 50px;
    height: 20px;
    line-height: 20px;
    border-radius: 45px;
    border: none;
    background-color: #c8c8d9;
    font-size: 15px;
  }
  h1{
    font-size: 40px;
    text-align: center;
  }
  .DetailContent{
    margin-top: 50px;
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }
  .DetailContent-box{
    width: 90%;
    margin: 10px auto;
  }
  .DetailContent-box h2{
    font-size: 20px;
    font-weight: bold;
  }
  .DetailContent-box p {
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid darkgray;
    font-size: 20px;
  }
  .DetailContent-deletebutton {
    display: flex;
    justify-content: center;
  }
  .DetailContent-deletebutton .button{
    width: 70%;
    height: 50px;
    margin: 50px auto;
    line-height: 50px;
    background-color: #c8c8d9;
    border: none;
    text-align: center;
    border-radius: 35px;
    font-size: 20px;
  }
  }
</style>
