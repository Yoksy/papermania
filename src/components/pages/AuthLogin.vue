<template>
  <layout-full-height>
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">

        <h3 class="title has-text-grey">
          <span v-if="stateName === 'login'">Login</span>
          <span v-if="stateName === 'register'">Register</span>
          <span v-if="stateName === 'forgotten-password'">Forgotten password</span>
        </h3>

        <div class="box">
          <form id="loginForm" @submit="submitForm">

            <b-field v-if="stateName === 'login'"
              label="Email or username">
              <b-input v-model="account" icon="at"></b-input>
            </b-field>

            <b-field v-if="stateName === 'register'"
              label="Username"
              :type="formState['username'].validationType"
              :message="formState['username'].message">
              <b-input
                id="username-input"
                icon="account"
                v-model="username"
                :minlength="formState['username'].minLength"
                :maxlength="formState['username'].maxLength"
                :loading="formState['username'].isLoading"
                @blur="onUsernameBlur"></b-input>
            </b-field>

            <b-field v-if="stateName === 'register'"
              label="Email"
              :type="formState['email'].validationType"
              :message="formState['email'].message">
              <b-input
                id="email-input"
                type="email"
                icon="email"
                v-model="email"
                :maxlength="formState['email'].maxLength"
                @blur="onEmailBlur"></b-input>
            </b-field>

            <b-field v-if="stateName !== 'forgotten-password'"
              v-model="password"
              label="Password">
              <b-input
                type="password"
                icon="key-variant"
                :minlength="formState['password'].minLength"
                :maxlength="formState['password'].maxLength"
                password-reveal></b-input>
            </b-field>

            <p class="has-text-right" v-if="stateName === 'login'">
              <router-link to="/forgotten-password">
                Forgot Password ?
              </router-link>
            </p>

            <div class="field" v-if="stateName === 'login'">
              <b-checkbox size="is-small">Remember me</b-checkbox>
            </div>
            <button class="button is-block is-info is-large is-fullwidth">
              <span v-if="stateName === 'login'">Login</span>
              <span v-if="stateName === 'register'">Register</span>
              <span v-if="stateName === 'forgotten-password'">Send email</span>
            </button>
          </form>
        </div>
        <p class="has-text-grey">
          <router-link :to="{name: 'login'}" v-if="stateName !== 'login'">
            Log in
          </router-link>
          <router-link to="/register" v-if="stateName !== 'register'">
            Sign up
          </router-link>
        </p>
      </div>
    </div>
  </layout-full-height>
</template>

<script>
import LayoutFullHeight from '@/components/layouts/fullHeight'
import { capitalizeFirstLetter, unhyphenate } from '@/helpers/helpers'

export default {
  name: 'Login',
  metaInfo() {
    return {
      title: this.pageTitle
    }
  },
  components: {
    LayoutFullHeight
  },
  data() {
    return {
      stateName: this.$route.path.slice(1),
      username: null,
      email: null,
      password: null,
      account: null,
      formState: {
        username: {
          isLoading: false,
          minLength: 3,
          maxLength: 24,
          lastValue: null,
          isValid: false
        },
        email: {
          isLoading: false,
          maxLength: 60,
          lastValue: null,
          isValid: false
        },
        password: {
          minLength: 6,
          maxLength: 30
        },
      }
    }
  },
  computed: {
    pageTitle() {
      return unhyphenate(capitalizeFirstLetter(this.stateName))
    }
  },
  methods: {
    onUsernameBlur() {
      this.handleInputRegisterBlur('username')
    },
    onEmailBlur() {
      this.handleInputRegisterBlur('email')
    },
    async handleInputRegisterBlur(inputName) {
      if (this.formState[inputName].isLoading)
        return

      if (!this[inputName]) {
        this.formState[inputName].validationType = ''
        this.formState[inputName].message = ''
        this.formState[inputName].isValid = false

        this.$forceUpdate()

        return
      }

      const validationMessage = document.getElementById(inputName + '-input').validationMessage;

      if (validationMessage.length > 0) {
        this.formState[inputName].validationType = 'is-danger'
        this.formState[inputName].message = validationMessage
      }

      if (validationMessage.length === 0 && this.formState[inputName].lastValue !== this[inputName]) {
        this.formState[inputName].message = '';
        this.formState[inputName].validationType = ''
        this.formState[inputName].isLoading = true;

        const params = {};

        params[inputName] = this[inputName].toLowerCase().trim();

        const isUserAvailable = await this.$store.dispatch(`users/CHECK_USER_AVAILABILITY`, params)

        if (isUserAvailable) {
          this.formState[inputName].validationType = 'is-success'
          this.formState[inputName].message = `This ${params[inputName]} is available.`
          this.formState[inputName].isValid = true
        } else {
          this.formState[inputName].validationType = 'is-danger'
          this.formState[inputName].message = `This ${params[inputName]} is already taken, please choose another one.`
          this.formState[inputName].isValid = false
        }

        this.formState[inputName].isLoading = false;
      }

      this.formState[inputName].lastValue = this[inputName];

      this.$forceUpdate()
    },
    submitForm(ev) {
      ev.preventDefault()



      switch (this.stateName) {
        case 'login':
          console.log('login')
          break;
        case 'register':
          if (this.username.isValid && this.email.isValid && this.password.isValid) {
            console.log('register')
          }
          break;
        case 'forgotten-password':
          console.log('forgotten-password')
          break;
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.stateName = to.path.slice(1)

    next()
  }
}
</script>
