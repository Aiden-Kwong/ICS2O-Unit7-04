let userAge = 0
let day = null

// Detects if the submit button is clicked, if so, runs function discountCheck.
document.getElementById('btn').addEventListener('click', discountCheck)

// This function will check if the user is eligible for a discount based on age and day.
function discountCheck () {
  // Clear out all messages.
  document.getElementById('age-error').innerHTML = null
  document.getElementById('day-error').innerHTML = null
  document.getElementById('output').innerHTML = null

  // Get user age and set to a number.
  userAge = document.getElementById('age-input').value
  userAge = parseInt(userAge)

  // Get the day, and set it to all uppercase (so it can be compared to word filter without being case sensitive.)
  day = document.getElementById('day-input').value
  day = day.toUpperCase()
  console.log(day)

  // If age is not a number or not realistic, do this:
  if (isNaN(userAge) || userAge <= 0 || userAge >= 200) {
    // Send error message.
    document.getElementById('age-error').innerHTML = 'Please enter a valid age, using numerical symbols.'

  // If age is valid, compare with word filter. 
  } else if (day === 'MONDAY' || day === 'TUESDAY' || day === 'WEDNESDAY' || day === 'THURSDAY' || day === 'FRIDAY' || day === 'SATURDAY' || day === 'SUNDAY') {
    
    // If user is either between 12 and 21 years of age, or the day is Tuesday or Thursday, continue.
    if ((userAge > 12 && userAge < 21) || (day === 'TUESDAY' || day === 'THURSDAY')) {
      // Output message, user is elgible for discount.
      document.getElementById('output').innerHTML = 'You are eligible for a discount!'
      
      // If the above conditions are false, send message: not eligible.
    } else {
      document.getElementById('output').innerHTML = 'You are not eligible for a discount.'
    }
  // If it fails the word filter, send this message.
  } else {
    document.getElementById('day-error').innerHTML = 'Please check that the day of the week has been spelled correctly.'
  }
}