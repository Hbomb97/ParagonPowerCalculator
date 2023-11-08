document.getElementById('calculate-button').addEventListener('click', function() { 
  var extraTier5 = parseInt(document.getElementById('extraTier5').value);
  var nonTier5 = parseInt(document.getElementById('nonTier5').value);
  var sacrifices = parseInt(document.getElementById('sacrifices').value);
  var slider = parseInt(document.getElementById('slider').value);
  var pops = parseInt(document.getElementById('pops').value);
  var generated = parseInt(document.getElementById('generated').value);
  var totems = parseInt(document.getElementById('totems').value);
  
  var difficulty = parseFloat(document.getElementById('difficulty').value);
  var price = parseFloat(document.getElementById('paragon').value);
  
  //Power levels
  var extraTier5TowersPower = extraTier5*6000;
  var nonTier5UpgradesPower = nonTier5*100;
  var costOfSacrificesPower = sacrifices/(price/20000);
  var amountInSliderPower = slider/(price*1.05/20000);
  var popCountPower = pops/180;
  var cashGeneratedPower = generated/45;
  var paragonTotemPower = 2000*totems;
  var sacrificesPower;
  var popPower;
  
  //Power Caps
  const extraTier5TowersCap = 50000;
  const nonTier5UpgradesCap = 10000;
  const sacrificesCap = 60000;
  const popCountCap = 90000;
  const paragonTotemCap = 200000;
   
  //Assigning Caps
  if (extraTier5TowersPower > extraTier5TowersCap) {
    extraTier5TowersPower = extraTier5TowersCap;
  }
  
  if (nonTier5UpgradesPower > nonTier5UpgradesCap) {
    nonTier5UpgradesPower = nonTier5UpgradesCap;
  }
  
  if ((costOfSacrificesPower + amountInSliderPower) > sacrificesCap) {
    sacrificesPower = sacrificesCap;
  } else {
    sacrificesPower = costOfSacrificesPower + amountInSliderPower;
  }
  
  if ((popCountPower + cashGeneratedPower) > popCountCap) {
    popPower = popCountCap;
  } else {
    popPower = popCountPower + cashGeneratedPower;
  }
  
  if (paragonTotemPower > paragonTotemCap) {
    paragonTotemPower = paragonTotemCap;
  }

  var power = extraTier5TowersPower + nonTier5UpgradesPower + sacrificesPower + popPower + paragonTotemPower;
  
  // Get a reference to the apexCheckbox
  var apexCheckbox = document.getElementById('apexCheckbox');

  // Determine the value for extraTier5TowersPower based on the conditions
  if (apexCheckbox.checked && power < 56034) {
    extraTier5TowersPower = parseInt(extraTier5, 10) * 10000;
    var power = extraTier5TowersPower + nonTier5UpgradesPower + sacrificesPower + popPower + paragonTotemPower;
  } else {
    extraTier5TowersPower = parseInt(extraTier5, 10) * 6000;
    var power = extraTier5TowersPower + nonTier5UpgradesPower + sacrificesPower + popPower + paragonTotemPower;
  }

  // 
  
  //Making the Power to Degree Array
  const degrees = [0, 2000.246667, 2324.245, 2666.493333, 3027.491667, 3407.74, 3807.738333, 4227.986667, 4668.985,
                   5131.233333, 5615.231667, 6121.48, 6650.478333, 7202.726667, 7778.725, 8378.973333, 9003.971667,
                   9654.22, 10330.21833, 11032.46667, 11761.465, 12517.71333, 13301.71167, 14113.96, 14954.95833,
                   15825.20667, 16725.205, 17655.45333, 18616.45167, 19608.7, 20632.69833, 21688.94667, 22777.945,
                   23900.19333, 25056.19167, 26246.44, 27471.43833, 28731.68667, 30027.685, 31359.93333, 32728.93167,
                   34135.18, 35579.17833, 37061.42667, 38582.425, 40142.67333, 41742.67167, 43382.92, 45063.91833,
                   46786.16667, 48550.165, 50356.41333, 52205.41167, 54097.66, 56033.65833, 58013.90667, 60038.905,
                   62109.15333, 64225.15167, 66387.4, 68596.39833, 70852.64667, 73156.645, 75508.89333, 77909.89167,
                   80360.14, 82860.13833, 85410.38667, 88011.385, 90663.63333, 93367.63167, 96123.88, 98932.87833,
                   101795.1267, 104711.125, 107681.3733, 110706.3717, 113786.62, 116922.6183, 120114.8667, 123363.865,
                   126670.1133, 130034.1117, 133456.36, 136937.3583, 140477.6067, 144077.605, 147737.8533, 151458.8517,
                   155241.1, 159085.0983, 162991.3467, 166960.345, 170992.5933, 175088.5917, 179248.84, 183473.8383,
                   187764.0867, 192120.085, 200000]
  
  function getDegree(degrees, result) {
    for (let i = 0; i < degrees.length; i++) {
      if (degrees[i] > result) {
        return i || 1;
      }
    }
    return 100 || 1;
  }
   
  var degree = getDegree(degrees, power);
  
  // After calculations, show the result display with new styles
  var resultDisplay = document.getElementById('result-display');
  resultDisplay.classList.remove('hidden');
  resultDisplay.classList.add('result-visible');
  
  document.getElementById('result-value').innerHTML = 'Power: ' + power;
  document.getElementById('threshold-value').innerHTML = 'Degree: ' + degree;

  
});

// Define a mapping of paragon values to image URLs
const paragonImages = {
  '150000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/Paragon-ApexPlasmaMaster.png?v=1699458667414',
  '275000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/ParagonGlaiveDominus.png?v=1699458668691',
  '550000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/Navarch.png?v=1699458666897',
  '900000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/GoliathDoomship.png?v=1699458664030',
  '750000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/MagnusPerfectus.png?v=1699458665269',
  '500000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/Paragon-AscendedShadow.png?v=1699458668083',
  '650000': 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/EngineerParagon.png?v=1699458669354',
};

// Function to update the image source based on the selected paragon value
function updateImage() {
  var paragonSelect = document.getElementById('paragon');
  var selectedValue = paragonSelect.value;
  var newImageUrl = paragonImages[selectedValue] || 'https://cdn.glitch.global/afb6a799-2aba-4fa8-907a-82ba4c5852a0/Paragon-ApexPlasmaMaster.png?v=1699458667414';
  document.querySelector('.illustration').src = newImageUrl;
}

// Set up the 'change' event listener for the paragon dropdown
document.getElementById('paragon').addEventListener('change', updateImage);



function toggleApexCheckbox() {
  const paragonValue = document.getElementById('paragon').value; // Get the selected paragon value
  const extraTier5Value = document.getElementById('extraTier5').value; // Get the Extra Tier 5 Towers value

  // Get the checkbox container element
  const checkboxContainer = document.getElementById('apex-checkbox-container');

  // Check both conditions
  if (paragonValue === '150000' && parseInt(extraTier5Value, 10) === 1) {
    // Show the checkbox if the paragon is Apex Plasma Master and Extra Tier 5 Towers is 1
    checkboxContainer.removeAttribute('hidden');
  } else {
    // Hide the checkbox if the conditions are not met and uncheck it
    checkboxContainer.setAttribute('hidden', true);
    document.getElementById('apexCheckbox').checked = false;
  }
}

// Set up the change event listener for the paragon dropdown
document.getElementById('paragon').addEventListener('change', toggleApexCheckbox);

// Set up the input event listener for the Extra Tier 5 Towers input field.
// "input" is used instead of "change" to capture both clicks on arrows and key strokes.
document.getElementById('extraTier5').addEventListener('input', toggleApexCheckbox);
