<template>
  <!-- <section class="header-slider bg-black"> -->
<div  class="search-section" :class="[$i18n.locale == 'ar'?'':'act']">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="flyakeed-contain">
              <div class="d-flex">
                <div class="flyakeed-item">
                  <input id="cb-flight" class="d-none" name="cb-hotel"  type="radio" value="E" checked="checked">
                  <label @click="activeted = true"
                  :class="[activeted? 'active':'']" class="flyhotel " for="cb-flight">
                   <i class="mdi mdi-airplane"></i>
                    <span data-i18n="flight.flights">{{$i18n.locale == 'ar' ? 'الرحلات':'Flights'}}</span>
                  </label>
                </div>
                <div class="flyakeed-item">
                  <input id="cb-hotel" class="d-none " name="cb-hotel" type="radio" value="B">
                  <label @click="activeted = false" 
                  :class="[activeted? '':'active']" class="flyhotel " for="cb-hotel">
                    <i class="mdi mdi-bed"></i>
                    <span data-i18n="tools.hotels">{{$i18n.locale == 'ar' ? 'الفنادق':'Hotels'}}</span>
                  </label>
                </div>
              </div>
            </div>
             <div class="flyakeed-contain">
              <div class="d-flex">
                <div class="flyakeed-item">
                  <input id="cb-flight" class="d-none" name="cb-palne"  type="radio" value="E" checked="checked">
                  <label @click="activeted2 = 0"
                  :class="[activeted2 == 0? 'active':'']" class="flyhotel " for="cb-flight">
                  <span data-i18n="flight.flights">{{$i18n.locale == 'ar' ? 'طريق واحد':'Oneway'}}</span>
                  </label>
                </div>
                <div class="flyakeed-item">
                  <input id="cb-hotel" class="d-none " name="cb-palne" type="radio" value="B">
                  <label @click="activeted2 = 1" 
                  :class="[activeted2 == 1? 'active':'']" class="flyhotel " for="cb-palne">
                    <span data-i18n="tools.hotels">{{$i18n.locale == 'ar' ? 'جولة':'Roundtrip'}}</span>
                  </label>
                </div>
                <div class="flyakeed-item">
                  <input id="cb-hotel" class="d-none " name="cb-palne" type="radio" value="B">
                  <label @click="activeted2 = 3" 
                  :class="[activeted2 == 3? 'active':'']" class="flyhotel " for="cb-palne">
                    <span data-i18n="tools.hotels">{{$i18n.locale == 'ar' ? 'مدينة متعددة':'Multi-City'}} </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="From-search" @click="activeted3 = true" :class="[activeted3? 'active':'']">
              <div style="color:#ff56a1">
                <span class="mdi mdi-airplane-takeoff"></span>
                <span>{{$i18n.locale == 'ar' ? 'من':'From'}}</span>
              </div>
              <input @input="fetchCities" type="text" v-model="keyword" name="From" :placeholder="$i18n.locale == 'ar' ? 'المدينة أو المطار':'City or Airport'">
                <ul v-if="showcity">
                  <li v-for="item in city" :key="item.id" @click="setkeyword(item.en.name,item.code)">
                    <span>
                    {{$i18n.locale == 'ar' ? item.ar.name:item.en.name}}
                  </span> 
                  <strong>
                    {{item.code}}
                  </strong>
                  </li>
                </ul>
           </div>
             <div class="From-search" @click="activeted3 = false" :class="[activeted3? '':'active']">
              <div style="color:#ff56a1">
                <span class="mdi mdi-airplane-landing"></span>
                <span>{{$i18n.locale == 'ar' ? 'الى':'To'}}</span>
              </div>
              <input @input="fetchto" type="text" v-model="keywordto" name="To" :placeholder="$i18n.locale == 'ar' ? 'المدينة أو المطار':'City or Airport'">
              <ul v-if="showcityto">
                  <li v-for="item in cityto" :key="item.id" @click="setkeywordto(item.en.name,item.code)">
                    <span>
                    {{$i18n.locale == 'ar' ? item.ar.name:item.en.name}}
                  </span> 
                  <strong>
                    {{item.code}}
                  </strong>
                  </li>
                </ul>
            </div>
           <div class="d-flex mt-5">
              <div class="From-search active" v-if="date" >
              <div class="mb-4" style="color:#196dfb">{{$i18n.locale == 'ar' ? 'تاريخ المغادرة':'Departure Date'}}</div>
                <vue-date-picker v-model="date" :format="format" :min-date="new Date()"></vue-date-picker>
              </div>
              <div class="From-search"  v-if="date2">
              <div class="mb-4"  style="color:#196dfb">{{$i18n.locale == 'ar' ? 'تاريخ العودة':'Return Date'}}</div>
                <vue-date-picker v-model="date2" :format="format2" :min-date="new Date()"></vue-date-picker>
              </div>
            </div>
            <div class="row person-count">
              <div class="col-4 col-sm-4 item">
                <div>{{$i18n.locale == 'ar' ? 'بالغ':'Adult'}}</div>
                <div class="d-flex justify-content-around">
                  <span class="count">{{Adult}}</span> 
                  <span >
                  <div><font-awesome-icon @click="Adult++" :icon="['fas', 'angle-up']" /></div>
                  <div><font-awesome-icon @click="Adultdecr" :icon="['fas', 'angle-down']" /></div>
                </span>
                </div>
              </div>
              <div class="col-4 col-sm-4 item">
                <div>{{$i18n.locale == 'ar' ? 'ولد':'Child'}}</div>
                <div class="d-flex justify-content-around">
                  <span class="count">{{Child}}</span> 
                  <span >
                  <div><font-awesome-icon @click="Child++" :icon="['fas', 'angle-up']" /></div>
                  <div><font-awesome-icon @click="Childdecr" :icon="['fas', 'angle-down']" /></div>
                </span>
                </div>
              </div>
              <div class="col-4 col-sm-4 item">
                <div>{{$i18n.locale == 'ar' ? 'رضيع':'Infant'}}</div>
                <div class="d-flex justify-content-around">
                  <span class="count">{{Infant}}</span> 
                  <span >
                  <div><font-awesome-icon @click="Infant++" :icon="['fas', 'angle-up']" /></div>
                  <div><font-awesome-icon @click="Infantdecr" :icon="['fas', 'angle-down']" /></div>
                </span>
                </div>
              </div>
            </div>
            <div class="mt-5">
               
                 <button @click="gotoflightResult" class="search-button">{{$i18n.locale == 'ar' ? 'بحث الرحلة':'Search Flight'}} </button>
            </div>
      </div>
    </div>
</div>
</div>
</template>
<script setup>
import axios from 'axios';

const Adult = ref(1);
const Child = ref(0);
const Infant = ref(0);

 const Adultdecr = async () => {
    if(Adult.value == 0){
      Adult.value = 0
    }
    else{
      Adult.value--
    }
 }
 const Childdecr = async () => {
    if(Child.value == 0){
      Child.value = 0
    }
    else{
      Child.value--
    }
 }
 const Infantdecr = async () => {
    if(Infant.value == 0){
      Infant.value = 0
    }
    else{
      Infant.value--
    }
 }
const activeted = ref(true);
const activeted2 = ref(0);
const activeted3 = ref(true);
const keyword = ref();
const keywordto = ref();
const codedfrom = ref();
const codedto = ref();
const city = ref();
const cityto = ref();
const showcity = ref(false);
const showcityto = ref(false);
 const gotoflightResult = async () => {
   localStorage.setItem("from",codedfrom.value);
   localStorage.setItem("to",codedto.value);
   localStorage.setItem("dateStart",date.value);
   localStorage.setItem("dateEnd",date2.value);
   localStorage.setItem("Adult",Adult.value);
   localStorage.setItem("Child",Child.value);
   localStorage.setItem("Infant",Infant.value);
  //  get to validate
  if(
    codedfrom.value != undefined && codedto.value != undefined
  )
  {
    await navigateTo('/flightResult');
  }
   
 }
  const date = ref(new Date());
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
const date2 = ref(new Date());
const format2 = (date2) => {
  const day = date2.getDate();
  const month = date2.getMonth() + 1;
  const year = date2.getFullYear();
  return `${year}-${month}-${day}`;
}
    const fetchCities = async () => {
      const data = new URLSearchParams();
        data.append("keyword", keyword.value);
        data.append("offset", "0");
  const response = await axios.post('https://api.flyakeed.com/index.php/airport/search', data);
  if (response) {
    city.value = response.data.data;
    showcity.value = true
  }
 
  }
      const fetchto = async () => {
      const data2 = new URLSearchParams();
        data2.append("keyword", keywordto.value);
        data2.append("offset", "0");
  const cityToresponse = await axios.post('https://api.flyakeed.com/index.php/airport/search', data2);
  if (cityToresponse) {
    cityto.value = cityToresponse.data.data;
    console.log(cityToresponse.data.data)
    showcityto.value = true
  }
 
  }
  const setkeyword = async (keyw,cdow) => {
 keyword.value= keyw;
 codedfrom.value= cdow;
setTimeout(() => {
  showcity.value = false;
}, 200);
  }
  const setkeywordto = async (krtyw,cod) => {
 keywordto.value= krtyw;
 codedto.value= cod;
setTimeout(() => {
  showcityto.value = false;
}, 200);
  }

</script>

<style lang="scss" scoped >  

  @import '~/assets/styles/scss/theme/variables';
  @import '~/assets/styles/scss/theme/mixin';
.search-section{
 &.act{
background-image: url("https://dsx9kbtamfpyb.cloudfront.net/desktop-web-fav4/view/assets/images/landing/en/traveller.jpg");
 }
.flyakeed-contain{
  background-color: #fff;
  border-radius: 30px;
  margin: 20px 0;
  width: 100%;
.flyakeed-item  {
  width: 100%;
  .flyhotel{
      background: 0 0;
  width: 100%;
  font-weight: 400;
  display: block;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  transition: .3s;
  color: #b2b2b2;
  margin: 5px;
  padding: 5px;
    &.active{
 background-color: #196dfb;
  color: #fff;
  border-radius: 50px;
    }
    i{
      font-size: 20px;
      margin: 0 10px;
    }
  }
}
}
.From-search{
  background-color: #f1f1f1;
  padding: 10px;
  position: relative;
  ul{
    position: absolute;
    top: 90px;
    border: 1px solid #ddd;
    background-color: #fff;
    width: 100%;
    left: 0;
    overflow-y: scroll;
    scrollbar-width: thin;
    height: 250px;
    z-index: 100;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 10px;
      transition: .5s;
      cursor: pointer;
      &:hover{
        background-color: #ddd;
      }
    }
  }
  &.active{
  background-color: #fff;
  }
  input{
    width: 100%;
    border: none;
    padding: 10px 0;
    font-size: 20px;
    color: $blue2;
    &:focus{
      outline: none;
    }
  }
}
.person-count{
  padding: 12px;
  text-align: center;
  .item{
    background-color: #fff;
    color: $blue;
    padding: 10px;
    border-right: 1px solid #eee;
    .count{
      color: $blue2;
      display: flex;
      align-items: center;
      font-size: 25px;
    }
    svg{
      cursor: pointer;
      color: #cf6497;
    }
  }
}
.search-button{
  width: 100%;
  background-color: #196dfb;
  color: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 3px;
  font-size: 20px;
  transition: .5s;
  &:hover{
   box-shadow: 0px 10px 25px rgb(104, 104, 104);
  }
}
}
</style>