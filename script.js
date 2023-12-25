function handleClick(){
        // JavaScript to handle the button click event
            var giftBox = document.getElementsByClassName('money');
                giftBox[0].style.display = "block";
                    const element = giftbox[0];
  let currentNumber = 0;

  const interval = duration / maxNumber;
  const intervalId = setInterval(() => {
    currentNumber++;
    element.textContent = currentNumber;

    if (currentNumber >= maxNumber) {
      clearInterval(intervalId);
    }
  }, interval);

}
