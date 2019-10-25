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
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, ОБОЛОНЬ</h3> <a target="_blank" href="https://goo.gl/maps/LgUjrpW4XUrieHeB9">вул. Оболонська набережна, 19</a> <a href="tel:0674479982"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 447 99 82</a>'
                    },

      {
        coordinates: {
          lat: 50.3865081,
          lng: 30.4601825
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев,  ВДНГ (Liko Liceum)</h3> <a target="_blank" href="https://goo.gl/maps/RANqFrnQyh2yzUW9A">вул. Композитора Мейтуса, 5</a> <a href="tel:0674007935"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 400 79 35</a>'
                    },
      {
        coordinates: {
          lat: 50.4079509,
          lng: 30.6109881
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Осокорки</h3> <a target="_blank" href="https://goo.gl/maps/nNJuEPYdej1bAS3L6">вул. Дніпровська набережна, 19а</a> <a href="tel:0672342860"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 234 28 60</a>'
                    },
      {
        coordinates: {
          lat: 50.4566949,
          lng: 30.4925751
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Лук\'янівка</h3> <a target="_blank" href="https://goo.gl/maps/Y68XvnbaAgP4Wfut6"> вул. Січових  (Артема), 42</a> <a href="tel:0673279603"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 327 96 03</a>'
                    },
      {
        coordinates: {
          lat: 50.3863894,
          lng: 30.4686284
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Голосієво</h3> <a target="_blank" href="https://goo.gl/maps/fCMt71L8ocS7Yc388">вул. Ломоносова, 73в <br>ЖК «Сонячна брама»</a> <a href="tel:0673279601"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg> 067 327 96 01</a>'
                    },
      {
        coordinates: {
          lat: 50.423987,
          lng: 30.5413113
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Печерськ</h3> <a target="_blank" href="https://goo.gl/maps/hLMMf6HNSC5doBhK9">DEC education<br> бул. Л. Українки, 23Б, 3 поверх</a> <a href="tel:08003044003338"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>0 (800) 304 400 33 38</a> <a href="tel:0674668447"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>(067) 466 84 47</a>'
                    },
      {
        coordinates: {
          lat: 50.4152657,
          lng: 30.5496016
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Печерськ</h3> <a target="_blank" href="https://goo.gl/maps/Bfdo48ckKs8Uxr1H6">вул. Професора Підвисоцького, 16</a> <a href="tel:0672401905"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.1 348.1"><path d="M340 275l-53-54a28 28 0 00-40 1l-27 27-5-3c-18-9-41-22-65-47-25-25-38-48-48-65l-3-6 19-18 8-8c12-12 12-29 1-40L73 8a28 28 0 00-39 1L19 24v1A90 90 0 001 69c-7 59 20 113 93 186 101 100 182 93 186 92a90 90 0 0044-18v1l15-15c12-11 12-29 1-40z" fill="#e55a2f"/></svg>067 240 19 05</a> '
                    },
      {
        coordinates: {
          lat: 50.4176577,
          lng: 30.5259683
        },
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-8 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" fill="#e55a2f"/></svg> <h3>Киев, Либідська</h3> <a target="_blank" href="https://goo.gl/maps/tdYThXgVW1PhaZoy5">вул. Філатова, 2/1 <br>ЖК «Французький квартал»</a> <a href="tel:+380674668447">(067) 466 84 47</a>'
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
      }



      $('.location-item').click(function () {
        var destination = $("#map").offset().top - 0;
        $("body,html").animate({
          scrollTop: destination
        }, 500);
        var markerPosition = new google.maps.LatLng($(this).data('lat'), $(this).data('lng'));
        jump_to_marker(markerPosition);

      })

    }

  }
  if ($(window).width() > 1200 && $('div').hasClass('map')) {
    initMap();
  }

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

  /*  $('.order-btn[data-fancybox]').click(function () {
      $('#reg .form .title').text($(this).text());
    });*/

  $('input[name="phone"]').inputmask({
    "mask": "+38(999) 999-9999"
  });

  $("#screen").magnificPopup({
    items: [
      {
        src: 'images/screen_1.jpg'
      },
      {
        src: 'images/screen_2.jpg'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
  });

  $(".phone-modal").magnificPopup({
    items: [
      {
        src: '#call'
      }
    ],
    gallery: {
      enabled: false
    },
   type: 'inline'// this is default type
  });
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


$('[data-popup]').magnificPopup({
		type: 'inline',
		preloader: false/*,
		focus: '',*/

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		/*callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}*/
	});

  var observer = lozad();
  observer.observe();


  /* form valid*/
  var alertImage = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#f97c2b"/></svg>';
  var error;
  $('form .order-btn').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parents('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parents('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parents('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parents('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });


  /*end form valid*/
});