function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){ 
    if (s5 == url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp") {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    avaliacao = 5;
    } else {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 4;
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp") {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 4;
    } else {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp") {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 3;
    } else {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 2;
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp") {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 2;
    } else {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 1;
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp") {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s2").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s3").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s4").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    document.getElementById("s5").src = "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png.webp";
    avaliacao = 0;
   }}
    
 document.getElementById('rating').innerHTML = avaliacao;
}




function azul(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676566112091.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}




function preto(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676484797851.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}



function branco(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676564478513.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}

function verde(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676567165102.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}

function gold(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676487536294.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}

function marrom(){
  document.getElementById('myImage')
  .src="https://images.petz.com.br/fotos/1676486629209.jpg";
  document.getElementById('message')
  .innerHTML="Bye! GeeksforGeeks people";
}


