<template>
  <main>
    <section class="full flex">
      <div class="column image">
        <img src="../photos/Social-Media-Graphic.jpg" alt="" />
        <p>°Ilustracion de Jesus Nuñez</p>
      </div>

      <div class="column flex content">
        <div class="text">
          <h1 class="text-center">
            Aqui <strong>comienza</strong><br />Tu propia
            <strong>Galeria</strong>
          </h1>
          <form action="" class="form" v-on:submit.prevent="procesar()">

            <input v-model="contacto.email" name="email" type="email" placeholder="E-mail" />

            <input v-model="contacto.password" name="password" type="password" placeholder="*****" />

            <button type="submit">Entrar</button>
            <p class="text-center"><strong>Tambien Puedes</strong></p>
            <p class="text-center">
              <a href="">Crear tu cuenta</a>
            </p>
          </form>
        </div>
        <div class="social">
          <ul>
            <li>
              <a href=""
                ><img
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/instagram-new.png"
                  alt=""
              /></a>
            </li>
            <li>
              <a href=""
                ><img
                  src="https://img.icons8.com/nolan/64/facebook-new.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href=""
                ><img
                  src="https://img.icons8.com/nolan/64/twitter.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <router-link to="./desarrollo">desarrollo</router-link>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      contacto: {
        email: "",
        password: ""
      }     
    }
  },
  methods: {
    procesar() {
      if (this.$v.invalid) {
        return false;
      }
      // alert(this.contacto.email)
    }
  },
  validations: 
  {
    contacto: {
      email: {
        required,
        email,
        minLength: minLength(2)       
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },

};

</script>



<style lang="stylus" scoped>

.image
  width 60%
  flex-basis 60%
  position relative

  img
    width 100%
    display block
    height 100%

  p
    position absolute
    bottom 30px
    left 30px
    color #52ade1
    font-weight: 700

.content
  width: 40%
  background-color white
  display flex
  flex-direction column
  justify-content center
  align-items center
  flex-basis 40%
  height: 100%

.text
  width 100%
  display flex
  flex-direction: column
  justify-content center
  align-items: center

.form
  display flex
  flex-direction column



form
  display flex
  align-items center

.social
  display flex
    justify-content center

ul
  width 100%
  display flex
  justify-content center
  padding 0

li
  list-style none
  display flex
  margin 4px
</style>
