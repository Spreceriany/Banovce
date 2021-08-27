<template>
    <div class="container">
          <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>

      <form action="#">
        <div class="form-row">
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Meno</label>
          </div>
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Email</label>
          </div>
             <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Telefón</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data">
            <input type="text" required />
            <div class="underline"></div>
            <label for="">Predmet</label>
          </div>
        </div>
        <div class="form-row">
          <div class="input-data textarea">
            <textarea rows="10" cols="100" required></textarea>
            <div class="underline"></div>
            <label for="" class="textarea-text">Vaša správa</label>
            <div class="form-row submit-btn">
              <div class="input-data">
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
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
  color: black;

  h3{
    color:white;
    margin-top: 2em;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
}

.container form .form-row {
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data {
  width: 100%;
  height: 50px;
  margin-right: 20px;
  position: relative;
}
form .form-row .textarea {
  height: 10em;
}
.input-data input,
.textarea textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  padding-left: 1em;

  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.input-data .textarea{
  height: 1em;
}
.input-data input:focus ~ label,
.textarea textarea:focus ~ label,
.input-data input:valid ~ label,
.textarea textarea:valid ~ label {
  transform: translateY(-45px);
  font-size: 14px;
  color: white;
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
  color:gray;
  transition: all 0.3s ease;
  padding-left: .5em;
  font-family: 'Lato', serif;
}
.textarea label {
  width: 100%;
  bottom: 128px;
}

.submit-btn{
  width: 10em;
  text-align: center;
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

.textarea-text{
  height: 10px;
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
