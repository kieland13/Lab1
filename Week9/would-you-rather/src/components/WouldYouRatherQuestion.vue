<template>
  <div>
    
    <h2>Would you rather...</h2>
    <h3>{{ question.question }}</h3>

    <input type="radio" v-bind:id="question.answer1" v-model="choice" v-bind:value="question.answer1" v-on:change="checked(choice)">
    <label v-bind:for="question.answer1">{{ question.answer1 }}</label>
    <input type="radio" v-bind:id="question.answer2" v-model="choice" v-bind:value="question.answer2" v-on:change="checked(choice)">
    <label v-bind:for="question.answer2">{{ question.answer2 }}</label>


  </div>
</template>

<script>
export default {
  name: 'WouldYouRatherQuestion',
  data() {
    return {
      choice: ''
    }
  }, 
  props: {
    question: Object,
  },
  methods: {
    checked(choice) {
      let answer = { id: this.question.id, choice: this.choice }
      this.$emit('answer-changed', answer)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>