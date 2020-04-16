<template>
  <div id="app">
    <h1>Would you rather...</h1>  

    <WouldYouRatherQuestion 
      v-for="question in questions"
      v-bind:key="question.id"
      v-bind:question="question"
      v-on:answer-changed="answerChanged"
    ></WouldYouRatherQuestion>

    <h2>You Would Rather...</h2>  
    <ul id="answerList">
        <li
          v-for="choice in choices"
          v-bind:key="choice.id"
        > {{ choice.choice }} </li>
      </ul>
  </div>
</template>

<script>
import WouldYouRatherQuestion from './components/WouldYouRatherQuestion.vue'
export default {
  name: 'App',
  components: {
    WouldYouRatherQuestion
  },
  data() {
    return {
      questions: [
        {
          id: 0,
          question: '...have a full suit of armor or a horse?',
          answer1: 'Have a full suit of armor',
          answer2: 'Have a horse',
        },
        {
          id: 1,
          question: '...be really good at math or really good at sports?',
          answer1: 'Be really good at math',
          answer2: 'Be really good at sports',          
        },
        {
          id: 2,
          question: '...ride a very big horse or a very small pony?',
          answer1: 'A very big horse',
          answer2: 'A very small pony',
        },
      ],
      choices: [],
    }
  },
  methods: {
    answerChanged(choice) {
        this.choices.push(choice)
        // how to replace existing object where key exists?
        this.choices.sort(function(c1, c2) {
          return c1.ed > c2.id ? 1 : -1
        })
    },
  },
}
</script>


<style>
</style>