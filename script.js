// https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/

//https://mauuu21.github.io/my%20first%20big%20Project/

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

//http://stayathome-syllabus.greenfox.academy/week03/my-first-web-app.html

//https://books.google.hu/books?id=MwwxCgAAQBAJ&pg=PT579&lpg=PT579&dq=$(%27%23photo-title%27).attr(%27src%27,+data.title);&source=bl&ots=YxcSbrS77i&sig=ACfU3U1BOHdP5J_BU8V6zrmv15sctFvnCQ&hl=hu&sa=X&ved=2ahUKEwio8oi6xprpAhWjxoUKHWxrBj8Q6AEwAHoECAYQAQ#v=onepage&q=%24('%23photo-title').attr('src'%2C%20data.title)%3B&f=false


// Ennek menj neki eloszor de csinalj elotte egy biztonsagi mentest!
//https://www.youtube.com/watch?v=Dc2WHsuiXos

//https://www.w3schools.com/js/js_arrays.asp foreach pl az aljan

//https://codepen.io/WAWI/pen/pYjByd

/*ERROROK:
-Bele kellene tenni azt ha a jobb/ball nyillall kattintasz akkor a thumbnailseken is mutatja melyik
kép van kijelölve
- Vmi gebasz van az osszevissza kattingatással
-Meg kell csinalni a szoveget eltunonek!
-Thumbnailsre ha raviszed a kurzort akkor irja ki a kep nevet
*/


let data = {                     // foto objektumok
    photo:'IMG_20170721_0704525.jpg',
    title: 'SLEEP',
    description:"Belle Epoque without COVID-19",
    };
    
    let data1 = {
      photo: 'IMG_20190602_2320476.jpg',
      title: 'France',
      description: 'The night ... that night',
    }
    
    let data2 = {
        photo:'IMG_20171229_1636417-panorama.jpg',
        title: 'ISLAMIC MUSEUM in KATAR',
        description:'Designed by europians',
        };
    
    
    let data3 = {
        photo:'IMG_20171226_1211189-panorama.jpg',
        title: 'Four Seasons',
        description:"Koh Phangan",
        };    
    
    let data4 = {
        photo:'IMG_20171229_1504104-panorama.jpg',
        title: 'Katar',
        description:"This bridge drives to suburb.",
        };  
    
        let data5 = {
            photo:'IMG_20200227_1654016-panorama.jpg',
            title: 'Egypt',
            description:"Triangle of Jordan, Saudi Arabia and Egypt",
          
            }; 
            let data6 = {
              photo: 'IMG_20200225_1502570-panorama.jpg',
              title: 'Egypt',
              description: "Stay calm, do NOT invite tourists.",
    
            } 
    
        
     /* ez lehet meg kell!
    $('#photo').attr('src', data.photo);
    $('#photo-title').html(data.title);
    $('#photo-description').html(data.description);
    */
    
    let currentPhoto = 0;
    let imagesData = [data, data1, data2, data3, data4, data5, data6]; //tomb amiben az objektumok vannak
    $('#photo').attr('src', imagesData[currentPhoto].photo); //a currentPhotohoz tartozo tombelemnek meghivja a photojat
    $('#photo-title').html(imagesData[currentPhoto].title);
    $('#photo-description').html(imagesData[currentPhoto].description);
    
    let loadPhoto = (photoNumber) => {
        $('#photo').attr('src', imagesData[photoNumber].photo); // ne felejtsd el visszairni photonumberre ()=> me ga 77sorban!
        $('#photo-title').html(imagesData[photoNumber].title);
        $('#photo-description').html(imagesData[photoNumber].description);
      }
    
      loadPhoto(currentPhoto);
      
      
    //thumbnails
    
    imagesData.forEach((item, index) => { // ez teszi bele a képeket a boxokba, de majd at kell alakitani, hogy ez is hozza őket letre a lent levo komment sorral
                    $('footer').append(`<img class="thumbnails-pictures" id=${index} data-index=${index} src="${imagesData[index].photo}" >
                    </div>`); //<div class='thumbnails-title'>${imagesData[index].title}</div> ezt csak akkor tedd a zaro div ele ha azt akarod h a thumbok kiirjak a kepek cimeit
    
                    $('.thumbnails-pictures').click((event) => {
                      let indexClicked = $(event.target).attr('data-index');
                       
                     // let numberIndex = parseInt(indexClicked);
                      loadPhoto(indexClicked);
    
                      console.log("click");
    
                      $('#next').click(() => {
                        if(indexClicked<imagesData.length-1 ){  
                         //akkor kell ha azt akarom h korbe menjen: indexClicked=0;
                             //  hogyha a current photo erteke nagyonn mint a tomb akkor ne menjen tovabb
                            indexClicked++;
                           loadPhoto(indexClicked)
                              console.log("This is the LAST item");
                                }else{
                               console.log("This is the last item");  
                                        }
                        }); 
    
    
                        $('#previous').click(() => {
                          if (indexClicked > 0) {
                            indexClicked--;
                            loadPhoto(indexClicked);
                        }else{
                          console.log("This is the first item!");
                        }
                          // igy akkor kell hasznalni ha azt akarom hogy korbe menjen
                        /*  if(indexClicked===0){
                            indexClicked=imagesData.length;
                           console.log("This is the first item");
                           
                           }else{
                               indexClicked--;
                           loadPhoto(indexClicked);
                          }
                          });
                         */
                        });
    
    
    
                      if(indexClicked == 0){  //a clickelt thumb legyen szines
                        $('#0').css("border", "3px ridge #946e08");
                        $('#1, #2, #3, #4').css('border', borderdefault);
                       
                      } else  if(indexClicked == 1){
                        $('#1').css("border", "3px ridge #946e08");
                        $('#0, #2, #3, #4').css('border', borderdefault);
                       
                      } else  if(indexClicked == 2){
                        $('#2').css("border", "3px ridge #946e08");
                        $('#0, #1, #3, #4').css('border', borderdefault);
                       
                      } else  if(indexClicked == 3){
                        $('#3').css("border", "3px ridge #946e08");
                        $('#0, #1, #2, #4').css('border', borderdefault);
                       
                      } else  if(indexClicked == 4){
                        $('#4').css("border", "3px ridge #946e08");
                        $('#0, #2, #3, #1').css('border', borderdefault);
                       
                      } 
                      }); 
                    
    
                    
                   
                    //  illeszd az id moge: data-index=${index}>${item} (data-index="${index}")
                    /*
                    $('#0').css("background-image", "url(images/1.jpg)");
                    $('#1').css("background-image", "url(images/2.jpg)");
                    $('#2').css("background-image", "url(images/3.jpg)");
                    $('#3').css("background-image", "url(images/4.jpg)"); 
                    $('#4').css("background-image", "url(images/5.jpg)");   */
                    });
    
                   
              
    let borderCss = '#946e08 ridge'; //clicked tumbnail border
    let borderdefault = 'ridge'; //defeault thumbnail bord
    
                    // ez azert van itt, mert kulonben thumbok nelkul nem hasznalhatok a foreachenbeluli nyilak
                          $('#next').click(() => {
                              if(currentPhoto<imagesData.length-1 ){  
                                currentPhoto++;
                                loadPhoto(currentPhoto)
                                console.log("This is the LAST item");
                              }else{
                                console.log("This is the last item");  
                              }
                            }); 
    
                          $('#previous').click(() => {
                            if (currentPhoto > 0) {
                                currentPhoto--;
                                loadPhoto(currentPhoto);
                          }else{
                               console.log("This is the first item!");
                         }
                          
                          });
    
    
    
               /* $('#0').click((event) => {
                  //loadPhoto(0);
                    // $('#photo').attr('src', "images/1.jpg");
                    // $('#photo-title').html(data.title);
                    // $('#photo-description').html(data.description);
                     $('#0').css('border', borderCss);
                     $('#1, #2, #3, #4').css('border', borderdefault);
                     
                   });
                   $('#1').click((event) => { //1. thumbnail-re clicknel betolti a kepet a h1et meg a p-t
                   
                    $('#photo').attr('src', "images/2.jpg");
                    $('#photo-title').html(data2.title);
                    $('#photo-description').html(data2.description);
                    $('#1').css('border', borderCss); //ha clickelve van a thumbnaire akkor kicsereli a bordert
                    $('#0, #2, #3, #4').css('border', borderdefault); //a tobbinek meg beallitja a defaultot
                    
                  });  
                  $('#2').click((event) => {
                    loadPhoto(2);
                    currentPhoto=currentPhoto+2;
                    $('#photo-title').html(data3.title);
                    $('#photo-description').html(data3.description);
                    $('#2').css('border', borderCss); //ha clickelve van a thumbnaire akkor kicsereli a bordert
                    $('#0, #1, #3, #4').css('border', borderdefault); //a tobbinek meg beallitja a defaultot
                  });
                  $('#3').click((event) => {
                    //$('#photo').attr('src', "images/4.jpg");
                    loadPhoto(3);
                    //currentPhoto=currentPhoto+3;
                   // $('#photo-title').html(data4.title);
                    //$('#photo-description').html(data4.description);
                    $('#3').css('border', borderCss);
                    $('#0, #1, #2, #4').css('border', borderdefault);
                  });
                  $('#4').click((event) => {
                    loadPhoto(4);
                    currentPhoto=currentPhoto+4;
                    $('#photo').attr('src', "images/5.jpg");
                    $('#photo-title').html(data5.title);
                   $('#photo-description').html(data5.description);
                   $('#4').css('border', borderCss);
                   $('#0, #1, #2, #3').css('border', borderdefault);
                  });  
                  */ 
      /** 
       *  
    $('#left').click(() => {
           if(currentPhoto===0){
            console.log("This is the first item");
            }else{
                currentPhoto--;
            loadPhoto(currentPhoto);
           }
      });
       * 
       * 
       * 
       * 
       * background-image: radial-gradient(circle at 97% 32%, rgba(131, 131, 131,0.05) 0%, rgba(131, 131, 131,0.05) 50%,rgba(20, 20, 20,0.05) 50%, rgba(20, 20, 20,0.05) 100%),radial-gradient(circle at 61% 40%, rgba(35, 35, 35,0.05) 0%, rgba(35, 35, 35,0.05) 50%,rgba(239, 239, 239,0.05) 50%, rgba(239, 239, 239,0.05) 100%),radial-gradient(circle at 47% 73%, rgba(122, 122, 122,0.05) 0%, rgba(122, 122, 122,0.05) 50%,rgba(5, 5, 5,0.05) 50%, rgba(5, 5, 5,0.05) 100%),linear-gradient(90deg, rgb(0, 209, 117),rgb(205, 241, 44));
    https://www.gradientmagic.com/
    https://www.svgbackgrounds.com/
    https://cssgradient.io/
    :slight_smile:
    */