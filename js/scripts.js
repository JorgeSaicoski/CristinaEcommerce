/*!
* Start Bootstrap - Shop Homepage v5.0.3 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

class Product{
	constructor(name, price, personEat){
		this.name = name
		this.price = parseFloat(price)
		this.personEat = parseFloat(personEat)
		this.cartAmount = 0
	}
	add(){
		console.log(this.name)
		console.log(this.cartAmount)

		if (this.cartAmount > 0){
			document.getElementById(this.name).remove()

		}
		this.cartAmount ++
		
		let tr = document.createElement("tr")
		tr.id = this.name
		tr.innerHTML=`
			<td>${this.name}
			</td>
			<td>${this.price}
			</td>
			<td>${this.cartAmount}
			</td>
			
		`
		document.getElementById("tableCart").appendChild(tr)		
		console.log(this.cartAmount)

		itensAmount = 0
		total = 0
		canEat = 0

		for (let i of productList){

			if (i.cartAmount > 0){
				itensAmount ++
				total = total + (i.price * i.cartAmount)
				canEat = canEat + (i.personEat * i.cartAmount)

			}
		}
		document.getElementById("itensAmount").innerHTML= `${itensAmount}`
		document.getElementById("total").innerHTML = `
		<th>Total:</th>
        <th>${total} UYU</th>
        <th>${canEat} people can eat it</th>

		`


	}
	remove(){
		document.getElementById(this.name).remove()

		if(this.cartAmount > 0){
			this.cartAmount = this.cartAmount - 1
			let tr = document.createElement("tr")
			tr.id = this.name
			tr.innerHTML=`
				<td>${this.name}
				</td>
				<td>${this.price}
				</td>
				<td>${this.cartAmount}
				</td>
				
			`
			document.getElementById("tableCart").appendChild(tr)
			itensAmount = 0

			for (let i of productList){

				if (i.cartAmount > 0){
					itensAmount ++
				}
			}
			document.getElementById("itensAmount").innerHTML= `${itensAmount}`
			}		
		itensAmount = 0
		total = 0
		canEat = 0

		for (let i of productList){

			if (i.cartAmount > 0){
				itensAmount ++
				total = total + (i.price * i.cartAmount)
				canEat = canEat + (i.personEat * i.cartAmount)

			}
		}
		document.getElementById("itensAmount").innerHTML= `${itensAmount}`
		document.getElementById("total").innerHTML = `
		<th>Total:</th>
        <th>${total} UYU</th>
        <th>${canEat} people can eat it</th>

		`

	}
}

let product1 = new Product("product1", 18, 0.5)
let product2 = new Product("product2", 25, 0.25)
let product3 = new Product("product3", 40, 2)
let product4 = new Product("product4", 25, 0.50)
let product5 = new Product("product5", 18, 0.25)
let product6 = new Product("product6", 40, 3)
let productList = [product1, product2, product3, product4, product5, product6]
let itensAmount = 0
let total = 0
let canEat = 0

for (let i of productList){
	//Buttons functions
	document.getElementById(`add${i.name}`).onclick = function(){i.add()}
	document.getElementById(`cartAdd${i.name}`).onclick = function(){i.add()}
	document.getElementById(`cartRemove${i.name}`).onclick = function(){i.remove()}
}

document.getElementById(`openCart`).onclick = function(){openCart()}
document.getElementById(`return`).onclick = function(){changeWindow()}

function openCart(){
	document.getElementById("close").id="open"
	document.getElementById("open").id="close"
}

function changeWindow(){
	document.getElementById("open").id="close"
	document.getElementById("close").id="open"
}
