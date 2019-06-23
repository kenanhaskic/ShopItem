<template>
  <div id="app">

  <p id="popust">Trenutni popust je: {{popust}}%</p>

<ul>  
    <li v-for="proizvod in proizvodi" v-bind:key="proizvod.id">
      <h1>{{proizvod.name}}</h1>
      <h3>Cijena: {{proizvod.price - proizvod.oduzeti }} KM</h3>
      <p>Snizeno za: {{proizvod.oduzeti}} KM</p>
      <button @click="change(proizvod.id)">Get lower</button>
    </li>
</ul>

  </div>

</template>
<script>

export default {
props:['proizvodi','popust'],
  
  data () {
    return {

    }
  },
  methods:{
  change(index){
    this.$emit('lowerprice',index)
  }
  }
}
</script>

<style>
li{
  display: inline-block;
  border: 2px solid black;
  margin: 10px;
  text-align: center;
  width:350px;
  height: 200px;
}
#app{
  text-align: center;
}
#popust{
  font-size: 30px;
  color:green
}

</style>