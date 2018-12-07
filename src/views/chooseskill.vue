<template>
	<v-container id="chooseskill" fluid class="lightgreybg" fill-height>
		<v-layout row  ml-4>
			<v-flex xs11 md12>
				<v-card class="elevation-10 vcardouter my-2">
					<v-layout row wrap justify-center>
						<v-flex >
							<v-layout row wrap my-4 class="majorskill">
								<v-flex>
									<h1 class="display-1 font-weight-bold">Choose Your Skills</h1>
									
								</v-flex>
							</v-layout>
							<v-layout row wrap mb-2>
								<v-flex xs11 md6 text-xs-center>
									<h3>Major Skills</h3>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center>
								<v-flex xs11 md6 >
									<div class="selectionmajorskills">
										<v-combobox outline flat v-model="chips" :items="items" label="Your Major Skill" chips clearable solo multiple>
											<template slot="selection" slot-scope="data">
												<v-chip color="darkBlue white--text" :selected="data.selected" close @input="remove(data.item)">
													<strong>{{ data.item }}</strong>&nbsp;
												</v-chip>
											</template>
										</v-combobox>
									</div>
								</v-flex>
							</v-layout>
							<v-layout row wrap mb-2>
								<v-flex xs11 md6 text-xs-center>
									<h3>Minor Skills</h3>
								</v-flex>
							</v-layout>
							<v-layout row wrap justify-center>
								<v-flex xs11 md6>
									<div class="selectionminorskills">
										<v-combobox outline flat v-model="chips" :items="items" label="Your Minor Skill" chips clearable solo multiple>
											<template slot="selection" slot-scope="data">
												<v-chip color="darkBlue white--text" :selected="data.selected" close @input="remove(data.item)">
													<strong>{{ data.item }}</strong>&nbsp;
												</v-chip>
											</template>
										</v-combobox>
									</div>
								</v-flex>
							</v-layout>
							<v-layout row wrap mb-4 class="majorlevel" justify-center>
								<v-flex>
									
										<h1 class="display-1 font-weight-bold" >Choose Your Level</h1>
									
								</v-flex>
							</v-layout>
						</v-flex>
						<!--choose skill dekhi ko lagi flex -->
					</v-layout>
					<!--Level ko lagi flex -->
					<v-item-group exclusive>
						<v-container grid-list-md>
							<v-layout wrap>
								<v-flex v-for="level in levels" :key="level.name" xs12 sm6 md3>
									<v-item>
										<v-card slot-scope="{ active, toggle }" :color="active ? 'white black--text' : 'white'"  dark :height="active ? '200px' :''" @click="toggle"><v-btn block :outline="active ? true : false" :color="active ? 'green' : 'green'">{{ level.name }}</v-btn>
											<v-scroll-y-transition hide-on-leave>
												<div v-if="active" class="subheading text-xs-center">
													{{ level.content }}
												</div>
											</v-scroll-y-transition>
										</v-card>
									</v-item>
								</v-flex>
							</v-layout>
						</v-container>
					</v-item-group>
				</v-card-actions>
				<v-layout row wrap justify-center>
					<v-btn outline class="darkBlue">Back</v-btn>
					<v-btn class="darkBlue white--text">Next</v-btn>
         </v-layout>
       </v-card>
      </v-flex>
      <v-layout row >
          <v-flex ml-3 >
            <v-card class="elevation-5 my-2 hidden-xs-only" height="200px" >
            	<v-toolbar color="secondaryBlue px-4" height="45px">
            	  <v-toolbar-title class="white--text">FAQ</v-toolbar-title>
            	</v-toolbar>
            <v-card-text>
            	adawdawd
            	adawdawd
            	adawdawd
            	adawdawd
            	adawdawd
              adawdawdawdawd
            </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-layout>
        
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            items: [
                'Programming',
                'Design',
                'Vue',
                'Vuetify',
                'Php'

            ],
            chips: '',
            levels: [
                { name: 'Learner', content: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.', icon: 'person', isClicked: false },
                { name: 'Beginner', content: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.', icon: 'person', isClicked: false },
                { name: 'Intermediate', content: 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.', icon: 'person', isClicked: false },
                { name: 'Expert', content: "This is for expert only . Please don't click this button of your aren't expert.", icon: 'person', isClicked: false },
            ],
            toggle_none: null,
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
<style>
#chooseskill {
    /*text-align: center;*/
}

#chooseskill .vcardouter {
		border-radius: 8px;
    padding-bottom: 40px;
}

#chooseskill .majorskill {
    text-align: center;
}

#chooseskill .majorlevel {
    text-align: center;
}

#chooseskill .v-text-field--outline .v-input__slot {
    min-height: 0px;
    border-radius: 8px;
}
.v-item--active{
	outline:auto green;
}

</style>