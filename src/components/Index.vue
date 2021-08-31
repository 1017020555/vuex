<template>
  <div>
    <div>
      <h3>{{$store.state.count}}</h3>
      <button v-on:click="myAdd(10)">add</button>
      <button v-on:click="myDes(10)">des</button>
    </div>
    <div>异步操作</div>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>
    <div>
      getters--count:{{this.$store.getters.getCount}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    methods: {
      myAdd(n) {
        this.$store.commit('add', n)
      },
      myDes(n) {
        this.$store.commit('des', n)
      },
      handleActionsAdd(n) {
        this.$store.dispatch('actionAdd', n);
      },
      handleActionsReduce(n) {
        this.$store.dispatch('actionDes', n);
      }
    }
  }
</script>

<style>

</style>
