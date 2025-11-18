import { Transmit } from '@adonisjs/transmit-client'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const transmit = new Transmit({
  baseUrl: window.location.origin})

document.addEventListener("DOMContentLoaded", () => {
    initRealtime()
})


async function initRealtime() {
    const sub = transmit.subscription('/notification')
    sub.onMessage((payload) => {
        toastr.success(payload.message, payload.title);
    })
    await sub.create()
}


