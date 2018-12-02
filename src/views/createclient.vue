<template>
    <v-container id="creatclient" fluid class=" lightgreybg" >
        <v-layout>
            <v-flex xs10 md9 my-4 ml-4>
                <v-card class="elevation-10 py-4">
                    <v-responsive>
                        <v-toolbar height="50px" class="secondaryBlue mb-3">
                            <v-icon class="ml-4 " dark>person</v-icon>
                            <v-toolbar-title prepend-icon="person" class="white--text title py-1">Create your profile</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <span  class="title my-1 ml-4">Client Details</span>
                            <v-form>
                                <v-layout wrap row justify-start my-3 ml-4>
                                    <v-flex xs10 sm8 md5>
                                        <v-text-field prepend-icon="person" name="fname" label="Full Name" type="text"></v-text-field>
                                        <v-text-field prepend-icon="place" name="address" label="Address" type="text"></v-text-field>
                                        <v-text-field prepend-icon="mail" name="email" label="Email" type="text"></v-text-field>
                                        <v-layout row>
                                            <v-textarea auto-grow prepend-icon="message" solo name="input-7-4" label="Client Description" value="">
                                            </v-textarea>
                                            <v-tooltip right>
                                                <v-btn light slot="activator" icon>
                                                    <v-icon color="secondaryBlue">help</v-icon>
                                                </v-btn>
                                                <span>Programmatic tooltip Programmatic<br>tooltip Programmatic tooltip<br> Programmatic tooltip</span>
                                            </v-tooltip>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs11 sm6 md4 lg3 offset-md3>
                                        <v-card class="elevation-5 py-3">
                                            <v-icon size="170px" class="ml-4" color="secondaryBlue">person</v-icon>
                                        </v-card>
                                        <v-btn class="darkBlue mt-3" block color="white--text">Upload Photo</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-card-text>
                            <span  class="title my-1 ml-4">Contacts</span>
                            <v-form>
                                <v-layout row justify-start my-3 ml-4>
                                    <v-flex md4>
                                        <v-text-field prepend-icon="phone" name="phone" label="Phone Number" type="text"></v-text-field>
                                        <v-text-field prepend-icon="fab fa-skype" name="skype" label="Skype" type="text"></v-text-field>
                                    </v-flex>
                                    <v-flex md4 offset-md1 mr-4>
                                        <v-text-field prepend-icon="fas fa-globe-asia" name="website" label="Website" type="text"></v-text-field>
                                        <v-text-field prepend-icon="fab fa-linkedin" name="linkedin" label="Linkedin" type="text"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                        <v-card-actions class="ml-5">
                            <v-btn color="darkBlue" class="white--text">Create Profile</v-btn>
                        </v-card-actions>
                    </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script type="text/javascript">
export default {

}
</script>
<style type="text/css">
#styled-input {
    height: 40px;
    font-size: 20pt;
}

.styled-input label[for] {
    height: 400px;
    font-size: 20pt;
}
</style>