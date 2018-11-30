import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        darkBlue: '#1B264F', //blue
        secondaryBlue: '#274690',
        green: '#059500', //green
        bluebg: '#374167',
        lightgreybg: '#EBEBEB'
    }
})