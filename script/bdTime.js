function getBDTime() {
  const now = new Date();

  const options = {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const bdTime = now.toLocaleTimeString('en-US', options);
  return bdTime; // return করে দিলাম
}



// <----------------- every day Date  chang korbe -------------->
function updateBDDate() {
    const now = new Date();

    const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    };

    const bdDate = now.toLocaleDateString('en-US', options)
        .replace(',', '');

    document.getElementById('bdDate').innerText = bdDate;
}

updateBDDate();

// <----------------- every day Day chang korbe -------------->
function updateBDDay() {
    const now = new Date();

    const options = {
        timeZone: 'Asia/Dhaka',
        weekday: 'short'
    };

    const day = now.toLocaleDateString('en-US', options);

    document.getElementById('bdDay').innerText = day + ' ,';
}

updateBDDay();























// function updateBDDayDate() {
//     const now = new Date();

//     // Day (Wed)
//     const dayOptions = {
//         timeZone: 'Asia/Dhaka',
//         weekday: 'short'
//     };
//     const day = now.toLocaleDateString('en-US', dayOptions);

//     // Date (Jul 28 2025)
//     const dateOptions = {
//         timeZone: 'Asia/Dhaka',
//         year: 'numeric',
//         month: 'short',
//         day: '2-digit'
//     };
//     const date = now
//         .toLocaleDateString('en-US', dateOptions)
//         .replace(',', '');

//     document.getElementById('bdDay').innerText = day + ' ,';
//     document.getElementById('bdDate').innerText = date;
// }

// updateBDDayDate();