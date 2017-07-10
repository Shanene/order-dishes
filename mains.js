var count = 0;
var number=0;//点餐数量15616566
var usename="",person="",rice="", name="",alldishname="",Index="";
var printmoney="";
$(function(){
	$(".order-top").hide();
	$(".shoppingcart").hover(function(){
		$(".order-top").show(200);

	})
	adddish();
	deletedish();
	shoppingcart();
});
function adddish(){
	$(".add").click(function(){
		//菜名
		$(".order-top").show();
		name = $(this).parent().parent().children("td:first").text();
		//单价 
		var price = $(this).parent().parent().children("td:first").next().text();
		var Li="<li><div class='dish-name'>"+name+"</div> <div class='dish-price'>"+price+"</div><div class='dish-delete'><input type='button' value='删除'></li>";
		$(".ul1").append(Li);
		pastmoney();
		nowmoney();		
	});	

}
function deletedish(){
	 $(".dish-delete input").live("click",function(){
	 	     Index=$(".ul1 li").index();
	 	     alldishname="";
            	var deletemoney=$(this).parent().prev().text(); 
            	 var deletestr=deletemoney.split('￥');
				 count-=parseInt(deletestr[1]);
				$("#pastmoney").text(count);
				number--;
				$("#dish-number").text(number);
				$(this).parent().parent().remove();
				nowmoney();
				for (var i = 0; i < Index; i++) {
					$(".ul1").each(function(index,obj){
				 	if(index>=0){
				    alldishname+=$(obj).children("li").eq(i).children("div:first").text()+",";
					}
					
				 });
				}
				
		  });
}
function pastmoney(){
	$(".ul1").each(function(index,obj){
		if(index>=0){
		var Pastmoney=$(obj).children("li:last").children("div:first").next().text();
		alldishname+=$(obj).children("li:last").children("div:first").text()+",";
		number++;
		var str=Pastmoney.split('￥');
		count+=parseInt(str[1]);
		$("#pastmoney").text(count);
		$("#dish-number").text(number);
		}
		
	});	

}
function nowmoney(){
     var nowmoney=parseFloat(count*0.9).toFixed(2);//小数点后四舍五入的功能
      printmoney=nowmoney;
	$("#nowmoney").text("￥"+nowmoney);

}
function shoppingcart(){
$(".shoppingcart span").live("click",function(){	
	usename=$(".username input").val();
	person=$(".person input").val();
	rice=$(".rice input").val();
	$(".print").text(usename+"组:"+alldishname+"人数:"+person+"(加"+rice+"盒米饭),折后金额"+printmoney+"元");
		
	});
 

 }




