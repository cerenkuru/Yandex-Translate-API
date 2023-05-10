function Translate(word,language){
    this.apikey = "trns1.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481";
    this.word = word;
    this.language = language;

    // XHR
    this.xhr = new XMLHttpRequest();



}

Translate.prototype.translateWord = function(callback){
    // Ajax İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () => {

            if(this.xhr.status === 200){
                const json = JSON.parse(this.xhr.responseText);
                const text = json.text[0];
                callback(null,text); // Hata yoksa
                 // console.log(JSON.parse(this.xhr.responseText).text[0]);
            }
            else{
                //console.error("Hata");
                callback("Bir hata oluştu",null); // Hata varsa
            }
    }

    this.xhr.send();


};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    
    this.word = newWord;
    this.language = newLanguage;
}

