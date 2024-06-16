<template>
    <div class="contact">
      <h2>Contato: (66) 4002-8922</h2> <!-- Atualizado para (66) 4002-8922 -->
      <Form />
    </div>
  </template>
  
  <script>
  import Form from '../components/Form.vue';
  
  export default {
    name: 'TheContact',
    components: {
      Form
    }
  }
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  </style>
  