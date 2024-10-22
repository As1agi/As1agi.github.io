const text =
  "HII😁 SUMMER , I WANTS TO SAY THAT...NAKUPENDA SANA🙈...😫WEWE NI KAREMBO 😍...😔YOUR EYES ZIKO CHARMING , NAZIPENDA SANAA🙈..😔NA HUTO TUDIMPLES TWAKO...KASMILE KAKO NI KAWAII(CUTE)😊 AND YOU LIPS  👄💋 😩I WANNA SUCK THEM...🙃NA GLOBES 😫 OBRA MAESTRA...😔YOU IS A PARADIGAMA DE BALLEZA(PARADIGM OF BEAUTY)...😔NIMEKUKUFIA , NAKUTAKA... 😔NITAKUNULIA SLAVES , NA GIRRAFFES AND CATS 😔 I'LL KIDNAP BTS FOR YOU , AND SIDNEY SHELDON , SO THEY SERVE YOU ALONE , *MI REINA 👑...😔🤓 YOU'VE RE-WRITTEN THE LOGIC IN MY HEART , BYPASSING ALL MY FIREWALLS , AND NOW I'M ENDLESSLY LOOPING THROUGH THOUGHTS OF YOU 😩 YOU MAKE ME ALL LOVEY DOVEY... 😔NATAKA UKUE KIPENSI WANGU  , WATASHI NO AI...I'LL SUCK YOU , AND LICK , AND CUDDLE YOU 😫...😔🙏 NIOE  🧎‍♂️💍  "
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
