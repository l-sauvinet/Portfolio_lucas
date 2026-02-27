<template>
    <div class="cursor" ref="cursor"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)

function onMouseMove(e) {
    cursor.value.style.left = e.clientX + 'px'
    cursor.value.style.top = e.clientY + 'px'
}

function onMouseEnterLink() {
    cursor.value.classList.add('pointer')
}

function onMouseLeaveLink() {
    cursor.value.classList.remove('pointer')
}

function onMouseEnterCanvas() {
    cursor.value.classList.add('grab')
}

function onMouseLeaveCanvas() {
    cursor.value.classList.remove('grab')
    cursor.value.classList.remove('dragging')
}

function onMouseDownCanvas() {
    cursor.value.classList.remove('grab')
    cursor.value.classList.add('dragging')
}

function onMouseUpCanvas() {
    cursor.value.classList.remove('dragging')
    cursor.value.classList.add('grab')
}

function bindLinks() {
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
    })
}

function bindCanvas() {
    document.querySelectorAll('canvas').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterCanvas)
        el.addEventListener('mouseleave', onMouseLeaveCanvas)
        el.addEventListener('mousedown', onMouseDownCanvas)
        el.addEventListener('mouseup', onMouseUpCanvas)
    })
}

onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    bindLinks()
    bindCanvas()
})

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
    })
    document.querySelectorAll('canvas').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterCanvas)
        el.removeEventListener('mouseleave', onMouseLeaveCanvas)
        el.removeEventListener('mousedown', onMouseDownCanvas)
        el.removeEventListener('mouseup', onMouseUpCanvas)
    })
})
</script>

<style scoped>
.cursor {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    user-select: none;
    font-family: 'Fira Code', monospace;
    font-size: 18px;
    font-weight: 700;
    color: #298421;
    line-height: 1;
    transform: rotate(40deg);
    transition: color 0.2s ease, font-size 0.2s ease;
}

.cursor::after {
    content: '</>';
}

.cursor.pointer::after {
    content: '</Click>';
    color: #298421;
    font-size: 15px;
}

.cursor.grab::after {
    content: '</Grab>';
    color: #298421;
    font-size: 15px;
}

.cursor.dragging::after {
    content: '</Drag>';
    color: #298421;
    font-size: 15px;
}
</style>