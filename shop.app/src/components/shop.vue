<template>
<div>

 <itemmessage :proizvodi="data" :popust="popust" :zaoduzet="oduzeti" @lowerprice="rand($event)"></itemmessage>
 
</div> 
</template>
<script>

import Item from './Item'
export default {
    components:{
'itemmessage':Item
    },
    data(){
        return{
          data:
          [
              {
                  name:'Samsung S7',
                  price:320,
                  id:'1',
                  oduzeti:0,
              } , 
             {
                  name:'Samsung S10+',
                  price:800,
                  id:'2',
                  oduzeti:0,
              } ,
             {
                  name:'Huawei Honor 8',
                  price:300,
                  id:'3',
                  oduzeti:0,
              } ,
             {
                  name:'Iphone XS',
                  price:1250,
                  id:'4',
                  oduzeti:0,
              } ,
             {
                  name:'Dodge',
                  price:250,
                  id:'5',
                  oduzeti:0,
              },
              {
                  name:'LG G5',
                  price:400,
                  id:'6',
                  oduzeti:0,
              }],
              popust:0,
              
              }
        },
      methods:{
      rand(val){
          this.popust=Math.floor(Math.random()*21)+5;
          this.updateprice(val);
       },
       updateprice(i){
           let value=
           this.data[i-1].oduzeti=(this.data[i-1].price*(this.popust/100)).toPrecision(3);
       }
                                             
    }
}
</script>
<style scoped>


</style>
