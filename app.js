var $pagination = document.getElementById("pagination");

var $carousel = document.getElementById("carousel");
var $suivant = document.getElementById("suivant");
var $prev = document.getElementById("prev");

n = 0;
autoSlide = "";
nbEnfants = $carousel.children.length;

function suivant(){
  stopSlide();
  if (n == nbEnfants - 1) {n = -1};
  n++;
  $carousel.children[0].style.marginLeft = n * -568 + 'px';
  startInterval();
}

function prev(){
  stopSlide();
  if (n == 0) {n = 4};
  n--;
  $carousel.children[0].style.marginLeft = n * -568 + 'px';
  startInterval();
}

function initPagination(){
  elm = "";
  for (i = 1; i < nbEnfants + 1; i++) {
    elm += '<span class="bulle" id="pagination-' + i +'">'+ i +'</span>';
  }
  $pagination.innerHTML = elm;
}

function paginationSelect(e){
  pagination = e.target.id.split("-");
  idPagination = pagination[1];
  if(idPagination < nbEnfants + 1){
    stopSlide();
    n = idPagination - 1;
    $carousel.children[0].style.marginLeft = n * -568 + 'px';
    startInterval();
  }
}

function startInterval(){
  autoSlide = setInterval(suivant, 3000);
}

function stopSlide() {
  clearInterval(autoSlide);
}

startInterval();
initPagination();
$carousel.onmouseover = stopSlide;
$carousel.onmouseout = startInterval;
$pagination.onclick = paginationSelect;
$suivant.onclick = suivant;
$prev.onclick = prev;
