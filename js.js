var number = document.querySelector('.block').getAttribute('data-attr');

  var count = 134; //всего записей
  var cnt = 1; //сколько отображаем сначала
  var pageNow = 1;
  var cnt_page = Math.ceil(count / cnt); //кол-во страниц
  
  //выводим список страниц
  var paginator = document.querySelector(".pagination");
  var page = "";
  var checkNumber = false;
  
  if (number && number>0 && number<count ) 
    {
      checkNumber = true;
      pageNow = +number;
    }


navigation(pageNow);
function navigation(pageNow){
    page = "";
    if ( checkNumber == true) 
      {
        checkNumber = false;
        pageNow++;
      }
    var pagePrev = pageNow - 2;
    if (pageNow > count-1) pageNow = count-2;
    if (pageNow <= 3) pageNow = 4;
    if (pagePrev > 0) {
        page += '<li class="page-item"><a href="/страница-'+ (1) +'" class="page-link" data-page=' + (1) * cnt + '  id=\"page' + 0 + '\">Первая</a></li>';
        page += '<li class="page-item"><a href="/страница-'+ (pagePrev) +'" class="page-link" data-page=' + (pagePrev) * cnt + '  id=\"page' + (pagePrev) + '\">Предыдущая</a></li>';
    }
    else {
      page += '<li class="page-item"><a href="/страница-'+ (1) +'" class="page-link disabled" data-page=' + (1) * cnt + '  id=\"page' + 0 + '\">Первая</a></li>';
      page += '<li class="page-item"><a href="/страница-'+ (pagePrev) +'" class="page-link disabled" data-page=' + (pagePrev) * cnt + '  id=\"page' + (pagePrev) + '\">Предыдущая</a></li>';
    }

    
    for (var i = pageNow-4; i < pageNow+1; i++) {
        if (i>=0 && i<count-1) page += '<li class="page-item"><a href="/страница-'+ (i + 1) +'" class="page-link" data-page=' + (i+1) * cnt + '  id=\"page' + (i + 1) + '\">' + (i + 1) + '</a></li>';
    }
    if (pagePrev < 132) {

      page += '<li class="page-item"><a href="/страница-'+ (pagePrev+2) +'" class="page-link" data-page=' + (pagePrev+2) * cnt + '  id=\"page' + (pagePrev+2) + '\">Следующая</a></li>';
      page += '<li class="page-item"><a href="/страница-'+ (count-1) +'" class="page-link" data-page=' + (count-1) + '  id=\"page' + (count-1) + '\">Последняя</a></li>';
    }
    else {
      page += '<li class="page-item"><a href="/страница-'+ (pagePrev + 2) +'" class="page-link disabled" data-page=' + (pagePrev+2) * cnt + '  id=\"page' + (pagePrev+2) + '\">Следующая</a></li>';
      page += '<li class="page-item"><a href="/страница-'+ (count-1) +'" class="page-link disabled" data-page=' + (count-1) + '  id=\"page' + (count-1) + '\">Последняя</a></li>';
    }
    paginator.innerHTML = page;
}


//выводим первые записи {cnt}
var div_num = document.querySelectorAll(".numNUMBER");
for (var i = 0; i < div_num.length; i++) {
  if (i == pageNow-1) {
    div_num[i].style.display = "block";
  }
}

var pageNumber = "page"+pageNow;

var main_page = document.getElementById(pageNumber);

main_page.classList.add("paginator_active");

//листаем
function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id; 
  if (target.tagName.toLowerCase() != "a") return;
  var data_page = +target.dataset.page;
  pageNow = data_page;
  navigation(pageNow+1);
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";
  }
  for (var i = data_page-1; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}