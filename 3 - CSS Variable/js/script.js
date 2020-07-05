'use strict'

let inputs = document.querySelectorAll('.controls input');
function  changedUpdate () {
    let suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', changedUpdate));
inputs.forEach(input => input.addEventListener('mousemove', changedUpdate));