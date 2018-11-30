<template>
    <div>
        <v-toolbar color="white">
            <div class="topsideblock"></div>
            <v-img src="./img/logo.png" alt="" position="left" contain max-height="40px" class="mx-3"></v-img>
            <v-overflow-btn label="All" outline class="searchbar">
            </v-overflow-btn>
            <v-layout>
            <v-text-field placeholder="Search..." outline append-icon="search"></v-text-field>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">about</v-btn>
            <v-btn outline flat color="#059500">Post your project</v-btn>
            <v-btn color="#059500" class="white--text ">Login</v-btn>
            <v-btn color="#1B264F" class="white--text">Create your account</v-btn>
        </v-toolbar>
            
    </div>
   
    
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            items: ['All', 'project', 'Vacancy', 'Intern'],
            defaultSelected: 'All'
        }
    }
}
</script>
<style type="text/css">
.v-toolbar__content,
.v-toolbar__extension {
    padding: 0px 24px 0px 0px;
}

.topsideblock {
    height: 100%;
    width: 30px;
    background-color: #1B264F;
    margin: 0px 24px 0px 0px;
}


/* #################### SEARCH BAR ######################## */

.v-input__slot {
    padding: 10px;
    height: 35px;
}

.v-text-field--outline input {
    margin: 0;
}

.v-text-field--outline .v-input__slot {
    min-height: 10px;

    margin: auto 0;
}

.v-text-field__slot {
    margin: auto;

}

.v-text-field.v-text-field--enclosed .v-input__append-inner {
    margin: auto 0;
}

.v-overflow-btn .v-select__slot {
    height: 35px;
    width: 100px;
}

.v-overflow-btn .v-label {
    margin: 0;

}

.searchbar {
    width: 10px;
    margin: 0;
}



.v-overflow-btn .v-select__slot input {
    margin: 0;
}

.v-overflow-btn .v-input__append-inner {
    height: 10px;
    width: 10px;
}





</style>