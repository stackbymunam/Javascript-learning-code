let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();
  
  if (alarmTime) {
    const nowTime = now.getHours().toString().padStart(2, '0') + ":" +
                    now.getMinutes().toString().padStart(2, '0');
    if (nowTime === alarmTime) {
      document.getElementById('alarmSound').play();
      alert("Wake up! 🛌⏰");
      alarmTime = null;  // Reset after playing
    }
  }
}

function setAlarm() {
  const input = document.getElementById('alarmTime').value;
  if (input) {
    alarmTime = input;
    alert(`Alarm set for ${alarmTime}`);
  }
}

setInterval(updateClock, 1000);
