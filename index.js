
javascript:(function(){
"use strict";

const CONFIG={
license:"12345678910sabbirbai",
storage:"prime_x_activation_v1",
image:"https://i.ibb.co/395wVhkN/file-133.jpg",
name:"Prime X"
};

const old=document.getElementById("prime-x-license");
const oldBtn=document.getElementById("tl-btn");
if(old)old.remove();
if(oldBtn)oldBtn.remove();

function startPrimeX(){

if(document.getElementById("tl-btn"))return;

const o=document.createElement("div");
o.id="tl-btn";

o.style.cssText=
"position:fixed;right:20px;bottom:120px;width:85px;height:105px;"+
"border-radius:18px;background:#0a0f1d;border:2px solid #00f2fe;"+
"z-index:999999;display:flex;flex-direction:column;"+
"align-items:center;justify-content:center;color:white;"+
"font-size:13px;font-weight:bold;cursor:pointer;text-align:center;"+
"box-shadow:0 0 20px rgba(0,242,254,.6);"+
"user-select:none;overflow:hidden;touch-action:none;";

const scan=document.createElement("div");
scan.id="tl-full-scan";
scan.style.cssText=
"position:fixed;top:0;left:0;width:250vw;height:250vh;"+
"background:linear-gradient(135deg,transparent 25%,"+
"rgba(0,242,254,.3) 40%,rgba(255,255,255,.9) 50%,"+
"rgba(34,197,94,.6) 60%,transparent 75%);"+
"z-index:9999999;display:none;pointer-events:none;";

document.body.appendChild(scan);

if(!document.getElementById("tl-full-scan-style")){
const style=document.createElement("style");
style.id="tl-full-scan-style";
style.textContent=
"@keyframes tlMirrorFlash{0%{transform:translate(60vw,-70vh)}"+
"100%{transform:translate(-70vw,60vh)}}";
document.head.appendChild(style);
}

function home(){
o.innerHTML=
'<img src="'+CONFIG.image+'" '+
'style="width:65px;height:65px;object-fit:cover;'+
'border-radius:50%;border:2px solid #00f2fe;pointer-events:none;">'+
'<div style="color:#00f2fe;font-size:13px;font-weight:900;'+
'margin-top:5px;letter-spacing:1px;pointer-events:none;">'+
CONFIG.name+'</div>';

o.style.background="#0a0f1d";
}

function beep(){
try{
const ctx=new(window.AudioContext||window.webkitAudioContext)();
const now=ctx.currentTime;

[523.25,659.25,783.99,1046.50].forEach((freq,i)=>{
const osc=ctx.createOscillator();
const gain=ctx.createGain();

osc.type="sine";
osc.frequency.value=freq;

gain.gain.setValueAtTime(.001,now+i*.08);
gain.gain.linearRampToValueAtTime(.06,now+i*.08+.04);
gain.gain.exponentialRampToValueAtTime(.001,now+i*.08+.7);

osc.connect(gain);
gain.connect(ctx.destination);

osc.start(now+i*.08);
osc.stop(now+i*.08+.8);
});
}catch(e){}
}

home();
document.body.appendChild(o);

let dragging=false;
let moved=false;
let busy=false;
let startX=0,startY=0,left=0,top=0;

o.addEventListener("pointerdown",e=>{
dragging=true;
moved=false;
startX=e.clientX;
startY=e.clientY;

const rect=o.getBoundingClientRect();
left=rect.left;
top=rect.top;

o.setPointerCapture(e.pointerId);
});

o.addEventListener("pointermove",e=>{
if(!dragging)return;

if(Math.abs(e.clientX-startX)>4||
Math.abs(e.clientY-startY)>4)moved=true;

if(moved){
const x=left+e.clientX-startX;
const y=top+e.clientY-startY;

o.style.left=Math.max(0,Math.min(x,innerWidth-85))+"px";
o.style.top=Math.max(0,Math.min(y,innerHeight-105))+"px";
o.style.right="auto";
o.style.bottom="auto";
}
});

o.addEventListener("pointerup",()=>{
dragging=false;
});

o.addEventListener("pointercancel",()=>{
dragging=false;
});

function triggerSignal(direction){

let all=Array.from(document.querySelectorAll("*"));
let target=null;

if(direction==="UP"){
target=all.find(el=>
el.childElementCount===0&&
(el.innerText||el.textContent||"").trim().toUpperCase()==="BUY"
);
}else{
target=all.find(el=>
el.childElementCount===0&&
(el.innerText||el.textContent||"").trim().toUpperCase()==="SELL"
);
}

if(!target){
const buttons=Array.from(document.querySelectorAll("button"));
target=direction==="UP"?
buttons[buttons.length-2]:
buttons[buttons.length-1];
}

if(target){
target.click();
}
}

o.addEventListener("click",async()=>{
if(moved||busy)return;
busy=true;

o.innerHTML="<span style='color:#00f2fe;'>Scanning...</span>";

scan.style.display="block";
scan.style.animation="tlMirrorFlash 2s linear 1";

beep();

await new Promise(resolve=>setTimeout(resolve,2000));

scan.style.display="none";
scan.style.animation="";

const signal=Math.random()>.5?"UP":"DOWN";

triggerSignal(signal);

o.style.background=signal==="UP"?"#16a34a":"#dc2626";

let seconds=10;

function countdown(){
o.innerHTML=
'<div>'+signal+'</div>'+
'<div style="font-size:11px;font-weight:normal;margin-top:3px;">'+
seconds+'s</div>';
}

countdown();

const timer=setInterval(()=>{
seconds--;

if(seconds>0){
countdown();
}else{
clearInterval(timer);
home();
busy=false;
}
},1000);

});

}

function showLicense(){

const overlay=document.createElement("div");
overlay.id="prime-x-license";

overlay.style.cssText=
"position:fixed;inset:0;background:rgba(3,8,20,.98);"+
"z-index:2147483647;display:flex;align-items:center;"+
"justify-content:center;padding:20px;font-family:Arial,sans-serif;";

overlay.innerHTML=`
<div style="width:100%;max-width:340px;background:#0a0f1d;
border:1px solid #00f2fe;border-radius:20px;padding:25px;
text-align:center;box-shadow:0 0 30px rgba(0,242,254,.25);">

<img src="${CONFIG.image}" style="width:85px;height:85px;
border-radius:50%;object-fit:cover;border:2px solid #00f2fe;">

<h2 style="color:#00f2fe;margin:12px 0 5px;">Prime X</h2>

<p style="color:#aaa;font-size:13px;">LICENSE KEY ACTIVATION</p>

<input id="px-license-input" type="password"
placeholder="Enter Your License Key"
autocomplete="off"
autocapitalize="off"
spellcheck="false"
style="box-sizing:border-box;width:100%;padding:14px;
border-radius:10px;border:1px solid #00f2fe;
background:#101b30;color:white;outline:none;margin:15px 0;">

<button id="px-license-button"
style="width:100%;padding:14px;background:#00d9ed;
color:#00101a;border:0;border-radius:10px;
font-weight:bold;font-size:15px;cursor:pointer;">
ACTIVATE PRIME X
</button>

<p id="px-license-error"
style="color:#ff5555;font-size:13px;min-height:18px;"></p>

<div style="color:#64748b;font-size:11px;">
Prime X • License Protected
</div>
</div>`;

document.body.appendChild(overlay);

const input=overlay.querySelector("#px-license-input");
const button=overlay.querySelector("#px-license-button");
const error=overlay.querySelector("#px-license-error");

["copy","cut","contextmenu"].forEach(event=>{
input.addEventListener(event,e=>e.preventDefault());
});

function activate(){

if(input.value.trim()!==CONFIG.license){
error.textContent="Invalid License Key! Try Again.";
input.value="";
input.focus();
return;
}

try{
localStorage.setItem(CONFIG.storage,"activated");
}catch(e){
error.textContent="Browser storage unavailable!";
return;
}

overlay.remove();
startPrimeX();
}

button.addEventListener("click",activate);

input.addEventListener("keydown",e=>{
if(e.key==="Enter")activate();
});

input.focus();
}

try{

if(localStorage.getItem(CONFIG.storage)==="activated"){
startPrimeX();
}else{
showLicense();
}

}catch(e){
showLicense();
}

})();
