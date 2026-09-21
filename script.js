const ROUTES={'Quảng Trị|Đồng Nai':'tuyen/quang-tri-dong-nai.html','Quảng Trị|Vũng Tàu':'tuyen/quang-tri-vung-tau.html','Quảng Bình|Nha Trang':'tuyen/quang-binh-nha-trang.html','Quảng Bình|Đà Lạt':'tuyen/quang-binh-da-lat.html','Quảng Bình|Quy Nhơn':'tuyen/quang-binh-quy-nhon.html','Quảng Bình|Sài Gòn':'tuyen/quang-binh-sai-gon.html','Quảng Bình|Đồng Nai':'tuyen/quang-binh-dong-nai.html','Quảng Bình|Vũng Tàu':'tuyen/quang-binh-vung-tau.html','Quảng Bình|Hà Nội':'tuyen/quang-binh-ha-noi.html','Hà Nội|Quảng Bình':'tuyen/ha-noi-quang-binh.html','Hà Nội|Quảng Trị':'tuyen/ha-noi-quang-tri.html','Hà Nội|Đà Nẵng':'tuyen/ha-noi-da-nang.html','Hà Nội|Huế':'tuyen/ha-noi-hue.html','Đà Nẵng|Hà Nội':'tuyen/da-nang-ha-noi.html','Đà Nẵng|Sài Gòn':'tuyen/da-nang-sai-gon.html','Đà Nẵng|Đà Lạt':'tuyen/da-nang-da-lat.html','Đà Nẵng|Nha Trang':'tuyen/da-nang-nha-trang.html','Quảng Trị|Hà Nội':'tuyen/quang-tri-ha-noi.html','Quảng Trị|Sài Gòn':'tuyen/quang-tri-sai-gon.html','Quảng Trị|Nha Trang':'tuyen/quang-tri-nha-trang.html','Quảng Trị|Đà Lạt':'tuyen/quang-tri-da-lat.html','Quảng Trị|Quy Nhơn':'tuyen/quang-tri-quy-nhon.html','Huế|Sài Gòn':'tuyen/hue-sai-gon.html','Huế|Hà Nội':'tuyen/hue-ha-noi.html','Huế|Nha Trang':'tuyen/hue-nha-trang.html','Huế|Đà Lạt':'tuyen/hue-da-lat.html','Huế|Quảng Trị':'tuyen/hue-quang-tri.html','Sài Gòn|Đà Lạt':'tuyen/saigon-da-lat.html','Sài Gòn|Nha Trang':'tuyen/saigon-nha-trang.html','Sài Gòn|Quảng Trị':'tuyen/saigon-quang-tri.html','Nha Trang|Quy Nhơn':'tuyen/nha-trang-quy-nhon.html','Nha Trang|Đà Lạt':'tuyen/nha-trang-da-lat.html','Nha Trang|Sài Gòn':'tuyen/nha-trang-sai-gon.html','Nha Trang|Quảng Trị':'tuyen/nha-trang-quang-tri.html','Đà Lạt|Sài Gòn':'tuyen/da-lat-sai-gon.html','Đà Lạt|Quảng Trị':'tuyen/da-lat-quang-tri.html','Quy Nhơn|Nha Trang':'tuyen/quy-nhon-nha-trang.html','Quy Nhơn|Quảng Trị':'tuyen/quy-nhon-quang-tri.html','Nha Trang|Huế':'tuyen/nha-trang-hue.html','Đà Lạt|Huế':'tuyen/da-lat-hue.html','Sài Gòn|Huế':'tuyen/saigon-hue.html','Nha Trang|Đà Nẵng':'tuyen/nha-trang-da-nang.html',};
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function updateDestinations(){const f=document.getElementById('from'),t=document.getElementById('to');if(!f||!t)return;const from=f.value,current=t.value;const opts=Object.keys(ROUTES).filter(k=>!from||k.startsWith(from+'|')).map(k=>k.split('|')[1]);const uniq=[...new Set(opts)];t.innerHTML='<option value="">Chọn điểm đến</option>'+uniq.map(v=>'<option value="'+v.replace(/"/g,'&quot;')+'">'+v+'</option>').join('');if(uniq.includes(current))t.value=current;}
function goRoute(){const from=document.getElementById('from')?.value||'',to=document.getElementById('to')?.value||'';const p=ROUTES[from+'|'+to];if(p){sessionStorage.setItem('vuvexe_last_route',from+' → '+to);window.location.assign(p);}else{alert('Vui lòng chọn đúng tuyến đang có trên hệ thống.');}}
function copyText(t){try{if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).catch(()=>{});}catch(e){}}
function zalo(route,company=''){const msg='Xin chào Vũ Vé Xe, tôi muốn đặt vé tuyến '+route+(company?' - Nhà xe '+company:'')+'. Vui lòng tư vấn giúp tôi.';copyText(msg);window.location.href='https://zalo.me/0386003098';}
function booking(route){const n=document.getElementById('name')?.value.trim(),p=document.getElementById('phone')?.value.trim(),d=document.getElementById('date')?.value;if(!n||!p||!d){alert('Vui lòng nhập họ tên, số điện thoại và ngày đi.');return false;}const t='Đặt vé tuyến: '+route+'\nHọ tên: '+n+'\nSĐT: '+p+'\nNgày đi: '+d+'\nGiờ: '+(document.getElementById('time')?.value||'Chưa chọn')+'\nSố khách: '+(document.getElementById('guests')?.value||'1');copyText(t);window.location.href='https://zalo.me/0386003098';return false;}
function filterRoutes(){const q=norm(document.getElementById('q')?.value);document.querySelectorAll('[data-route]').forEach(x=>{x.style.display=(!q||norm(x.dataset.route).includes(q))?'':'none';});}
function filterRating(v){document.querySelectorAll('.op[data-rating]').forEach(a=>{const r=parseFloat(a.dataset.rating||'0');let show=v==='all'||(v==='4.5'&&r>=4.5)||(v==='4.0'&&r>=4&&r<4.5)||(v==='3.1'&&r>=3.1&&r<4);a.style.display=show?'':'none';});document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter===v));}
document.addEventListener('DOMContentLoaded',()=>{const f=document.getElementById('from');const t=document.getElementById('to');if(f&&t){f.addEventListener('change',updateDestinations);updateDestinations();}document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>filterRating(b.dataset.filter)));});


// V10: hỗ trợ truy cập trực tiếp trang tuyến và tìm kiếm từ URL.
function routeDirectSearch(from, to) {
  const key = (from || '') + '|' + (to || '');
  const page = ROUTES[key];
  if (page) {
    window.location.href = page;
    return true;
  }
  return false;
}

// Cho phép URL dạng ?from=Quảng%20Trị&to=Sài%20Gòn mở thẳng trang tuyến.
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const fromParam = params.get('from');
  const toParam = params.get('to');
  if (fromParam && toParam && location.pathname.endsWith('/index.html') || (fromParam && toParam && /\/Vuvexe\/?$/.test(location.pathname))) {
    routeDirectSearch(fromParam, toParam);
  }
});
