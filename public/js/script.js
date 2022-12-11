// ambil element html
const boxInputPlayerName = document.querySelector(".insert-player-name");
const inputPlayerName = document.querySelector(".insert-player-name .input-player-name");
const btnInputName = document.querySelector(".insert-player-name .btn-input-name");
const homePage = document.querySelector(".home-page");
const alertNamaKosong = document.querySelector(".insert-player-name .alert-nama-kosong");
const playerName = document.querySelector(".home-page .sapa .player-name");
//
let namaPlayer;

namaKosong = () => {
   alertNamaKosong.innerHTML = "dibilang jangan dikosongin, isi!";
   alertNamaKosong.classList.remove("text-yellow-400");
   alertNamaKosong.classList.add("text-red-400");
};

btnInputName.addEventListener("click", () => {
   if (inputPlayerName.value == "") return namaKosong();
   namaPlayer = inputPlayerName.value;
   boxInputPlayerName.classList.add("hidden");
   homePage.classList.remove("hidden");
   playerName.innerHTML = `${namaPlayer}`;
});
