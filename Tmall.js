	let nav_in = document.getElementsByClassName("nav_in"); //获取弹出分类菜单
	let nav_div = document.getElementById("normal_nav"); //获取导航层
	let lis = nav_div.querySelectorAll("li"); //获取nav_div所有的li
	

for (let i = 0; i < lis.length; i++) { // 控制每一个li
	
    lis[i].onmouseover = function() {
			let as = lis[i].querySelectorAll("a");//获取li所有的a
           nav_in[0].classList.remove("hide");
           nav_in[0].classList.add("show");    
		   //分类导航变色
		   this.style.backgroundColor="#FFF";
		   //分类导航的字变色
		   this.style.color="#000";
		   for(let j=0;j< as.length;j++){
				as[j].style.color="#000";
		   }
    }
    lis[i].onmouseout = function() {
			let as = lis[i].querySelectorAll("a");//获取li所有的a
            nav_in[0].classList.remove("show");
            nav_in[0].classList.add("hide");
			//分类导航变色
		   this.style.backgroundColor="";
		   //分类导航的字变色
		   this.style.color="#FFF";
		   for(let j=0;j< as.length;j++){
				as[j].style.color="#FFF";
		   }
    }
}