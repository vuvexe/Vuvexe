const ZALO = "https://zalo.me/0386003098";

const ROUTES = {
  "Quảng Trị|Sài Gòn": [
    {
      name: "Nhà xe An Bình",
      times: "10h30",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Quang Dũng",
      times: "8h · 11h · 13h",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Tân Quang Dũng",
      times: "6h30 · 13h · 14h",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Tiên Tiến",
      times: "6h",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],

  "Quảng Trị|Hà Nội": [
    {
      name: "Nhà xe Tân Quang Dũng",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Từ 600.000đ"
    },
    {
      name: "Nhà xe Quang Dũng",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Hoa Hồng",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Camel Travel",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Thanh Liễu",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],

  "Đà Nẵng|Đà Lạt": [
    {
      name: "HK Buslines",
      times: "Nhiều khung giờ",
      type: "Limousine / Giường nằm",
      price: "Từ 450.000đ"
    },
    {
      name: "Nhà xe Tân Kim Chi",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Cúc Tùng",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    }
  ],

  "Đà Lạt|Sài Gòn": [
    {
      name: "Nhà xe An Phú Travel",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Cúc Tùng",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Cát Thiên Hải",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Đất Mới",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Nhà xe Go 365",
      times: "Nhiều khung giờ",
      type: "Limousine",
      price: "Liên hệ"
    }
  ],

  "Quảng Bình|Nha Trang": [
    {
      name: "Nhà xe tuyến Quảng Bình – Nha Trang",
      times: "Nhiều khung giờ",
      type: "Giường nằm / Limousine",
      price: "Từ 400.000đ"
    }
  ]
};


function goRoute(from, to) {
  window.location.href =
    "tuyen.html?from=" +
    encodeURIComponent(from) +
    "&to=" +
    encodeURIComponent(to);
}


function searchRoute() {
  const fromElement = document.getElementById("from");
  const toElement = document.getElementById("to");

  if (!fromElement || !toElement) {
    return;
  }

  const from = fromElement.value.trim();
  const to = toElement.value.trim();

  if (!from || !to) {
    alert("Vui lòng nhập điểm đi và điểm đến.");
    return;
  }

  goRoute(from, to);
}


function openZalo(message) {
  window.location.href =
    ZALO + "?text=" + encodeURIComponent(message);
}


function toggleBooking(index) {
  const box = document.getElementById("booking-" + index);

  if (box) {
    box.classList.toggle("open");
  }
}


function sendBooking(index) {
  const companyElement =
    document.getElementById("company-" + index);

  const fromElement =
    document.getElementById("bookFrom");

  const toElement =
    document.getElementById("bookTo");

  const dateElement =
    document.getElementById("date-" + index);

  const timeElement =
    document.getElementById("time-" + index);

  const guestsElement =
    document.getElementById("guests-" + index);

  const nameElement =
    document.getElementById("name-" + index);

  const phoneElement =
    document.getElementById("phone-" + index);


  if (
    !companyElement ||
    !fromElement ||
    !toElement ||
    !dateElement ||
    !timeElement ||
    !guestsElement ||
    !nameElement ||
    !phoneElement
  ) {
    alert("Không tìm thấy thông tin đặt vé.");
    return;
  }


  const company = companyElement.value;
  const from = fromElement.value;
  const to = toElement.value;
  const date = dateElement.value;
  const time = timeElement.value;
  const guests = guestsElement.value;
  const name = nameElement.value.trim();
  const phone = phoneElement.value.trim();


  if (!date || !name || !phone) {
    alert(
      "Vui lòng nhập ngày đi, họ tên và số điện thoại."
    );
    return;
  }


  const message =
`VŨ VÉ XE - YÊU CẦU ĐẶT VÉ

Nhà xe: ${company}
Tuyến: ${from} → ${to}
Ngày đi: ${date}
Giờ mong muốn: ${time || "Chưa chọn"}
Số khách: ${guests}
Họ tên: ${name}
Số điện thoại: ${phone}

Nhờ Vũ Vé Xe kiểm tra chỗ và báo giá giúp mình.`;


  openZalo(message);
}


function renderRoutePage() {
  const content =
    document.getElementById("routeContent");

  if (!content) {
    return;
  }


  const params =
    new URLSearchParams(window.location.search);

  const from =
    params.get("from") || "";

  const to =
    params.get("to") || "";


  const list =
    ROUTES[from + "|" + to] || [];


  if (!from || !to) {

    content.innerHTML = `
      <div class="notice">
        Chưa có tuyến được chọn.
        Vui lòng quay lại trang chủ.
      </div>
    `;

    return;
  }


  if (!list.length) {

    content.innerHTML = `
      <div class="route-head">
        <h1>${from} → ${to}</h1>

        <p>
          Vũ Vé Xe sẽ hỗ trợ tìm nhà xe
          phù hợp cho bạn.
        </p>
      </div>

      <div class="notice">
        Tuyến này chưa có danh sách nhà xe
        trên website.
        Bạn vẫn có thể gửi yêu cầu qua Zalo.
      </div>

      <button
        class="send"
        onclick="openZalo(
          'VŨ VÉ XE - YÊU CẦU TÌM VÉ\\n\\nTuyến: ${from} → ${to}'
        )">

        Gửi yêu cầu qua Zalo

      </button>
    `;

    return;
  }


  content.innerHTML = `

    <div class="route-head">

      <h1>
        ${from} → ${to}
      </h1>

      <p>
        Chọn nhà xe và nhập thông tin
        để gửi yêu cầu đặt vé.
      </p>

    </div>


    <div class="notice">

      📌 Giá và chỗ có thể thay đổi
      theo ngày.

      Vũ Vé Xe sẽ kiểm tra lại
      trước khi xác nhận.

    </div>


    <input
      type="hidden"
      id="bookFrom"
      value="${from}"
    >

    <input
      type="hidden"
      id="bookTo"
      value="${to}"
    >


    <div class="company-list">

      ${list.map((c, i) => `

        <article class="company">

          <div class="company-top">

            <div>

              <h2>
                🚍 ${c.name}
              </h2>

              <p class="schedule">
                🕐 Khởi hành:
                ${c.times}
              </p>

              <p>
                🚌 ${c.type}
              </p>

            </div>


            <div class="price">
              ${c.price}
            </div>

          </div>


          <button
            class="book-btn"
            onclick="toggleBooking(${i})">

            ĐẶT VÉ NHÀ XE NÀY

          </button>


          <div
            class="booking"
            id="booking-${i}">

            <input
              type="hidden"
              id="company-${i}"
              value="${c.name}"
            >


            <div class="booking-grid">


              <label>

                Ngày đi

                <input
                  type="date"
                  id="date-${i}"
                >

              </label>


              <label>

                Giờ mong muốn

                <select
                  id="time-${i}">

                  <option value="">
                    Chọn giờ
                  </option>

                  ${
                    c.times
                      .split("·")
                      .map(
                        t =>
                          `<option>
                            ${t.trim()}
                          </option>`
                      )
                      .join("")
                  }

                </select>

              </label>


              <label>

                Số khách

                <select
                  id="guests-${i}">

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>

                </select>

              </label>


              <label>

                Họ và tên

                <input
                  type="text"
                  id="name-${i}"
                  placeholder="Nguyễn Văn A"
                >

              </label>


              <label>

                Số điện thoại

                <input
                  type="tel"
                  id="phone-${i}"
                  placeholder="09xxxxxxxx"
                >

              </label>


            </div>


            <div class="booking-actions">

              <button
                class="send"
                onclick="sendBooking(${i})">

                📲 GỬI YÊU CẦU QUA ZALO

              </button>

            </div>


          </div>

        </article>

      `).join("")}

    </div>
  `;
}


document.addEventListener(
  "DOMContentLoaded",
  renderRoutePage
);
