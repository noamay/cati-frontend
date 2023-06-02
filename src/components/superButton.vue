<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "superButton",
  props: {
    text: {
      type: String,
      default: "Click Me!"
    },
    backgroundColor: {
      type: String,
      default: "#000"
    },
    textColor: {
      type: String,
      default: "#fff"
    },
  },
})
</script>

<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Bangers, Inter, Arial, sans-serif;
  font-size: 22px;
  margin-left: 5rem;
  margin-right: 5rem;
  background-color: v-bind(backgroundColor);
  color: v-bind(textColor);
  border: 1px solid #000;
  border-radius: 10px;
}
</style>