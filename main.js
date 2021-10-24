
$(document).ready(function() {

    //textos a serem exibidos
    var textos = ["Redizir", "Reutilizar", "Reciclar"];

    //exibição inicial
    var atual = 0;
    $('#frases').text(textos[atual++]);

    //define intervalo de troca
    setInterval(function() {

        //efeito de desaparecer
        $('#frases').fadeOut(function() {

            //função "callback" que mostra o próximo texto
            if (atual >= textos.length) atual = 0;
            $('#frases').text(textos[atual++]).fadeIn();

        });

    }, 2000);
});

var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'/Lixo/download__49_-removebg-preview.png',
'/Lixo/images_-_2021-10-23T213210.974-removebg-preview.png'
];

function trocar(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("bom_dia").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "bomdia" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}

var Modal = (function() {
  var modalOpen = function() {
    var title = $(this).data('title');
    var msg = $(this).data('msg');
    $('.modal-title').text(title);
    $('.modal-msg').text(msg);
    $('.modal').addClass('in');
  };
  
  var modalClose = function() {
    $('.modal').removeClass('in');
  };
  
  $('.button').click(modalOpen);
  $('.-close').click(modalClose);
})();

function toggleFAB(fab){
	if(document.querySelector(fab).classList.contains('show')){
  	document.querySelector(fab).classList.remove('show');
  }else{
  	document.querySelector(fab).classList.add('show');
  }
}

document.querySelector('.fab .main').addEventListener('click', function(){
	toggleFAB('.fab');
});

document.querySelectorAll('.fab ul li button').forEach((item)=>{
	item.addEventListener('click', function(){
		toggleFAB('.fab');
	});
});


$(document).ready(function() {
       $("#opcao1").click(function() {
                        window.location = "#nav";
                    });
     });

$(document).ready(function() {
       $("#opcao2").click(function() {
                        window.location = "#";
                    });
     });

$(document).ready(function() {
       $("#opcao3").click(function() {
                        window.location = "time.html";
                    });
     });

     
const btn = document.getElementById("emoji_btn");
const emojis = [
  "😪", "😔", "😳", "😎", "🤑", "🤯", "😒", "🤢", "😈", "🥵", "😘", "🤬", "😡", "🥺", "😴", "🥶", "🎃", "💩", "🐂"
  ];
  
btn.addEventListener("mouseover", () => {
  btn.innerText = emojis[Math.floor(Math.random () * emojis.length)];
});


