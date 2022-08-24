<template>
  <div class="login-main-container">
    <a-row class="main-container-div">
      <a-col :xs="24" :sm="24" :md="24" :lg="8">
        <a-row class="login-left-div">
          <a-col :xs="{ span: 20, offset: 2 }" :sm="{ span: 20, offset: 2 }" :md="{ span: 16, offset: 4 }"
            :lg="{ span: 16, offset: 4 }">
            <a-card :title="null" class="login-div" :bordered="innerWidth <= 768 ? true : false">
              <a-form layout="vertical">
                <div class="login-logo mb-30">
                  <img class="login-img-logo" src="~/assets/img/login_logo.png" />
                </div>
                <a-alert v-if="onRequestSend.error != null" :message="onRequestSend.error" type="error" show-icon
                  class="mb-20 mt-10" />
                <a-form-item label="Correo electrónico" name="email" :help="
                  rules.email ? rules.email.message : null
                " :validateStatus="
  rules.email ? 'error' : null
">
                  <a-input v-model:value="credentials.email" @pressEnter="onSubmit" :disabled="loading"
                    placeholder="Por favor, ingrese correo electrónico" />
                </a-form-item>

                <a-form-item label="Contraseña" name="password" :help="
                  rules.password
                    ? rules.password.message
                    : null
                " :validateStatus="
  rules.password ? 'error' : null
">
                  <a-input-password v-model:value="credentials.password" @pressEnter="onSubmit" :disabled="loading"
                    placeholder="Por favor, ingrese su contraseña" />
                </a-form-item>

                <a-form-item class="mt-30">
                  <a-button :loading="loading" @click="onSubmit" class="login-btn" block>
                    Inicio de sesión
                  </a-button>
                </a-form-item>
              </a-form>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
      <a-col :xs="0" :sm="0" :md="24" :lg="16">
        <div class="right-login-div">
          <img class="right-image" src="~/assets/img/login_background.svg" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.credentials,
        })
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        this.loading = false

        if (error.response) {
          this.status = error.response.status
          if (this.status == 401) {
            this.onRequestSend.error = 'Correo y/o contraseña incorrectos'
          }
        } else {
          this.status = 400
          this.onRequestSend.error =
            'Error en el servidor, contacte al administrador'
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {},
      credentials: {},
      onRequestSend: {},
      innerWidth: window.innerWidth
    }
  },
}
</script>

<style lang="scss" scoped>
.login-main-container {
  background: #fff;
  height: 100vh;
}

.main-container-div {
  height: 100%;
}

.login-left-div {
  height: 100%;
  align-items: center;
}

.login-logo {
  text-align: center;
}

.login-img-logo {
  width: 250px;
}

.container-content {
  margin-top: 100px;
}

.login-div {
  margin-top: 6.5rem;
  border-radius: 10px;
}

.outer-div {
  margin: 0;
}

.right-login-div {
  background: #f8f8ff;
  height: 100%;
  display: flex;
  align-items: center;
}

.right-image {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.login-btn,
.login-btn:hover,
.login-btn:active {
  background: #CF0B0B !important;
  border-color: #CF0B0B !important;
  border-radius: 5px;
  color: #fff !important;
}
</style>
