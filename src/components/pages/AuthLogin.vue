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
          <form>
            <div class="field">
              <div class="control">
                <input class="input is-large" type="email" placeholder="Your Email" autofocus>
              </div>
            </div>

            <div class="field" v-if="stateName !== 'forgotten-password'">
              <div class="control">
                <input class="input is-large" type="password" placeholder="Your Password">

                <p class="has-text-right" v-if="stateName === 'login'">
                  <router-link to="/forgotten-password">
                    Forgot Password ?
                  </router-link>
                </p>
              </div>
            </div>
            <div class="field" v-if="stateName === 'login'">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
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
      stateName: this.$route.path.slice(1)
    }
  },
  computed: {
    pageTitle() {
      return unhyphenate(capitalizeFirstLetter(this.stateName))
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.stateName = to.path.slice(1)

    next()
  }
}
</script>
