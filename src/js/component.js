$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.content').slideToggle('300');
  });

  function initMap() {
    var element = document.getElementById('map');
    var options = {
      zoom: 12,
      center: {
        lat: 50.449973,
        lng: 30.524911
      },
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
      
                    {
                      coordinates: {
                        lat: 50.4998284,
                        lng: 30.5167872
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, ОБОЛОНЬ</h3> <a target="_blank" href="https://goo.gl/maps/LgUjrpW4XUrieHeB9">ул. Оболонская набережная, 19</a> <a href="tel:0674479982"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 447 99 82</a>'
                    },

                    {
                      coordinates: {
                        lat: 50.3865081,
                        lng: 30.4601825
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, ВДНХ</h3> <a target="_blank" href="https://goo.gl/maps/RANqFrnQyh2yzUW9A">ул. Композитора Мейтуса, 5</a> <a href="tel:0674007935"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 400 79 35</a>'
                    },
                    {
                      coordinates: {
                        lat: 50.4079509,
                        lng: 30.6109881
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Осокорки</h3> <a target="_blank" href="https://goo.gl/maps/nNJuEPYdej1bAS3L6">ул. Днепровская набережная, 19а</a> <a href="tel:0672342860"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 234 28 60</a>'
                    },
                    {
                      coordinates: {
                        lat: 50.4566949,
                        lng: 30.4925751
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Лукьяновка</h3> <a target="_blank" href="https://goo.gl/maps/Y68XvnbaAgP4Wfut6">ул. Сечевых Стрельцов (Артема), 42</a> <a href="tel:0673279603"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 327 96 03</a>'
                    },
                    {
                      coordinates: {
                        lat: 50.3863894,
                        lng: 30.4686284
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Голосеево</h3> <a target="_blank" href="https://goo.gl/maps/fCMt71L8ocS7Yc388">ул. Ломоносова, 73в (ЖК «Сонячна брама»)</a> <a href="tel:0673279601"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 327 96 01</a>'
                    },
                    {
                      coordinates: {
                        lat: 50.423987,
                        lng: 30.5413113
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Печерск</h3> <a target="_blank" href="https://goo.gl/maps/hLMMf6HNSC5doBhK9">DEC EDUCATION бул. Л. Украинки, 23Б, 3 этаж</a> <a href="tel:08003044003338"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>0 (800) 304 400 33 38</a> <a href="tel:0674668447"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>(067) 466 84 47</a>'
                    },
                    {
                      coordinates: {
                        lat: 50.4152657,
                        lng: 30.5496016
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Печерск</h3> <a target="_blank" href="https://goo.gl/maps/Bfdo48ckKs8Uxr1H6">ул. Профессора Подвысоцкого, 16</a> <a href="tel:0672401905"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>067 240 19 05</a> '
                    },
                    {
                      coordinates: {
                        lat: 50.4176577,
                        lng: 30.5259683
                      },
                      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Печерск</h3> <a target="_blank" href="https://goo.gl/maps/tdYThXgVW1PhaZoy5">ул. Филатова, 2/1 (ЖК «Французский квартал»)</a> '
                    }];


    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }

    function addMarker(properties) {
      var marker = new google.maps.Marker({
        position: properties.coordinates,
        icon: 'svg/logo_dec_map.svg',
        map: myMap
      });

      if (properties.image) {
        marker.setIcon(properties.image);
      }

      if (properties.info) {
        var InfoWindow = new google.maps.InfoWindow({
          content: properties.info
        });

        marker.addListener('click', function () {
          InfoWindow.open(myMap, marker);
        });
      }


      function jump_to_marker(markerPosition) {
        myMap.panTo(markerPosition);
        myMap.setZoom(17);
        marker.setAnimation(google.maps.Animation.DROP);
       /*setTimeout(function(){
          InfoWindow.open(myMap, marker);
       },1000)*/
      }



      $('.location-item').click(function () {
        var destination = $("#map").offset().top - 0;
        $("body,html").animate({ scrollTop: destination}, 500 );
        var markerPosition = new google.maps.LatLng($(this).data('lat'), $(this).data('lng'));
        jump_to_marker(markerPosition);
        
      })

    }

  }
  initMap();

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('nav .menu').slideToggle(200);
  });
  
  $('.order-btn').click(function(){
    $('#reg .form .title').text($(this).text());
  });
  
  $('input[name="phone"]').inputmask({"mask": "+38(999) 999-9999"});
  
});