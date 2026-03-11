const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav-items")
const navbar = document.querySelector(".navbar")
const navHome = document.querySelector(".nav-home")


window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50)

})


hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active")
})

// ============================ quick picks =============
let quickPicks = [
    { id: 1, name: 'Shio ramen', price: 249, image: 'assets/Shio_ramen.png' },
    { id: 2, name: 'Shoyu ramen', price: 249, image: 'assets/Shoyu_ramen.png' },
    { id: 3, name: 'Karaage', price: 149, image: 'assets/Karaage.png' },
    { id: 4, name: 'Sakura milk', price: 119, image: 'assets/Sakura_milk.png' },
]

const quickContainer = document.querySelector(".quick-container")

if (quickContainer) {
    let html = ""

    quickPicks.forEach(item => {
        html += `
        <div class="quick-card" style="background-image: url('${item.image}')">
        <p>${item.name}</p>    
        <p>${item.price}</p>    
        <button>Add</button>
        </div>
        `
    })

    quickContainer.innerHTML = html

    const quickButtons = quickContainer.querySelectorAll("button")

    quickButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            addToCart(quickPicks[index])
        })
    })
}

// ======================= ramens ===================
let ramens = [
    { id: 1, name: 'Shio ramen', price: 249, image: 'assets/Shio_ramen.png' },
    { id: 2, name: 'Shoyu ramen', price: 249, image: 'assets/Shoyu_ramen.png' },
    { id: 3, name: 'Tantanmen ramen', price: 269, image: 'assets/Tantanmen_ramen.png' },
    { id: 4, name: 'Tonkotsu ramen', price: 279, image: 'assets/Tonkotsu_ramen.png' },
    { id: 5, name: 'Tsukemen ramen', price: 289, image: 'assets/Tsukemen_ramen.png' },
    { id: 6, name: 'Vegan ramen', price: 259, image: 'assets/Vegan_ramen.png' },
    { id: 7, name: 'Miso ramen', price: 269, image: 'assets/Miso_ramen.png' },
]

const menuContainer = document.querySelector(".menu-container")

if (menuContainer) {
    ramens.forEach(ramen => {

        const card = document.createElement("div")
        card.classList.add('menu-card')
        card.style.backgroundImage = `url('${ramen.image}')`

        const btn = document.createElement("button")
        btn.textContent = "Add"

        btn.addEventListener("click", () => {
            addToCart(ramen)
        })

        const title = document.createElement("p")
        title.textContent = ramen.name

        const price = document.createElement("p")
        price.textContent = `₹${ramen.price}`

        card.appendChild(title)
        card.appendChild(price)
        card.appendChild(btn)

        menuContainer.appendChild(card)
    })
}

// ================ sides ======================

let sides = [
    { id: 1, name: 'Gyoza', price: 149, image: 'assets/Gyoza.png' },
    { id: 2, name: 'Karaage', price: 159, image: 'assets/Karaage.png' },
    { id: 3, name: 'Takoyaki', price: 149, image: 'assets/Takoyaki.png' },
    { id: 4, name: 'Edamame', price: 129, image: 'assets/Edamame.png' },
    { id: 5, name: 'Tempura', price: 169, image: 'assets/Tempura.png' },
    { id: 6, name: 'Onigiri', price: 139, image: 'assets/Onigiri.png' },
    { id: 7, name: 'Japanese potato salad', price: 139, image: 'assets/Japanese_potato_salad.png' },
    { id: 8, name: 'Chashu rice bowl', price: 179, image: 'assets/Chashu_rice_bowl.png' },
]

const sidesContainer = document.querySelector(".sides-container")
if (sidesContainer) {
    sides.forEach(side => {
        const sideCard = document.createElement("div")
        sideCard.classList.add('menu-card')
        sideCard.style.backgroundImage = `url('${side.image}')`

        const btn = document.createElement("button")
        btn.textContent = "Add"

        btn.addEventListener("click", () => {
            addToCart(side)
        })

        const title = document.createElement("p")
        title.textContent = side.name

        const price = document.createElement("p")
        price.textContent = `₹${side.price}`

        sideCard.appendChild(title)
        sideCard.appendChild(price)
        sideCard.appendChild(btn)
        sidesContainer.appendChild(sideCard)
    })
}

// ============== drinks ================

let drinks = [
    { id: 1, name: 'Matcha latte', price: 129, image: 'assets/Matcha_latte.png' },
    { id: 2, name: 'Ramune soda', price: 119, image: 'assets/Ramune_soda.png' },
    { id: 3, name: 'Japanese iced coffee', price: 129, image: 'assets/Japanese_iced_coffee.png' },
    { id: 4, name: 'Sakura milk', price: 119, image: 'assets/Sakura_milk.png' },
    { id: 5, name: 'Hojicha latte', price: 129, image: 'assets/Hojicha_latte.png' },
]

const drinksContainer = document.querySelector(".drinks-container")

if (drinksContainer) {
    drinks.forEach(drink => {
        const drinkCard = document.createElement("div")
        drinkCard.classList.add('menu-card')
        drinkCard.style.backgroundImage = `url('${drink.image}')`

        // add to cart option is assigned here
        const btn = document.createElement("button")
        btn.textContent = "Add"
        btn.addEventListener("click", () => {
            addToCart(drink)
        })

        const title = document.createElement("p")
        title.textContent = drink.name

        const price = document.createElement("p")
        price.textContent = `₹${drink.price}`

        drinkCard.appendChild(title)
        drinkCard.appendChild(price)
        drinkCard.appendChild(btn)
        drinksContainer.appendChild(drinkCard)
    })
}

// ============== cart logic ==============

let addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    const existingProduct = cart.find(item => item.name === product.name)

    if (existingProduct) {
        existingProduct.quantity += 1
    } else {
        cart.push({ ...product, quantity: 1 })
    }
    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart))

}


// =========== cart ============
// cart is a seperate html page that takes local storage data

const cartContainer = document.querySelector('.cart-container')

const cartBuy = document.querySelector('.cart-buy')


let renderCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []


    if (!cartContainer) return

    cartContainer.innerHTML = ""

    let total = 0
    cart.forEach(cartItem => {

        // create card
        const cartCard = document.createElement("div")
        cartCard.classList.add('cart-card')

        // image details
        const cartImg = document.createElement("div")
        const cartImage = document.createElement("img")
        cartImage.src = cartItem.image
        cartImage.style.objectFit = 'cover'
        cartImage.style.height = '100%'

        cartImg.classList.add('cart-img')

        cartImg.appendChild(cartImage)


        // description - name and price
        const cartDesc = document.createElement("div")
        cartDesc.classList.add('cart-desc')

        const name = document.createElement("p")
        name.textContent = `${cartItem.name} x ${cartItem.quantity}`

        const itemTotal = cartItem.price * cartItem.quantity

        const price = document.createElement("p")
        price.textContent = `${itemTotal}`


        total += itemTotal


        // cartDesc.textContent = `${cartItem.name} x ${cartItem.quantity} - ${cartItem.price} `

        cartDesc.appendChild(name)
        cartDesc.appendChild(price)

        cartCard.appendChild(cartImg)
        cartCard.appendChild(cartDesc)

        cartContainer.appendChild(cartCard)
    })

    if (cartBuy) {
        cartBuy.innerHTML = ""

        document.querySelector('.cart-summery').classList.add("empty-cart")

        if (cart.length === 0) {
            cartBuy.innerHTML = "<p>Cart is empty</p>"
            return
        }

        const wishDiv = document.createElement('div')

        const wish = document.createElement('p')
        wish.textContent = "Thank you"
        wish.classList.add('thank-you')
        wishDiv.appendChild(wish)

        const billDiv = document.createElement('div')
        billDiv.classList.add('bill-area')

        const subtotal = document.createElement("p")
        subtotal.textContent = `Subtotal : ₹${total}`

        const gstAmount = total * 0.05
        const gst = document.createElement("p")
        gst.textContent = `GST (5%) : ₹${gstAmount.toFixed(2)}`

        const finalAmount = document.createElement("h3")
        finalAmount.textContent = `Total : ₹${(total + gstAmount).toFixed(2)}`

        const checkoutBtn = document.createElement("button")
        checkoutBtn.textContent = "Place Order"

        checkoutBtn.addEventListener("click", () => {
            alert("Order Placed")

            localStorage.removeItem("cart")

            window.location.href = "index.html"
        })

        cartBuy.appendChild(wishDiv)

        billDiv.appendChild(subtotal)
        billDiv.appendChild(gst)
        billDiv.appendChild(finalAmount)
        billDiv.appendChild(checkoutBtn)

        cartBuy.appendChild(billDiv)
    }

}

if (cartContainer) {
    renderCart()
}


