new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) { // event 파라미터는 자동으로 감지
            // console.log(event); // event의 모든 속성을 console에서 볼 수 있다. 
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You Clicked Me!');
        }
    }
});