window.addEventListener('load', function () {
    var the_top = document.querySelector('.the_top')
    var x = document.querySelector('.the_top').querySelector('i')
    x.addEventListener('click', function () {
        the_top.style.display = 'none'
    })

    //鼠標經過盒子出現
    var show = document.querySelector('.show')
    var nav_li_1 = document.querySelector('.nav_li')
    var nav_ul = document.querySelector('.nav').querySelector('ul')
    var lis = nav_ul.children
    var show = document.querySelectorAll('.show')
    //循環綁定事件
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            for (var i = 0; i < show.length; i++) {
                show[i].style.display = 'none'
            }
            this.children[1].style.display = 'block'
        }
    }
    for (var i = 0; i < show.length; i++) {
        show[i].addEventListener('mouseleave', function () {
            this.style.display = 'none'
        })
    }
    //鼠標經過   左側盒子彈出
    var pack = document.querySelectorAll('.pack')
    console.log(pack.length);
    var product_li = document.querySelectorAll('.product_li')
    console.log(product_li.length);
    //循環綁定鼠標經過事件
    for (i = 0; i < product_li.length; i++) {
        product_li[i].addEventListener('mouseenter', function () {
            for (var i = 0; i < pack.length; i++) {
                pack[i].style.display = 'none'
            }
            this.children[1].style.display = 'block'
        })
    }
    //當鼠標移走後，中間內容消失
    for (var i = 0; i < pack.length; i++) {
        pack[i].addEventListener('mouseleave', function () {
            this.style.display = 'none'
        })
    }
    //發現一個bug，當鼠標從手機往右上(Xiaomi手機)移動時，手機的彈出圖
    //會存在，要讓他隱藏
    lis[0].addEventListener('mouseenter', function () {
        pack[0].style.display = 'none'
    })
    //另一個bug修正後可使動作更流暢
    var logo1 = document.querySelector('#logo1')
    var logo2 = document.querySelector('#logo2')
    logo1.addEventListener('mouseenter', function () {
        for (var i = 0; i < lis.length; i++) {
            pack[i].style.display = ''
            show[i].style.display = ''
        }
    })
    logo2.addEventListener('mouseenter', function () {
        for (var i = 0; i < lis.length; i++) {
            pack[i].style.display = ''
            show[i].style.display = ''
        }
    })

    //輪播圖按鈕綁定
    var next = document.querySelector('.next')
    var prev = document.querySelector('.prev')
    var content_img = document.querySelector('#pic')
    var imgarr = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/background4.jpg', 'images/background5.jpg', 'images/background6.jpg', 'images/background7.jpg', 'images/background8.jpg', 'images/background9.jpg', 'images/background10.jpg']
    console.log(imgarr.length);  //10張圖片全部綁定
    var index = 0;
    //底部小蘋果綁定
    var dot_lis = document.querySelector('.dot').querySelectorAll('li')
    console.log(dot_lis.length);  //十個點
    var dot = document.querySelector('.dot')
    var timer = ''
    function stopTimer() {
        if (timer) {
            clearInterval(timer)
        }
    }

    function startTimer() {
        timer = setInterval(function () {
            index++;
            if (index == 10) {
                index = 0
            }
            console.log(index);
            content_img.src = imgarr[index]
            for (var i = 0; i < dot_lis.length; i++) {
                dot_lis[i].className = ''
            }
            dot_lis[index].className = 'red_point'
        }, 3000)
    }

    content_img.addEventListener('mouseenter' , function(){
        stopTimer()
    })
    content_img.addEventListener('mouseleave' , function(){
        startTimer()
    })
    startTimer()
    next.addEventListener('click', function () {
        index++;
        if (index === 10) {
            index = 0
        }
        content_img.src = imgarr[index]
        for (var i = 0; i < dot_lis.length; i++) {
            dot_lis[i].className = ''
        }
        dot_lis[index].className = 'red_point'
    })
    prev.addEventListener('click', function () {
        index--;
        if (index === -1) {
            index = 9
        }
        content_img.src = imgarr[index]
        for (var i = 0; i < dot_lis.length; i++) {
            dot_lis[i].className = ''
        }
        dot_lis[index].className = 'red_point'
    })

    //綁定小蘋果觸發事件
    for (var i = 0; i < dot_lis.length; i++) {
        dot_lis[i].addEventListener('click', function () {
            var x = this.getAttribute('index')
            console.log(x);
            for (var i = 0; i < dot_lis.length; i++) {
                dot_lis[i].className = ''
            }
            dot_lis[x].className = 'red_point'
            content_img.src = imgarr[x]
        })
    }
    
    
})



