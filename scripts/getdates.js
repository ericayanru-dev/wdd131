const year = document.querySelector("#currentyear");
const oLastModif = document.querySelector("#modification");

const today = new Date();
const modification = new Date(document.lastModified);

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
oLastModif.innerHTML = `<span class="highlight">${modification.toLocaleString()}</span>`;
