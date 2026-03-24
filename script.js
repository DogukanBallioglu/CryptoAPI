async function fetchBitcoinPrice() {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1";

    try {

        // Getting a data from api.
        const response = await fetch(url);
        const data = await response.json();

        // Get a div from html.
        const coinsDiv = document.getElementById("coinsDiv");
        coinsDiv.innerHTML = "";

        // Creating row(div) for coins information.
        data.forEach(coin => {

            const row = document.createElement("div");
            row.className = "coin-row";

            row.innerHTML = `
        <div class="coin-info">
            <img src="${coin.image}" alt="${coin.name}" class="coin-logo">
            <span class="coin-name">${coin.name}</span>
        </div>
        <div class="coin-price">$${coin.current_price.toLocaleString()}</div>
    `;

            coinsDiv.appendChild(row);
        });

    } catch (error) {
        console.log(error);
    }
}