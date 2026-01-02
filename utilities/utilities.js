function convertedInnerText(id) {
    const allInnerText = document.getElementById(id).innerText;
    const convertedAllInnerText = parseInt(allInnerText);
    return convertedAllInnerText;
}

function setInnerText(id, innerText) {
    document.getElementById(id).innerText = innerText;

}

function btnDisabled(id) {
    document.getElementById(id).disabled = true;

}

function activityBoxSetInnerTaxt(id ,time ) {
    const createElement = document.createElement('p')
    createElement.innerText = `You have completed the task ${id} at ${time}`;

    const activityBox = document.getElementById('activity-box');
    activityBox.appendChild(createElement);
    createElement.classList.add('comment')
    
}
