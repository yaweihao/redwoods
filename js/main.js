Vue.component('home-panel',{
    name: 'HomePanel',
    template: '#home-template',
});
Vue.component('coaches-panel',{
    name: 'CoachesPanel',
    template: '#coaches-template',
});
Vue.component('schedule-panel',{
    name: 'SchedulePanel',
    template: '#schedule-template',
});
Vue.component('faq-panel',{
    name: 'FAQPanel',
    template: '#faq-template',
});
Vue.component('contact-panel',{
    name: 'ContactPanel',
    template: '#contact-template',
});
function buildVue() {
    var vue;

    window['mirVue'] =
    vue = new Vue({
        name: 'mirVue',
        data: {
            active: 'home',
            actions: [
                {href: 'home', name: 'Home'},
                {href: 'coaches', name: 'Coaches'},
                {href: 'schedule', name: 'Schedule'},
                {href: 'faq', name: 'FAQ'},
                {href: 'contact', name: 'Contact'}
            ]
        },
        template: '#content-template',
        el: '#main-content',
        methods: {
            navTo: function(e,page) {
                const vue = this;
                e.preventDefault();
                vue.active = page;
            }
        },
    });
}

buildVue();
