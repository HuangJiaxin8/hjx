const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//展示错误的信息
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//展示成功的信息
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//检查邮箱是否合格
function checkEmail(input) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
        console.log(1)
    }else{
        showError(input,"邮箱格式错误");
        console.log(2)
    }
}

//得到palceholder第三个后面的字
function getKeyWords(input){
    return input.placeholder.slice(3);
};

//检查数组内的所有节点是否都已填
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ""){
            showError(input,`${getKeyWords(input)}为必填项`);
        }else{
            showSuccess(input);
        }
    })
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getKeyWords(input)}至少需要${min}个字符`);
    }else if(input.value.length >max){
        showError(input,`${getKeyWords(input)}应少于${max}个字符`);
    }else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
      showError(input2,"密码不一致");
    }
  }

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    checkLength(username, 3, 15);
    checkLength(password, 6, 12);
})





