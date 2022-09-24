<template>
  <div>
    <AdminPageHeader>
      <template #header>
        <a-page-header :title="'¡Bienvenid@ ' + $auth.user.name + '!'" style="padding: 0px" />
      </template>
    </AdminPageHeader>
    <Students v-if="estudiante"></Students>
    <Teachers v-if="docente"></Teachers>
    <a-modal v-model="changePassword" :title="!success ? '¡Bienvenido a Catholic Kowalska!' : ''" centered
      :maskClosable="false" :closable="false" :footer="null">
      <template v-if="!success">
        <p class="mt-10 mb-10">Para comenzar, cambia tu contraseña.</p>
        <a-input-password class="mt-10 mb-10" v-model="credentials.password_actual" placeholder="Contraseña actual">
        </a-input-password>
        <p class="mt-10 mb-10">Las contraseñas seguras deben ser mayor a 8 caracteres.</p>
        <a-input-password class="mt-10" v-model="credentials.password_new" placeholder="Contraseña nueva">
        </a-input-password>
        <p v-if="credentials.password_new != credentials.password_confirm && credentials.password_new.length > 0 && credentials.password_confirm > 0"
          class="danger small-text mb-10">Las contraseñas
          no coinciden</p>
        <a-input-password class="mt-10" v-model="credentials.password_confirm" placeholder="Confirmar contraseña nueva">
        </a-input-password>
        <p v-if="credentials.password_new != credentials.password_confirm && credentials.password_new.length > 0 && credentials.password_confirm > 0"
          class="danger small-text mb-10">Las contraseñas
          no coinciden</p>
        <p class="danger small-text mt-10 mb-10">
          {{error_message}}
        </p>
        <a-button type="primary" class="mt-10" @click="changePass" :loading="loading"
          :disabled="!(credentials.password_actual.length > 0 && credentials.password_new.length >= 8 && credentials.password_confirm.length >= 8 && credentials.password_new == credentials.password_confirm)">
          Actualizar
          contraseña
        </a-button>
      </template>
      <template v-else>
        <div class="text-center">
          <a-icon type="check-circle" class="success" style="font-size: 5rem;"></a-icon>
          <h1 class="mt-10">¡Contraseña cambiada con éxito!</h1>
          <p class="mt-10">¡Puedes continuar navegando!</p>
          <a-button type="primary" class="mt-10" @click="changePassword = false">Aceptar</a-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script>
import Students from "../components/UI/screens/Students.vue";
import AdminPageHeader from "../components/UI/AdminPageHeader.vue";
import Teachers from "../components/UI/screens/Teachers.vue";

export default {
  mounted() {
    this.$auth.user.roles.forEach(element => {
      if (element.name == 'estudiante') {
        this.estudiante = true
      }
      if (element.name == 'docente') {
        this.docente = true
      }
    });
  },
  data() {
    return {
      credentials: {
        password_actual: "",
        password_confirm: "",
        password_new: ""
      },
      loading: false,
      changePassword: !this.$auth.user.password_changed,
      estudiante: false,
      docente: false,
      error_message: null,
      success: false,
    }
  },
  methods: {
    changePass() {
      this.error_message = null
      this.loading = true
      this.$axios.post('auth/changePassword', this.credentials)
        .then((response) => {
          console.log(response.data)
          if (response.data.success) {
            this.success = true
          }
        })
        .catch(error => {
          this.error_message = "Claves incorrectas, verificar nuevamente"
        })
      this.loading = false
    }
  },
  components: { Students, AdminPageHeader, Teachers }
}
</script>

<style lang="scss" scoped>

</style>
