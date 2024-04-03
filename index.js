let ikkilikSon = document.querySelector(".input-ikkilik");
let onlikSon = document.querySelector(".input-onlik");
let ikkilikSon2 = document.querySelector(".input-ikkilik-2");
let onoltilikSon = document.querySelector(".input-onoltilik");
let ikkilikTugma = document.querySelector(".btn-ikkilik");
let onlikTugma = document.querySelector(".btn-onlik");
let onoltilikTugma = document.querySelector(".btn-onoltilik");
let onoltilikTugma2 = document.querySelector(".btn-onoltilik2");
let natijaIkkilik = document.querySelector(".natija-ikkilik");
let natijaOnlik = document.querySelector(".natija-onlik");
let natijaOnoltilik = document.querySelector(".natija-onoltilik");
let natijaIkkilik2 = document.querySelector(".natija-ikkilik-2");
let son01 = document.querySelector(".input-son1");
let son02 = document.querySelector(".input-son2");
let natija = document.querySelector(".natija");
let btnNatija = document.querySelector(".btn-natija");
let select = document.querySelector(".select");

function twoToTen(ikkilikSon) {
    return parseInt(ikkilikSon, 2).toString(10);
}

function tenToTwo(onlikSon) {
    return parseInt(onlikSon, 10).toString(2);
}

function tenToSixteen(ikkilikSon2) {
    return parseInt(ikkilikSon2, 2).toString(16);
}

function SixteenToTwo(onoltilikSon) {
    return parseInt(onoltilikSon, 16).toString(2);
}

function yigindi(son1, son2) {
    son1 = twoToTen(son1);
    son2 = twoToTen(son2);
    add = Number(son1) + Number(son2);
    return tenToTwo(add);
}

function kopaytma(son1, son2) {
    son1 = twoToTen(son1);
    son2 = twoToTen(son2);
    add = son1 * son2;
    return tenToTwo(add);
}

ikkilikTugma.addEventListener("click", (e) => {
    e.preventDefault();
    if (ikkilikSon.value) {
        n = twoToTen(ikkilikSon.value);
        natijaOnlik.textContent = `Natija: ${n}`
    } else {
        natijaOnlik.textContent = `Xatolik: Ikkilik sanoq sistemasidagi sonni kiriting ...`
    }
});

onlikTugma.addEventListener("click", (e) => {
    e.preventDefault();
    if (onlikSon.value) {
        n = tenToTwo(onlikSon.value);
        natijaIkkilik.textContent = `Natija: ${n}`
    } else {
        natijaIkkilik.textContent = `Xatolik: Onlik sanoq sistemasidagi sonni kiriting ...`
    }
});

onoltilikTugma.addEventListener("click", (e) => {
    e.preventDefault();
    if (ikkilikSon2.value) {
        n = tenToSixteen(ikkilikSon2.value);
        natijaOnoltilik.textContent = `Natija: ${n}`
    } else {
        natijaOnoltilik.textContent = `Xatolik: Ikkilik sanoq sistemasidagi sonni kiriting ...`
    }
});

onoltilikTugma2.addEventListener("click", (e) => {
    e.preventDefault();
    if (onoltilikSon.value) {
        n = SixteenToTwo(onoltilikSon.value);
        natijaIkkilik2.textContent = `Natija: ${n}`
    } else {
        natijaIkkilik2.textContent = `Xatolik: O'noltilik sanoq sistemasidagi sonni kiriting ...`
    }
});

btnNatija.addEventListener("click", (e) => {
    e.preventDefault();
    son1 = son01.value;
    son2 = son02.value;
    if (son1 && son2) {
        if (select.value == "1") {
            natija.textContent = `Yig'indi: ${yigindi(son1, son2)}`;
        } else if (select.value == "2") {
            natija.textContent = `Ko'paytma: ${kopaytma(son1, son2)}`;
        } else if (select.value = "Amalni tanlang") {
            natija.textContent = `Amalni tanlang`;
        }
    }
});

select.addEventListener("change", (e) => {
    e.preventDefault();
    if (select.value == "1") {
        btnNatija.textContent = "Sonlarni yig'indisini hisoblash";
    } else if (select.value == "2") {
        btnNatija.textContent = "Sonlarni ko'paytmasini hisoblash";
    }
})