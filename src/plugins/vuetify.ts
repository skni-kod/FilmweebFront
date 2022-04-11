import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FFF', //do zmiany
                secondary: '#000', //do zmiany
                accent: '#f7f7f7',
            },
        },
    },
});
