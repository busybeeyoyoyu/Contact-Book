<script setup>
  import { mount } from "@vue/test-utils";
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  const letter = ref([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    '#'
  ]);
  const router = useRouter();
  let ContactsList = ref([]);
  function click_ContactDetail(ContactsObj) {
    router.push("/ContactsDetail?obj=" + JSON.stringify(ContactsObj));
  }

  //
  function click_right_letter(letter) {
    let CardId = document.querySelector("#card-" + letter);
    console.log(CardId)
    window.scrollTo({
      top: CardId.offsetTop - 70,
      behavior: "smooth",
    });
  }

  let Contact = ref([])
    onMounted(() => {
      let firstarrname = []
      ContactsList.value = JSON.parse(localStorage.getItem("Contacts"));
      ContactsList.value.forEach(v=>{
        console.log(v)
        let firstname1 = getChinesePinyinAbbreviation(v.name)
        let firstname = firstname1.slice(0,1).toUpperCase()
        if(letter.value.indexOf(firstname) < 0){
          firstname = '#'
        }
        console.log(firstname.slice(0,1).toUpperCase())
        if(firstarrname.indexOf(firstname) < 0){
          firstarrname.push(firstname)
          let obj = {
            firstname:firstname,
            ContactsList:ref([v])
          }
          Contact.value.push(obj)
        }else{
          Contact.value[firstarrname.indexOf(firstname)].ContactsList.push(v)
        }
      })
      Contact.value.sort((a,b)=>{
        if (a.firstname < b.firstname) {
          return -1;
        }
        if (a.firstname > b.firstname) {
          return 1;
        }
        return 0;
      })
      console.log(Contact.value)
    });

    function getChinesePinyinAbbreviation(str) {
     return str.split('')[0]
    }
    function ContactsAdd() {
      router.push("/ContactsAdd");
    }
    let show = ref(true)
    let ContactssearchList = ref([]) 
    let searchdata = ref('')
    function input(e){
      if(searchdata.value == ''){
        show.value = true
      }else{
        show.value = false
        ContactssearchList.value = []
      ContactsList.value.forEach(v=>{
        
        console.log(v.name)
        if(v.name.indexOf(searchdata.value.toLowerCase()) >= 0||v.name.indexOf(searchdata.value.toUpperCase()) >= 0){
          ContactssearchList.value.push(v)
        }
      })
      }
      
    }
</script>

<template>
  <div class="Contacts-max">
    <div style="cursor: pointer;" @click="ContactsAdd" class="ContactAddImage">+</div>
    <h2>Contacts</h2>
    <div class="search-box">
      <img src="/src/assets/search.png" alt="">
      <input v-model="searchdata" @input="input" style="" type="text" placeholder="Search" name="" id="" />
    </div>
    <div class="userMessage">
      <div class="userMessage-left">
        <img
          src="/src/assets/girl.png"
          alt=""
        />
      </div>
      <div class="userMessage-right">
        <p>Xiao Yun</p>
        <p>13627985658</p>
      </div>
    </div>
    <div v-show="!show" class="index-content">
        <div
          @click="click_ContactDetail(itemList)"
          class="index-content-bottom"
          v-for="itemList in ContactssearchList">
          {{ itemList.name }}
        </div>
    </div>
    <div v-show="show" class="index-content">
      <div v-for="item in Contact">
        <div
          :id="'card-' + item.firstname"
          class="index-content-top"
        >
          {{ item.firstname }}
        </div>
        <div
          @click="click_ContactDetail(itemList)"
          class="index-content-bottom"
          v-for="itemList in item.ContactsList"
        >
          {{ itemList.name }}
        </div>
      </div>
    </div>
    <div class="right-letter">
      <p @click="click_right_letter(item)" v-for="item in letter">{{ item }}</p>
    </div>
  </div>
</template>
<style>
@media screen and (max-width: 700px) {
  .Contacts-max{
    width: 90%;
    margin: 0px auto;
  }
  .ContactAddImage{
    font-size: 8vw;
    text-align: right;
  }
  .search-box{
    width: 98%;
    padding: 0 1%;
    height: 7vw;
    display: flex;
    align-items: center;
    background-color: #ededed;
    border-radius: 45px;
    margin-top: 5vw;
  }
  .search-box img{
    width: 4vw;
    object-fit: cover;
    margin: 0 0.5vw;
  }
  input {
    width: 90%;
    height: 7vw;
    border-radius: 45px;
    background-color: #ededed;
    border: none;
    line-height: 30rpx;
  }
  .userMessage {
    width: 100%;
    display: flex;
    height: 14vw;
    padding: 5vw 0;
  }
  .userMessage-left {
    height: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    margin-right: 4vw;
  }
  .userMessage-left img{
    width: 10vw;
    object-fit: contain
  }
  .userMessage-right {
    height: inherit;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .userMessage-right p {
    font-size: 4vw;
    font-weight: bold;
  }
  .right-letter {
    position: fixed;
    right: 1vw;
    top: 50%;
    transform: translate(-50%, -50%); /* 居中 */
  }
  .index-content{
    margin-top: 5vw;
    line-height: 12vw;
  }
  .index-content-top{
    border-bottom: 1px solid #848484;
  }
  .index-content-bottom{
    border-bottom: 1px solid #848484;
    font-weight: bold;
  }
}
@media screen and (min-width: 700px) {
  body{
      width: 100%;
      background-color: #e6e9f5;
    }
  h2{
    text-align: left;
    font-size: 25px;
  }
  .Contacts-max{
    background-color: #e6e9f5;
    width:500px;
    height: 100vh;
    padding: 0 50px;
    margin: 0px auto;
  }
  .ContactAddImage{
    font-size: 30px;
    text-align: right;
  }
  .search-box{
    width: 98%;
    padding: 0 1%;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: #ededed;
    border-radius: 45px;
    margin: 20px 0;
    font-size: 20px;
  }
  .search-box img{
    width: 20px;
    object-fit: cover;
  }
  input {
    width: 90%;
    height: 2vw;
    border-radius: 45px;
    background-color: #ededed;
    border: none;
    line-height: 30px;
    font-size: 10px;
  }
  .userMessage {
    width: 100%;
    display: flex;
    /* height: 140px; */
    padding: 5px 0;
  }
  .userMessage-left {
    height: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
  .userMessage-left img{
    width: 50px;
    object-fit: contain
  }
  .userMessage-right {
    height: inherit;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .userMessage-right p {
    font-size: 20px;
    font-weight: bold;
  }
  .right-letter {
    position: fixed;
    left: calc(50% - 50px);
    top: 50%;
    transform: translate(-50%, -50%); /* 居中 */
    font-size: 15px;
    z-index: 9999999;
    display: none;
  }
  .index-content{
    line-height: 40px;
    font-size: 20px;
  }
  .index-content-top{
    border-bottom: 1px solid #848484;
  }
  .index-content-bottom{
    border-bottom: 1px solid #848484;
    font-weight: bold;
  }
}
</style>