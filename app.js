new Vue({
    el: '#vue-app',
    data: {
        api_key: 'Get your own API',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {}
    },
    methods:{
        fetchWeather (e){
            if (e.key == "Enter"){
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                    return res.json();
                }).then(this.setResults);
            }
        },
        setResults (results){
            this.weather = results;
        },
        dateBuilder (){
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${date} ${month} ${year}`;
        }
    }, 
    
});

