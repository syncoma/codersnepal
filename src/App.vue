<template>
	<v-app class="lightgreybg">
		<app-navout></app-navout>
		<!-- <template >
		<app-navin></app-navin>
		</template> -->
		<v-content>
			<v-fade-transition mode="out-in">
				<router-view></router-view>
			 </v-fade-transition>
		</v-content>
		<app-footer></app-footer>
		
		
	</v-app>
 
</template>

<script>
import navout from './components/navout.vue';
import footer from './components/footer.vue';

export default {
	name: 'App',
	components:{
		'app-navout': navout,
		'app-footer': footer
		
	},
  
 
  data () {
    return {
      show: false
    }
  }
}
</script>
<style type="text/css">
	html{
		overflow-y: auto;
	}
#app{
		font-family: 'KoHo', sans-serif;
	}
</style>
