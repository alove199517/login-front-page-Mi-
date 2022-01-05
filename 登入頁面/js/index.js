window.addEventListener('load' , function(){
    // js start
//1.游標放在帳號的地方，頂部會多一行小字(橘色)
var username = document.querySelector('#username')
var password = document.querySelector('#password')
var i_user =  document.querySelector('#i_user')
var p_user = document.querySelector('#p_user')
var i_pwd = document.querySelector('#i_pwd')
var p_pwd = document.querySelector('#p_pwd')
var eye = document.querySelector('.user').querySelector('label')
var flag = 0 //預設眼睛狀態，0是密碼，1是明文
username.addEventListener('focus' , function(){
    this.placeholder = ''
    i_user.style.display = 'block'
})
username.addEventListener('blur' , function(){
    this.placeholder = 'E-mail/手機號碼/小米ID'
    if(this.value == ''){
        this.style.color = '#ff5c00'
        i_user.style.display = 'none'
        i_user.style.color = '#ff5c00'
        p_user.style.display = 'block'
    }
})
password.addEventListener('focus' , function(){
    this.placeholder = ''
    i_pwd.style.display = 'block'
})
password.addEventListener('blur' , function(){
    this.placeholder = '密碼'
    if(this.value == ''){
        this.style.color = '#ff5c00'
        i_pwd.style.display = 'none'
        i_pwd.style.color = '#ff5c00'
        p_pwd.style.display = 'block'
    }
})
//2.一旦開始打字，上面的小字會變回灰色
username.addEventListener('change' , function(){
    i_user.style.color = 'white'
})
password.addEventListener('change' , function(){
    i_pwd.style.color = 'white'
})
//3.帳號密碼放鼠標後，顏色就變橘色且不會變回來
//完成同上

//4.小眼睛按下去後，密碼會變明文
eye.addEventListener('click' , function(){
    if(flag == 0){
        password.type = 'text'
        this.innerHTML = '👁️'
        flag = 1
    }else{
        password.type = 'password'
        this.innerHTML = '😝'
        flag = 0
    }
})
    
    //js end
})