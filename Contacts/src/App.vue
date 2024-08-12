<script setup>
  import { ref } from "vue";
  const Contacts = ref([
    {id:0,name:'join',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:1,name:'join1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:2,name:'join2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:3,name:'Boin',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:4,name:'Boin1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:5,name:'Boin2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:0,name:'join',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:1,name:'join1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:2,name:'join2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:3,name:'Boin',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:4,name:'Boin1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:5,name:'Boin2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:0,name:'join',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:1,name:'join1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:2,name:'join2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:3,name:'Boin',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:4,name:'Boin1',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
    {id:5,name:'Boin2',phone:'13695826558',email:'255445454@qq.com',address:'niu yue'},
  ])
  localStorage.setItem('Contacts',JSON.stringify(Contacts.value))
  if(!localStorage.getItem('Contacts')){
    
  }
</script>

<template>
  <RouterView />
</template>

<style>
</style>
