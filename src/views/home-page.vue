
<template>
  <div class="home">
    <h1>Welcome to the Game</h1>

    <form @submit.prevent="joinGame">
      <label for="sessionCode">Session Code:</label>
      <input type="text" id="sessionCode" v-model="sessionCode" required>

      <label for="nickname">Nickname:</label>
      <input type="text" id="nickname" v-model="nickname" required>

      <label for="lastTimePooped">Last Time You Pooped:</label>
      <input type="text" id="lastTimePooped" v-model="lastTimePooped" required>

      <button type="submit">Join Game</button>
    </form>
  </div>
</template>

<script>
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
    }
  }
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
