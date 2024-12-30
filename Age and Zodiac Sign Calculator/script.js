// JavaScript file
// Function to calculate the zodiac sign based on birth date
function getZodiacSign(month, day) {
    const zodiacSigns = [
      { sign: 'Capricorn', endDate: { month: 1, day: 19 } },
      { sign: 'Aquarius', endDate: { month: 2, day: 18 } },
      { sign: 'Pisces', endDate: { month: 3, day: 20 } },
      { sign: 'Aries', endDate: { month: 4, day: 19 } },
      { sign: 'Taurus', endDate: { month: 5, day: 20 } },
      { sign: 'Gemini', endDate: { month: 6, day: 20 } },
      { sign: 'Cancer', endDate: { month: 7, day: 22 } },
      { sign: 'Leo', endDate: { month: 8, day: 22 } },
      { sign: 'Virgo', endDate: { month: 9, day: 22 } },
      { sign: 'Libra', endDate: { month: 10, day: 22 } },
      { sign: 'Scorpio', endDate: { month: 11, day: 21 } },
      { sign: 'Sagittarius', endDate: { month: 12, day: 21 } },
    ];
  
    for (let i = 0; i < zodiacSigns.length; i++) {
      const zodiac = zodiacSigns[i];
      if ((month < zodiac.endDate.month) || (month === zodiac.endDate.month && day <= zodiac.endDate.day)) {
        return zodiac.sign;
      }
    }
    return 'Capricorn'; // If date is after December 21
  }
  
  // Function to calculate the age based on birth date
  function calculateAgeAndZodiac() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    
    if (isNaN(birthDate)) {
      alert('Please select a valid date');
      return;
    }
  
    // Calculate age
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    const finalAge = (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) ? age - 1 : age;
  
    // Get Zodiac sign
    const zodiacSign = getZodiacSign(birthDate.getMonth() + 1, birthDate.getDate());
  
    // Display results
    document.getElementById('age').innerText = `Your Age: ${finalAge} years`;
    document.getElementById('zodiac-sign').innerText = `Your Zodiac Sign: ${zodiacSign}`;
  }
  