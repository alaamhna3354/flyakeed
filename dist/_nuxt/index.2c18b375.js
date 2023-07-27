import{a as E,m as l,q as z,o as i,e as d,u as n,t as s,h as k,f as e,k as h,w as J,s as L,x as F,F as O,r as P,y as v,z as de,p as ce,l as re,A as ve,b as ue}from"./entry.4caafed9.js";import{a as Y}from"./axios.a28fc0ff.js";const p=m=>(ce("data-v-ef0f8810"),m=m(),re(),m),pe={key:0,class:"alert alert-danger",role:"alert"},he={class:"container"},me={class:"row"},_e={class:"col-12 col-md-5"},fe={class:"flyakeed-contain"},ye={class:"d-flex"},be={class:"flyakeed-item"},ge=p(()=>e("input",{id:"cb-flight",class:"d-none",name:"cb-hotel",type:"radio",value:"E",checked:"checked"},null,-1)),we=p(()=>e("i",{class:"mdi mdi-airplane"},null,-1)),ke={"data-i18n":"flight.flights"},$e={class:"flyakeed-item"},Ie=p(()=>e("input",{id:"cb-hotel",class:"d-none",name:"cb-hotel",type:"radio",value:"B"},null,-1)),Ce=p(()=>e("i",{class:"mdi mdi-bed"},null,-1)),xe={"data-i18n":"tools.hotels"},Se={class:"flyakeed-contain"},Fe={class:"d-flex"},Ae={class:"flyakeed-item"},De=p(()=>e("input",{id:"cb-flight",class:"d-none",name:"cb-palne",type:"radio",value:"E",checked:"checked"},null,-1)),Te={"data-i18n":"flight.flights"},Ve={class:"flyakeed-item"},qe=p(()=>e("input",{id:"cb-hotel",class:"d-none",name:"cb-palne",type:"radio",value:"B"},null,-1)),Be={"data-i18n":"tools.hotels"},Me={class:"flyakeed-item"},Re=p(()=>e("input",{id:"cb-hotel",class:"d-none",name:"cb-palne",type:"radio",value:"B"},null,-1)),Ee={"data-i18n":"tools.hotels"},Ue={style:{color:"#ff56a1"}},je=p(()=>e("span",{class:"mdi mdi-airplane-takeoff"},null,-1)),He=["placeholder"],Ne={key:0,style:{"font-size":"22px",color:"#1a1f71",right:"25px",position:"absolute"}},ze={key:1},Je=["onClick"],Le={style:{color:"#ff56a1"}},Oe=p(()=>e("span",{class:"mdi mdi-airplane-landing"},null,-1)),Pe=["placeholder"],Ye={key:0,style:{"font-size":"22px",color:"#1a1f71",right:"25px",position:"absolute"}},We={key:1},Ge=["onClick"],Ke={class:"d-flex mt-5"},Qe={class:"From-search active"},Xe={class:"mb-4",style:{color:"#196dfb"}},Ze={class:"row"},ea={class:"col-6"},aa={class:"color2"},ta={class:"col-6 color2 fw-bold"},sa={class:"From-search",style:{"margin-inline-start":"10px"}},oa={class:"mb-4",style:{color:"#196dfb"}},na={class:"row"},la={class:"col-6"},ia={class:"color2"},da={class:"col-6 color2 fw-bold"},ca={class:"row person-count"},ra={class:"col-4 col-sm-4 item"},va={class:"d-flex justify-content-around"},ua={class:"count"},pa={class:"col-4 col-sm-4 item"},ha={class:"d-flex justify-content-around"},ma={class:"count"},_a={class:"col-4 col-sm-4 item"},fa={class:"d-flex justify-content-around"},ya={class:"count"},ba={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},ga={class:"nav-link active",id:"nav-arrivals-tab","data-bs-toggle":"tab","data-bs-target":"#nav-arrivals",type:"button",role:"tab","aria-controls":"nav-arrivals","aria-selected":"true"},wa={class:"rounded px-5"},ka={class:"nav-link",id:"nav-arrivals-tab","data-bs-toggle":"tab","data-bs-target":"#nav-arrivals",type:"button",role:"tab","aria-controls":"nav-arrivals","aria-selected":"true"},$a={class:"rounded px-5"},Ia={class:"nav-link",id:"nav-arrivals-tab","data-bs-toggle":"tab","data-bs-target":"#nav-arrivals",type:"button",role:"tab","aria-controls":"nav-arrivals","aria-selected":"true"},Ca={class:"rounded px-5"},xa={class:"mt-5"},Sa={__name:"SearchSection",setup(m){const r=l(1),u=l(0),c=l(0),b=l(!1),W=async()=>{r.value==10?r.value=10:r.value++},G=async()=>{u.value==10?u.value=10:u.value++},K=async()=>{c.value==10?c.value=10:c.value++},Q=async()=>{r.value==0?r.value=0:r.value--},X=async()=>{u.value==0?u.value=0:u.value--},Z=async()=>{c.value==0?c.value=0:c.value--},$=l(!0),_=l(0),I=l(!0),g=l(),w=l(),f=l(),C=l(),U=l(),j=l(),A=l(!1),D=l(!1),T=l(),V=l(),q=l(),B=l(),M=l(),R=l(),H=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=async()=>{localStorage.setItem("from",f.value),localStorage.setItem("to",C.value),localStorage.setItem("dateStart",x.value),localStorage.setItem("dateEnd",S.value),localStorage.setItem("Adult",r.value),localStorage.setItem("Child",u.value),localStorage.setItem("Infant",c.value),f.value!=null&&C.value!=null?await de("/flightResult"):(b.value=!0,setTimeout(()=>{b.value=!1},4e3))},x=l(new Date),ae=a=>(T.value=a.getDate(),V.value=a.getMonth()+1,q.value=a.getFullYear(),`${q.value}-${V.value}-${T.value}`),S=l(new Date),te=a=>(B.value=a.getDate(),M.value=a.getMonth()+1,R.value=a.getFullYear(),`${R.value}-${M.value}-${B.value}`),se=async()=>{const a=new URLSearchParams;a.append("keyword",g.value),a.append("offset","0");const o=await Y.post("https://api.flyakeed.com/index.php/airport/search",a);o&&(U.value=o.data.data,A.value=!0,console.log(o.data.data))},oe=async()=>{const a=new URLSearchParams;a.append("keyword",w.value),a.append("offset","0");const o=await Y.post("https://api.flyakeed.com/index.php/airport/search",a);o&&(j.value=o.data.data,console.log(o.data.data),D.value=!0)},ne=async(a,o)=>{g.value=a,f.value=o,setTimeout(()=>{A.value=!1},200)},le=async(a,o)=>{w.value=a,C.value=o,setTimeout(()=>{D.value=!1},200)};return(a,o)=>{const N=z("vue-date-picker"),y=z("font-awesome-icon");return i(),d("div",{class:h(["search-section",[a.$i18n.locale=="ar"?"":"act"]])},[n(b)?(i(),d("div",pe,s(a.$i18n.locale=="ar"?"\u0627\u062E\u062A\u0631 \u0645\u0633\u0627\u0631 \u0627\u0644\u0631\u062D\u0644\u0629":"Invalid Location"),1)):k("",!0),e("div",he,[e("div",me,[e("div",_e,[e("div",fe,[e("div",ye,[e("div",be,[ge,e("label",{onClick:o[0]||(o[0]=t=>$.value=!0),class:h([[n($)?"active":""],"flyhotel"]),for:"cb-flight"},[we,e("span",ke,s(a.$i18n.locale=="ar"?"\u0627\u0644\u0631\u062D\u0644\u0627\u062A":"Flights"),1)],2)]),e("div",$e,[Ie,e("label",{onClick:o[1]||(o[1]=t=>$.value=!1),class:h([[n($)?"":"active"],"flyhotel"]),for:"cb-hotel"},[Ce,e("span",xe,s(a.$i18n.locale=="ar"?"\u0627\u0644\u0641\u0646\u0627\u062F\u0642":"Hotels"),1)],2)])])]),e("div",Se,[e("div",Fe,[e("div",Ae,[De,e("label",{onClick:o[2]||(o[2]=t=>_.value=0),class:h([[n(_)==0?"active":""],"flyhotel"]),for:"cb-flight"},[e("span",Te,s(a.$i18n.locale=="ar"?"\u0637\u0631\u064A\u0642 \u0648\u0627\u062D\u062F":"Oneway"),1)],2)]),e("div",Ve,[qe,e("label",{onClick:o[3]||(o[3]=t=>_.value=1),class:h([[n(_)==1?"active":""],"flyhotel"]),for:"cb-palne"},[e("span",Be,s(a.$i18n.locale=="ar"?"\u062C\u0648\u0644\u0629":"Roundtrip"),1)],2)]),e("div",Me,[Re,e("label",{onClick:o[4]||(o[4]=t=>_.value=3),class:h([[n(_)==3?"active":""],"flyhotel"]),for:"cb-palne"},[e("span",Ee,s(a.$i18n.locale=="ar"?"\u0645\u062F\u064A\u0646\u0629 \u0645\u062A\u0639\u062F\u062F\u0629":"Multi-City"),1)],2)])])]),e("div",{class:h(["From-search",[n(I)?"active":""]]),onClick:o[6]||(o[6]=t=>I.value=!0)},[e("div",Ue,[je,e("span",null,s(a.$i18n.locale=="ar"?"\u0645\u0646":"From"),1)]),J(e("input",{onInput:se,type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>F(g)?g.value=t:null),name:"From",placeholder:a.$i18n.locale=="ar"?"\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0623\u0648 \u0627\u0644\u0645\u0637\u0627\u0631":"City or Airport"},null,40,He),[[L,n(g)]]),n(f)!=""?(i(),d("span",Ne,s(n(f)),1)):k("",!0),n(A)?(i(),d("ul",ze,[(i(!0),d(O,null,P(n(U),t=>(i(),d("li",{key:t.id,onClick:ie=>ne(t.en.name,t.code)},[e("span",null,s(a.$i18n.locale=="ar"?t.ar.name:t.en.name),1),e("strong",null,s(t.code),1),e("p",null,s(a.$i18n.locale=="ar"?t.ar.address:t.en.address)+","+s(a.$i18n.locale=="ar"?t.ar.country:t.en.country),1)],8,Je))),128))])):k("",!0)],2),e("div",{class:h(["From-search",[n(I)?"":"active"]]),onClick:o[8]||(o[8]=t=>I.value=!1)},[e("div",Le,[Oe,e("span",null,s(a.$i18n.locale=="ar"?"\u0627\u0644\u0649":"To"),1)]),J(e("input",{onInput:oe,type:"text","onUpdate:modelValue":o[7]||(o[7]=t=>F(w)?w.value=t:null),name:"To",placeholder:a.$i18n.locale=="ar"?"\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0623\u0648 \u0627\u0644\u0645\u0637\u0627\u0631":"City or Airport"},null,40,Pe),[[L,n(w)]]),n(f)!=""?(i(),d("span",Ye,s(n(C)),1)):k("",!0),n(D)?(i(),d("ul",We,[(i(!0),d(O,null,P(n(j),t=>(i(),d("li",{key:t.id,onClick:ie=>le(t.en.name,t.code)},[e("span",null,s(a.$i18n.locale=="ar"?t.ar.name:t.en.name),1),e("strong",null,s(t.code),1),e("p",null,s(a.$i18n.locale=="ar"?t.ar.address:t.en.address)+","+s(a.$i18n.locale=="ar"?t.ar.country:t.en.country),1)],8,Ge))),128))])):k("",!0)],2),e("div",Ke,[e("div",Qe,[e("div",Xe,s(a.$i18n.locale=="ar"?"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u0629":"Departure Date"),1),e("div",Ze,[e("div",ea,[e("h1",aa,s(n(T)),1)]),e("div",ta,[e("div",null,s(H[n(V)-1]),1),e("div",null,s(n(q)),1)])]),v(N,{modelValue:n(x),"onUpdate:modelValue":o[9]||(o[9]=t=>F(x)?x.value=t:null),format:ae,"min-date":new Date},null,8,["modelValue","min-date"])]),e("div",sa,[e("div",oa,s(a.$i18n.locale=="ar"?"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0648\u062F\u0629":"Return Date"),1),e("div",na,[e("div",la,[e("h1",ia,s(n(B)),1)]),e("div",da,[e("div",null,s(H[n(M)-1]),1),e("div",null,s(n(R)),1)])]),v(N,{modelValue:n(S),"onUpdate:modelValue":o[10]||(o[10]=t=>F(S)?S.value=t:null),format:te,"min-date":new Date},null,8,["modelValue","min-date"])])]),e("div",ca,[e("div",ra,[e("div",null,s(a.$i18n.locale=="ar"?"\u0628\u0627\u0644\u063A":"Adult"),1),e("div",va,[e("span",ua,s(n(r)),1),e("span",null,[e("div",null,[v(y,{onClick:W,icon:["fas","angle-up"]})]),e("div",null,[v(y,{onClick:Q,icon:["fas","angle-down"]})])])])]),e("div",pa,[e("div",null,s(a.$i18n.locale=="ar"?"\u0648\u0644\u062F":"Child"),1),e("div",ha,[e("span",ma,s(n(u)),1),e("span",null,[e("div",null,[v(y,{onClick:G,icon:["fas","angle-up"]})]),e("div",null,[v(y,{onClick:X,icon:["fas","angle-down"]})])])])]),e("div",_a,[e("div",null,s(a.$i18n.locale=="ar"?"\u0631\u0636\u064A\u0639":"Infant"),1),e("div",fa,[e("span",ya,s(n(c)),1),e("span",null,[e("div",null,[v(y,{onClick:K,icon:["fas","angle-up"]})]),e("div",null,[v(y,{onClick:Z,icon:["fas","angle-down"]})])])])])]),e("div",null,[e("nav",null,[e("div",ba,[e("button",ga,[e("span",wa,s(a.$i18n.locale=="ar"?"\u0627\u0642\u062A\u0635\u0627\u062F":"Economy"),1)]),e("button",ka,[e("span",$a,s(a.$i18n.locale=="ar"?"\u0639\u0645\u0644":"Business"),1)]),e("button",Ia,[e("span",Ca,s(a.$i18n.locale=="ar"?"\u0627\u0644\u0635\u0641 \u0627\u0644\u0623\u0648\u0644":"First Class"),1)])])])]),e("div",xa,[e("button",{onClick:ee,class:"search-button"},s(a.$i18n.locale=="ar"?"\u0628\u062D\u062B \u0627\u0644\u0631\u062D\u0644\u0629":"Search Flight"),1)])])])])],2)}}},Fa=E(Sa,[["__scopeId","data-v-ef0f8810"]]);const Aa={},Da=ve('<section class="about-wrapper mt-5 mb-5" data-v-1ee62e26><div class="container no-padding" data-v-1ee62e26><div class="row no-margin" data-v-1ee62e26><div class="col-md-6 about-content wow fadeIn" style="visibility:visible;animation-name:fadeIn;" data-v-1ee62e26><h1 class="about-header no-margin bold mb30" style="color:#284da0;" data-i18n="index.seamlesscorporate" data-v-1ee62e26>Seamless Corporate Travel Experience</h1><p class="about-content no-padding lh-1-5" style="color:#284da0;" data-i18n="index.seamlesscorporatedesc" data-v-1ee62e26>FlyAkeed\u2019s solution offers comprehensive travel services and innovative solutions for corporates and their employees to help them achieve the ultimate booking experience when traveling for work.</p></div><div class="col-md-6 about-content wow fadeIn text-center" style="visibility:visible;animation-name:fadeIn;" data-v-1ee62e26><i class="phone-img phone-landing wow animted fadeIn" data-wow-delay="0.8s" style="visibility:visible;animation-delay:0.8s;animation-name:fadeIn;" data-v-1ee62e26></i></div></div></div></section><section class="client-wrapper" data-v-1ee62e26><div class="container no-padding" data-v-1ee62e26><div class="row no-margin" data-v-1ee62e26><div class="col-md-12 about-content text-center wow fadeIn" style="visibility:visible;animation-name:fadeIn;" data-v-1ee62e26><h1 class="about-header no-margin mb30" style="color:#284da0;font-size:24px;" data-i18n="index.top_client" data-v-1ee62e26>Join the Elite Ranks of the Most Impressive Companies Trusting Us</h1></div><div class="col-md-12 about-content wow fadeIn text-center" style="visibility:visible;animation-name:fadeIn;" data-v-1ee62e26></div></div><div class="row no-margin about-content text-center wow fadeIn" style="visibility:visible;animation-name:fadeIn;" data-v-1ee62e26><div class="col-md-2" data-v-1ee62e26><i class="new-client client-1" data-v-1ee62e26></i></div><div class="col-md-2" data-v-1ee62e26><i class="new-client client-2" data-v-1ee62e26></i></div><div class="col-md-2" data-v-1ee62e26><i class="new-client client-3" data-v-1ee62e26></i></div><div class="col-md-2" data-v-1ee62e26><i class="new-client client-4" data-v-1ee62e26></i></div><div class="col-md-2" data-v-1ee62e26><i class="new-client client-5" data-v-1ee62e26></i></div><div class="col-md-2" data-v-1ee62e26><i class="new-client client-6" data-v-1ee62e26></i></div></div></div></section><section class="testimonial-wrapper" data-v-1ee62e26><div class="container wow fadeIn animated" data-wow-delay="1s" style="visibility:visible;animation-delay:1s;animation-name:fadeIn;" data-v-1ee62e26><div class="clearfix text-center" data-v-1ee62e26><h2 class="prime-color bold font-36" data-i18n="index.testimonials" data-v-1ee62e26>Testimonials</h2></div><div class="row" data-v-1ee62e26><a class="testimonial_link col-md-4" href="javascript:;" data-v-1ee62e26><div class="col-testi" data-v-1ee62e26><div class="testimonial" data-v-1ee62e26><blockquote data-i18n="index.testimonials1" data-v-1ee62e26>FlyAkeed made my life easier. We used to work with agents in the past but with FlyAkeed, I can get notified with requests with approval instead of waiting 1-2 days for confirmation that they can travel.</blockquote><span class="testimoni-sparator" data-v-1ee62e26></span></div><div class="clearfix" data-v-1ee62e26></div><div class="testimoni-author" data-v-1ee62e26><div class="author-info" data-v-1ee62e26></div><div class="testimonial-client1" alt="flight tickets cheapest" data-v-1ee62e26></div></div></div></a><a class="testimonial_link col-md-4" href="javascript:;" data-v-1ee62e26><div class="col-testi" data-v-1ee62e26><div class="testimonial" data-v-1ee62e26><blockquote data-i18n="index.testimonials2" data-v-1ee62e26>In the past, everything was done by papers and we had to contact agents through email. The process used to take too long and there was no way to monitor, but with FlyAkeed, everything is seamless and transparent</blockquote><span class="testimoni-sparator" data-v-1ee62e26></span></div><div class="clearfix" data-v-1ee62e26></div><div class="testimoni-author" data-v-1ee62e26><div class="author-info" data-v-1ee62e26></div><div class="testimonial-client2" alt="student flight tickets" data-v-1ee62e26></div></div></div></a><a class="testimonial_link col-md-4" href="javascript:;" data-v-1ee62e26><div class="col-testi" data-v-1ee62e26><div class="testimonial" data-v-1ee62e26><blockquote data-i18n="index.testimonials3" data-v-1ee62e26>As a company, one of the important features we want is having a dashboard to monitor all flights and seeing their costs and times</blockquote><span class="testimoni-sparator" data-v-1ee62e26></span></div><div class="clearfix" data-v-1ee62e26></div><div class="testimoni-author" data-v-1ee62e26><div class="author-info" data-v-1ee62e26></div><div class="testimonial-client3" alt="flight tickets cheapest" data-v-1ee62e26></div></div></div></a></div></div></section><section class="app-wrapper" data-v-1ee62e26><div class="container" data-v-1ee62e26><div class="row" data-v-1ee62e26><div class="col-md-4" data-v-1ee62e26><i class="app-img phone wow animted fadeIn" data-wow-delay="0.8s" style="visibility:visible;animation-delay:0.8s;animation-name:fadeIn;" data-v-1ee62e26></i></div><div class="col-md-8 mt60" data-v-1ee62e26><h2 class="bold mb20 font-40" data-i18n="index.getapp" style="color:#284da0;" data-v-1ee62e26>Book Flights Anytime, Anywhere with the Convenience of Our Downloadable App</h2><div class="row" data-v-1ee62e26><div class="col-md-12 dl-btns" data-v-1ee62e26><a href="https://itunes.apple.com/app/id988581688" class="new-app-link" target="_blank" data-v-1ee62e26><i class="fl-ndx-ico appstore-new" data-v-1ee62e26></i></a><a href="https://play.google.com/store/apps/details?id=com.leandiv.flyakeed" class="new-app-link" target="_blank" data-v-1ee62e26><i class="fl-ndx-ico googleplay-new" data-v-1ee62e26></i></a></div></div></div></div></div></section>',4),Ta=[Da];function Va(m,r){return i(),d("div",null,Ta)}const qa=E(Aa,[["render",Va],["__scopeId","data-v-1ee62e26"]]);const Ba={__name:"Home",setup(m){return(r,u)=>{const c=Fa,b=qa;return i(),d("div",null,[v(c),v(b)])}}},Ma=E(Ba,[["__scopeId","data-v-7c5ebb17"]]),Ua={__name:"index",setup(m){return ue(()=>{}),(r,u)=>{const c=Ma;return i(),d("div",null,[v(c)])}}};export{Ua as default};
