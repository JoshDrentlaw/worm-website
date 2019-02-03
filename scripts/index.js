(function() {
    let weekday = new Date().getDay();
    const weekdays = document.getElementById('weekdays').children;
    weekdays.item(weekday).classList.add('bg-info', 'text-light');
}());