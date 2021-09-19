/*!
* Start Bootstrap - Shop Homepage v5.0.3 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

class Product{
	constructor(name, price, personEat, id){
		this.name = name
		this.price = parseFloat(price)
		this.personEat = parseFloat(personEat)
		this.cartAmount = 0
		this.id = id
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

let product1 = new Product("Sourdough Bread", 300, 2, "1")
let product2 = new Product("Veggie Hamburguer", 350, 1, "2")
let product3 = new Product("Browine", 170, 0.5, "3")
let product4 = new Product("Cheease Cake", 200, 1, "4")
let product5 = new Product("Lemon Pie", 500, 8, "5")
let product6 = new Product("Tart", 500, 3, "6")
let productList = [product1, product2, product3, product4, product5, product6]
let itensAmount = 0
let total = 0
let canEat = 0

for (let i of productList){
	//Buttons functions
	document.getElementById(`cartAdd${i.id}`).onclick = function(){i.add()}
	document.getElementById(`cartRemove${i.id}`).onclick = function(){i.remove()}
}



document.getElementById(`addproduct1`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">Natural fermentation using naturally occurring lactobacilli and yeast.</textAlert>',
	  width: 500,
	  padding: '3em',
	  background: '#fff url("./images/bread.jpg")',
	 showCancelButton: true,
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product1.cartAmount == 0){
			product1.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  	}
  })
}
document.getElementById(`addproduct2`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">A veggie hamburguer.</p>',
	  width: 500,
	  padding: '3em',
	  background: '#fff url("./images/hamburguer.jpg")',
	  showCancelButton: true,
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product2.cartAmount == 0){
			product2.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  }
})
	
	

}
	document.getElementById(`addproduct3`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">Brownie with chocolate</p>',
	  width: 500,
	  padding: '3em',
	  showCancelButton: true,
	  background: '#fff url("./images/brownie.jpg")',
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product3.cartAmount == 0){
			product3.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  }
})
}
document.getElementById(`addproduct4`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">Cheese Cake</p>',
	  width: 500,
	  padding: '3em',
	  background: '#fff url("./images/cheeaseCake.jpg")',
	  showCancelButton: true,
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product4.cartAmount == 0){
			product4.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  }
})
}
document.getElementById(`addproduct5`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">Custom width, padding, background.</p>',
	  width: 500,
	  padding: '3em',
	  background: '#fff url("./images/lemonPie.jpg")', 
	  showCancelButton: true,
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product5.cartAmount == 0){
			product5.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  }
})

	 }
document.getElementById(`addproduct6`).onclick = function(){
	Swal.fire({
	  title: '<p class="textAlert">Custom width, padding, background.</p>',
	  width: 500,
	  padding: '3em',
	  background: '#fff url("./images/tart.jpg")',
	  showCancelButton: true,
	  confirmButtonText:
   		 'Go to cart',
	  backdrop: `
	    rgba(0,0,123,0.4)
	  `
	}
	).then((result) => {
  if (result.isConfirmed) {
    if(product6.cartAmount == 0){
			product6.add()
		}
		$('#open').fadeOut(2000)
   		$('#close').fadeIn(4000)

  }
})
	  }

/*
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
*/


$(document).ready(()=>{
	$('#close').fadeOut(2000)
})

$('#return').click(()=>{
    $('#open').fadeIn(2000)
    $('#close').fadeOut(2000)

})
$('#openCart').click(()=>{
    $('#open').fadeOut(2000)
    $('#close').fadeIn(4000)

})




$.get(`https://catfact.ninja/fact?max_length=140`, (res) => {

    	
    $('#catFact').html(`
    <p>${res.fact}</p>
    `)
    console.log(res.fact)
    })



$('.pay').click(()=>{
    console.log("teste")
    buy()

})





const buy = async () => {
	console.log("teste2")

    const mapML = productList.map( (prod) => {
        return {
            title: prod.name,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.cartAmount,
            currency_id: "ARS",
            unit_price: prod.price
        }
    })

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer TEST-1638372299311024-091520-bf4a0931c571a606308cc7d579e77b3a-487577562'
                    },
                    body: JSON.stringify({
                        items: mapML,
                        back_urls: {
                            success: 'https://jorgesaicoski.github.io/CristinaEcommerce/#',
                            failure: 'https://jorgesaicoski.github.io/CristinaEcommerce/#'
                        }
                    })
                })
    
    const data = await resp.json()

    window.location.replace(data.init_point)

}

