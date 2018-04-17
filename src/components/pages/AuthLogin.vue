<template>
  <layout-full-height>
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">

        <h3 class="title has-text-grey">
          <span v-if="stateName === 'login'">Login to your account</span>
          <span v-if="stateName === 'register'">Register a new account</span>
          <span v-if="stateName === 'forgotten-password'">Retrieve your password by email</span>
        </h3>

        <div class="box">
          <form @submit="onFormSubmit">
            <formly-form :form="form" :model="model" :fields="fields" ref="registerForm"></formly-form>

            <button class="button is-block is-info is-large is-fullwidth">
              Register
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
import { Span } from 'vue-formly-buefy/dist/controls'
import LayoutFullHeight from '@/components/layouts/fullHeight'
import { capitalizeFirstLetter, unhyphenate, debounce } from '@/helpers/helpers'

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
      form: {
        $errors: {
          username: {
            required: true,
            existing: "The username already exists"
          },
          email: {
            required: true,
            format: "The email address doesn't match the pattern",
            $async_format: false
          },
          password: {
            required: true,
            reliability: false
          }
        },
        $valid: true,
        username: {
          $active: false,
          $dirty: false
        },
        email: {
          $active: false,
          $dirty: false
        },
        password: {
          $active: false,
          $dirty: false
        }
      },
      model: {
        username: "",
        email: "",
        password: ""
      },
      fields: [
        {
          key: "username",
          type: "input-with-field",
          required: true,
          templateOptions: {
            properties: {
              placeholder: "Your username",
              icon: "account",
              minlength: 3,
              maxlength: 30,
              required: true
            }
          },
          validators: {
            length: {
              expression: "model[field.key].length > 3",
              message: "This username must be at least 3 characters long"
            },
            validUsername: {
              expression(field, model, next) {
                console.log(model[field.key])
                return next(true)
              },
              message: 'This username is already taken'
            },
            /* async validUsername(field, model, next) {
              console.log('validate username', model.username)
              if (model.username.length < field.templateOptions.properties.minlength)
                return


              const response = await this.$store.dispatch(`users/CHECK_USERNAME_OR_EMAIL_AVAILABILITY`, {
                username: model.username
              });

              console.log('response', response)

              next(response.status == 'ok'); */
            }
            /* existing: {
              expression: "model[field.key] !== \"johnsilver\"",
              message: "This username already exists"
            }
          } */
        },
        {
          key: "email",
          type: "input-with-field",
          required: true,
          templateOptions: {
            properties: {
              placeholder: "Your email address",
              icon: "email",
              type: "email",
              maxlength: 60,
              required: true
            },
            wrapper: {
              properties: {
                addons: false
              }
            }
          }
        },
        {
          key: "password",
          type: "input-with-field",
          required: true,
          templateOptions: {
            properties: {
              placeholder: "Your password",
              icon: "key-variant",
              minlength: 8,
              maxlength: 60,
              "password-reveal": true,
              type: "password",
              required: true
            },
            wrapper: {
              properties: {
                addons: false
              }
            }
          },
          validators: {
            reliability: {
              expression: "model[field.key].length > 8",
              message: "The password must be at least 8 characters long"
            }
          }
        }
      ]
      /* formState: {
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
      } */
    }
  },
  computed: {
    pageTitle() {
      return unhyphenate(capitalizeFirstLetter(this.stateName))
    }
  },
  methods: {
    onFormSubmit() {
      this.$refs.loginForm.validate()
        .then(() => {
          console.log('form validated')
        })
        .catch((e)=>{
            console.warn(e)
        })
    },
    onUsernameBlur() {
      this.validate('username')
    },
    onEmailBlur() {
      this.validate('email')
    },
    /* async validate(inputName) {
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
    }, */
    submitForm(ev) {
      ev.preventDefault()



      /* switch (this.stateName) {
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
      } */
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.stateName = to.path.slice(1)

    next()
  }
}
</script>
