const calendarButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarDays = 18;

const openDoor = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`;
  event.target.style.opacity = '0';
  event.target.style.backgroundColor = '#8ed6ee';
};

const displayName = (num, event) => {
  const names = ['Paul Tobin', 'Simon Hill', 'Keith Powell'];
  event.target.parentNode.style.innerHTML = name;
  event.target.innerHTML = names[num];
};

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement('div');
    const calendarDoorText = document.createElement('div');

    calendarDoor.classList.add('image');
    calendarDoor.style.gridArea = 'door' + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add('text');
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    charNumber = i + 1;
    let carPath = `./img/got${charNumber}.png`;
    let num = i;

    calendarDoorText.addEventListener('click', openDoor.bind(null, carPath));
    calendarDoorText.addEventListener('click', displayName.bind(null, num));
  }
};

calendarButton.addEventListener('click', createCalendar);
