/*下拉栏*/
var clickBtn=document.getElementsByClassName("nav_headerin")[0];
var dropdown_menu=document.getElementsByClassName("dropdown_menu")[0];
var isOpen=false;
clickBtn.addEventListener("click",function(){
    isOpen=!isOpen;
    if (isOpen){
        dropdown_menu.style.display="block";
    }
    else{
        dropdown_menu.style.display="none";
    }
})
var flowerDatas = [
    {
        type: '探病鲜花',
        content: [{
                url: 'images/01.jpg',
                detailed: '第一个盆栽'
            },
            {
                url: 'images/08.jpg',
                detailed: '第八个盆栽'
            },
            {
                url: 'images/05.jpg',
                detailed: '第二十个盆栽'
            },
        ]
    },
    {
        type: '开业鲜花',
        content: [{
            url: 'images/07.jpg',
            detailed: '第四个盆栽'
        }, ]
    },
    {
        type: '生日鲜花',
        content: [{
                url: 'images/05.jpg',
                detailed: '第五个盆栽'
            },
            {
                url: 'images/02.jpg',
                detailed: '第十一个盆栽',
            },
            {
                url: 'images/08.jpg',
                detailed: '第十七个盆栽'
            },
        ]
    },
    {
        type: '祝福鲜花',
        content: [{
                url: 'images/06.jpg',
                detailed: '第六个盆栽'
            },
            {
                url: 'images/03.jpg',
                detailed: '第十二个盆栽'
            },
            {
                url: 'images/09.jpg',
                detailed: '第十八个盆栽'
            },
            {
                url: 'images/06.jpg',
                detailed: '第二十四个盆栽'
            },
        ]
    },
    {
        type: '道歉鲜花',
        content: [{
                url: 'images/07.jpg',
                detailed: '第七个盆栽'
            },
            {
                url: 'images/04.jpg',
                detailed: '第十三个盆栽'
            },
            {
                url: 'images/01.jpg',
                detailed: '第十九个盆栽'
            },
        ]
    },
    {
        type: '毕业鲜花',
        content: [{
                url: 'images/09.jpg',
                detailed: '第九个盆栽'
            },
            {
                url: 'images/04.jpg',
                detailed: '第十五个盆栽'
            },
            {
                url: 'images/03.jpg',
                detailed: '第二十一个盆栽'
            },
        ]
    },
    {
        type: '爱情鲜花',
        content: [{
                url: 'images/01.jpg',
                detailed: '第十个盆栽',
            },
            {
                url: 'images/07.jpg',
                detailed: '第十六个盆栽'
            },
        ]
    }
]
var fullFlowerDatas=[];
var currentType=document.getElementById("currentType");
currentType.innerHTML="全部";
var type=document.getElementById('type');
var typeShow=document.getElementById('typeShow');
relFlowerDatas(); // 将获取到的花卉数据修整为方便于我们后续操作的样子
showType(); // 遍历展示所有的类别标题
changeType(0) // 默认展示第一个类别（全部）
function relFlowerDatas() {
    fullFlowerDatas[0] = {};
    fullFlowerDatas[0].type = '全部';
    fullFlowerDatas[0].content = [];
    for (var i = 0; i < flowerDatas.length; i++) {
        for (var j = 0; j < flowerDatas[i].content.length; j++) {
            fullFlowerDatas[0].content.push(flowerDatas[i].content[j]);
        }
        fullFlowerDatas.push(flowerDatas[i]);
    }
}
//下面展示标题（全部）
function showType(){
    for (var i=0;i<fullFlowerDatas.length;i++){
        var span=document.createElement('span');
        span.className="typeTitle";
        var text=document.createTextNode(fullFlowerDatas[i].type);
        span.appendChild(text);
        type.appendChild(span);
        if (i==0){
           span.style.backgroundColor='#5cd65c';
        }
        (function (i){
            span.onclick=function(){
                currentType.innerHTML=fullFlowerDatas[i].type;
                changeBaColor('typeTitle');
                this.style.backgroundColor = "#5cd65c";
                changeType(i);
            }
        })(i);

    }
}
function changeBaColor(className){
    var changeList = document.getElementsByClassName(className);
    for (var i=0;i<changeList.length;i++){
        changeList[i].style.backgroundColor = className == "typeTitle" ?
            "white" : '#196619';
    }
};

//切换类型
function changeType(typeIndex){
    if (typeShow.getElementsByTagName('div')[0]){
        typeShow.removeChild(typeShow.getElementsByTagName('div')[0]);
    }
    var flow=new Flower(fullFlowerDatas[typeIndex].type,fullFlowerDatas[typeIndex].content);
    flow.initFlower(1);
    flow.createFlowerPageIcon();
}
