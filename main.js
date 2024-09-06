const coupons = [
  {
    id: "coupon1",
    discount: "30% Off",
    offer: "Buy 1 Get 2",
    most_popular: false,
    discounted_price: 18.0,
    original_price: 36.0,
    selected: false,
  },
  {
    id: "coupon2",
    discount: "30% Off",
    offer: "Buy 1 Get 2",
    most_popular: true,
    discounted_price: 18.0,
    original_price: 36.0,
    selected: false,
  },
  {
    id: "coupon3",
    discount: "30% Off",
    offer: "Buy 1 Get 2",
    most_popular: false,
    discounted_price: 18.0,
    original_price: 36.0,
    selected: true,
  },
];

function generateHtml(coupon) {
  if (coupon.selected) {
    return `
            <div id=${coupon.id} class="coupon-dropdown">
                    <div class="dropdownDetails">
                        <div class="radio-container">
                            <div class="radio"></div>
                        </div>
                        <div class="offerSection">
                            <span class="offer">${coupon.offer}</span>
                            <span class="price">$${coupon.discounted_price.toFixed(
                              2
                            )} USD</span>
                        </div>
                        <div class="offerSection">
                            <span class="discount">${coupon.discount}</span>
                            <span class="price-strike"><s>$${coupon.original_price.toFixed(
                              2
                            )} USD</s></span>
                        </div>
                    </div>
                    <div class="option-section">
                        <table style="border-collapse: separate;">
                            <tr>
                                <th class="table-header"></th>
                                <th class="table-header">Size</th>
                                <th class="table-header">Colour</th>
                            </tr>
                            <tr>
                                <td class="table-data">#1</td>
                                <td class="table-data">
                                    <select class="select-box">
                                        <option value="option1">S</option>
                                        <option value="option2">M</option>
                                        <option value="option3">L</option>
                                    </select>
                                </td>
                                <td class="table-data">
                                    <select class="select-box">
                                        <option value="option1">Black</option>
                                        <option value="option2">Red</option>
                                        <option value="option3">Blue</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="table-data">#2</td>
                                <td class="table-data">
                                    <select class="select-box">
                                        <option value="option1">S</option>
                                        <option value="option2">M</option>
                                        <option value="option3">L</option>
                                    </select>
                                </td>
                                <td class="table-data">
                                    <select class="select-box">
                                        <option value="option1">Colour</option>
                                        <option value="option2">Red</option>
                                        <option value="option3">Blue</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
        `;
  } else {
    return `
            <div id=${coupon.id} class="coupon">
                    <div class="coupon_left">${coupon.discount}</div>
                    <div class="coupon_right">
                        <div class="radio"></div>
                        <div class="offerSection">
                            <span>${coupon.offer}</span>
                            <span class="price">$${coupon.discounted_price.toFixed(
                              2
                            )} USD</span>
                        </div>
                        <div class="highlight">${
                          coupon.most_popular ? "Most Popular" : ""
                        }</div>
                    </div>
                </div>
        `;
  }
}

function expandSelectedCoupon(event) {
  const couponId = event.currentTarget.id;
  coupons.forEach((coupon) => {
    if (coupon.id === couponId) coupon.selected = true;
    else coupon.selected = false;
  });
  populateCoupons();
}

function populateCoupons() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  coupons.forEach((coupon) => {
    content.insertAdjacentHTML("beforeend", generateHtml(coupon));
    const couponDomElement = document.getElementById(coupon.id);
    couponDomElement.onclick = expandSelectedCoupon;
  });
}

window.addEventListener("load", populateCoupons);
