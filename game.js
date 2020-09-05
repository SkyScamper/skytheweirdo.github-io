(function(){

let Click_Btn_img = document.querySelector("#Click_Btn");
let Click_Counter_span = document.querySelector("#MoneySpan");
let Clicker_Item = document.querySelectorAll(".Clicker_Item");
let ClicksPerSec = document.querySelector("#ClicksPerSec");
let audio1 = document.querySelector("#Audio1");
let audio2 = document.querySelector("#Audio2");
let audio3 = document.querySelector("#Audio3");
let Money = 0;
let Self_Click = 1;
var MperS_Click = 0;

Click_Btn_img.addEventListener("click", function(e){
	e.preventDefault();
	Money = Money + Self_Click;
	Click_Counter_span.innerHTML = Money;

});

Clicker_Item.forEach(function(Item){
	Item.addEventListener("click", function(e){
		e.preventDefault();
		var ItemId = e.currentTarget.id;
		if(ItemId == "100" && Money >= 100){
			Money = Money - 100;
			Click_Counter_span.innerHTML = Money;
			MperS_Click++;
		}else if(ItemId == "1000" && Money >= 1000){
			Money = Money - 1000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 5;
		}else if(ItemId == "10000" && Money >= 10000){
			Money = Money - 10000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 10;
		}else if(ItemId == "100000" && Money >= 100000){
			Money = Money - 100000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 50;
		}else if(ItemId == "1000000" && Money >= 1000000){
			Money = Money - 1000000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 100;
		}else if(ItemId == "10000000" && Money >= 10000000){
			Money = Money - 10000000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 500;
		}else if(ItemId == "100000000" && Money >= 100000000){
			Money = Money - 100000000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 1000;
		}else if(ItemId == "1000000000" && Money >= 1000000000){
			Money = Money - 1000000000;
			Click_Counter_span.innerHTML = Money;
			MperS_Click = MperS_Click + 5000;
		} else {
			console.warn("Not enough funds to purchase");
		}
	});
	
});

function Music(){
	audio1.volume = 0.2;
	audio1.play();
	document.body.removeEventListener("click", Music);
}

document.body.addEventListener("click", Music);
window.setInterval(function(e){
	if(MperS_Click >= 1){
		Money = Money + MperS_Click;
		ClicksPerSec.innerHTML = MperS_Click + " "+"per second";
		Click_Counter_span.innerHTML = Money;
	}

	if(audio1.ended){
		audio2.volume = 0.2;
		audio2.play();
	} else if(audio2.ended){
		audio3.volume = 0.2;
		audio3.play();
	} else if(audio3.ended){
		audio1.volume = 0.2;
		audio1.play();
	}
	let LockedShops = document.querySelectorAll(".LockedShops");
	let Shops = LockedShops[0].id;
	if(Shops == "1" && Money >= 10000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "2" && Money >= 100000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "3" && Money >= 1000000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "4" && Money >= 10000000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "5" && Money >= 100000000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "6" && Money >= 1000000000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} 

}, 1000);

}());
