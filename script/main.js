// card 1
document.getElementById('btn-card1-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const fixMobile = document.getElementById('fix-mobile').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(fixMobile, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');


})

// card 2
document.getElementById('btn-card2-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const secondCardTitle = document.getElementById('card2-title').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(secondCardTitle, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');


})

// card 3
document.getElementById('btn-card3-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const thirdCardTitle = document.getElementById('card3-title').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(thirdCardTitle, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');


})

// card 4
document.getElementById('btn-card4-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const fourthCardTitle = document.getElementById('fourth-card-title').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(fourthCardTitle, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');


})


// card 5
document.getElementById('btn-card5-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const fifthCardTitle = document.getElementById('fifth-card-title').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(fifthCardTitle, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');


})

// card 6
document.getElementById('btn-card6-completed').addEventListener('click', function () {
    alert('board updated Successfully')
    // funtion call kore innerText ke Number  convert 
    const taskAssigned = convertedInnerText('task-assigned')
    const diamondNumber = convertedInnerText('diamond-number')
    // taskAssigned thake -1 
    const taskAssignedDifference = taskAssigned - 1;
    setInnerText('task-assigned', taskAssignedDifference)
    // Diamond added 
    const addDiamondNumber = diamondNumber + 1;
    setInnerText('diamond-number', addDiamondNumber)

    const sixthCardTitle = document.getElementById('sixth-card-title').innerText;
    const bdTime = getBDTime()
    activityBoxSetInnerTaxt(sixthCardTitle, bdTime);
    // btn ta disabled korte use kora hoy 
    this.disabled = true;
    // btnDisabled ('btn-card1-completed');
    alert('Congrates!!! you have completed all task')


})

document.getElementById('clear-history').addEventListener('click',function(){
    const activityBox = document.getElementById('activity-box')
    activityBox.innerHTML = '';

})

document.getElementById('discover-title').addEventListener('click',function(){
    window.location.href = "./anather.html"
})





