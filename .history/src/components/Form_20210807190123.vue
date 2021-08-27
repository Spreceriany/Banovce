<template>
  <div class="bg">
    <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
    <div class="container">
      <form action="#">
        <div class="form-row">
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">First Name</label>
          </div>
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Last Name</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Email Address</label>
          </div>
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Website Name</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div class="underline"></div>
            <label for="">Write your message</label>
            <br />
            <div class="form-row submit-btn">
              <div class="input-data">
                <div class="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

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
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Footer",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
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
            phone: this.phone,
            message: this.message
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  background: #173169;
  width: 100%;
  padding: 25px 40px 10px 40px;
  color: black;
}

.container form {
  padding: 30px 0 0 0;
}
.container form .form-row {
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data {
  width: 100%;
  height: 50px;
  margin: 0 20px;
  position: relative;
}
form .form-row .textarea {
  height: 70px;
}
.input-data input,
.textarea textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
.input-data input:focus ~ label,
.textarea textarea:focus ~ label,
.input-data input:valid ~ label,
.textarea textarea:valid ~ label {
  transform: translateY(-40px);
  font-size: 14px;
  color: #3498db;
}

input:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 1px 1px 5px rgba(1, 1, 0, 0.7);
}

input:focus-visible {
  outline: 1px dashed transparent;
}
textarea:focus-visible {
  outline: 1px dashed transparent;
}
.textarea textarea {
  resize: none;
  padding-top: 10px;
}
.input-data label {
  position: absolute;
  pointer-events: none;
  bottom: 15px;
  font-size: 16px;
  transition: all 0.3s ease;
}
.textarea label {
  width: 100%;
  bottom: 40px;
  background: #fff;
}
.input-data .underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.input-data .underline:before {
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
.input-data input:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before {
  transform: scale(1);
  outline: none;
}
.submit-btn .input-data {
  overflow: hidden;
  height: 45px !important;
  width: 25% !important;
}
.submit-btn .input-data .inner {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  background: -webkit-linear-gradient(
    right,
    #56d8e4,
    #9f01ea,
    #56d8e4,
    #9f01ea
  );
  transition: all 0.4s;
}
.submit-btn .input-data:hover .inner {
  left: 0;
}
.submit-btn .input-data input {
  background: none;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
@media (max-width: 700px) {
  .container .text {
    font-size: 30px;
  }
  .container form {
    padding: 10px 0 0 0;
  }
  .container form .form-row {
    display: block;
  }
  form .form-row .input-data {
    margin: 35px 0 !important;
  }
  .submit-btn .input-data {
    width: 40% !important;
  }
}
</style>
