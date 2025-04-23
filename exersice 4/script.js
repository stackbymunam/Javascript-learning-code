function updateclock() {
    const now = new Date;
    const hour = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const Seconds = String(now.getSeconds()).padStart(2, "0")

    document.getElementById("clock").innerHTML  = `${hour}, ${minutes}, ${Seconds}`
}

setInterval(updateclock, 1000)

updateclock()