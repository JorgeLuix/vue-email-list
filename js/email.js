
const {createApp} = Vue;

createApp({
  data() {
    return {
        titolo: 'RandomMail ',
        randomEmail:'',
        basePath:'https://flynn.boolean.careers/exercises/api/',
        images: [
           './img/avatar_1.jpg',
           './img/avatar_2.jpg',
           './img/avatar_3.jpg',
           './img/avatar_4.jpg',
           './img/avatar_5.jpg',
           './img/avatar_6.jpg',
           './img/avatar_7.jpg',
           './img/avatar_8.jpg',
           './img/avatar_io.jpg',
           './img/avatar_1.jpg'
        ] //array immagini per ogni email random.
    }
},
methods: {
    getData(){
        this.randomEmail = [];
        for (let i=0; i < 10; i++ ) {
            axios.get(this.basePath + 'random/mail').then((res) => {
                this.randomEmail.push(res.data.response);
        });
       
      } 
    },
    getRandomImage() {//asegnare una immagine random a ogni mail.
        return this.images[Math.floor(Math.random() * this.images.length)];
    }
 },
 mounted(){
  //this.getData();
 },
     
    
}).mount('#app');