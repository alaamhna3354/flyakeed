

<template>
  <div class="flights">
    <div class="bottom-header">
      <div class="container">
        <div class="row" style="position: relative;">
          <div class="col-sm-1" style="position: absolute;top: 13px;">
            <img src="https://dsx9kbtamfpyb.cloudfront.net/desktop-web-fav4/images/arrows/back-left.png" alt="">
          </div>
          <div class="col-sm-3">
            <div class="text-white text-center fw-bold h6">{{from}}-{{to}}</div>
            <div class="text-center" style="color:#196df5">{{Adult}} Adult - Economy</div>
          </div>
           <div class="col-sm-3">
            <div class="text-white text-center fw-bold h6">{{formatDate(dateStart)}}</div>
            <div class="text-center" style="color:#196df5">Departure</div>
          </div>
          <div class="col-sm-3">
            <div class="text-white text-center fw-bold h6">{{formatDate(dateEnd)}}</div>
            <div class="text-center" style="color:#196df5">Return</div>
          </div>
          <div class="col-sm-3 text-end">
            <button class="btn btn-search-outline btn-change-search p10" style="min-width:150px;background: 0 0;
border: 1px solid #e6f0ff;
color: #e6f0ff;
outline: 0;
box-shadow: none;">
              <span class="text" data-i18n="flight.changesearch">Change Search</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="errorflights" style="height:500px"> 
       <h2 class="text-center" style="color:#0a0f57;padding-top:100px">{{$i18n.locale == 'ar' ? 'لا توجد رحلات للاختيارات الاسبقة':'No flights for this route'}}</h2>
      </div>
      <div class="loader" v-if="!loading">
      <!-- <div class="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" class="plane-img">
      </div>
      <div class="earth-wrapper">
        <div class="earth"></div>
      </div>   -->
      <h2 class="text-center mt-5" style="color:#0a0f57">{{$i18n.locale == 'ar' ? 'بحث الرحلات':'Searching Flights'}}</h2>
      <img src="https://dsx9kbtamfpyb.cloudfront.net/desktop-web-fav4/images/search-result.gif" alt="">
    </div>
    
      <div class="row pt-5" v-if="!errorflights && loading">
        <div class="col-3">
          <h5 class="color">{{$i18n.locale == 'ar' ? 'توقف':'Stops'}} </h5>
          <div class="d-flex align-items-center mb-4 checkbox-contain">
            <input 
              class="checkbox"
              type="checkbox"
              value="0"
              checked
               @change="selected= $event.target.value " 
            />
           <span class=" checkmark"></span>
            <label for="checkbox1">{{$i18n.locale == 'ar' ? 'رحلة مباشرة':'Direct Flight'}}</label>
          </div>
          <div class="d-flex align-items-center mb-4 checkbox-contain">
            <input 
              class="checkbox"
              type="checkbox"
              value="1"
            @change="selected= $event.target.value " 
            />
            <span class=" checkmark"></span>
            <label for="checkbox2">{{$i18n.locale == 'ar' ? 'توقف 1':'Stops 1'}} </label>
          </div>
          <hr />
          <h5 class="color">{{$i18n.locale == 'ar' ? 'شركات الطيران':'Airlines'}} </h5>
          <div
            class="d-flex align-items-center mb-4 checkbox-contain"
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
                <span class=" checkmark"></span>
            <label for="">{{ $i18n.locale == "ar" ? item.ar : item.en }}</label>
          </div>
          <hr>
           <h5 class="color">{{$i18n.locale == 'ar' ? 'الرحلات':'Flights'}}</h5>
           <div class="d-flex align-items-center mb-4 checkbox-contain">
            <input
              class="checkbox"
              type="checkbox"
              value="300"
             @change="selectedCheapest($event.target.value)" 
            />
            <span class=" checkmark"></span>
            <label for="checkbox2"> <img src="/icons/blue2.png" alt="" >{{$i18n.locale == 'ar' ? 'رخيص':'Cheapest'}}</label>
          </div>
          <div class="d-flex align-items-center mb-4  checkbox-contain">
            <input checked
              class="checkbox"
              type="checkbox"
              value="100000"
              @change="selectedCheapest($event.target.value)" 
            />
            <span class=" checkmark"></span>
            <label for="checkbox2"> <img src="/icons/green2.png" alt="" >{{$i18n.locale == 'ar' ? 'متوفر':'Available'}}</label>
          </div>
          <hr>
          <h5 class="color">{{$i18n.locale == 'ar' ? 'السعر':'Price'}}</h5>
    <div class="d-flex justify-content-between mb-5">
      <span>{{min }} {{currancy}}</span>
      <span>{{ max }} {{currancy}}</span>
    </div>
           <div class="rang">
                 <div @mousemove="doDrag" class="outercontainer">
    <div class="slider-container mt-5">
      <div class="slider-content-container">
        <div
          @mousedown="startDrag"
          class="drag-1"
          :style="{ left: drag1.left + 'px' }"
        >
        <span>{{ Math.floor(numberLeft)  }}</span>
        </div>
        <div class="slider-value-background" id="slider-background"></div>
        <div
          class="slider-value"
          :style="{ width: width + 'px', left: drag1.left + 'px' }"
        >
       
        </div>
        <div
          @mousedown="startDrag2"
          class="drag-2"
          :style="{ left: drag2.left + 'px' }"
        >
         <span>{{ Math.floor(numberRight)   }}</span></div>
      </div>
    </div>
  </div>
           </div>
        </div>
        <div class="col-8">
            <h4 class="mb-5" style="color:#114aaf;font-size: 18px;"> <i style="color:#fc4c9d;font-size: 25px;" class="mdi mdi-airplane"></i>{{$i18n.locale == 'ar' ? 'عدد الرحلات':'Departure Flight'}}  ({{filterByflights.length}}) {{$i18n.locale == 'ar' ? 'في النتائج':'Results'}}
             <br>
             <span style="font-size: 15px;font-weight: 400;margin-inline-start:25px ;">{{formatDate(dateStart)}}</span>
            </h4>
          <div v-for="(item,index) in filterByflights" :key="index"

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
                      <div :class="`flight-image i-${item.marketCode}`"></div>
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
<style src="./Slider.scss" lang="scss"/>
<script>
import axios from 'axios';
import "vue-range-slider/dist/vue-range-slider.css";
export default {
  layout: "app",
  name: "profile",
  data() {
    return {   
      min: "299",
      max: "1414",
      minNumber: 299,
      maxNumber: 1414,
      numberLeft: 299,
      numberRight: 1414,
      sliderValue: 0,
      width: 0,
      drag1: {
        left: 0
      },
      drag2: {
        left: 200
      },

      dragging: false,
      dragging2: false,
      draggable: 0,
    loading:false,
    errorflights:false,
    dateStart:localStorage.getItem("dateStart"),
    dateEnd:localStorage.getItem("dateEnd"),
    currancy:localStorage.getItem("currancy"),
    from:localStorage.getItem("from"),
    to:localStorage.getItem("to"),
    Adult:localStorage.getItem("Adult"),
    Child:localStorage.getItem("Child"),
    Infant:localStorage.getItem("Infant"),
    airlines:[],
    flights:[],
    selected:'0',
    company:[  ] ,
    Cheapest:100000 ,
    };
  },
  
  components: {
 
  },
   computed: {
         filterByflights() {   
            if (this.numberLeft != '') { 
           return this.flights.filter(item => {
            return item.price >= this.numberLeft && item.price <= this.numberRight && this.company.includes(item.marketCode) && item.stops == this.selected && item.price < this.Cheapest;
          })
          }
        return this.flights;
        },
           calcWidth() {
      return this.drag2.left - this.drag1.left + 5;
    },
    isNumberKey(evt) {
      var charCode = evt.which ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

      return true;
    }
  },

   methods: {
   selectedCheapest(x) {
      this.Cheapest = x
    },
      numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    },
    setMin() {
      if (
        (/[0-9]|\./.test(String.fromCharCode(event.keyCode)) &&
          !event.shiftKey) ||
        this.disabledKeys.includes(event.keyCode)
      ) {
        const number = this.min.replace(/'/g, "");
        this.minNumber = Number(number);
        this.min = this.numberWithCommas(number);
      } else {
        this.min = this.min
          .replace(String.fromCharCode(event.keyCode).toLowerCase(), "")
          .replace(String.fromCharCode(event.keyCode), "");
      }
    },

    setMax() {
      if (
        (/[0-9]|\./.test(String.fromCharCode(event.keyCode)) &&
          !event.shiftKey) ||
        this.disabledKeys.includes(event.keyCode)
      ) {
        const number = this.max.replace(/ /g, "_").replace(/'/g, "");
        this.maxNumber = Number(number);
        this.max = this.numberWithCommas(number);
      } else {
        this.max = this.max
          .replace(String.fromCharCode(event.keyCode).toLowerCase(), "")
          .replace(String.fromCharCode(event.keyCode), "");
      }
    },

    startDrag() {
      this.dragging = true;
      this.draggable = 1;
    },

    startDrag2() {
      this.dragging2 = true;
      this.draggable = 2;
    },
    stopDrag() {
      this.dragging = false;
      this.draggable = 0;
    },
    stopDrag2() {
      this.dragging2 = false;
      this.draggable = 0;
    },

    doDrag(event) {
      if (this.dragging || this.dragging2) {
        if (this.draggable === 1 && this.drag1.left + 20 < this.drag2.left) {
          const newLeft = event.clientX - 100;
          if (
            newLeft > 0 &&
            newLeft + 5 <=
              document.getElementById("slider-background").offsetWidth
          ) {
            this.width = this.calcWidth;
            this.drag1.left = newLeft;
            this.calcPercentLeft();
          }
        } else if (
          this.draggable === 2 &&
          this.drag2.left - 20 > this.drag1.left
        ) {
          const newLeft = event.clientX - 100;
          if (
            newLeft > 0 &&
            newLeft + 5 <=
              document.getElementById("slider-background").offsetWidth
          ) {
            this.width = this.calcWidth;
            this.drag2.left = newLeft;
            this.calcPercentRight();
          }
        }
      }
    },
    calcPercentLeft() {
      this.numberLeft = 0;
      const percent =
        (100 / document.getElementById("slider-background").offsetWidth) *
        this.drag1.left;
      this.numberLeft =
        (this.maxNumber + this.minNumber) * (percent / 100).toFixed(4);
    },

    calcPercentRight() {
      this.numberRight = 0;
      const percent =
        (100 / document.getElementById("slider-background").offsetWidth) *
        this.drag2.left;
      this.numberRight =
        (this.maxNumber + this.minNumber) * (percent / 100).toFixed(4);
    },
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
      //          const link = document.createElement('link')
      // link.setAttribute('rel', 'stylesheet')
      // link.setAttribute('type', 'text/css')
      // link.setAttribute('href', '/_nuxt/assets/styles/scss/code.css')
      // document.head.appendChild(link)
              }
            })
             .catch(function(error) {
              if (error.response) {
               self.loading = true;
                 self.errorflights = true;
                console.log(error.response);
                setTimeout(() => {
                  self.$router.push("/");
                }, 3000);
              }
            });
     }
  },
  mounted() {
    window.addEventListener("mouseup", this.stopDrag);
    window.addEventListener("mouseup", this.stopDrag2);
  },
 created() {
    this.fetch();
     this.width = this.calcWidth;
  },
};
</script>
<script setup>
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
 



onMounted(async () => {
 
       
});
</script>
<style lang="scss" scoped >
@import "~/assets/styles/scss/theme/variables";
@import "~/assets/styles/scss/theme/mixin";
.bottom-header{
  background-color: #0a0f57;
  padding: 10px 0;
}
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
.checkbox-contain{
  position: relative;
}
 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  z-index: 2;
}
.checkmark {
  position: absolute;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* When the checkbox is checked, add a blue background */
 input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkmark ~ label{
  margin-inline-start: 30px;
}
/* Show the checkmark when checked */
 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
 .checkmark:after {
  left: 10px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
