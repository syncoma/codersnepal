<template>
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
</template>
<script>
    import navin from './components/navin.vue';
import footer from './components/footer.vue';

export default {
	name: 'App',
	components:{
		
		'app-navin' : navin,
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