<template>
  <div class="login">
    <div class="background-overlay"></div>
    <div class="background-image"></div>
    >
    <h1>DefineX</h1>

    <input
      type="email"
      placeholder="Email"
      v-model="email"
      class="form-control"
      :class="{ 'is-invalid': v$.email.$error }"
    />

    <span v-if="v$.email.$error" style="color: red">
      {{ v$.email.$errors[0].$message }}
    </span>

    <input
      type="password"
      placeholder="Şifre"
      v-model="password"
      class="form-control"
      minlength="8"
      @blur="v$.password.$touch()"
      :class="{ 'is-invalid': v$.password.$error }"
    />

    <span v-if="v$.password.$error" style="color: red">
      {{ v$.password.$errors[0].$message }}
    </span>
    <v-btn
      color="blue"
      dark
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      @click="submitData"
    >
      Giriş yap
    </v-btn>
  </div>
</template>

<script>
import Api from "../services/api";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

export default {
  name: "UserLogin",

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submitData: async function () {
      try {
        console.log(this);

        this.v$.$validate();

        if (!this.v$.$error) {
          const data = { Username: this.email, Password: this.password };

          const api = new Api();

          const response = await api.login(data);

          console.log(response.data);

          if (response.data.IsSucceed) {
            this.$toast.success("Giriş başarılı.");

            this.$router.push("/user-dashboard");
          } else {
            this.$toast.error("Giriş başarısız.");
          }
        } else {
          this.$toast.error("Geçerli olmayan giriş bilgileri.");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  validations() {
    return {
      email: { required, email },
      password: {
        required,
        minLength: minLength(8),
        containsPasswordRequirement: helpers.withMessage(
          () =>
            `Şifre büyük harf, küçük harf, rakam ve özel karakter içermelidir.`,
          (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)
        ),
      },
    };
  },
};
</script>

<style scoped>
.login {
  background-color: blue;
  background-image: url(https://cdn.pixabay.com/photo/2017/07/11/18/52/landscape-2494650_960_720.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.is-invalid {
  border: 1px solid red;
}

input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
}

button {
  margin-top: 10px;
  width: 15%;
  cursor: pointer;
  padding: 10px;
}

p {
  margin-top: 40px;
  font-size: 14px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
.is-invalid {
  border: 1px solid red;
}

input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
}

button {
  margin-top: 10px;
  width: 15%;
  cursor: pointer;
  padding: 10px;
}

p {
  margin-top: 40px;
  font-size: 14px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
