<template>
  <div class="container">
    <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
    <p>Zanechajte nám správu</p>
    <form @submit.prevent="sendEmail">
      <div class="form-row">
        <div class="input-data">
          <input type="text" required v-model="name" name="name" />
          <div class="underline"></div>
          <label for="">Meno</label>
        </div>
        <div class="input-data">
          <input type="email" required v-model="email" name="email" />
          <div class="underline"></div>
          <label for="">Email</label>
        </div>
        <div class="input-data">
          <input type="tel" required v-model="phone" name="phone" />
          <div class="underline"></div>
          <label for="">Telefón</label>
        </div>
      </div>
      <div class="form-row">
        <div class="input-data">
          <input type="text" required v-model="subject" name="subject" />
          <div class="underline"></div>
          <label for="">Predmet</label>
        </div>
      </div>
      <div class="form-row">
        <div class="input-data textarea">
          <textarea
            rows="10"
            cols="100"
            name="message"
            required
            v-model="message"
          ></textarea>
          <div class="underline"></div>
          <label for="" class="textarea-text">Vaša správa</label>
        </div>
      </div>
      <div class="form-row">
        <input
          type="checkbox"
          name="checkbox"
          class="checkbox"
          v-model="isChecked"
        />
        <label for="" class="checkbox-label">
          Súhlasím so spracovaním osobných údajov</label
        >
      </div>

       <div :class="{'active': isSend}">
            <p class="item">Vaša správa bola úspešne odoslaná. Ďakujeme!</p>
        </div>
      <div class="form-row submit-btn">
        <div class="input-data">
          <input type="submit" value="Poslať" class="email-btn" />
        </div>
      </div>


    </form>
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
      phone: "",
      subject: "",
      message: "",
      isChecked: false,
      isSend: false
    };
  },
  methods: {
    sendEmail(e) {
      if (this.isChecked) {
        try {
          emailjs.sendForm(
            "service_2fq298e",
            "banovce",
            e.target,
            "user_BRYZ64db2gi3p8TQ5zKcI",
            {
              name: this.name,
              email: this.email,
              phone: this.phone,
              subject: this.subject,
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
        this.subject = "";
        this.message = "";
        this.isChecked = false;
        this.isSend = true
      }
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

  h3 {
    color: white;
    margin-bottom: 1em;
    font-size: clamp(1.5rem, 5vw, 2rem);
    max-width: 70%;
    font-family: "Prata", serif;
  }

  p {
    color: whitesmoke;
    font-family: "Lato", serif;
    margin-bottom: 2em;
    font-size: clamp(1rem, 5vw, 1.3rem);
  }
}

.container form .form-row {
  display: flex;
  margin: 2em 0;
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

.item {
  opacity: 0;
  height: 0;
  transition: opacity 0.3s, height 0.3s 0.1s;
}

.active .item {
  opacity: 1;
  height: 30px;
  transition: opacity 0.3s 0.1s, height 0.3s;
}

.input-data .textarea {
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
  color: gray;
  transition: all 0.3s ease;
  padding-left: 0.5em;
  font-family: "Lato", serif;
}
.textarea label {
  width: 100%;
  bottom: 128px;
}

.submit-btn {
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
  height: 3px;
  width: 100%;
  background: #7699e6;
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

.textarea-text {
  height: 10px;
}

.email-btn {
  text-decoration: none;
  padding-left: 0 !important;
  color: black;
  background-color: white;
  font-family: "Lato", serif;
  border-radius: 0.15em;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #c7e1f3;
  }
}

.checkbox {
  margin-right: 1em;
}
.checkbox-label {
  font-size: clamp(1rem, 5vw, 1.3rem);
  color: white;
}

@media (max-width: 700px) {
  .container .text {
    font-size: 30px;
  }

  .container form .form-row {
    display: block;
  }
  form .form-row .input-data {
    margin: 35px 0 !important;
  }
  .submit-btn .input-data {
    width: 40% !important;
    @media (max-width: 700px) {
      width: 100% !important;
    }
  }
}
</style>
