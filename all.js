let check = document.querySelector("#check");
function submit(){
    let name = document.querySelector("#name");
    let phone = document.querySelector("#phone");
    let num = document.querySelector("#num");
    let mail = document.querySelector("#mail");
    let ask = document.querySelector("#askk");
    let form = document.querySelector("#form");
    let input = form.querySelectorAll("input,textarea");
    console.log(input);
    if(name.value === ""){
        alert("請確認填寫完成")
    }else if(phone.value === ""){
        alert("請確認填寫完成")
    }else if(num.value === ""){
        alert("請確認填寫完成")
    }else if(mail.value === ""){
        alert("請確認填寫完成")
    }else if(ask.value === ""){
        alert("請確認填寫完成")
    }else if(mail.value.indexOf("@") == -1 || mail.value.indexOf(".com") == -1){
        alert("E-mail格式錯誤")
    }else{
        alert("已送出")
    }
    input.forEach(v => {
        v.value="";
    })
}

check.addEventListener("click",submit);