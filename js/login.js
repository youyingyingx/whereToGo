window.onload=function(){
    var caption=document.getElementById

('caption');
    var aLi=caption.getElementsByTagName('li');
    var oDiv = document.getElementsByClassName

('form1');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function(){
            for (var i = 0; i < aLi.length; i++) 

{
                aLi[i].className = '';
                oDiv[i].style.display = 'none';
            }
                 this.className = 'login';
                 oDiv[this.index].style.display 

= 'block';
        }
    }
}