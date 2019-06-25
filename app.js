new Vue({
    el: '#vue-app',
    data: {
        name: 'Luke',
        job: 'programmer',
        website: 'https://wbluke.com',
        websiteTag: '<a href="https://wbluke.com">Luke Website</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});