import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const darkModeSwitcher : boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not at all' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default new Vuetify({
    theme: {
        dark: false, // darkModeSwitcher,
        themes: {
            light: {
                primary: '#FFF', //do zmiany
                secondary: '#000', //do zmiany
                accent: '#f7f7f7',
            },
            dark: {
                primary: '#FFF', //do zmiany
                secondary: '#000', //do zmiany
                accent: '#161616'
            }
        },
    },
});