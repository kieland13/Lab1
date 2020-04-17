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
    <ul class="answerList">
        <li
          v-for="choice in choices"
          v-bind:key="choice.id"
        > {{ choice }} </li>
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

        let index = choice.id
        this.choices[index] = choice.choice
        this.$set(this.choices, index, choice.choice)
      
    },
  },
}
</script>


<style>

body {
  background-color:peachpuff;
}

h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:blue;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
}

li {
  text-align: center;
}
.answerList {
  color:darkslategrey;
  font-weight: bold;
  text-align: center;
  font-size: 19px;
}

h2 {
  color:darkblue;
  font-size:30px;
  text-align: center;
}


</style>