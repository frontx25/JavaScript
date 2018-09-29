let money = prompt(" Ваш бюджет ? ");
let name = prompt( "Название вашего магазина ? " );



let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	open: false
}

mainList.shopGoods[0] = prompt ('"Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt ('"Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt ('"Какой тип товаров будем продавать?');


alert ( " Ваш бюджет на 1 день = " + mainList.budget / 30  )

console.log(mainList)
