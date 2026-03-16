const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vT9-C6I8cgaQuPAVggcc8osrWEjO7f8vJWC4hVQ83W78NkxrB_8QoBYDEGzWv0ljpMfKRJJTyM31mRF/pub?gid=0&single=true&output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

const rows = data.split("\n").slice(1);

let html = "";

rows.forEach(row => {

const cols = row.split(",");

const avenger = cols[0];
const from = cols[1];
const to = cols[2];
let status = cols[3];

if(!status || status.trim() === ""){
status = "Pending";
}

const className =
status.toLowerCase() === "done"
? "done"
: "pending";

html += `
<div class="card ${className}">

<div class="name">🦸 ${avenger}</div>

<div class="date">From: ${from}</div>
<div class="date">To: ${to}</div>

<div class="status">
${status === "Done" ? "✅ Paid" : "⏳ Pending"}
</div>

</div>
`;

});

document.getElementById("cards").innerHTML = html;

});