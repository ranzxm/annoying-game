// AMBIL ELEMENT HTML
const homePage = document.querySelector(".home-page");
const mainPage = document.querySelector(".main-page");
const tombolMulai = document.querySelector(".button-nav .tombol-mulai");
const topMainPage = document.querySelector(".main-page .top");
const levelPlayer = topMainPage.querySelector(".level h1 .num-of-level");
const nyawaPlayer = topMainPage.querySelector(".nyawa h1 .num-of-nyawa");
const content = document.querySelector(".main-page .center");
const correctPopUp = document.querySelector(".main-page .cakep");
const backButton = document.querySelector(".main-page .bottom .kembali");
let contentArr = Array.from(content.children);

// EVENT CLICK TOMBOL MULAI
tombolMulai.addEventListener("click", () => {
   homePage.classList.remove("flex");
   homePage.classList.add("hidden");
   mainPage.classList.remove("hidden");
   mainPage.classList.add("flex");
   mains[mainObj[0]].main();
});

let levelCondition = 0;
let nyawa = 3;
let level = 1;

const mains = {
   level1: {
      level: 1,
      soal: `tekan untuk lanjut ke level selanjutnya`,
      main: () => {
         levelCondition = 0;
         lvl1Main = () => {
            const divElSoal = document.createElement("div");
            divElSoal.classList.add("h-full", "div-el-soal", "flex", "items-center");
            const elSoal = document.createElement("h1");
            const isiSoal = document.createTextNode(`${mains.level1.soal}`);
            elSoal.append(isiSoal);
            divElSoal.append(elSoal);

            levelPlayer.innerHTML = mains.level1.level;
            setInterval(() => {
               nyawaPlayer.innerHTML = nyawa;
            }, 100);
            content.append(divElSoal);

            const elUniqeLevel1 = document.createElement("span");
            const isiUniqeLevel1 = document.createTextNode("sembarang ");
            elUniqeLevel1.classList.add("uniqe-lvl1");
            elUniqeLevel1.append(isiUniqeLevel1);

            const bar1 = elSoal.firstChild.splitText(6);

            elSoal.insertBefore(elUniqeLevel1, bar1);
            const uniqelvl1 = document.querySelector(".center .div-el-soal h1").firstElementChild;
            divElSoal.addEventListener("click", (e) => {
               if (e.target.classList.contains("uniqe-lvl1")) {
                  divElSoal.remove();
                  correctPopUp.classList.remove("hidden");
                  correctPopUp.classList.add("flex");
                  correctPopUp.addEventListener("click", (e) => {
                     if (e.target.classList.contains("next-button")) {
                        correctPopUp.classList.remove("flex");
                        correctPopUp.classList.add("hidden");
                     }
                  });
                  mains[mainObj[1]].main();
               } else {
                  nyawa--;
                  if (nyawa == 0) {
                     alert("bodoh, gitu aja gabisa !");
                     alert("mikir pake otak, biar bisa lanjut");
                     return reset();
                  }
               }
            });
         };

         if (levelCondition == 0) {
            return lvl1Main();
         }
      },
   },
   level2: {
      level: 2,
      main: () => {
         levelPlayer.innerHTML = mains.level2.level;
         setInterval(() => {
            nyawaPlayer.innerHTML = nyawa;
         }, 100);

         const elSoal = document.createElement("div");
         const textSoal = document.createTextNode(
            "wahyu pergi nyari sesuatu, terus pulang malah babak belur. apa yang dia cari ?"
         );
         const elPilihan = document.createElement("div");
         elPilihan.classList.add("px-4", "mt-9", "grid", "grid-cols-2", "gap-5", "w-full");

         // create node
         const elPil1 = document.createElement("h1");
         elPil1.classList.add("pilihan", "text-2xl", "cursor-pointer", "bg-teal-600", "py-2", "px-4", "rounded", "shadow-md");
         elPil1.append(document.createTextNode("masalah"));
         const elPil2 = document.createElement("h1");
         elPil2.classList.add("pilihan", "text-2xl", "cursor-pointer", "bg-teal-600", "py-2", "px-4", "rounded", "shadow-md");
         elPil2.append(document.createTextNode("pacar"));
         const elPil3 = document.createElement("h1");
         elPil3.classList.add("pilihan", "text-2xl", "cursor-pointer", "bg-teal-600", "py-2", "px-4", "rounded", "shadow-md");
         elPil3.append(document.createTextNode("uang"));
         const elPil4 = document.createElement("h1");
         elPil4.classList.add("pilihan", "text-2xl", "cursor-pointer", "bg-teal-600", "py-2", "px-4", "rounded", "shadow-md");
         elPil4.append(document.createTextNode("waifu"));

         // render to root pilihan
         elPilihan.append(elPil3, elPil2, elPil1, elPil4);

         // render to root content
         elSoal.classList.add("soal", "text-2xl");
         elSoal.append(textSoal);
         content.append(elSoal, elPilihan);

         // take elements piliha
         const pils = document.querySelectorAll(".pilihan");

         // logic to access next stage
         pils.forEach((e) => {
            e.addEventListener("click", () => {
               if (e.attributes.class.ownerElement.innerHTML == "masalah") {
                  alert("next level masih dalam pengerjaan :)");
                  return reset();
               } else {
                  nyawa--;
                  if (nyawa == 0) {
                     alert("bodoh, gitu aja gabisa !");
                     alert("mikir pake otak, biar bisa lanjut");
                     return reset();
                  }
               }
            });
         });

         // console.log(pils);
      },
   },
};

// create length of object
const mainObj = Object.keys(mains);
const mainObjLength = Object.keys(mains).length;

const reset = () => {
   nyawa = 3;
   mainPage.classList.remove("flex");
   mainPage.classList.add("hidden");
   homePage.classList.remove("hidden");
   homePage.classList.add("flex");
   Array.from(content.children).forEach((e) => {
      e.remove();
   });
};

backButton.addEventListener("click", () => {
   reset();
});
