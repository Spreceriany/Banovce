<template>
  <div class="bg">
    <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
    <form class="contact-form row" @submit.prevent="sendEmail">
      <div class="form-field ">
        <input id="name" class="input-text js-input" type="text" required />
        <label class="label" for="name">Name</label>
      </div>
      <div class="form-field  ">
        <input id="email" class="input-text js-input" type="email" required />
        <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field ">
        <input id="company" class="input-text js-input" type="text" required />
        <label class="label" for="company">Company Name</label>
      </div>
      <div class="form-field ">
        <input id="phone" class="input-text js-input" type="text" required />
        <label class="label" for="phone">Contact Number</label>
      </div>
      <div class="form-field ">
        <input id="message" class="input-text js-input" type="text" required />
        <label class="label" for="message">Message</label>
      </div>
      <div class="form-field ">
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
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
import emailjs from "emailjs-com";

export default {
  name: "Footer",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_2fq298e",
          "template_pxmh8qr",
          e.target,
          "user_BRYZ64db2gi3p8TQ5zKcI",
          {
            name: this.name,
            email: this.email,
            message: this.message
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 50%;

  .contact-form .form-field {
    position: relative;
    margin: 32px 0;
  }
  .contact-form .input-text {
    display: block;
    width: 100%;
    height: 36px;
    border-width: 0 0 2px 0;
    border-color: #5543ca;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
  }
  .contact-form .input-text:focus {
    outline: none;
  }
  .contact-form .input-text:focus + .label,
  .contact-form .input-text.not-empty + .label {
    -webkit-transform: translateY(-24px);
    transform: translateY(-24px);
  }
  .contact-form .label {
    position: absolute;
    left: 20px;
    bottom: 11px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #5543ca;
    cursor: text;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  }
  .contact-form .submit-btn {
    display: inline-block;
    background-color: #000;
    background-image: linear-gradient(125deg, #a72879, #064497);
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    width: 200px;
    cursor: pointer;
  }
}
</style>
