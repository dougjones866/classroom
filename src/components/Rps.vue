<template>
    <div class="game">
      <h1>Rock Paper Scissors</h1>
      <div v-if="!classroomMode" class="choices">
        <button v-for="choice in choices" :key="choice" @click="playerChoice(choice)">
          {{ choice }}
        </button>
      </div>
      <div v-else class="choices">
        <button @click="startRoulette">Start Classroom Mode</button>
        <p v-if="computerSelection">{{ computerSelection }}</p>
      </div>
      <div v-if="result" class="result">
        <p v-if="!classroomMode">You chose: {{ playerSelection }}</p>
        <p>Computer chose: {{ computerSelection }}</p>
        <p>{{ result }}</p>
        <button @click="resetGame">Play Again</button>
      </div>
      <div class="toggleMode">
        <button @click="toggleMode">Switch to {{ classroomMode ? 'Individual' : 'Classroom' }} Mode</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'RockPaperScissors',
    setup() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      const playerSelection = ref('');
      const computerSelection = ref('');
      const result = ref('');
      const classroomMode = ref(false);
      const rouletteInterval = ref(null);
  
      const playerChoice = (choice) => {
        playerSelection.value = choice;
        computerChoice();
      };
  
      const computerChoice = () => {
        computerSelection.value = choices[Math.floor(Math.random() * 3)];
        determineWinner();
      };
  
      const determineWinner = () => {
        if (playerSelection.value === computerSelection.value) {
          result.value = "It's a tie!";
        } else if (
          (playerSelection.value === 'Rock' && computerSelection.value === 'Scissors') ||
          (playerSelection.value === 'Paper' && computerSelection.value === 'Rock') ||
          (playerSelection.value === 'Scissors' && computerSelection.value === 'Paper')
        ) {
          result.value = 'You win!';
        } else {
          result.value = 'You lose!';
        }
      };
  
      const resetGame = () => {
        playerSelection.value = '';
        computerSelection.value = '';
        result.value = '';
        clearInterval(rouletteInterval.value);
      };
  
      const startRoulette = () => {
        resetGame();
        let count = 0;
        rouletteInterval.value = setInterval(() => {
          computerSelection.value = choices[count % 3];
          count++;
          if (count === 9) { // After 3 cycles
            clearInterval(rouletteInterval.value);
            determineWinner();
          }
        }, 500); // 500ms interval for "Rock, Paper, Scissors" cadence
      };
  
      const toggleMode = () => {
        resetGame();
        classroomMode.value = !classroomMode.value;
      };
  
      return {
        choices,
        playerSelection,
        computerSelection,
        result,
        classroomMode,
        playerChoice,
        startRoulette,
        toggleMode,
        resetGame,
      };
    },
  };
  </script>
  
  <style scoped>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    height: 100vh;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .choices {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 18px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .result {
    margin-top: 20px;
  }
  
  .toggleMode {
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    button {
      font-size: 16px;
      padding: 8px 16px;
    }
  
    .choices {
      flex-direction: column;
    }
  }
  </style>
  