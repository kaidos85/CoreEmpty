function notify (str) {
    alert(str);
}

function log(str) {
    console.log(str);
    alert(str);
}

export default {
    notify: notify,
    log: log
}