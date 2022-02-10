/**
 * Define all constants here at top.
 * In future we might change it on the fly
 */
const ana2voriRate = 16; // 16 anay ek vori. Bhai bolse :)
const singaraPrice = 7;
const shomucaPrice = 10;
const jilapiPrice = 15;


 
/**
 * Function that return ana to vori
 * @param {number} ana
 * @returns {number} converted output to vori or zero incase of error
 */
function anaToVori(ana) { 
  // Initial result value
  var result = 0;
  if (ana > 0) result = ana/ana2voriRate;
  return result;
}


/**
 * Function that returns total Premium cost for Premium Food
 * Must order at least one food.
 * Any one food can selected. Will be handled on fronted-end logic
 * @param {number} singara
 * @param {number} shamuca
 * @param {number} jilapi
 * @returns {number} Total Premium price or zero incase of error
 */
function pandaCost(singara = 0, shamuca = 0, jilapi = 0) { 
  // Initial result value
  var result = 0;
  // Must order at least one food. This will be check for it later
  var isAllZero = true;

  // Not a es6 standard. I didn't break any rules
  // Check docs here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#browser_compatibility
  // For zero arguments returns emptyness
  if (arguments.length < 1) return result;
  
  // Too lazy too check all manually, checking if arguments are bigger than zero
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > 0) isAllZero = false;
  }

  // Must order at least one food.
  if (isAllZero) return result;

  result = (singara*singaraPrice) + (shamuca*shomucaPrice) + (jilapi*jilapiPrice);

  return result;

}

/**
 * Function that returns total budget for picnic
 * @param {number} persons
 * @returns {number} Total Budget for picnic or zero incase of error
 */
function picnicBudget(persons = 1) { 
  // Initial result value
  var result = 0;

  // Checking if it's a number
  // Check Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(persons)) return result;

  // Can't book a hotel without a person
  if (persons < 1) return result;

  // Hard coded math, nothing special
  switch (true) {
    case persons > 200:
      return (100*5000) + (100*4000) + ((persons-200)*3000);
    case persons > 100:
      return (100*5000) + ((persons-100)*4000);
    default:
      return persons*5000;
  }
}


/**
 * Function that returns 1st friends name
 * with name chachter length being odd.
 * @param {object} friendsArr
 * @returns {string} Friend's name or "empty string" incase of error
 */
function oddFriend(friendsArr) { 
  // Initial result value
  var result = "";

  // Check docs here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  if (!Array.isArray(friendsArr)) return result;

  // Strings also has length property, so checking length after array validation
  if(friendsArr.length < 1) return result;

  // No need for a break, return kills the function
  for (var i = 0; i < friendsArr.length; i++) {
    if (friendsArr[i].length%2 != 0) return friendsArr[i];
  }
  
  // Last hope
  return result;
}