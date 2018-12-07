<template>
    <v-container id="signup" fluid class="bluebg" fill-height>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm8 md7 lg7>
                <v-card class="elevation-10 vcardouter my-5">
                    <v-flex xs12 sm12 md12 lg8>
                        <v-card-text pd-0>
                            <div class="signuptitle pt-4 pb-5">
                                <h1 class="darkBlue--text">Sign Up</h1>
                            </div>
                            <v-form>
                                <v-text-field class="textfieldsize" solo single-line outline prepend-icon="email" clearable name="email" type="text" placeholder="Email" required></v-text-field>
                                <v-text-field single-line solo outline prepend-icon="lock" clearable name="password" type="password" placeholder="Password" required></v-text-field>
                                <v-text-field single-line solo outline prepend-icon="lock" clearable name="confirmpassword" type="password" placeholder="Confirm Password" required></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions class="vcardaction mb-3">
                            <v-layout row wrap justify-space-bewteen>
                                <v-flex xs12 md12 lg12>
                                    <v-btn color="green white--text" large class="px-5 signupbtn">
                                        <v-icon left>business</v-icon>
                                        <span class="font-weight-bold">As a Client</span>
                                    </v-btn>
                                </v-flex>
                                <v-flex xs12 md12 lg12>
                                    <v-btn outline color="green" large>
                                        <v-icon left>person</v-icon>
                                        <span class="font-weight-bold">As a Worker</span>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                        <v-card-actions class="vcardaction mb-3">
                            <v-layout row wrap>
                                <v-flex xs12 md12>
                                    <v-btn class="px-5 py-4 signupbtn" large dark color="green" to="/signup">Register</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                        <h3 class="make-center">Already have an account? <router-link to="/login" class="green--text">Log in</router-link>
                        </h3>
                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script type="text/javascript">
export default {

    data() {
        return {
            colorGreen: "#059500"
        }
    }

}
</script>
<style>
#signup {
    text-align: center;
}

#signup .vcardouter {
    border-radius: 15px;
    padding-bottom: 40px;
}

#signup .vcardinner {
    width: 50%;
    margin: auto;
    padding: auto;
}

#signup .textfieldsize {
    height: 70px;
}

#signup .v-text-field--outline.v-text-field--single-line input {
    margin-top: 3px;
}

#signup .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {
    border: 1px solid;
    border-radius: 9px;
}

#signup .v-text-field>.v-input__control>.v-input__slot {
    min-height: 30px;
}

#signup .vcardaction {
    justify-content: center;
}

#signup .signupbtn {
    border-radius: 10px;
}

#signup .v-input--selection-controls {
    margin: 0;
    padding: 0;
}

#signup .v-input--selection-controls .v-input__control {
    margin-left: 30px;
}

#signup .v-card__text {
    padding: 16px 16px 0px 16px;
}

#signup input::-webkit-input-placeholder {
    color: #707070;
    font-weight: 500;
}

#signup .theme--light.v-label {
    color: black;
}
</style>