<script>
import {defineComponent} from 'vue'
import {marked} from "marked";

export default defineComponent({
  name: "white-card",
  props: {
    markdown: {
      type: String,
    },
    text: {
      type: String,
    }
  },
  computed: {
    getCardText() {
      if (this.markdown === undefined) {
        return this.text
      }
      return marked(this.markdown)
    }
  }
})
</script>

<template>
<div class="card">
  <div class="card-content">
    <slot>
      <div v-html="getCardText"></div>
    </slot>
  </div>
  <div class="card-footer">
    Cards Against The Internet
  </div>
</div>
</template>

<style scoped>
.card {
  font-family: Inter, Helvetica, Arial, sans-serif;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.card-content {
  flex: 1;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
}
.card-footer {
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
</style>