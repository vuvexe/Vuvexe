const ZALO = "https://zalo.me/0386003098";

function toggleMenu(){
  document.getElementById("nav").classList.toggle("open");
}

function switchTab(type, button){
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  button.classList.add("active");

  document.getElementById("ticketForm")
    .classList.toggle("hidden", type !== "ticket");

  document.getElementById("carForm")
    .classList.toggle("hidden", type !== "car");
}

function chooseRoute(from, to){
  document.getElementById("from").value = from;
  document.getElementById("to").value = to;

  document.getElementById("datve").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function selectCar(type){
  switchTab(
    "car",
    document.querySelectorAll(".tab")[1]
  );

  const select = document.getElementById("carType");

  if(type === "Xe 4 chỗ" || type === "Xe 7 chỗ"){
    select.value = type;
  }

  document.getElementById("datve").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function openZalo(message){
  const url = ZALO + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function sendTicket(event){
  event.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  const message =
`VŨ VÉ XE - YÊU CẦU ĐẶT VÉ

Điểm đi: ${from}
Điểm đến: ${to}
Ngày đi: ${date}
Số khách: ${guests}`;

  openZalo(message);
}

function sendCar(event){
  event.preventDefault();

  const type = document.getElementById("carType").value;
  const pickup = document.getElementById("pickup").value.trim();
  const dropoff = document.getElementById("dropoff").value.trim();
  const date = document.getElementById("carDate").value;

  const message =
`VŨ VÉ XE - YÊU CẦU THUÊ XE

Loại xe: ${type}
Điểm đón: ${pickup}
Điểm đến: ${dropoff}
Ngày đi: ${date}`;

  openZalo(message);
}

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

const today = new Date().toISOString().split("T")[0];

["date", "carDate"].forEach(id => {
  const el = document.getElementById(id);

  if(el){
    el.min = today;
  }
});
