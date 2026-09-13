// ================================
// VŨ VÉ XE - SCRIPT.JS
// ================================

const ZALO = "https://zalo.me/0386003098";


// ================================
// DANH SÁCH 20 TUYẾN
// ================================

const ROUTES = {

  "Quảng Trị|Sài Gòn": [
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
    },
    {
      name: "Nhà xe An Bình",
      times: "10h30",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Quảng Trị|Nha Trang": [
    {
      name: "Nhà xe tuyến Quảng Trị - Nha Trang",
      times: "Nhiều khung giờ",
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


  "Quảng Trị|Quy Nhơn": [
    {
      name: "Nhà xe tuyến Quảng Trị - Quy Nhơn",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Quảng Trị|Đà Nẵng": [
    {
      name: "HK Buslines",
      times: "6h · 7h · 18h30",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Tân Kim Chi",
      times: "9h · 15h · 18h · 20h · 21h",
      type: "Limousine",
      price: "Liên hệ"
    },
    {
      name: "Tân Quang Dũng Mến Thương",
      times: "5h30 · 6h · 7h · 9h · 11h · 12h · 13h · 15h · 16h · 18h · 19h",
      type: "Xe giường nằm",
      price: "Liên hệ"
    },
    {
      name: "Huệ Thi",
      times: "7h · 9h · 12h · 13h · 15h · 18h",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Quảng Trị|Đà Lạt": [
    {
      name: "Nhà xe tuyến Quảng Trị - Đà Lạt",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm / Limousine",
      price: "Liên hệ"
    }
  ],


  "Huế|Sài Gòn": [
    {
      name: "Nhà xe tuyến Huế - Sài Gòn",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm / Limousine",
      price: "Liên hệ"
    }
  ],


  "Huế|Nha Trang": [
    {
      name: "Nhà xe tuyến Huế - Nha Trang",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Huế|Quy Nhơn": [
    {
      name: "Nhà xe tuyến Huế - Quy Nhơn",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Huế|Hà Nội": [
    {
      name: "Nhà xe tuyến Huế - Hà Nội",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Huế|Đà Lạt": [
    {
      name: "Nhà xe tuyến Huế - Đà Lạt",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm / Limousine",
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


  "Đà Nẵng|Nha Trang": [
    {
      name: "Nhà xe tuyến Đà Nẵng - Nha Trang",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm / Limousine",
      price: "Liên hệ"
    }
  ],


  "Đà Nẵng|Sài Gòn": [
    {
      name: "Nhà xe tuyến Đà Nẵng - Sài Gòn",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm / Limousine",
      price: "Liên hệ"
    }
  ],


  "Sài Gòn|Nha Trang": [
    {
      name: "Nhà xe tuyến Sài Gòn - Nha Trang",
      times: "Nhiều khung giờ",
      type: "Limousine / Giường nằm",
      price: "Liên hệ"
    }
  ],


  "Sài Gòn|Đà Lạt": [
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


  "Sài Gòn|Quảng Trị": [
    {
      name: "Nhà xe tuyến Sài Gòn - Quảng Trị",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Quảng Trị|Đồng Nai": [
    {
      name: "Nhà xe tuyến Quảng Trị - Đồng Nai",
      times: "Nhiều khung giờ",
      type: "Xe giường nằm",
      price: "Liên hệ"
    }
  ],


  "Nha Trang|Đà Lạt": [
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
    }
  ]

};


// ================================
// CHUYỂN SANG TRANG TUYẾN
// ================================

function goRoute(from, to) {

  window.location.href =
    "tuyen.html?from=" +
    encodeURIComponent(from) +
    "&to=" +
    encodeURIComponent(to);

}


// ================================
// TÌM TUYẾN
// ================================

function searchRoute() {

  var from = document.getElementById("from").value.trim();
  var to = document.getElementById("to").value.trim();

  if (!from || !to) {

    alert("Vui lòng nhập điểm đi và điểm đến.");

    return;
  }

  goRoute(from, to);

}


// ================================
// NÚT TÌM TUYẾN TRÊN INDEX
// ================================

function timTuyen() {

  searchRoute();

}


// ================================
// MỞ ZALO
// ================================

function openZalo(message) {

  window.location.href =
    ZALO + "?text=" +
    encodeURIComponent(message);

}


// ================================
// MỞ FORM ĐẶT VÉ
// ================================

function toggleBooking(index) {

  var box =
    document.getElementById("booking-" + index);

  if (box) {

    box.classList.toggle("open");

  }

}


// ================================
// GỬI YÊU CẦU ĐẶT VÉ
// ================================

function sendBooking(index) {

  var company =
    document.getElementById("company-" + index).value;

  var from =
    document.getElementById("bookFrom").value;

  var to =
    document.getElementById("bookTo").value;

  var date =
    document.getElementById("date-" + index).value;

  var time =
    document.getElementById("time-" + index).value;

  var guests =
    document.getElementById("guests-" + index).value;

  var name =
    document.getElementById("name-" + index).value.trim();

  var phone =
    document.getElementById("phone-" + index).value.trim();


  if (!date) {

    alert("Vui lòng chọn ngày đi.");

    return;
  }


  if (!name) {

    alert("Vui lòng nhập họ và tên.");

    return;
  }


  if (!phone) {

    alert("Vui lòng nhập số điện thoại.");

    return;
  }


  var message =
    "VŨ VÉ XE - YÊU CẦU ĐẶT VÉ\n\n" +

    "Nhà xe: " + company + "\n" +

    "Tuyến: " + from +
    " → " + to + "\n" +

    "Ngày đi: " + date + "\n" +

    "Giờ mong muốn: " +
    (time || "Chưa chọn") + "\n" +

    "Số khách: " + guests + "\n" +

    "Họ tên: " + name + "\n" +

    "Số điện thoại: " + phone + "\n\n" +

    "Nhờ Vũ Vé Xe kiểm tra chỗ " +
    "và báo giá giúp mình.";


  openZalo(message);

}


// ================================
// HIỂN THỊ TRANG NHÀ XE
// ================================

function renderRoutePage() {

  var content =
    document.getElementById("routeContent");

  if (!content) {

    return;

  }


  var params =
    new URLSearchParams(window.location.search);


  var from =
    params.get("from") || "";

  var to =
    params.get("to") || "";


  var key =
    from + "|" + to;


  var list =
    ROUTES[key] || [];


  if (!from || !to) {

    content.innerHTML =
      '<div class="notice">' +
      'Chưa có tuyến được chọn.' +
      '<br><br>' +
      '<a href="index.html">' +
      '← Quay lại trang chủ' +
      '</a>' +
      '</div>';

    return;

  }


  if (list.length === 0) {

    content.innerHTML =
      '<div class="route-head">' +
      '<h1>' +
      from + ' → ' + to +
      '</h1>' +

      '<p>' +
      'Vũ Vé Xe sẽ hỗ trợ tìm nhà xe phù hợp cho bạn.' +
      '</p>' +

      '</div>' +

      '<div class="notice">' +
      'Tuyến này chưa có danh sách nhà xe. ' +
      'Bạn có thể gửi yêu cầu qua Zalo để được hỗ trợ.' +
      '</div>' +

      '<button class="send" ' +
      'onclick="openZalo(' +
      "'VŨ VÉ XE - YÊU CẦU TÌM VÉ\\n\\nTuyến: " +
      from + " → " + to +
      "')" +
      '>' +
      '📲 GỬI YÊU CẦU QUA ZALO' +
      '</button>';

    return;

  }


  var html = "";


  html +=
    '<div class="route-head">' +

    '<h1>' +
    from + ' → ' + to +
    '</h1>' +

    '<p>' +
    'Chọn nhà xe bên dưới để đặt vé.' +
    '</p>' +

    '</div>';


  html +=
    '<div class="notice">' +
    '📌 Giá và chỗ có thể thay đổi theo ngày. ' +
    'Vũ Vé Xe sẽ kiểm tra lại trước khi xác nhận.' +
    '</div>';


  html +=
    '<input type="hidden" ' +
    'id="bookFrom" value="' + from + '">';


  html +=
    '<input type="hidden" ' +
    'id="bookTo" value="' + to + '">';


  html += '<div class="company-list">';


  for (var i = 0; i < list.length; i++) {

    var c = list[i];


    html +=
      '<article class="company">';


    html +=
      '<div class="company-top">';


    html +=
      '<div>' +

      '<h2>🚍 ' +
      c.name +
      '</h2>' +

      '<p class="schedule">' +
      '🕐 Khởi hành: ' +
      c.times +
      '</p>' +

      '<p>🚌 ' +
      c.type +
      '</p>' +

      '</div>';


    html +=
      '<div class="price">' +
      c.price +
      '</div>';


    html += '</div>';


    html +=
      '<button class="book-btn" ' +
      'onclick="toggleBooking(' +
      i +
      ')">' +

      'ĐẶT VÉ NHÀ XE NÀY' +

      '</button>';


    html +=
      '<div class="booking" ' +
      'id="booking-' +
      i +
      '">';


    html +=
      '<input type="hidden" ' +
      'id="company-' +
      i +
      '" value="' +
      c.name +
      '">';


    html +=
      '<div class="booking-grid">';


    html +=
      '<label>Ngày đi' +

      '<input type="date" ' +
      'id="date-' +
      i +
      '">' +

      '</label>';


    html +=
      '<label>Giờ mong muốn' +

      '<select id="time-' +
      i +
      '">' +

      '<option value="">' +
      'Chọn giờ' +
      '</option>' +

      '<option>Buổi sáng</option>' +
      '<option>Buổi trưa</option>' +
      '<option>Buổi chiều</option>' +
      '<option>Buổi tối</option>' +

      '</select>' +

      '</label>';


    html +=
      '<label>Số khách' +

      '<select id="guests-' +
      i +
      '">' +

      '<option>1</option>' +
      '<option>2</option>' +
      '<option>3</option>' +
      '<option>4</option>' +
      '<option>5</option>' +
      '<option>6</option>' +
      '<option>7</option>' +
      '<option>8</option>' +
      '<option>9</option>' +
      '<option>10</option>' +

      '</select>' +

      '</label>';


    html +=
      '<label>Họ và tên' +

      '<input type="text" ' +
      'id="name-' +
      i +
      '" ' +
      'placeholder="Nguyễn Văn A">' +

      '</label>';


    html +=
      '<label>Số điện thoại' +

      '<input type="tel" ' +
      'id="phone-' +
      i +
      '" ' +
      'placeholder="09xxxxxxxx">' +

      '</label>';


    html += '</div>';


    html +=
      '<div class="booking-actions">' +

      '<button class="send" ' +
      'onclick="sendBooking(' +
      i +
      ')">' +

      '📲 GỬI YÊU CẦU QUA ZALO' +

      '</button>' +

      '</div>';


    html += '</div>';


    html += '</article>';

  }


  html += '</div>';


  content.innerHTML = html;

}


// ================================
// CHẠY KHI TRANG ĐƯỢC MỞ
// ================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderRoutePage();

  }
);
