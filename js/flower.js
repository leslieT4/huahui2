class Flower{
    constructor(type,content){
        this.type=type;
        this.container=document.createElement('div');
        this.content=content;
        this.pageNum=content.length % 8 == 0 ? content.length / 8 : Math.floor(content.length/8)+1;
        this.currentPage=1;
    }
    initFlower(page){
        if (document.getElementById('flowerContainer')){
            this.container.removeChild(document.getElementById('flowerContainer'));
        }
        var flowerContainer=document.createElement('div');
        flowerContainer.id="flowerContainer";
        this.currentPage=page;
        var forNum=page<this.pageNum?8:this.content.length-(page-1)*8;
        for (var i=0;i<forNum;i++){
            var div=document.createElement('div');
            div.className="flowerItem";
            var img=document.createElement('img');
            img.src=this.content[(this.currentPage-1)*8+i].url;
            div.appendChild(img);
            var p=document.createElement('p');
            var text=document.createTextNode(this.content[(this.currentPage-1)*8+i].detailed);
            p.appendChild(text);
            div.appendChild(p);
            flowerContainer.appendChild(div);
        }
        var first=this.container.firstChild;
        this.container.insertBefore(flowerContainer,first);
        typeShow.appendChild(this.container);
    }
    createFlowerPageIcon(){
        var pageContainer=document.createElement('div');
        pageContainer.id="pageContainer";
        this.addContentPageIcon(pageContainer,"上一页");
        for (let i=1;i<=this.pageNum;i++){
            this.addContentPageIcon(pageContainer,i);
        }
        this.addContentPageIcon(pageContainer,"下一页");
        this.container.appendChild(pageContainer);

    }
    addContentPageIcon(pageContainer,str){
        var span=document.createElement('span');
        span.className="page";
        span.id=typeof str=='number'?
            "page"+str:str=="上一页"?"upPage": 'nextPage';
            var text = document.createTextNode(str); // 创建纯文本节点
        span.appendChild(text);
        if (str == 1) {
            span.style.backgroundColor = "#0a290a";
        }
        pageContainer.appendChild(span);
        var self = this;
        span.onclick = function () {
            if (typeof str == 'number') {
                self.changeBaColor("page");
                this.style.backgroundColor = "#0a290a";
            }
            self.changePage(str); // 切换展示指定类别
        }
    }
    changeBaColor(className) {
        var changeList = document.getElementsByClassName(className);
        for (var i = 0; i < changeList.length; i++) {
            changeList[i].style.backgroundColor = className == "typeTitle" ?
                "white" : "#196619";
        }
    }

    changePage(toPage) {
        typeof toPage == 'number' ? this.changePageBody(toPage) : toPage == "上一页" ? this.currentPage - 1 >= 1 ? document.getElementById("page" + (this.currentPage - 1)).click() : alert("亲，已经是第一页了！") : this.currentPage + 1 <= this.pageNum ? document.getElementById("page" + (this.currentPage + 1)).click() : alert("亲，已经是最后一页了！");
    }

    changePageBody(toPage) {
        this.initFlower(toPage);
        this.currentPage = toPage;
    }
}