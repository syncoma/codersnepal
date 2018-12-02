<template>
	<v-app>
		<app-navbar></app-navbar>
		<v-content>
			
				<router-view></router-view>
			
		</v-content>
		<app-footer></app-footer>
		
		
	</v-app>
 
</template>

<script>
import navin from './components/navin.vue';
import footer from './components/footer.vue';

export default {
	name: 'App',
	components:{
		'app-navbar': navin,
		'app-footer': footer
		
	},
  
 
  data () {
    return {
      //
    }
  }
}
</script>
<style type="text/css">
	html{
		overflow-y: auto;
	}
	@import url('https://fonts.googleapis.com/css?family=KoHo');

    #app {
      font-family: 'KoHo', Helvetica, Arial, sans-serif;
  }
     
</style>
