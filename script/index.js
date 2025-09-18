const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");
    const exitBtn = document.querySelector('#exit-button');

    const openModal = () => {
        console.log("openModal function called");
        // modal.style.display = 'flex';
        modal.classList.add("open");
    };

    const closeModal = () => {
        console.log("closeModal function called");
        // modal.style.display = 'none';
        modal.classList.remove("open");
    };

    cartBtn.addEventListener("click", () => {
        console.log("cart button clicked");
        console.log();
        openModal();
    });

    exitBtn.addEventListener("click", () => {
        console.log("exit button clicked");
        closeModal();
    });
    modal.addEventListener("click", (event) => {
        console.log("modal clicked");
        if (event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            // console.log("overlay or close button clicked");
            // modal.style.display = 'none';
            closeModal();
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector("#rests-container");

    const restArray = [
        {

            id: 0,
            title: 'Пицца плюс',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'pizza_plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'tanuki.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'foodband.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'zadina.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'dot_food.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: '50',
            rating: '4.5',
            price: '900',
            type: 'Пицца',
            image: 'pizzaburger.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Loading...</p>'
    }
    const randerRests = (array) => {
        container.innerHTML = '';
        array.forEach((card) => {
            container.insertAdjacentHTML("beforeend", `
        <a href="goods.html?id=${card.id}" class="products-card">
        <div class="products-card__image">
            <img src="./image/food/${card.image}" alt="${card.image}"">
        </div>
        <div class="products-card__description">
            <div class="product-card__description-row">
                <h4 class="products-card__description--title">
                    ${card.title}
                </h4>
                <div class="products-card__description--badge">
                ${card.time} мин
                </div>
            </div>
            <div class="products-card__description-row">
                <div class="products-card__description-info">
                    <div class="products-card__description-info-raiting">
                        <img src="./image/icons/star.svg" alt="star">
                        ${card.rating}
                    </div>
                    <div class="products-card__description-info--price">
                        ${card.price}
                    </div>
                    <div class="products-card__description-info--group">
                        ${card.type}
                    </div> 
                </div>
            </div>
        </div>
    </a>
        `)

        })
    }
    if (container) {
        loading();
        setTimeout(() => {
            randerRests(restArray);
        }, 1000);
    }
}


restsFunc();
modalFunc();