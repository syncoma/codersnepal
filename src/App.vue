<template>
<<<<<<< HEAD
    <v-app>
        <app-navin></app-navin>
        <!-- <template >
		<app-navin></app-navin>
		</template> -->
        <v-content>
            <router-view></router-view>
        </v-content>
        <app-footer></app-footer>
    </v-app>
=======
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
 
>>>>>>> 60a7ed376a2cb995b27bfd6f2727e867c26a334a
</template>
<script>
<<<<<<< HEAD
    import navin from './components/navin.vue';
=======
import navout from './components/navout.vue';
>>>>>>> 60a7ed376a2cb995b27bfd6f2727e867c26a334a
import footer from './components/footer.vue';

export default {
	name: 'App',
	components:{
<<<<<<< HEAD
		
		'app-navin' : navin,
=======
		'app-navout': navout,
>>>>>>> 60a7ed376a2cb995b27bfd6f2727e867c26a334a
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
html {
    overflow-y: auto;
}

#app {
    font-family: 'KoHo', sans-serif;
}
</style>