<template>
  <div class="bg">

      <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
      <form class="contact-form row" @submit.prevent="sendEmail">
        <div class="form-field ">
          <input id="name" class="input-text js-input" type="text" required v-model="name"/>
          <label class="label" for="name" >Name</label>
        </div>
        <div class="form-field  ">
          <input id="email" class="input-text js-input" type="email" required  v-model="email"/>
          <label class="label" for="email">E-mail</label>
        </div>
        <div class="form-field ">
          <input id="phone" class="input-text js-input" type="text" required  v-model="phone"/>
          <label class="label" for="phone">Tel. číslo</label>
        </div>

        <div class="form-field ">
          <input id="message" class="input-text js-input" type="text" required v-model="message"/>
          <label class="label" for="message">Message</label>
        </div>
        <div class="form-field ">
          <input class="submit-btn" type="submit" value="Send" />
        </div>
      </form>
      <!-- <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
      <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" v-model="name">
        <label>Email</label>
        <input type="email" name="user_email"  v-model="email">
        <label>Message</label>
        <textarea name="message"  v-model="message"></textarea>
        <input type="submit" value="Send">
      </form> -->
        <!-- <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
        <p>Neváhajte nás kontaktovať</p>
        <div class="grid">
          <a href="mailto:mail">Mail</a>
          <div class="icons">
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
          </div>
          <a href="tel:+0917000000">0197845</a>
        </div> -->
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Footer",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_2fq298e', 'template_pxmh8qr', e.target, 'user_BRYZ64db2gi3p8TQ5zKcI',{
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message

        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    },
  }
};
</script>

<style lang="scss" scoped>
    form{
      display: flex;
      flex-direction: column;
      max-width: 50%;
    }




</style>
