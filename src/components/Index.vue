<template>
  <div>
    <h3>{{$store.state.count}}</h3>
    <button v-on:click="myAdd(10)">add</button>
    <button v-on:click="myDes(10)">des</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods:{
    myAdd(n){
      this.$store.commit('add',n)
    },
    myDes(n){
      this.$store.commit('des',n)
    }
  }
}
</script>

<style>

</style>
