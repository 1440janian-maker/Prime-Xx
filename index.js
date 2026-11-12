
function showLicense(){

const STORAGE_KEY="prime_x_activated";

if(localStorage.getItem(STORAGE_KEY)==="yes"){
startPrimeX();
return;
}

let overlay=document.createElement("div");

overlay.id="prime-x-license";
overlay.style.cssText="position:fixed;inset:0;background:#030814;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Arial,sans-serif;";

overlay.innerHTML=`
<div style="width:100%;max-width:340px;background:#0a0f1d;border:1px solid #00f2fe;border-radius:20px;padding:25px;text-align:center;box-shadow:0 0 30px #00f2fe44;">

<img src="https://i.ibb.co/395wVhkN/file-133.jpg" style="width:85px;height:85px;border-radius:50%;object-fit:cover;border:2px solid #00f2fe;">

<h2 style="color:#00f2fe;">Prime X</h2>

<p style="color:#aaa;font-size:13px;">LICENSE ACTIVATION</p>

<input id="px-key" type="password"
placeholder="Enter License Key"
autocomplete="off"
autocapitalize="off"
spellcheck="false"
style="box-sizing:border-box;width:100%;padding:14px;border-radius:10px;border:1px solid #00f2fe;background:#101b30;color:white;margin:15px 0;outline:none;">

<button id="px-activate"
style="width:100%;padding:14px;background:#00d9ed;color:#00101a;border:0;border-radius:10px;font-weight:bold;cursor:pointer;">
ACTIVATE PRIME X
</button>

<p id="px-error" style="color:#ff5555;font-size:13px;min-height:18px;"></p>

</div>`;

document.body.appendChild(overlay);

let input=overlay.querySelector("#px-key");
let btn=overlay.querySelector("#px-activate");
let error=overlay.querySelector("#px-error");

input.addEventListener("copy",e=>e.preventDefault());
input.addEventListener("cut",e=>e.preventDefault());
input.addEventListener("contextmenu",e=>e.preventDefault());

function check(){

if(input.value.trim()==="12345678910sabbirbai"){

try{
localStorage.setItem(STORAGE_KEY,"yes");
}catch(e){
error.textContent="Storage unavailable. Activation failed.";
return;
}

input.value="";
overlay.remove();

startPrimeX();

}else{

error.textContent="INVALID LICENSE KEY!";
input.value="";
input.focus();

}

}

btn.onclick=check;

input.onkeydown=e=>{
if(e.key==="Enter")check();
};

input.focus();

}

javascript:(function(){
const LICENSE_KEY="12345678910sabbirbai";
const STORAGE_KEY="prime_x_license_active";
const IMAGE_URL="https://i.ibb.co/395wVhkN/file-133.jpg";

if(document.getElementById("tl-btn"))return;

function startPrimeX(){

if(document.getElementById("tl-btn"))return;

let o=document.createElement("div");
o.id="tl-btn";

o.style.cssText="position:fixed;right:20px;bottom:120px;width:85px;height:105px;border-radius:18px;background:#0a0f1d;border:2px solid #00f2fe;z-index:999999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-size:13px;font-weight:bold;cursor:pointer;text-align:center;box-shadow:0 0 20px rgba(0,242,254,0.6);user-select:none;overflow:hidden;touch-action:none;";

let L=document.createElement("div");
L.id="tl-full-scan";
L.style.cssText="position:fixed;top:0;left:0;width:250vw;height:250vh;background:linear-gradient(135deg,rgba(255,255,255,0) 25%,rgba(0,242,254,0.3) 40%,rgba(255,255,255,0.9) 50%,rgba(34,197,94,0.6) 60%,rgba(255,255,255,0) 75%);box-shadow:0 0 100px rgba(255,255,255,0.8),inset 0 0 80px rgba(0,242,254,0.7);z-index:9999999;display:none;pointer-events:none;";

document.body.appendChild(L);

if(!document.getElementById("tl-full-scan-style")){
let st=document.createElement("style");
st.id="tl-full-scan-style";
st.innerHTML="@keyframes tlMirrorFlash{0%{transform:translate(60vw,-70vh)}100%{transform:translate(-70vw,60vh)}}";
document.head.appendChild(st);
}

function playBeep(){
try{
let ctx=new(window.AudioContext||window.webkitAudioContext)();
let now=ctx.currentTime;

[523.25,659.25,783.99,1046.50].forEach((freq,idx)=>{
let osc=ctx.createOscillator();
let gain=ctx.createGain();

osc.type="sine";
osc.frequency.setValueAtTime(freq,now+idx*0.08);

gain.gain.setValueAtTime(0,now+idx*0.08);
gain.gain.linearRampToValueAtTime(0.06,now+idx*0.08+0.04);
gain.gain.exponentialRampToValueAtTime(0.001,now+idx*0.08+0.7);

osc.connect(gain);
gain.connect(ctx.destination);

osc.start(now+idx*0.08);
osc.stop(now+idx*0.08+0.8);
});
}catch(e){}
}

function l(){
o.innerHTML=
'<img src="'+IMAGE_URL+'" style="width:65px;height:65px;object-fit:cover;border-radius:50%;pointer-events:none;border:2px solid #00f2fe;">'+
'<div style="color:#00f2fe;font-size:13px;font-weight:900;margin-top:5px;letter-spacing:1px;pointer-events:none;">Prime X</div>';

o.style.background="#0a0f1d";
}

l();
document.body.appendChild(o);

let i=false,s=false,a=false,r,c,d,S;

o.onpointerdown=e=>{
i=false;
s=false;
o.setPointerCapture(e.pointerId);
r=e.clientX;
c=e.clientY;

let t=o.getBoundingClientRect();
d=t.left;
S=t.top;
};

o.onpointermove=e=>{
if(!i&&Math.abs(e.clientX-r)<4&&Math.abs(e.clientY-c)<4)return;

i=true;
s=true;

let x=d+(e.clientX-r);
let y=S+(e.clientY-c);

o.style.left=Math.max(0,Math.min(x,window.innerWidth-85))+"px";
o.style.top=Math.max(0,Math.min(y,window.innerHeight-105))+"px";
o.style.right="auto";
o.style.bottom="auto";
};

o.onpointerup=e=>{
i=false;
try{o.releasePointerCapture(e.pointerId)}catch(t){}
};

function T(e){

let all=Array.from(document.querySelectorAll("*"));
let target=null;

if(e==="UP"){
target=all.find(el=>
el.childElementCount===0&&
(el.innerText||el.textContent||"").trim().toUpperCase()==="BUY"
||el.classList.contains("btn-success")
||el.classList.contains("btn-call")
);
}else{
target=all.find(el=>
el.childElementCount===0&&
(el.innerText||el.textContent||"").trim().toUpperCase()==="SELL"
||el.classList.contains("btn-danger")
||el.classList.contains("btn-put")
);
}

if(!target){
let buttons=Array.from(document.querySelectorAll("button"));
target=e==="UP"?buttons[buttons.length-2]:buttons[buttons.length-1];
}

if(target){
let rect=target.getBoundingClientRect();
let cx=rect.left+rect.width/2;
let cy=rect.top+rect.height/2;

['pointerdown','mousedown','touchstart','pointerup','mouseup','touchend','click'].forEach(evt=>{
let evOptions={
bubbles:true,
cancelable:true,
view:window,
clientX:cx,
clientY:cy
};

let event;

if(evt.startsWith('touch')){
event=new Event(evt,{bubbles:true,cancelable:true});
}else{
event=new MouseEvent(evt,evOptions);
}

target.dispatchEvent(event);
});
}else{
console.warn("Element not found");
}
}

o.onclick=async()=>{
if(s||a)return;

a=true;

o.innerHTML="<span style='font-size:11px;color:#00f2fe;'>Scanning...</span>";

L.style.display="block";
L.style.animation="tlMirrorFlash 2s linear 1";

playBeep();

await new Promise(e=>setTimeout(e,2000));

L.style.display="none";
L.style.animation="";

let signal=Math.random()>.5?"UP":"DOWN";

T(signal);

o.style.background=signal==="UP"?"#16a34a":"#dc2626";

let t=10;

o.innerHTML=
'<div>'+signal+'</div>'+
'<div style="font-size:11px;margin-top:2px;font-weight:normal;">'+t+'s</div>';

let timer=setInterval(()=>{
--t>0?
o.innerHTML='<div>'+signal+'</div><div style="font-size:11px;margin-top:2px;font-weight:normal;">'+t+'s</div>'
:(clearInterval(timer),l(),a=false);
},1000);
};

}

function showLicense(){

let overlay=document.createElement("div");

overlay.id="prime-x-license";

overlay.style.cssText="position:fixed;inset:0;background:rgba(3,8,20,.97);z-index:99999999;display:flex;align-items:center;justify-content:center;padding:20px;font-family:Arial,sans-serif;";

overlay.innerHTML=`
<div style="width:100%;max-width:340px;background:#0a0f1d;border:1px solid #00f2fe;border-radius:20px;padding:25px;text-align:center;box-shadow:0 0 30px rgba(0,242,254,.25);">

<img src="${IMAGE_URL}" style="width:85px;height:85px;border-radius:50%;object-fit:cover;border:2px solid #00f2fe;">

<h2 style="color:#00f2fe;margin:12px 0 5px;">Prime X</h2>

<p style="color:#aaa;font-size:13px;">LICENSE ACTIVATION</p>

<input id="prime-x-license-input" type="password" placeholder="Enter Your License Key" autocomplete="off" style="box-sizing:border-box;width:100%;padding:14px;border-radius:10px;border:1px solid #00f2fe;background:#101b30;color:white;outline:none;margin:15px 0;">

<button id="prime-x-activate" style="width:100%;padding:13px;background:#00d9ed;color:#00101a;border:0;border-radius:10px;font-weight:bold;font-size:15px;cursor:pointer;">
ACTIVATE PRIME X
</button>

<p id="prime-x-license-error" style="color:#ff5555;font-size:13px;min-height:18px;"></p>

<div style="color:#64748b;font-size:11px;">Secure Access • Prime X</div>

</div>
`;

document.body.appendChild(overlay);

let input=overlay.querySelector("#prime-x-license-input");
let btn=overlay.querySelector("#prime-x-activate");
let error=overlay.querySelector("#prime-x-license-error");

function verify(){

let entered=input.value.trim();

if(entered===LICENSE_KEY){

try{
localStorage.setItem(STORAGE_KEY,"active");
}catch(e){
error.textContent="Browser storage unavailable.";
return;
}

overlay.remove();
startPrimeX();

}else{

error.textContent="Invalid License Key! Try Again.";
input.value="";
input.focus();

}
}

btn.onclick=verify;

input.onkeydown=e=>{
if(e.key==="Enter")verify();
};

input.focus();
}

try{

if(localStorage.getItem(STORAGE_KEY)==="active"){
startPrimeX();
}else{
showLicense();
}

}catch(e){
showLicense();
}

})();
