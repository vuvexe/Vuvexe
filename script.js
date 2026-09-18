const ROUTES={'Đà Nẵng|Hà Nội':'da-nang-ha-noi.html','Đà Nẵng|Sài Gòn':'da-nang-sai-gon.html','Đà Nẵng|Đà Lạt':'da-nang-da-lat.html','Đà Nẵng|Nha Trang':'da-nang-nha-trang.html','Quảng Trị|Hà Nội':'quang-tri-ha-noi.html','Quảng Trị|Sài Gòn':'quang-tri-sai-gon.html','Quảng Trị|Nha Trang':'quang-tri-nha-trang.html','Quảng Trị|Đà Lạt':'quang-tri-da-lat.html','Quảng Trị|Quy Nhơn':'quang-tri-quy-nhon.html','Huế|Sài Gòn':'hue-sai-gon.html','Huế|Hà Nội':'hue-ha-noi.html','Huế|Nha Trang':'hue-nha-trang.html','Huế|Đà Lạt':'hue-da-lat.html','Huế|Quảng Trị':'hue-quang-tri.html','Sài Gòn|Đà Lạt':'saigon-da-lat.html','Sài Gòn|Nha Trang':'saigon-nha-trang.html','Sài Gòn|Quảng Trị':'saigon-quang-tri.html','Nha Trang|Quy Nhơn':'nha-trang-quy-nhon.html','Nha Trang|Đà Lạt':'nha-trang-da-lat.html','Nha Trang|Sài Gòn':'nha-trang-sai-gon.html','Nha Trang|Quảng Trị':'nha-trang-quang-tri.html','Đà Lạt|Sài Gòn':'da-lat-sai-gon.html','Đà Lạt|Quảng Trị':'da-lat-quang-tri.html','Quy Nhơn|Nha Trang':'quy-nhon-nha-trang.html','Quy Nhơn|Quảng Trị':'quy-nhon-quang-tri.html'};

const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();

function updateDestinations(){
const f=document.getElementById('from'),t=document.getElementById('to');
if(!f||!t)return;
const from=f.value,current=t.value;
const opts=Object.keys(ROUTES)
.filter(k=>!from||k.startsWith(from+'|'))
.map(k=>k.split('|')[1]);
const uniq=[...new Set(opts)];
t.innerHTML='<option value="">Chọn điểm đến</option>'+
uniq.map(v=>'<option value="'+v.replace(/"/g,'&quot;')+'">'+v+'</option>').join('');
if(uniq.includes(current))t.value=current;
}

function goRoute(){
const from=document.getElementById('from')?.value||'';
const to=document.getElementById('to')?.value||'';
const p=ROUTES[from+'|'+to];

if(p){
sessionStorage.setItem('vuvexe_last_route',from+' → '+to);
window.location.assign(p);
}else{
alert('Vui lòng chọn đúng tuyến đang có trên hệ thống.');
}
}

function copyText(t){
try{
if(navigator.clipboard&&window.isSecureContext)
navigator.clipboard.writeText(t).catch(()=>{});
}catch(e){}
}

function zalo(route,company=''){
const msg='Xin chào Vũ Vé Xe, tôi muốn đặt vé tuyến '+route+
(company?' - Nhà xe '+company:'')+
'. Vui lòng tư vấn giúp tôi.';
copyText(msg);
window.location.href='https://zalo.me/0386003098';
}

function booking(route){
const n=document.getElementById('name')?.value.trim();
const p=document.getElementById('phone')?.value.trim();
const d=document.getElementById('date')?.value;

if(!n||!p||!d){
alert('Vui lòng nhập họ tên, số điện thoại và ngày đi.');
return false;
}

const t='Đặt vé tuyến: '+route+
'\nHọ tên: '+n+
'\nSĐT: '+p+
'\nNgày đi: '+d+
'\nGiờ: '+(document.getElementById('time')?.value||'Chưa chọn')+
'\nSố khách: '+(document.getElementById('guests')?.value||'1');

copyText(t);
window.location.href='https://zalo.me/0386003098';
return false;
}

function filterRoutes(){
const q=norm(document.getElementById('q')?.value);

document.querySelectorAll('[data-route]').forEach(x=>{
x.style.display=(!q||norm(x.dataset.route).includes(q))?'':'none';
});
}

function filterRating(v){
document.querySelectorAll('.op[data-rating]').forEach(a=>{
const r=parseFloat(a.dataset.rating||'0');

let show=
v==='all'||
(v==='4.5'&&r>=4.5)||
(v==='4.0'&&r>=4&&r<4.5)||
(v==='3.1'&&r>=3.1&&r<4);

a.style.display=show?'':'none';
});

document.querySelectorAll('.filter-btn').forEach(b=>{
b.classList.toggle('active',b.dataset.filter===v);
});
}

document.addEventListener('DOMContentLoaded',()=>{
const f=document.getElementById('from');
const t=document.getElementById('to');

if(f&&t){
f.addEventListener('change',updateDestinations);
updateDestinations();
}

document.querySelectorAll('.filter-btn').forEach(b=>{
b.addEventListener('click',()=>{
filterRating(b.dataset.filter);
});
});
});
