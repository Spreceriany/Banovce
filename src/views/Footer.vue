<template>
  <div class="bg" id="footer">
    <footer>
      <Form />
      <Udaje />
    </footer>
    <div class="lgl" id="lgl">
      <div class="legals">
        <p>COPYRIGHT © 2021 Economy plus s.r.o | Web solution by DEVISION</p>
        <span>
          <router-link :to="{ name: 'CookiePage' }"> Osobnú údaje</router-link>
          |
          <a
            href="javascript:void(0);"
            aria-label="View cookie settings"
            data-cc="c-settings"
            >Nastavenia súkromia</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
import Udaje from "../components/Udaje.vue";

export default {
  name: "Footer",
  components: {
    Form,
    Udaje
  },
  created() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.4.7/dist/cookieconsent.js"
    );
    document.head.appendChild(recaptchaScript);
  },

  mounted() {
      this.cookie();
  },

  methods: {
      cookie() {
      var cc = initCookieConsent();
      cc.run({
        current_lang: "en",
        autorun: true,
        delay: 3000,
        autoclear_cookies: true,
        cookie_expiration: 365,

        gui_options: {
          consent_modal: {
            layout: "cloud",
            position: "bottom center",
            transition: "slide"
          },
          settings_modal: {
            layout: "box",
            transition: "slide"
          }
        },

        onAccept: function(cookies) {
          if (cc.allowedCategory("analytics_cookies")) {
            cc.loadScript(
              "https://www.google-analytics.com/analytics.js",
              function() {
                ga("create", "G-183YNGLLK5", "auto"); //replace UA-XXXXXXXX-Y with your tracking code
                ga("send", "pageview");
              }
            );
          }
        },

        languages: {
          sk: {
            consent_modal: {
              title: "Používame cookies",
              description:
                'Táto webová stránka používa cookies pre zabezpečenie jej bezchybnej prevádzky a vášho maximálneho pohodlia. Ak budete pokračovať bez zmien v nastavení, súhlasíte s nastavením cookies. <a href="javascript:void(0);" aria-label="View cookie settings" data-cc="c-settings">Nastavenia cookies</a>',
              primary_btn: {
                text: "Súhlasím",
                role: "accept_all" //'accept_selected' or 'accept_all'
              },
              secondary_btn: {
                text: "Nesúshlasím",
                role: "accept_necessary" //'settings' or 'accept_necessary'
              }
            },
            settings_modal: {
              title: "Nastavenia cookies",
              save_settings_btn: "Uložiť nastavenia",
              accept_all_btn: "Prijať všetky",
              cookie_table_headers: [
                { col1: "Meno" },
                { col2: "Doména" },
                { col3: "Platnosť" },
                { col5: "Typ" }
              ],
              blocks: [
                {
                  title: "Používanie cookies",
                  description:
                    "Táto webová stránka používa cookies pre zabezpečenie jej bezchybnej prevádzky a vášho maximálneho pohodlia. Ak budete pokračovať bez zmien v nastavení, súhlasíte s nastavením cookies."
                },
                {
                  title: "Funkčné cookies",
                  description: "Tento druh súborov cookies je potrebný na samotné fungovanie webových stránok a ich prípadný zákaz môže značne sťažiť alebo úplne zamedziť prehliadanie webových stránok, preto si od vás nepýtame súhlas na ich uloženie a pristupovanie k nim. Tento druh cookies optimalizuje Vašu užívateľskú skúsenosť a ukladá informácie, ako sú napr. typ prehliadača, jazyk, veľkosť písma a iné nastavenia zobrazovania, a to aj po opustení webovej stránky.",
                  toggle: {
                    value: "necessary_cookies",
                    enabled: true,
                    readonly: true
                  }
                },
                {
                  title: "Analytické cookies",
                  description:
                    "Tento druh súborov cookies slúži na získanie údajov o návštevnosti webovej stránky a tiež na zisťovanie, ako sa po našej stránke pohybujete, aby sme ju vedeli prispôsobovať tak, aby bola pre vás čo najjednoduchšou na používanie. Údaje získané prostredníctvom týchto súborov cookies nie sú spájané s jednotlivcami, ale využívané čisto na štatistické potreby a zlepšenie fungovania a užívateľskej optimálnosti webových stránok.",
                  toggle: {
                    value: "analytics_cookies",
                    enabled: false,
                    readonly: false
                  },
                  cookie_table: [
                    {
                      col1: "_ga",
                      col2: "google.com",
                      col3: "Krátkodobé",
                      col5: "Pixel"
                    }
                  ]
                }
              ]
            }
          }
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background-color: #173169;
  position: relative;

  footer {
    background-color: #173169;
    display: flex;
    color: white;
    width: 100%;
    margin: auto;
    max-width: 1440px;
    padding: 2em;
    gap: 8em;
    @media (max-width: 900px) {
      gap: 2em;
      flex-direction: column;
    }
    > div {
      flex: 0 1 49%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .lgl {
        background-color: #173169;
    }
    .show{
        display: block !important;
    }
    .legals {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1440px;
        padding: 2em;
        color: white;

    }

    @media(max-width:800px) {
        .legals {
            flex-direction: column;
        }

    }

    .legals p {
        padding-bottom: 2em;
        font-size: var(--paragraph);
    }

    .legals a {

        font-size: var(--paragraph);
        color: white;
        text-decoration: none;
    }

}
</style>
