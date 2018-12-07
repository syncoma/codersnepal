<template>
    <v-container id="creatclient" fluid class=" lightgreybg">
        <v-layout row wrap>
            <v-flex md10>
                <v-card class="elevation-10 py-2 ma-3">
                    <v-flex my-4>
                        <v-toolbar height="50px" class="secondaryBlue">
                            <v-icon class="ml-4" dark>person</v-icon>
                            <v-toolbar-title prepend-icon="person" class="white--text title font-weight-bold py-1 pl-2 ml-0">Create your profile</v-toolbar-title>
                        </v-toolbar>
                    </v-flex>
                    <v-flex md12 my-3>
                        <span class="title ml-4 font-weight-bold">Personal Details</span>
                    </v-flex>
                    <v-layout row wrap>
                        <v-flex md4 mx-4>
                            <v-text-field prepend-icon="person" name="fname" label="First Name" type="text"></v-text-field>
                            <v-text-field prepend-icon="place" name="address" label="Address" type="text"></v-text-field>
                            <v-flex my-2>
                                <span class="subheading font-weight-bold">Gender</span>
                            </v-flex>
                            <v-flex ml-4>
                            <v-radio-group v-model="row" row>
                                <v-radio color="#1B264F" label="Male" value="radio-1"></v-radio>
                                <v-radio color="#1B264F" label="Female" value="radio-2"></v-radio>
                                <v-radio color="#1B264F" label="Other" value="radio-3"></v-radio>
                            </v-radio-group>
                        </v-flex>
                        </v-flex>
                        <v-flex md4 mx-4>
                            <v-text-field prepend-icon="person" name="lname" label="Last Name" type="text"></v-text-field>
                            <v-text-field prepend-icon="date_range" name="address" label="Date of Birth" type="date"></v-text-field>
                        </v-flex>
                        <v-flex xs6 md2 ml-5>
                            <v-card class="elevation-5 pl-2">
                                <v-icon size="165px" class="" color="secondaryBlue">person</v-icon>
                            </v-card>
                            <input id="fileInput" type="file" style="display:none" v-on:change="yourVueMethod()" />
                            <v-btn class="darkBlue mt-3" block color="white--text" id="fileInputButton" onclick="document.getElementById('fileInput').click()">Upload Photo</v-btn>
                        </v-flex>
                    </v-layout>
                    <v-flex md12 my-3>
                        <span class="title my-1 ml-4 font-weight-bold">Contacts</span>
                    </v-flex>
                    <v-layout row wrap>
                        <v-flex md4 mx-4>
                            <v-text-field prepend-icon="phone" name="phone" label="Phone Number" type="text"></v-text-field>
                            <v-text-field prepend-icon="fab fa-skype" name="skype" label="Skype" type="text"></v-text-field>
                        </v-flex>
                        <v-flex md4 mx-4>
                            <v-text-field prepend-icon="fas fa-globe-asia" name="website" label="Website" type="text"></v-text-field>
                            <v-text-field prepend-icon="fab fa-linkedin" name="linkedin" label="Linkedin" type="text"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-flex ma-4>
                    <v-card-actions>
                        <v-btn color="darkBlue" class="white--text">Next</v-btn>
                    </v-card-actions>
                </v-flex>
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
</style>