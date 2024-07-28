// place files you want to import through the `$lib` alias in this folder.

import {
    writable
} from 'svelte/store';



export let menu = writable([{
    name: "home",
    uri: "/"
}, 
{
    name: "Intersection Observer",
    uri: "/intersection-observer"
}, 
{
    name: "Snake",
    uri: "/snake"
}
])

export const selectItemMenu = (el, menu) => {
    console.log(el.target, menu)
    menu.map(item => {
        (item.uri === el.target.href) ? item.selected = true: item.selected = false

        menu = [...menu]
    })
}