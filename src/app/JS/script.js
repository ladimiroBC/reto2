const btn = document.querySelector('.btn');
const cancel = document.getElementById('cancel');
const change = document.querySelector('.change')

function desactivar(x) {
    btn.style.backgroundColor = 'hsl(224, 23%, 55%)';
    x.disabled = true;
}

function cancelOrder(x) {
    cancel.style.color = 'hsl(223, 47%, 23%)';
}

function changeState(x) {
    change.style.textDecoration = 'none';
    change.style.color = ' hsl(224, 23%, 55%)';
}