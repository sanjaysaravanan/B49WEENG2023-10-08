let count = 0;

const h1Elem = document.querySelector('h1');

h1Elem.innerText = count;

const callback = () => {
  count++;
  h1Elem.innerText = count;
}

let counterIntervalId = null;

const startCounter = () => {
  counterIntervalId = setInterval(callback, 1000);
}

const stopCounter = () => {
  if (counterIntervalId !== null) {
    clearInterval(counterIntervalId)
  };
}

let step = 0;

const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    step++;
    resolve();
  }, 2000);
});


const func = async () => {

  // await timerPromise;

  console.log(step);
}


func();
