const packages=[
 {name:"Saa 1",price:500,duration:1,unit:"saa"},
 {name:"Siku 1",price:1000,duration:1,unit:"siku"},
 {name:"Wiki 1",price:5000,duration:7,unit:"siku"},
 {name:"Mwezi 1",price:10000,duration:30,unit:"siku"}
];
const money=n=>"TSh "+Number(n).toLocaleString("en-US");
let selectedPackage=0, selectedMethod="mpesa";
const packageCard=(p,i,compact=false)=>`<button type="button" class="package ${i===selectedPackage?"chosen":""}" data-package="${i}"><span><b>${p.name}</b><small>${p.duration} ${p.unit}</small></span><strong class="price">${money(p.price)}</strong></button>`;
function renderPackages(){
 document.querySelector("#packageList").innerHTML=packages.map((p,i)=>packageCard(p,i)).join("");
 document.querySelector("#paymentPackages").innerHTML=packages.map((p,i)=>packageCard(p,i,true)).join("");
 document.querySelector("#payAmount").value=packages[selectedPackage].price;
 document.querySelector("#selectedSummary").textContent=`Umechagua ${packages[selectedPackage].name} — ${money(packages[selectedPackage].price)}`;
 document.querySelectorAll("[data-package]").forEach(b=>b.addEventListener("click",()=>{selectedPackage=Number(b.dataset.package);renderPackages()}));
}
renderPackages();
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("nav button,.tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.getElementById(b.dataset.tab).classList.add("active")}));
document.querySelector("#freeType").addEventListener("change",e=>document.querySelector("#durationWrap").classList.toggle("hidden",e.target.value!=="timed"));
document.querySelector("#freeForm").addEventListener("submit",e=>{e.preventDefault();const name=document.querySelector("#freeName").value.trim(),user=document.querySelector("#freeUser").value.trim(),type=document.querySelector("#freeType").value,duration=document.querySelector("#duration").value;const item=document.createElement("div");item.className="item";item.textContent=`${name} (${user}) — ${type==="forever"?"FREE bila kikomo":`FREE kwa saa ${duration}`} • haijaunganishwa bado`;document.querySelector("#freeList").prepend(item);e.target.reset();document.querySelector("#durationWrap").classList.add("hidden")});
document.querySelectorAll(".method").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".method").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedMethod=b.dataset.method;document.querySelector("#paymentInfo").textContent=`Umechagua ${b.innerText.trim()}. Weka namba ya simu unayotumia kulipa.`}));
document.querySelector("#copyLipa").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("52130100");document.querySelector("#copyLipa").textContent="Imenakiliwa ✓"}catch{document.querySelector("#paymentInfo").textContent="Lipa Namba: 52130100 — MICKY PHONE ACCESSORIES"}});
document.querySelector("#paymentDemo").addEventListener("click",()=>{const phone=document.querySelector("#payerPhone").value.trim(),amount=Number(document.querySelector("#payAmount").value);if(!phone||!amount){document.querySelector("#paymentInfo").textContent="Tafadhali jaza namba ya simu na kiasi cha malipo.";return}document.querySelector("#paymentInfo").textContent=`Maandalizi yamekamilika: ${money(amount)} kupitia ${selectedMethod}. Malipo hayajatumwa. Ili kutuma ombi na kuthibitisha kiotomatiki, lazima tuunganishe Payment Gateway na webhook salama.`});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));