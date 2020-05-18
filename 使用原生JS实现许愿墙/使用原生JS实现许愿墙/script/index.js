var container = document.querySelector(".container");
var w = 170;
var h = 170;
var zIndex = 1;

var width = window.innerWidth;
var height = window.innerHeight;

var maxX = width - w;
var maxY = height - h - 100;
var zIndex = 1;

var points = [
    { x: 50, y: 100 },
    { x: 300, y: 200 }
];
/**
 * 生成一个许愿贴
 * @param {*} words 文字
 */
function createWish(words) {
    var div = document.createElement("div");
    div.className = "item";

    //文字
    div.innerHTML = words;

    //关闭按钮
    var closeBtn = document.createElement("div");
    closeBtn.className = "close";
    div.appendChild(closeBtn);

    //尺寸
    div.style.width = w + "px";
    div.style.height = h + "px";

    //确定位置(随机)
    div.style.left = `${getRandom(0, maxX)}px`;
    div.style.top = `${getRandom(0, maxY)}px`;

    div.onclick = function(){
        div.style.zIndex = zIndex++;
    }

    //颜色随机
    div.style.background = `rgb(${getRandom(150, 256)},${getRandom(150, 256)},${getRandom(150, 256)})`;

    //点击事件
    div.onclick = function(){
        div.style.zIndex = zIndex++;
    }

    //关闭事件
    closeBtn.onclick = function(){
        container.removeChild(div);
    }

    container.appendChild(div);
}



/**
 * 获取一个随机值
 * @param {*} min 
 * @param {*} max 
 */
function getRandom(min, max) {
    var dec = max - min;
    return Math.floor(Math.random() * dec + min);
}


/**
 * 注册并处理文本框键盘按下事件
 */
function regEnter() {
    var txt = document.querySelector(".txt");
    txt.onkeydown = function (e) {
        if (e.keyCode !== 13) {
            return;
        }
        if (txt.value) {
            createWish(txt.value);
            txt.value = "";
        }
    }
}


/**
 * 随机生成一些愿望
 */
function createRandomWishes(){
    var words = [
        "世界和平",
        "IG不要浪",
        "睡觉睡到自然醒，数钱数到手抽筋",
        "与faker五五开",
        "8倍镜不抖"
    ];
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        createWish(w);
    }
}



createRandomWishes();
regEnter();