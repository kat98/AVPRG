document.body.addEventListener('mousemove', function(e){
   console.log(e.clientX);
   console.log(e.clientY);

   console.log(window.innerWidth);
  console.log(window.innerHeight);
    var frequency = getFrequency(e.clientX)

    var context = new AudioContext();
    var oscillatorNode = context.createOscillator();
    var gainNode = context.createGain();
        
    oscillatorNode.connect(gainNode);
    gainNode.connect(context.destination);

    gainNode.gain.value = (e.clientY/100);
    oscillatorNode.frequency.value = frequency;

    oscillatorNode.start(context.currentTime);
    oscillatorNode.stop(context.currentTime + 1);

});
 function getFrequency(value){
                
                for (let index = 0; index < allFrequencies.length; index++) {
                    const element = allFrequencies[value];
                   return element
       
                }
            }

