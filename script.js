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

let quickPicks = [
    { id: 1, name: 'Shio ramen', price: 229, image: 'assets/Shio_ramen.png' },
    { id: 2, name: 'Shoyu ramen', price: 229, image: 'assets/Shoyu_ramen.png' },
    { id: 3, name: 'Karaage', price: 129, image: 'assets/Karaage.png' },
    { id: 4, name: 'Sakura milk', price: 99, image: 'assets/Sakura_milk.png' },
]

const quickContainer = document.querySelector(".quick-container")

if (quickContainer) {
    let html = ""

    quickPicks.forEach(item => {
        html += `
        <div class="quick-card" style="background-image: url('${item.image}')">
            <button>Add</button>
        </div>
        `
    })

    quickContainer.innerHTML = html
}


let ramens = [
    { id: 1, name: 'Shio ramen', price: 229, image: 'assets/Shio_ramen.png' },
    { id: 2, name: 'Shoyu ramen', price: 229, image: 'assets/Shoyu_ramen.png' },
    { id: 3, name: 'Tantanmen ramen', price: 229, image: 'assets/Tantanmen_ramen.png' },
    { id: 4, name: 'Tonkotsu ramen', price: 229, image: 'assets/Tonkotsu_ramen.png' },
    { id: 5, name: 'Tsukemen ramen', price: 229, image: 'assets/Tsukemen_ramen.png' },
    { id: 6, name: 'Vegan ramen', price: 229, image: 'assets/Vegan_ramen.png' },
    { id: 7, name: 'Miso ramen', price: 229, image: 'assets/Miso_ramen.png' },
]

const menuContainer = document.querySelector(".menu-container")

if(menuContainer){
    ramens.forEach(ramen =>{

        const card= document.createElement("div")
        card.classList.add('menu-card')
        card.style.backgroundImage = `url('${ramen.image}')`

        const btn = document.createElement("button")
        btn.textContent = "Add"

        const titile = document.createElement("p")
        titile.textContent= `${ramen.name}`
        
        card.appendChild(titile)
        card.appendChild(btn)

        menuContainer.appendChild(card)
    })
}

let sides = [
    { id: 1, name: 'Gyoza', price: 129, image: 'assets/Gyoza.png' },
    { id: 2, name: 'Karaage', price: 129, image: 'assets/Karaage.png' },
    { id: 3, name: 'Takoyaki', price: 129, image: 'assets/Takoyaki.png' },
    { id: 4, name: 'Edamame', price: 129, image: 'assets/Edamame.png' },
    { id: 5, name: 'Tempura', price: 129, image: 'assets/Tempura.png' },
    { id: 6, name: 'Onigiri', price: 129, image: 'assets/Onigiri.png' },
    { id: 7, name: 'Japanese potato salad', price: 129, image: 'assets/Japanese_potato_salad.png' },
    { id: 8, name: 'Chashu rice bowl', price: 129, image: 'assets/Chashu_rice_bowl.png' },
]

const sidesContainer = document.querySelector(".sides-container")
if(sides){
    sides.forEach(side =>{
        const sideCard = document.createElement("div")
        sideCard.classList.add('menu-card')
        sideCard.style.backgroundImage = `url('${side.image}')`

        const btn = document.createElement("button")
        btn.textContent = "Add"

        sideCard.appendChild(btn)
        sidesContainer.appendChild(sideCard)
    })
}

let drinks = [
    { id: 1, name: 'Matcha latte', price: 99, image: 'assets/Matcha_latte.png' },
    { id: 2, name: 'Ramune soda', price: 99, image: 'assets/Ramune_soda.png' },
    { id: 3, name: 'Japanese iced coffee', price: 99, image: 'assets/Japanese_iced_coffee.png' },
    { id: 4, name: 'Sakura milk', price: 99, image: 'assets/Sakura_milk.png' },
    { id: 5, name: 'Hojicha latte', price: 99, image: 'assets/Hojicha_latte.png' },
]

const drinksContainer = document.querySelector(".drinks-container")

if(drinks){
    drinks.forEach(drink =>{
        const drinkCard = document.createElement("div")
        drinkCard.classList.add('menu-card')
        drinkCard.style.backgroundImage=`url('${drink.image}')`

        const btn = document.createElement("button")
        btn.textContent = "Add"

        drinkCard.appendChild(btn)
        drinksContainer.appendChild(drinkCard)
    })
}