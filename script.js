function handleClick(){
        // JavaScript to handle the button click event
            var giftBox = document.getElementsByClassName('money');
                giftBox[0].style.display = "block";
                    const element = giftBox[0];
  let currentNumber = 0;

  const interval = 10000 / 100;
  const intervalId = setInterval(() => {
    currentNumber++;
    element.textContent = currentNumber;
          giftBox[0].style.display = "block";
        console.log('hi',currentNumber);
    if (currentNumber >= 100) {
      clearInterval(intervalId);
    }
  }, interval);

}
