function hisobla() {
  const asosiySon = parseFloat(document.getElementById("asosiySon").value);
  if (isNaN(asosiySon)) {
    alert("Iltimos, asosiy sonni kiriting!");
    return;
  }

  const loglar = [
    { qiymat: 9.97, nom: "JUDA KICHIK" },
    { qiymat: 9.96, nom: "ENG KICHIK" },
    { qiymat: 9.93, nom: "JUDA KICHIK" },
    { qiymat: 9.92, nom: "KICHIK" },
    { qiymat: 9.9, nom: "KICHIK" },
    { qiymat: 9.81, nom: "KICHIK ISHLASA BOLADI" },
    { qiymat: 9.8, nom: "ORTACHA" },
    { qiymat: 9.79, nom: "KICHIK ISHLASA BOLADI" },
    { qiymat: 9.73, nom: "ORTACHA" },
    { qiymat: 9.52, nom: "KATTA PUNKT" }
  ];

  const natijalar = loglar.map(entry => {
    const logVal = Math.log10(entry.qiymat);
    const natija = asosiySon * logVal;

    const formatlangan = natija.toFixed(2);

    return `<p><b>${entry.nom}:</b> ${formatlangan}</p>`;
  });

  document.getElementById("natijalar").innerHTML = natijalar.join("");
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        location.reload();
    }
});
function refreshPage() {
    location.reload();
}