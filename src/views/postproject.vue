<template>
    <v-container id="postPro" fluid fill-height class=" lightgreybg">
        <v-layout justify-center>
            <v-flex xs10 md7>
                <v-form>
                    <v-card class="elevation-10 py-3 pr-5">
                        <v-flex xs10 mx-4>
                            <v-card-text class="title font-weight-bold">Post Project</v-card-text>
                            <v-card-text class="pt-0">Coders Nepal allows you to get connected to your desired freelancers according to your search criteria. Pay the freelancer only when you are 100% satisfied.</v-card-text>
                        </v-flex>
                        <v-toolbar height="45px" class="secondaryBlue mb-3 pl-3">
                            <v-toolbar-title class="white--text">Project title</v-toolbar-title>
                        </v-toolbar>
                        <v-text-field class="textfieldsize pl-5" solo single-line outline clearable name="text" type="text" placeholder="Enter the type of work you need done or job title you are hiring for"></v-text-field>
                        <v-toolbar height="45px" class="secondaryBlue mb-3 pl-3">
                            <v-toolbar-title class="white--text">Describe about your project</v-toolbar-title>
                        </v-toolbar>
                        <v-textarea outline solo single-line name="input-7-4" class="pl-5" placeholder="Describe the work to be done. We are hiring a content writer to work for our company. You will be working with our website developers and other team members" value=""></v-textarea>
                        <v-tooltip right>
                            <input id="fileInput" type="file" style="display:none" v-on:change="yourVueMethod()" />
                            <v-btn flat outline class="darkBlue mt-0 mb-4 ml-5 font-weight-black" slot="activator" color="darkBlue--text" id="fileInputButton" onclick="document.getElementById('fileInput').click()">Upload</v-btn>
                            <span>Programmatic tooltip Programmatic<br>tooltip Programmatic tooltip<br> Programmatic tooltip</span>
                        </v-tooltip>
                        <v-toolbar height="45px" class="secondaryBlue mb-3 pl-3">
                            <v-toolbar-title class="white--text">What skills are required?</v-toolbar-title>
                        </v-toolbar>
                        <v-combobox class="pl-5" v-model="chips" :items="items" label="Suggested skills: Website design, Logo design, Mobile app design" chips clearable solo multiple>
                            <template slot="selection" slot-scope="data">
                                <v-chip :selected="data.selected" color="secondaryBlue" text-color="white" close @input="remove(data.item)">
                                    <strong>{{ data.item }}</strong>&nbsp;
                                </v-chip>
                            </template>
                        </v-combobox>
                        <v-textarea outline solo single-line name="input-7-4" class="pl-5" placeholder="Other Specification" value=""></v-textarea>
                        <v-toolbar height="45px" class="secondaryBlue mb-3 pl-3">
                            <v-toolbar-title class="white--text">Company Info</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="title pl-5">Company Name</v-card-text>
                        <v-text-field class="textfieldsize pl-5" solo single-line outline clearable name="text" type="text" placeholder=""></v-text-field>
                        <v-card-text class="title pl-5">Company Location</v-card-text>
                        <v-text-field class="textfieldsize pl-5" solo single-line outline clearable name="text" type="text" placeholder=""></v-text-field>
                        <v-toolbar height="45px" class="secondaryBlue my-3 pl-3">
                            <v-toolbar-title class="white--text">Bid Duration</v-toolbar-title>
                        </v-toolbar>
                        <v-layout row wrap>
                            <v-flex md5>
                                <v-card-text class="subheading pl-5">Start Date</v-card-text>
                                <v-text-field class="textfieldsize pl-5" append-icon="date_range" solo single-line outline clearable name="text" type="date" placeholder=""></v-text-field>
                            </v-flex>
                            <v-flex md5>
                                <v-card-text class="subheading pl-5">End Date</v-card-text>
                                <v-text-field class="textfieldsize pl-5" append-icon="date_range" solo single-line outline clearable name="text" type="date" placeholder=""></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-toolbar height="45px" class="secondaryBlue my-3 pl-3">
                            <v-toolbar-title class="white--text">Budget</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="subheading pl-5">Pay Range(रू)</v-card-text>
                        <v-layout row>
                            <v-flex md5>
                                <v-text-field class="textfieldsize pl-5" solo single-line outline clearable name="text" type="text" placeholder=""></v-text-field>
                            </v-flex>
                            <v-flex md5>
                                <v-text-field class="textfieldsize pl-5" solo single-line outline clearable name="text" type="text" placeholder=""></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center>
                            <v-card-actions class="ml-4 my-3">
                                <v-btn color="darkBlue" class="white--text">Post my Project</v-btn>
                            </v-card-actions>
                        </v-layout>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            chips: [],
            items: ['Javascript', 'Python']
        }
    },

    methods: {
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
        }
    }
}
</script>
<style type="text/css">
#postPro .textfieldsize {
    height: 50px;
}

#postPro .v-text-field--outline.v-text-field--single-line input {
    margin-top: 3px;
}

#postPro .v-text-field>.v-input__control>.v-input__slot {
    min-height: 30px;
}

#postPro .v-textarea.v-text-field--enclosed.v-text-field--single-line textarea {
    margin-top: 3px;
}
</style>