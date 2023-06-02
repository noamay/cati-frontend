
<template>
  <div class="home">
    <h1>Welcome to the Game</h1>

    <form @submit.prevent="joinGame">
      <label for="sessionCode">Session Code:</label>
      <input type="text" id="sessionCode" v-model="sessionCode" required>

      <label for="nickname">Nickname:</label>
      <input type="text" id="nickname" v-model="nickname" required>

      <label for="lastTimePooped">Last Time You Pooped:</label>
      <vue-date-picker id="lastTimePooped" v-model="lastTimePooped" required></vue-date-picker>


      <button type="submit">Join Game</button>
    </form>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import  store  from '../store/store.js';
import router from "@/router";

export default {
  data() {
    return {
      sessionCode: '',
      nickname: '',
      lastTimePooped: ''
    };
  },
  methods: {
    joinGame() {
      // Perform actions when the user submits the form
      // You can access the entered values using `this.sessionCode`, `this.nickname`, `this.lastTimePooped`

      // Example: Log the entered values
      console.log('Session Code:', this.sessionCode);
      console.log('Nickname:', this.nickname);
      console.log('Last Time You Pooped:', this.lastTimePooped);
      const formData = {
        name: this.nickname,
        last_poop: this.lastTimePooped,
        session_id: this.sessionCode
      }
      store.dispatch('game/joinGame', formData)
          .then(() => {
            console.log(this.$store.state.game.gameData)
            router.push({ name: 'about' })
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  components: { VueDatePicker  }
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label {
  font-weight: bold;
}
input[type="text"] {
  padding: 5px;
}
button {
  padding: 10px;
}
</style>
