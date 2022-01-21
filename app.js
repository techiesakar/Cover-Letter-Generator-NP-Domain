// for date
var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
var today = new Date();
const dateFormatted = today.toLocaleDateString("en-US", options);

// date ends

const inputfields = document.querySelector(".domain-form");
const output = document.querySelector(".output");

let inputShow = true;

function toggle() {
  document.getElementById("formWrapper").style.display = "none";
  document.getElementById("capture").style.display = "block";
  document.getElementById("generate-form").style.display = "none";
  document.getElementById("download").style.display = "block";

  if (inputShow) {
    inputfields.style.display = "none";
    inputShow = false;
    output.innerHTML = `
      <div class="user-info">
      <div class="user-info-content">
       <span class="name text-capitalize text-bold">${inputfields["name"].value}</span>
       <div class="email"><span class="text-bold">Email: </span><span>${inputfields["email"].value}</span></div>
      <span class="phone-number"><span class="text-bold">Mobile: </span><span>${inputfields["phone"].value}</span></span>
      </div>
    </div>
<div class="merchantile-info">
<p>The HostMaster</p>
<p>NP ccTLD Registration Services</p>
<p>Mercantile Communications Pvt. Ltd.</p>
<p>Hiti Pokhari, Durbarmarg, Kathmandu, Nepal</p>
<p> Email: hostmaster@mercantile.com.np</p>



</div>

<div class="cover-body">

<p class="text-right"><span id="todayDate" class="date">${dateFormatted}</span></p>

       

<p class="subject"> Subject: Application for ${inputfields["dname"].value} domain registration </p>

<p>Dear Sir/Madam,</p>
<p>I'm writing this for the request of registration of domain under my name <span class="text-capitalize">${inputfields["name"].value}</span> with domain name ${inputfields["dname"].value} </p><p>
I've followed all the Terms & Conditions for Domain Name Registration Under NP CCTLD </span>
    mentioned in “https://register.com.np/terms-and-conditions”. I've also attached scanned copy of my citizenship certificate with this application.</p>
<p>I'll be very happy if you register the domain as soon as possible. I look forward to hearing from you soon.</p>
    <span> Your Sincerely,</span> <br><span class="text-capitalize">${inputfields["name"].value}</span>
    </div>
         `;
  } else {
    inputfields.style.display = "block";
    inputShow = true;
    output.innerHTML = "";
  }
}
