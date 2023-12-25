function handleClick(){
        // JavaScript to handle the button click event
            var giftBox = document.getElementsByClassName('money');
                giftBox[0].style.display = "block";
                    const element = giftBox[0];
  let currentNumber = 0;

  const interval = 20000 / 120;
  const intervalId = setInterval(() => {
    currentNumber++;
    element.textContent = '$'+currentNumber;
          giftBox[0].style.display = "block";
        console.log('hi',currentNumber);
    if (currentNumber >= 120) {
      clearInterval(intervalId);
    }
  }, interval);

}
