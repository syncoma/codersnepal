<template>
    <div>
        <v-toolbar color="white">
            <div class="topsideblock"></div>
            <v-avatar size="75px" tile>
                <v-img src="./img/logo.png" alt="" position="left" contain max-height="40px" class="mx-3"></v-img>
            </v-avatar>
           
            
                <div class="searchWrapper hidden-sm-and-down">
            <input class="textarea" type="text" placeholder="Search.."/></div>
            <v-btn flat class="secondaryBlue btnsize" fab>
                <v-icon size="18px" color="white">search</v-icon>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-btn flat color="grey" class="font-weight-black">about</v-btn>
            <v-btn outline flat color="#059500">Post your project</v-btn>
            <v-btn color="#059500" class="white--text " to="/login">Login</v-btn>
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

.searchWrapper {
      
      padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 2px solid rgba(0,0,0,0.5);
      border-radius: 3px;
      background: white;
      margin-left:20px;
      width: 375px;
    }
.textarea{
  width: 350px;
  outline: none;
}
  /*################################ Button ############################*/  
.btnsize {
    height: 28px;
    width: 28px;
}



</style>