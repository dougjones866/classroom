<script setup>
import { ref } from 'vue'



const months = ref(["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

const selected = (month) => {
  console.log(month)
  selectedMonth.value = month

}
const selectedMonth = ref("")
</script>

<template>
  <div class="dayofweek">
    <h1>What month is it?</h1>
    <ul class="days">
      <li v-for="month in months" :key="month" @click="selected(month)">
        <p>{{ month }}</p>
      </li>
    </ul>
    <div class="todayIs">
      <h2>The month is: <p class="selectedDay">{{ selectedMonth }}</p>
      </h2>
    </div>
  </div>
</template>


<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.days {
  width: 100%;
}

.day:hover {
  background-color: purple;
}

li {
  list-style: none;
  width: calc(100% / 3 - 20px); /* Adjust width for three items per row */
  margin: 10px;
  text-align: center;
}

p {
  background-color: orangered;
  padding: 20px;
  /* border: .5rem solid red; */
  margin: 0;
}

.selectedDay {
  text-align: center;
  width: auto;
 
  padding: 10px;
  border: solid thin;
}

.todayIs {
  display: block;
  text-align: center;
  margin-top: 20px;
}

.dayofweek {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Mobile styles */
@media (max-width: 768px) {
  li {
    width: calc(100% / 2 - 20px); /* Adjust width for two items per row on smaller screens */
  }
}

@media (max-width: 480px) {
  li {
    width: calc(100% - 20px); /* Adjust width for one item per row on very small screens */
  }
}
</style>