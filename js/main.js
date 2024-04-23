const usersCards = document.querySelector(".users__cards");

const API_URL = "https://dummyjson.com/users";

async function getApi(url) {
    const data = await fetch(url, {
        method: "GET",
    });
    data.json()
        .then((res) => createCards(res))
        .catch((err) => console.log(err));
}

getApi(API_URL);

function createCards(data) {
    let cards = "";
    data.users.forEach((user) => {
        cards += `
            <div class="users__card">
                <div class="users__card__img">
                    <img src="${user.image}" alt="" />
                </div>
                <div class="users__card__info">
                    <h3 class="users__card__name">First Name: ${user.firstName}</h3>
                    <h3 class="users__card__lastname">Last Name: ${user.lastName}</h3>
                    <p class="users__card__address">Address: ${user.address.address}</p>
                    <a href="tel:${user.phone}">Phone: ${user.phone}</a>
                    <a href="email:${user.email}">Email: ${user.email}</a>
                    <p class="users__card__gender">Gender: ${user.gender}</p>
                </div>
            </div>
        `;
        console.log(user);
    });
    usersCards.innerHTML = cards;
}
