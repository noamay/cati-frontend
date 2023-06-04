<template>
  <div class="home">
    <h1>Join Session!</h1>

    <form @submit.prevent="joinGame">
      <label for="sessionCode" class="InputLabel">Session Code</label>
      <input type="text" id="sessionCode" v-model="sessionCode" class="TextInput" required>

      <label for="nickname" class="InputLabel">Nickname</label>
      <input type="text" id="nickname" v-model="nickname" required class="TextInput">

      <label for="lastTimePooped" class="InputLabel">Last Time You Pooped</label>
      <vue-date-picker id="lastTimePooped" v-model="lastTimePooped" required time-picker
      >
      </vue-date-picker>

      <SuperButton type="submit" text="Join Game"></SuperButton>
    </form>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import store from '../../store/store.js';
import router from "@/router/router";
import SuperButton from "@/components/superButton.vue";

export default {
  data() {
    return {
      sessionCode: '',
      nickname: '',
      lastTimePooped: new Date(),
    };
  },
  methods: {
    joinGame() {
      // Perform actions when the user submits the form
      // You can access the entered values using `this.sessionCode`, `this.nickname`, `this.lastTimePooped`

      // Example: Log the entered values
      console.log('Hopefully Connected')
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
            // TODO - This is the correct point to start the webSocket connection - this.$webSocket.connect(URLFROMSTORE)
            router.push({name: 'about'})
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  components: {SuperButton, VueDatePicker}
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

input[type="text"] {
  padding: 5px;
}

button {
  margin: 20px;
  padding: 10px;
}

.InputLabel {
  font-family: Bangers, Helvetica, Arial, sans-serif;
  font-size: 28px;
  margin: 5px;
}

.TextInput {
}

</style>
