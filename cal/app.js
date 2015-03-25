
$(function(){

	var text=' ';
	var curN=0;
	var preN=0;
	var ansN=0;
	var operator=1;

		$('#btn1').on('click',function(){
		text=text+'1';
		render();
		curN=curN*10+1;
		
		})
	$('#btn2').on('click',function(){
	text=text+'2';
	render();
	curN=curN*10+2;
	})
		$('#btn3').on('click',function(){
		text=text+'3';
		render();
		curN=curN*10+3;
		})
$('#btn4').on('click',function(){
	text=text+'4';
	render();
	curN=curN*10+4;
	})

	$('#btn5').on('click',function(){
	text=text+'5';
	//alert(text);
	render();
	curN=curN*10+5;
	})

$('#btn6').on('click',function(){
	text=text+'6';
	render();
	curN=curN*10+6;
	})
$('#btn7').on('click',function(){
	text=text+'7';
	render();
	curN=curN*10+7;
	})
$('#btn8').on('click',function(){
	text=text+'8';
	render();
	curN=curN*10+8;
	//alert(curN);
	})
$('#btn9').on('click',function(){
	text=text+'9';
	render();
	curN=curN*10+9;
	})
$('#btn0').on('click',function(){
	text=text+'0';
	render();
	curN=curN*10;
	})

//operator

$('#btnplus').on('click',function(){
	operate();
	
	operator=1;
	})
$('#btnmin').on('click',function(){
	operate();
	
	operator=2;
	})
$('#btnmul').on('click',function(){
	operate();
	
	operator=3;
	})
$('#btndiv').on('click',function(){
	operate();
	
	operator=4;
})
$('#btnequal').on('click',function(){
	
	equal();
	text=ansN;
	render();
	})
$('#btnC').on('click',function(){
		text ='';
		render();
		preN =0;
	
		curN=0;
		ansN=0;
		operator=' ';

	})

function render(){
		$('#message').text(text);
	}



function operate(){
preN=curN;
//alert(preN);
curN=0;
text=' ';

render();
}

function equal(){

if (operator==1){
	ansN= parseInt(preN,10)+parseInt(curN,10);
	//alert(preN);
};
if (operator==2){
	ansN= parseInt(preN,10)-parseInt(curN,10);
};
if (operator==3){
	ansN= parseInt(preN,10)*parseInt(curN,10);
};
if (operator==4){
	ansN= parseInt(preN,10) / parseInt(curN,10);
};
}


})