new Vue({
    el: '#vue-app',
    data: {
        name: 'Luke',
        job: 'programmer'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});