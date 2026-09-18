const ROUTES = {
  "Quảng Trị|Đồng Nai": "quang-tri-dong-nai.html",
  "Quảng Trị|Vũng Tàu": "quang-tri-vung-tau.html",

  "Quảng Bình|Nha Trang": "quang-binh-nha-trang.html",
  "Quảng Bình|Đà Lạt": "quang-binh-da-lat.html",
  "Quảng Bình|Quy Nhơn": "quang-binh-quy-nhon.html",
  "Quảng Bình|Sài Gòn": "quang-binh-sai-gon.html",
  "Quảng Bình|Đồng Nai": "quang-binh-dong-nai.html",
  "Quảng Bình|Vũng Tàu": "quang-binh-vung-tau.html",
  "Quảng Bình|Hà Nội": "quang-binh-ha-noi.html",

  "Hà Nội|Quảng Bình": "ha-noi-quang-binh.html",
  "Hà Nội|Quảng Trị": "ha-noi-quang-tri.html",
  "Hà Nội|Đà Nẵng": "ha-noi-da-nang.html",
  "Hà Nội|Huế": "ha-noi-hue.html",

  "Đà Nẵng|Hà Nội": "da-nang-ha-noi.html",
  "Đà Nẵng|Sài Gòn": "da-nang-sai-gon.html",
  "Đà Nẵng|Đà Lạt": "da-nang-da-lat.html",
  "Đà Nẵng|Nha Trang": "da-nang-nha-trang.html",

  "Quảng Trị|Hà Nội": "quang-tri-ha-noi.html",
  "Quảng Trị|Sài Gòn": "quang-tri-sai-gon.html",
  "Quảng Trị|Nha Trang": "quang-tri-nha-trang.html",
  "Quảng Trị|Đà Lạt": "quang-tri-da-lat.html",
  "Quảng Trị|Quy Nhơn": "quang-tri-quy-nhon.html",

  "Huế|Sài Gòn": "hue-sai-gon.html",
  "Huế|Hà Nội": "hue-ha-noi.html",
  "Huế|Nha Trang": "hue-nha-trang.html",
  "Huế|Đà Lạt": "hue-da-lat.html",
  "Huế|Quảng Trị": "hue-quang-tri.html",

  "Sài Gòn|Đà Lạt": "saigon-da-lat.html",
  "Sài Gòn|Nha Trang": "saigon-nha-trang.html",
  "Sài Gòn|Quảng Trị": "saigon-quang-tri.html",

  "Nha Trang|Quy Nhơn": "nha-trang-quy-nhon.html",
  "Nha Trang|Đà Lạt": "nha-trang-da-lat.html",
  "Nha Trang|Sài Gòn": "nha-trang-sai-gon.html",
  "Nha Trang|Quảng Trị": "nha-trang-quang-tri.html",

  "Đà Lạt|Sài Gòn": "da-lat-sai-gon.html",
  "Đà Lạt|Quảng Trị": "da-lat-quang-tri.html",

  "Quy Nhơn|Nha Trang": "quy-nhon-nha-trang.html",
  "Quy Nhơn|Quảng Trị": "quy-nhon-quang-tri.html"
};

const norm = s =>
  (s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function updateDestinations() {
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  if (!from || !to) return;

  const selectedFrom = from.value;
  const currentTo = to.value;

  const destinations = Object.keys(ROUTES)
    .filter(key => {
      if (!selectedFrom) return true;
      return key.startsWith(selectedFrom + "|");
    })
    .map(key => key.split("|")[1]);

  const uniqueDestinations = [...new Set(destinations)];

  to.innerHTML =
    '<option value="">Chọn điểm đến</option>' +
    uniqueDestinations
      .map(city => {
        return `<option value="${city.replace(/"/g, "&quot;")}">${city}</option>`;
      })
      .join("");

  if (uniqueDestinations.includes(currentTo)) {
    to.value = currentTo;
  }
}

function goRoute() {
  const from =
    document.getElementById("from")?.value || "";

  const to =
    document.getElementById("to")?.value || "";

  const routeKey = from + "|" + to;
  const page = ROUTES[routeKey];

  if (page) {
    sessionStorage.setItem(
      "vuvexe_last_route",
      from + " → " + to
    );

    window.location.href = page;
  } else {
    alert(
      "Vui lòng chọn đúng tuyến đang có trên hệ thống."
    );
  }
}

function copyText(text) {
  try {
    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {
      navigator.clipboard
        .writeText(text)
        .catch(() => {});
    }
  } catch (e) {}
}

function zalo(route, company = "") {
  const message =
    "Xin chào Vũ Vé Xe, tôi muốn đặt vé tuyến " +
    route +
    (company
      ? " - Nhà xe " + company
      : "") +
    ". Vui lòng tư vấn giúp tôi.";

  copyText(message);

  window.location.href =
    "https://zalo.me/0386003098";
}

function booking(route) {
  const name =
    document.getElementById("name")
      ?.value.trim();

  const phone =
    document.getElementById("phone")
      ?.value.trim();

  const date =
    document.getElementById("date")
      ?.value;

  if (!name || !phone || !date) {
    alert(
      "Vui lòng nhập họ tên, số điện thoại và ngày đi."
    );

    return false;
  }

  const time =
    document.getElementById("time")
      ?.value || "Chưa chọn";

  const guests =
    document.getElementById("guests")
      ?.value || "1";

  const message =
    "Đặt vé tuyến: " +
    route +
    "\nHọ tên: " +
    name +
    "\nSĐT: " +
    phone +
    "\nNgày đi: " +
    date +
    "\nGiờ: " +
    time +
    "\nSố khách: " +
    guests;

  copyText(message);

  window.location.href =
    "https://zalo.me/0386003098";

  return false;
}

function filterRoutes() {
  const input =
    document.getElementById("q");

  const query = norm(
    input?.value || ""
  );

  document
    .querySelectorAll("[data-route]")
    .forEach(item => {
      const route =
        norm(item.dataset.route);

      item.style.display =
        !query || route.includes(query)
          ? ""
          : "none";
    });
}

function filterRating(value) {
  document
    .querySelectorAll(".op[data-rating]")
    .forEach(item => {
      const rating =
        parseFloat(
          item.dataset.rating || "0"
        );

      let show = false;

      if (value === "all") {
        show = true;
      }

      if (
        value === "4.5" &&
        rating >= 4.5
      ) {
        show = true;
      }

      if (
        value === "4.0" &&
        rating >= 4 &&
        rating < 4.5
      ) {
        show = true;
      }

      if (
        value === "3.1" &&
        rating >= 3.1 &&
        rating < 4
      ) {
        show = true;
      }

      item.style.display =
        show ? "" : "none";
    });

  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === value
      );
    });
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const from =
      document.getElementById("from");

    const to =
      document.getElementById("to");

    if (from && to) {
      from.addEventListener(
        "change",
        updateDestinations
      );

      updateDestinations();
    }

    document
      .querySelectorAll(".filter-btn")
      .forEach(button => {
        button.addEventListener(
          "click",
          () =>
            filterRating(
              button.dataset.filter
            )
        );
      });
  }
);
