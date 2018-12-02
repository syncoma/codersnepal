<template>
  <v-container id="login" fluid class="bluebg" fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm7 md6 lg5>
        <v-card class="elevation-10 vcardouter my-5">
          <div class="vcardinner">
              <div class="logintitle pt-4 pb-5">
                <h1 class="darkBlue--text display-2">Log in</h1>
              </div>
              <form>
                <v-text-field class="textfieldsize" solo single-line outline prepend-icon="email" clearable name="email" type="text" placeholder="Email" v-model="email" required></v-text-field>
                <v-text-field single-line solo outline prepend-icon="lock" clearable name="password" type="password" placeholder="Password" v-model="password" required></v-text-field>
                <v-layout row wrap class="dark--text">
                  <v-flex xs12 md6>
                    <v-checkbox label="Remember me" color="primary" value=""></v-checkbox>
                  </v-flex>
                  <v-flex xs12 md6 hide-details>
                    <router-link class="subheading" to="/forgetpassword">Forgot password?</router-link>
                  </v-flex>
                </v-layout>

              <v-card-actions class="vcardaction mb-3">
                <v-btn class="px-5 py-4 loginbtn" depressed dark large color="green" type="submit" to="/login">Login</v-btn>
              </v-card-actions>
            </form>
            <h3 class="make-center">Don't have an account? <router-link to="/signup" class="green--text">Sign up</router-link>
            </h3>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      onLogin(){
        console.log(this.email);
        console.log('hello');
      }
    }

  }
</script>
<style>
#login {
  text-align: center;
}

#login .vcardouter {
  width: 90%;
  border-radius: 15px;
  padding-bottom: 40px;
}

#login .vcardinner {
  width: 80%;
  margin: auto;
  padding: auto;
}

#login .textfieldsize {
  height: 70px;
}

#login .v-text-field--outline.v-text-field--single-line input {
  margin-top: 3px;
}

#login .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {
  border: 1px solid;
  border-radius: 9px;
}

#login .v-text-field>.v-input__control>.v-input__slot {
  min-height: 30px;
}

#login .vcardaction {
  justify-content: center;
}

#login .loginbtn {
  border-radius: 10px;
}

#login .v-input--selection-controls {
  margin: 0;
  padding: 0;
}

#login .v-input--selection-controls .v-input__control {
  margin-left: 30px;
}

#login .v-card__text {
  padding: 16px 16px 0px 16px;
}

#login input::-webkit-input-placeholder {
  color: #707070;
  font-weight: 500;
}

#login .theme--light.v-label {
  color: black;
}
</style>