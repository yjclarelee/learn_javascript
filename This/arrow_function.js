const call = {
	caller: "mom",
	says: () => {
		console.log(`Hey, ${this.caller} just called.`);
	},
};

call.says();


function IceCream() {
	this.scoops = 0;
}

IceCream.prototype.addScoop = function () {
	setTimeout(() => {
		this.scoops++;
		console.log("scoop added!");
	}, 500);
};

const dessert = new IceCream();
dessert.addScoop();
setTimeout(() => console.log(dessert.scoops), 1000);
