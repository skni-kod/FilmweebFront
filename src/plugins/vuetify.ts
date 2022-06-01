import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const darkModeSwitcher : boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not at all' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default new Vuetify({
    theme: {
        dark: darkModeSwitcher,
        themes: {
            light: {
                primary: '#FFF', //do zmiany
                secondary: '#000', //do zmiany
                accent: '#f7f7f7',
                tags: '#808080',
                break: '#808080',
                more: '#808080',
                extlink: '#808080',
            },
            dark: {
                primary: '#FFF', //do zmiany
                secondary: '#000', //do zmiany
                accent: '#161616',
                tags: '#959595',
                break: '#808080',
                more: '#959595',
                extlink: '#959595',
            }
        },
    },
});