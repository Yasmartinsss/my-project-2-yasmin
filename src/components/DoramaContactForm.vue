<!-- src/components/DoramaContactForm.vue -->
<template>
  <div class="contact-form">
    <h2>Formulário de Contato</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="formData.name">

      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="formData.email">

      <label for="message">Mensagem:</label>
      <textarea id="message" v-model="formData.message"></textarea>

      <button type="submit">Enviar</button>
    </form>
    <div v-if="submitted">
      <h3>Formulário enviado com sucesso!</h3>
      <p>Nome: {{ formData.name }}</p>
      <p>E-mail: {{ formData.email }}</p>
      <p>Mensagem: {{ formData.message }}</p>
      <p>Telefone para contato: 9999-222</p> <!-- Adicionei o número de telefone aqui -->
      <button @click="resetForm">Novo Formulário</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoramaContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
      this.submitted = false;
    }
  }
};
</script>

<style scoped>
.contact-form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form label {
  margin-bottom: 5px;
  display: block;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.contact-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}

.contact-form h3 {
  margin-top: 20px;
}

.contact-form p {
  margin-bottom: 10px;
}
</style>
