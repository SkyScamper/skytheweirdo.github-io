(function(){

let Click_Btn_img = document.querySelector("#Click_Btn");
let Click_Counter_span = document.querySelector("#MoneySpan");
let Clicker_Item = document.querySelectorAll(".Clicker_Item");
let Item_Header = document.querySelectorAll(".Clicker_Item h2");
let ClicksPerSec = document.querySelector("#ClicksPerSec");
let ATDIV = document.querySelectorAll(".AdminToolBtn");
let AdminInput = document.querySelector("#AdminInput");
let AdminBtns = document.querySelectorAll(".AdminBtns");
let Admin = document.querySelector("#Admin");
let audio1 = document.querySelector("#Audio1");
let audio2 = document.querySelector("#Audio2");
let audio3 = document.querySelector("#Audio3");
let Money = 0;
let Self_Click = 1;
var MperS_Click = 0;
let Prices = {
	Price_A: 10,
	Price_B: 100,
	Price_C: 500,
	Price_D:2500,
	Price_E:10000,
	Price_F:50000,
	Price_G:300000,
	Price_H:1000000,
}

Click_Btn_img.addEventListener("click", function(e){
	e.preventDefault();
	Money = Money + Self_Click;
	Click_Counter_span.innerHTML = Money;

});

Clicker_Item.forEach(function(Item){
	Item.addEventListener("click", function(e){
		e.preventDefault();
		var ItemId = e.currentTarget.id;
		if(ItemId == "1" && Money >= Prices.Price_A){
			Money = Money - Prices.Price_A;
			Money = parseInt(Money);
			Prices.Price_A = Prices.Price_A * 1.3;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_A);
			MperS_Click++;
		}else if(ItemId == "2" && Money >= Prices.Price_B){
			Money = Money - Prices.Price_B;
			Money = parseInt(Money);
			Prices.Price_B = Prices.Price_B * 1.4;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_B);
			MperS_Click = MperS_Click + 5;
		}else if(ItemId == "3" && Money >= Prices.Price_C){
			Money = Money - Prices.Price_C;
			Money = parseInt(Money);
			Prices.Price_C = Prices.Price_C * 1.5;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_C);
			MperS_Click = MperS_Click + 10;
		}else if(ItemId == "4" && Money >= Prices.Price_D){
			Money = Money - Prices.Price_D;
			Money = parseInt(Money);
			Prices.Price_D = Prices.Price_D * 1.6;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_D);
			MperS_Click = MperS_Click + 50;
		}else if(ItemId == "5" && Money >= Prices.Price_E){
			Money = Money - Prices.Price_E;
			Money = parseInt(Money);
			Prices.Price_E = Prices.Price_E * 1.7;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_E);
			MperS_Click = MperS_Click + 100;
		}else if(ItemId == "6" && Money >=  Prices.Price_F){
			Money = Money - Prices.Price_F;
			Money = parseInt(Money);
			Prices.Price_F = Prices.Price_F * 1.8;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_F);
			MperS_Click = MperS_Click + 500;
		}else if(ItemId == "7" && Money >= Prices.Price_G){
			Money = Money - Prices.Price_G;
			Money = parseInt(Money);
			Prices.Price_G = Prices.Price_G * 1.9;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_G);
			MperS_Click = MperS_Click + 1000;
		}else if(ItemId == "8" && Money >= Prices.Price_H){
			Money = Money - Prices.Price_H;
			Money = parseInt(Money);
			Prices.Price_H = Prices.Price_H * 2;
			Click_Counter_span.innerHTML = Money;
			var innerText = Item.children[0];
			innerText.innerHTML = parseInt(Prices.Price_H);
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

document.querySelector("#Stop").addEventListener("click", function(e){
	if(audio1.duration > 0 && !audio1.paused){
		e.preventDefault();
		audio1.pause();
	} else if(audio2.duration > 0 && !audio2.paused){
		e.preventDefault();
		audio2.pause();
	} else if(audio3.duration > 0 && !audio3.paused){
		e.preventDefault();
		audio3.pause();
	} else {
		e.preventDefault();
		console.warn("No music is playing");
	}
});

document.querySelector("#Play").addEventListener("click", function(e){
	if(audio1.paused && !audio3.duration > 0){
		e.preventDefault();
		audio1.play();
	} else if(audio2.paused && !audio1.duration > 0){
		e.preventDefault();
		audio2.play();
	} else if(audio3.paused && !audio2.duration > 0){
		e.preventDefault();
		audio3.play();
	} else {
		e.preventDefault();
		console.warn("No music is paused");
	}
});

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
	if(Shops == "1" && Money >= 500 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "2" && Money >= 2500 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "3" && Money >= 10000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "4" && Money >= 50000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "5" && Money >= 300000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	} else if(Shops == "6" && Money >= 1000000 && LockedShops[0].classList.contains("LockedShops")){
		LockedShops[0].style.display = "block";
		LockedShops[0].classList.remove("LockedShops");
	}
}, 1000);

}());
