<template>
    <div >
        <v-toolbar color="white">
            <div class="topsideblock"></div>
            <v-avatar size="75px" tile>
                <v-img src="./img/logo.png" alt="" position="left" contain max-height="40px" class="mx-3"></v-img>
            </v-avatar>
            <!-- <v-overflow-btn label="All" outline class="searchbar">
            </v-overflow-btn> -->
            
            <v-spacer></v-spacer>
            <div class="searchWrapper hidden-sm-and-down">
            <input class="textarea" type="text" placeholder="Search.."/></div>
            <v-btn flat class="secondaryBlue btnsize" fab>
                <v-icon size="18px" color="white">search</v-icon>
            </v-btn>
                        <v-btn flat class="secondaryBlue btnsize" fab>
                <v-icon size="18px" color="white">notifications</v-icon>
            </v-btn>
            <v-btn flat class="secondaryBlue btnsize" fab>
                <v-icon size="18px" color="white">email</v-icon>
            </v-btn>
            <v-btn flat class="secondaryBlue btnsize white--text title" fab>?</v-btn>
            <span><div class="text-xs-center">
    <v-menu
      
      :close-on-content-click="false"
      :nudge-width="20"
      offset-x
      offset-y>
      
      <v-btn
        flat
        fab
        slot="activator"
        color="indigo"
        dark
      >
        <v-avatar><v-img src="./img/me2.jpg" alt="John"></v-img></v-avatar>
      </v-btn>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-img src="./img/me2.jpg" alt="John"></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Shrawan Shakya</v-list-tile-title>
              <v-list-tile-sub-title>UX/UI Designer</v-list-tile-sub-title>
            </v-list-tile-content>

        
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat>Settings</v-btn>
          <v-btn color="primary" flat>Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div></span>
        </v-toolbar>
        <v-tabs color="#1B264F" dark slider-color="white">
            <v-tab>HOME</v-tab>
            <v-tab>HOW IT WORKS</v-tab>
            <v-tab>BROWSE VACANCY</v-tab>
            <v-tab>BROWSE PROJECTS</v-tab>
        </v-tabs>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            
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
    
/* #################### btn ######################## */
.btnsize {
    height: 28px;
    width: 28px;
}

/* #################### menu ######################## */

.v-tabs__wrapper {
    padding-left: 30px;
}
</style>