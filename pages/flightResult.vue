<template>
  <div class="flights">
    <div class="container">
      <div class="loader" v-if="!loading">
      <div class="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" class="plane-img">
      </div>
      <div class="earth-wrapper">
        <div class="earth"></div>
      </div>  
    </div>
      <div class="row pt-5" v-else>
        <div class="col-3">
          <h5 class="color">{{$i18n.locale == 'ar' ? 'توقف':'Stops'}} </h5>
          <div class="d-flex align-items-center mb-4">
            <input 
              class="checkbox"
              type="checkbox"
              value="0"
               @change="selected= $event.target.value " 
            />
            <label for="checkbox1">{{$i18n.locale == 'ar' ? 'رحلة مباشرة':'Direct Flight'}}</label>
          </div>
          <div class="d-flex align-items-center mb-4">
            <input 
              class="checkbox"
              type="checkbox"
              value="1"
            @change="selected= $event.target.value " 
            />
            <label for="checkbox2">{{$i18n.locale == 'ar' ? 'توقف 1':'Stops 1'}} </label>
          </div>
          <hr />
          <h5 class="color">{{$i18n.locale == 'ar' ? 'شركات الطيران':'Airlines'}} </h5>
          <div
            class="d-flex align-items-center mb-4"
            v-for="(item, key, index) in airlines"
            :key="index"
          >
            <input
              checked
              class="checkbox"
              type="checkbox"
              :value="key"
               v-model="company"
            />
            <!-- :true-value="1"
                :false-value="0" -->
            <label for="">{{ $i18n.locale == "ar" ? item.ar : item.en }}</label>
          </div>
          <hr>
           <h5 class="color">{{$i18n.locale == 'ar' ? 'الرحلات':'Flights'}}</h5>
           <div class="d-flex align-items-center mb-4">
            <input
            :checked="Cheapest[0]==300" 
              class="checkbox"
              type="checkbox"
              value="300"
             @change="selectedCheapest($event.target.value)" 
            />
            <label for="checkbox2"> <img src="/icons/blue2.png" alt="" >{{$i18n.locale == 'ar' ? 'رخيص':'Cheapest'}}</label>
          </div>
          <div class="d-flex align-items-center mb-4">
            <input checked
              class="checkbox"
              type="checkbox"
              value="100000"
              @change="selectedCheapest($event.target.value)" 
            />
            <label for="checkbox2"> <img src="/icons/green2.png" alt="" >{{$i18n.locale == 'ar' ? 'متوفر':'Available'}}</label>
          </div>
          <hr>
          <h5 class="color">{{$i18n.locale == 'ar' ? 'السعر':'Price'}}</h5>
    <div class="d-flex justify-content-between mb-5">
      <span>{{ value[0] }} {{currancy}}</span>
      <span>{{ value[1] }} {{currancy}}</span>
    </div>
              <v-range-slider
                v-model="value"
                step="10"
                :max="1414"
                :min="299"
                thumb-label="always"
              ></v-range-slider>
        </div>
        <div class="col-8">
            <h3 class="color2 mb-5"> <i style="color:#fc4c9d" class="mdi mdi-airplane"></i>{{$i18n.locale == 'ar' ? 'عدد الرحلات':'Departure Flight'}}  ({{filterByflights.length}}) {{$i18n.locale == 'ar' ? 'في النتائج':'Results'}}  </h3>
          <div v-for="(item,index) in filterByflights" :key="index"
          v-show="item.price < Cheapest && item.stops == selected && company.includes(item.marketCode)"

            class="animated flight-result-con mb15"
            ctype="1"
            data-trip-type="O"
            group-id=""
          >
            <div class="flight-result-item" data-id="111b656c0::FZ_846">
              <div class="desc-panel">
                <div class="clearfix">
                  <div class="flight-airline">
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="Flydubai"
                    >
                      <div class="flight-image i-fz"></div>
                    </div>
                    <p class="clearfix ellipsis">
                        {{item.marketCode+item.flightNumber}}
                        </p>
                  </div>
                  <div class="flight-desc">
                    <div class="desc-itinerary">
                      <div class="clearfix d-flex">
                        <div class="inline-block vertical-middle ">
                          <span class="time color2">{{item.depTime.slice(0,2) +':'+item.depTime.slice(2,4)}}</span>
                        </div>
                        <div class="inline-block vertical-middle flight-arrow">
                          <span class="mdi mdi-ray-start-arrow" style="font-size: 25px;margin: 0 25px;color: #b9b9b9;"></span>
                        </div>
                        <div class="inline-block vertical-middle ">
                          <span class="time color2">{{item.arrTime.slice(0,2) +':'+item.arrTime.slice(2,4)}} </span>
                        </div>
                      </div>
                      <p class="txt-duration mt10 mb0 p-3">
                        <span>
                          {{item.duration.slice(0,2) +'h '+item.arrTime.slice(2,4)+'m'}}
                          <br>
                          {{item.marketCode+item.flightNumber}}
                          </span>
                      </p>
                    </div>
                    <div class="desc-others">
                     <img src="/icons/gr.png" alt="" v-if="item.price > 300">
                     <img src="/icons/bl.png" alt="" v-if="item.price < 300">
                    
                      <p
                        class="seat-text available"
                        data-i18n="common.available"
                         v-if="item.price > 300"
                      >
                        {{$i18n.locale == 'ar' ? 'متوفر':'Available'}}
                      </p>
                       <p
                        class="seat-text available"
                        data-i18n="common.available"
                        v-if="item.price < 300"
                      >
                        {{$i18n.locale == 'ar' ? 'رخيص':'Cheapest'}}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="flight-hole"><div class="vertical-line"></div></div>
              <div class="price-panel text-center flight-price">
                <div class="flex-con">
                  <div class="full">
                   <div class="d-flex justify-content-center align-items-center">
                        <h4 :class="[item.price < 300 ? 'un-co':'']" style="font-weight:bold" class="cur-price font-26 bold available">{{item.price + " "}} 
                    </h4>
                    <span class="color" :class="[item.price < 300 ? 'un-co':'']" style="font-size:14px">{{currancy}}</span>
                   </div>
                    <button
                      class="btn btn-fa-primary btn-book-flight btn-lg btn-block mt10"
                      type="dept"
                      flight-type="1"
                      ai=""
                      ib=""
                      inbound='[{"has_promo":0,"promotion_info":[]}]'
                      ob=""
                      data-id="111b656c0::FZ_846"
                      value="859.00"
                      orig="NaN"
                      curr="SAR"
                      group-id=""
                      aria-expanded="false"
                      aria-controls="fl-details-111b656c0FZ_846"
                    >
                      <span class="text" data-i18n="tools.select">
                          {{$i18n.locale == 'ar' ? 'اختيار':'Select'}}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="fl-details-111b656c0FZ_846"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.flights {
  background-color: #e6f0ff;
  .full{
      display: grid;
  }
  .un-co{
      color:#6f34ad !important
  }
  .btn-fa-primary {
  background-color: #196dfb;
  border: 0;
  color: #fff;
  outline: 0;
  box-shadow: none;
  transition: .3s;
  width: 90%;
margin: auto;
}
  .flight-result-item .desc-panel {
  width: calc(100% - (30% + 16px));
  display: inline-block;
  padding: 0 20px;
}
  .color {
    color: $blue;
  }
  .color2 {
    color: $blue2;
  }
  .checkbox {
    accent-color: $blue;
    width: 20px;
    height: 20px;
    margin-inline-end: 25px;
  }
  .loader {
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 35rem;
  height: 30rem;
  margin: 0 auto;
}

.wait {
  margin: 5rem 0;
}
.iata_code {
    font-size: 6rem;
    opacity:0.3;
  top: 52%;
  position: absolute;
  color: #0099cc;
  }
.departure_city {
  left: 0;
}

.arrival_city {
  right: 1.5rem;
}

.plane {
  position: absolute;
  margin: 0 auto;
  width: 100%;
}

.plane-img {
  -webkit-animation: spin 2.5s linear infinite;
  -moz-animation: spin 2.5s linear infinite;
  animation: spin 2.5s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


.earth-wrapper {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  padding-top: 2.7rem;
}

.earth {
  width: 160px;
  height: 160px;
  background: url("https://zupimages.net/up/19/34/6vlb.gif");
  border-radius: 100%;
  background-size: 340px;
  animation: earthAnim 12s infinite linear;
  margin: 0 auto;
  border: 1px solid #CDD1D3;
}

@keyframes earthAnim {
  0% {background-position-x: 0;}
  100% {background-position-x: -340px;}
}

@media screen and (max-width: 420px) {
  .departure_city {
    left: 0;
    right: 0;
    top: 30%;
    position: absolute;
    margin: 0 auto;
  }
  
  .arrival_city {
    left: 0;
    right: 0;
    top: 93%;
    position: absolute;
    margin: 0 auto;
  }
  
  
}
}
</style>
<script>
import axios from 'axios';

export default {
  layout: "app",
  name: "profile",
  data() {
    return {   
    loading:false,
    dateStart:localStorage.getItem("dateStart"),
    dateEnd:localStorage.getItem("dateEnd"),
    currancy:localStorage.getItem("currancy"),
    airlines:[],
    flights:[],
    selected:'0',
    company:[  ] ,
      value: [299, 1414],
    };
  },
  
  components: {
 
  },
   computed: {
         filterByflights() {   
          // if (this.company.length != '') { 
          //   return this.flights.filter(j => this.company.includes(j.marketCode))
          // }
            if (this.value != '') { 
           return this.flights.filter(item => {
            return item.price >= this.value[0] && item.price <= this.value[1];
          })
          }
        return this.flights;
        },
  },
   methods: {
     
     setCode(values) {
       console.log(" ********** code **********",values)
     },
      onPriceChange(values) {
      this.priceMin = values[0];
      this.priceMax = values[1];
    },
   selectedcompany(d) {
    if(this.company.includes(d)){
    this.company-= ' '+d;
    }
    else{
     this.company+= ' '+d;
    }
     console.log(this.company)
  },
       formatDate(dateStart) {
    var d = new Date(dateStart),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  },
   formatDate2(dateEnd) {
    var d = new Date(dateEnd),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  },
   async fetch(){
      var self = this;
        const data = new URLSearchParams();
        data.append("from", localStorage.getItem("from"));
        data.append("to", localStorage.getItem("to"));
        data.append("city_search", "0");
        data.append("date", self.formatDate(self.dateStart));
        data.append("ret_date", self.formatDate2(self.dateEnd));
        data.append("currency", localStorage.getItem("currancy"));
        data.append("adult", localStorage.getItem("Adult"));
        data.append("child", localStorage.getItem("Child"));
        data.append("infant", localStorage.getItem("Infant"));
        data.append("trip_type", "O");
        data.append("n", true);
        data.append("cabin[]", "E");
           await axios
            .post(`https://api.flyakeed.com/index.php/gds/flights`, data, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
              // console.log(res.data.data.flights.render);
              self.airlines = res.data.data.airlines;
              self.flights = res.data.data.flights.render;
              self.loading = true;
              var keys = Object.keys(self.airlines)
              self.company = keys;
              }
            })
             .catch(function(error) {
              if (error.response) {
              
                console.log(error.response);
              }
            });
     }
  },
 created() {
    this.fetch();
  },
};
</script>
<script setup>
const Cheapest = ref(100000);

 const selectedCheapest = (s) => {
    Cheapest.value = s
 }



onMounted(async () => {
 
       
});
</script>
