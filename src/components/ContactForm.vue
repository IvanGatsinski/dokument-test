<template>
  <div class="wrapper">
    <PageSpinner v-if="sending_email" />
    <form
      action="https://script.google.com/macros/s/AKfycbwvjc7iMmQJnlmpLdU7wnWbD2G3pfg5JiVs9lb2/exec"
      method="post"
      @submit.prevent="submit"
      class="gform contact100-form validate-form"
    >
      <div style="display:none" class="thankyou_message">
        <h2>{{ $t('routes.contacts.success_msg') }}</h2>
      </div>
      <p class="contact100-form-title">
        {{ $t('routes.contacts.left_side.title') }}
      </p>

      <div
        class="wrap-input100 rs1-wrap-input100 validate-input"
        data-validate="Name is required"
      >
        <input class="input100" type="text" name="name" required />
        <span class="label-input100">{{
          $t('routes.contacts.left_side.labels.name')
        }}</span>
        <span class="focus-input100"></span>
      </div>

      <div class="wrap-input100 rs1-wrap-input100 validate-input">
        <input class="input100" type="text" name="email" required />
        <span class="label-input100">{{
          $t('routes.contacts.left_side.labels.email')
        }}</span>
        <span class="focus-input100"></span>
      </div>

      <div class="wrap-input100 rs1-wrap-input100 validate-input">
        <input class="input100" type="text" name="phone" required />
        <span class="label-input100">{{
          $t('routes.contacts.left_side.labels.phone')
        }}</span>
        <span class="focus-input100"></span>
      </div>

      <div class="textarea__container" data-validate="Message is required">
        <textarea
          name="message"
          rows="10"
          required
          spellcheck="false"
        ></textarea>
        <span class="textarea__label">{{
          $t('routes.contacts.left_side.labels.message')
        }}</span>
      </div>

      <div class="container-contact100-form-btn">
        <input
          class="contact100-form-btn"
          type="submit"
          :value="$t('routes.contacts.left_side.btn_submit')"
        />
      </div>
    </form>
    <div class="form-info__text">
      <p class="form-info__heading">
        {{ $t('routes.contacts.right_side.title') }}
      </p>
      <p class="form-info__help">
        {{ $t('routes.contacts.right_side.title_secondary') }}
      </p>
      <p>
        {{ $t('routes.contacts.right_side.text') }}
      </p>
      <div class="office">
        <p class="name">
          <span> {{ $t('routes.contacts.right_side.office') }} DoKument</span>
        </p>
        <p class="address">
          <span> {{ $t('routes.contacts.right_side.address') }}:&nbsp;</span
          >Office 1 37 Marsh Parade Newcastle-under-Lyme ST5 1BT
        </p>
        <p class="email">
          <span>{{ $t('routes.contacts.right_side.email') }}:&nbsp;</span
          >Dokument.ltd@gmail.com
        </p>
        <p class="phone">
          <span>{{ $t('routes.contacts.right_side.phone') }}:&nbsp;</span>01782
          613758
        </p>
           <p class="phone">
          <span>{{ $t('routes.contacts.right_side.mobile_phone') }}:&nbsp;</span>07979 455433
        </p>
      </div>
      <div class="office">
        <p class="name">
          {{ $t('routes.contacts.right_side.office') }} Biurokrat
        </p>
        <p class="address">
          <span> {{ $t('routes.contacts.right_side.address') }}:&nbsp;</span>124
          West Street Crewe CW1 3HG
        </p>
        <p class="email">
          <span> {{ $t('routes.contacts.right_side.email') }}:&nbsp;</span
          >Biurokrat.crewe@gmail.com
        </p>
        <p class="phone">
          <span> {{ $t('routes.contacts.right_side.phone') }}:&nbsp;</span>01270
          586518
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PageSpinner from '@/components/widgets/PageSpinner'

export default {
  components: {
    PageSpinner
  },
  data () {
    return {
      sending_email: false
    }
  },
  methods: {
    submit (event) {
      let form = event.target
      let formData = getFormData(form)
      let data = formData.data

      let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      let regExMatch = data.email.match(pattern)

      if (
        data.name === '' ||
        data.message === '' ||
        data.phone === '' ||
        data.email === '' ||
        !regExMatch
      ) {
        this.sending_email = false
        return
      }
      this.sending_email = true
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        //this.sending_email = false
        return false
      }

      disableAllButtons(form)
      let url = form.action
      let xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      // xhr.withCredentials = true;
      let vm = this
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onreadystatechange = function () {
        vm.sending_email = false
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset()
          let formElements = form.querySelector('.form-elements')
          if (formElements) {
            formElements.style.display = 'none' // hide form
          }
          let thankYouMessage = form.querySelector('.thankyou_message')
          if (thankYouMessage) {
            thankYouMessage.style.display = 'block'

            setTimeout(function () {
              thankYouMessage.style.display = 'none'
            }, 3500)
          }
        }
      }
      // url encode form data for sending as post data
      let encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        })
        .join('&')
      xhr.send(encoded)
    }
  }
}

// get all data in form and return object
function getFormData (form) {
  let elements = form.elements
  let honeypot

  let fields = Object.keys(elements)
    .filter(function (k) {
      if (elements[k].name === 'honeypot') {
        honeypot = elements[k].value
        return false
      }
      return true
    })
    .map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name
      }
    })
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos && item
    })

  let formData = {}
  fields.forEach(function (name) {
    let element = elements[name]

    // singular form elements just have one value
    formData[name] = element.value

    // when our element has multiple items, get their values
    if (element.length) {
      let data = []
      for (let i = 0; i < element.length; i++) {
        let item = element.item(i)
        if (item.checked || item.selected) {
          data.push(item.value)
        }
      }
      formData[name] = data.join(', ')
    }
  })

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields)
  formData.formGoogleSheetName = form.dataset.sheet || 'responses' // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || '' // no email by default

  return { data: formData, honeypot: honeypot }
}

function loaded () {
  // bind to the submit event of our form
  let forms = document.querySelectorAll('form.gform')
  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', handleFormSubmit, false)
  }
}
document.addEventListener('DOMContentLoaded', loaded, false)

function disableAllButtons (form) {
  let buttons = form.querySelectorAll('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  margin: 20px auto;
  display: flex;
}

input,
input:focus,
button,
button:focus {
  border: none;
  outline: none;
}

input,
textarea {
  padding: 1em 2em;
  &::placeholder {
    color: transparent;
  }
}

form {
  position: relative;
  padding: 8em;
  padding-top: 4em;
}

.contact100-form {
  background: #fff;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 68px;
}

.contact100-form-title {
  font-family: 'Oswald-VariableFont_wght';
  display: block;
  width: 100%;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
  margin-bottom: 1em;
}

.thankyou_message {
  width: 100vw;
  height: 14vh;
  background: springgreen;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  color: rgb(77, 70, 70);

  h2 {
    position: relative;
    font-size: 3rem;
    top: 50%;
    transform: translateY(-50%);
  }
}

.wrap-input100 {
  width: 100%;
  position: relative;
  z-index: 1;
  border-bottom: 2px solid #d9d9d9;
  //padding-bottom: 13px;
  margin-bottom: 65px;
  transition: all 0.3s;
}
.wrap-input100 .label-input100 {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  padding-left: 5px;
  z-index: -1;
}
.label-input100,
.textarea__label {
  transition: all 0.3s ease;
}

.input100:focus ~ .label-input100,
.input100:valid ~ .label-input100,
textarea:focus ~ .textarea__label,
textarea:valid ~ .textarea__label {
  font-size: 13px;
  color: #ff4b5a;
}
textarea:focus {
  border-color: #ff4b5a;
  outline: none;
  // -webkit-box-shadow: 0px 0px 5px 0px #ff4b5a;
  // -moz-box-shadow: 0px 0px 5px 0px #ff4b5a;
  // box-shadow: 0px 0px 5px 0px #ff4b5a;
}

textarea:focus:valid {
  outline: none;
  border-color: rgb(0, 133, 156);
  // -webkit-box-shadow: 0px 0px 5px 0px rgb(0, 133, 156);
  // -moz-box-shadow: 0px 0px 5px 0px rgb(0, 133, 156);
  // box-shadow: 0px 0px 5px 0px rgb(0, 133, 156);
}

.input100:valid ~ .label-input100,
textarea:valid ~ .textarea__label {
  color: rgb(0, 133, 156);
}

.input100:focus ~ .label-input100,
.input100:valid ~ .label-input100 {
  transform: translate(-5px, -170%);
}

textarea:focus ~ .textarea__label,
textarea:valid ~ .textarea__label {
  transform: translate(-20%, -160%);
}

.input100:invalid,
textarea {
  box-shadow: none;
}

.validate-input {
  position: relative;
}

.rs1-wrap-input100 {
  width: calc((100% - 30px) / 2);
}

.input100 {
  display: block;
  width: 100%;
  background: transparent;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding: 0;
}

.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background: #ff4b5a;
}
.input100:valid ~ .label-input100 ~ .focus-input100::before {
  background: rgb(0, 133, 156);
}

.input100:focus ~ .focus-input100::before {
  width: 100%;
}

textarea {
  font-size: 16px;
  background: transparent;
  border: 2px solid #d9d9d9;
  border-radius: 6px;
  color: #555555;
  padding: 5px 0 0 5px;
  width: inherit;
  resize: none;
  height: auto;
}

.textarea__container {
  width: 100%;
  position: relative;
  z-index: 1;
  margin-bottom: 10em;
}

.textarea__label {
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 16px;
  z-index: -1;
}

.container-contact100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-top: -25px;
}

.contact100-form-btn {
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 160px;
  height: 50px;
  background-color: #ff4b5a;
  border-radius: 25px;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
}

.contact100-form-btn i {
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.contact100-form-btn:hover {
  background-color: #333333;
  box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
}

.contact100-form-btn:hover i {
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  -ms-transform: translateX(10px);
  -o-transform: translateX(10px);
  transform: translateX(10px);
}

.form-info__heading {
  font-size: 32px;
  text-align: center;
  font-family: 'Oswald-VariableFont_wght';
}
.form-info__help {
  font-size: 18px;
  font-family: 'Oswald-VariableFont_wght';
}
.form-info__text {
  width: calc(50% / 1.1681);
  background: #555;
  color: #fff;
  p {
    padding: 1em 2em;
  }
  p.form-info__heading {
    padding: 1em 0;
  }
}
.office {
  margin: 2em 0;

  p {
    padding: 0.1em 2em;
  }
  .name {
    font-weight: bold;
    margin-bottom: 0.25em;
    text-decoration: underline;
    padding: 0.2em 2em;
  }
}
.address,
.email,
.phone {
  span {
    // font-weight: bolder;
    color: rgb(255, 133, 133);
  }
}

@media (max-width: 1399px) {
  .wrapper {
    width: 95%;
  }
  .wrap-input100 {
    width: 100%;
  }
}

@media (max-width: 1199px) {
  .wrapper {
    width: 100%;
  }
  form {
    padding: 4em;
  }
  .contact100-form {
    width: 65%;
  }
  .form-info__text {
    width: 35%;
  }
}

@media (max-width: 992px) {
  .form-info__text {
    width: 100%;
    padding-bottom: 2.5em;
  }
  .wrapper {
    margin: 0;
    width: 100%;
    display: block;
  }
  .contact100-form {
    width: 100%;
  }
  .wrap-contact100 {
    padding: 82px 80px 33px 80px;
  }
}

@media (max-width: 768px) {
  .rs1-wrap-input100 {
    width: 100%;
  }

  .thankyou_message {
    height: 10vh;
    h2 {
      font-size: 2rem;
    }
  }
}

@media (max-width: 576px) {
  .wrapper {
    width: 100%;
  }
  .wrap-contact100 {
    padding: 82px 15px 33px 15px;
  }

  .thankyou_message {
    height: 10vh;
    h2 {
      font-size: 1.7rem;
    }
  }
}
</style>
