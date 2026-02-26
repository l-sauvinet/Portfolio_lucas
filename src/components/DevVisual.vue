<template>
    <div class="sphere-container">
        <canvas
            ref="canvas"
            class="sphere-canvas"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @mouseleave="onMouseUp"
        ></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationId = null

let angleY = 0
let angleX = 0
let isDragging = false
let lastMouseX = 0
let lastMouseY = 0
let velX = 0
let velY = 0

const SIZE = 800
const RADIUS = 300

function onMouseDown(e) {
    const rect = canvas.value.getBoundingClientRect()
    const mx = (e.clientX - rect.left) * (SIZE / rect.width)
    const my = (e.clientY - rect.top) * (SIZE / rect.height)
    const dx = mx - SIZE / 2
    const dy = my - SIZE / 2
    if (Math.sqrt(dx * dx + dy * dy) > RADIUS) return
    isDragging = true
    lastMouseX = mx
    lastMouseY = my
    velX = 0
    velY = 0
}

function onMouseMove(e) {
    if (!isDragging) return
    const rect = canvas.value.getBoundingClientRect()
    const mx = (e.clientX - rect.left) * (SIZE / rect.width)
    const my = (e.clientY - rect.top) * (SIZE / rect.height)
    velX = (mx - lastMouseX) * 0.01
    velY = (lastMouseY - my) * 0.01
    angleY += velX
    angleX += velY
    lastMouseX = mx
    lastMouseY = my
}

function onMouseUp() {
    isDragging = false
}

onMounted(() => {
    const c = canvas.value
    const ctx = c.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    c.width = SIZE * dpr
    c.height = SIZE * dpr
    c.style.width = SIZE + 'px'
    c.style.height = SIZE + 'px'
    ctx.scale(dpr, dpr)

    const cx = SIZE / 2
    const cy = SIZE / 2

    const techs = ['Vue.js', 'Symfony', 'SQL', 'HTML', 'CSS', 'JS', 'Git', 'C#', 'MySQL', 'React']
    const total = 80
    const golden = Math.PI * (3 - Math.sqrt(5))
    const points = []

    for (let i = 0; i < total; i++) {
        const y = 1 - (i / (total - 1)) * 2
        const r = Math.sqrt(1 - y * y)
        const theta = golden * i
        points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r, tech: null })
    }

    const techPositions = [
        { phi: 0.5,  theta: 0.0 },
        { phi: 1.0,  theta: 1.2 },
        { phi: 1.6,  theta: 2.5 },
        { phi: 2.2,  theta: 0.8 },
        { phi: 2.8,  theta: 3.8 },
        { phi: 0.8,  theta: 5.0 },
        { phi: 1.3,  theta: 4.2 },
        { phi: 2.0,  theta: 5.8 },
        { phi: 2.6,  theta: 2.0 },
        { phi: 1.8,  theta: 1.0 },
    ]
    techPositions.forEach(({ phi, theta }, i) => {
        points.push({
            x: Math.sin(phi) * Math.cos(theta),
            y: Math.cos(phi),
            z: Math.sin(phi) * Math.sin(theta),
            tech: techs[i]
        })
    })

    function project(x, y, z) {
        const cosX = Math.cos(angleX)
        const sinX = Math.sin(angleX)
        let ry = y * cosX - z * sinX
        let rz = y * sinX + z * cosX

        const cosY = Math.cos(angleY)
        const sinY = Math.sin(angleY)
        let rx = x * cosY + rz * sinY
        let fz = -x * sinY + rz * cosY

        const scale = (fz + 2) / 3
        return {
            x: cx + rx * RADIUS * scale,
            y: cy + ry * RADIUS * scale,
            z: fz, scale,
            ox: x, oy: y, oz: z
        }
    }

    function draw() {
        ctx.clearRect(0, 0, SIZE, SIZE)

        if (!isDragging) {
            angleY += velX
            angleX += velY
            velX *= 0.95
            velY *= 0.95
            if (Math.abs(velX) < 0.0005 && Math.abs(velY) < 0.0005) {
                angleY += 0.005
            }
        }

        const raw = points.map(p => ({ ...project(p.x, p.y, p.z), tech: p.tech }))
        raw.sort((a, b) => a.z - b.z)

        // Lignes
        for (let i = 0; i < raw.length; i++) {
            for (let j = i + 1; j < raw.length; j++) {
                const a = raw[i], b = raw[j]
                const dist = Math.sqrt((a.ox - b.ox) ** 2 + (a.oy - b.oy) ** 2 + (a.oz - b.oz) ** 2)
                if (dist < 0.45) {
                    const alpha = (((a.z + b.z) / 2 + 1) / 2) * 0.25
                    ctx.beginPath()
                    ctx.moveTo(a.x, a.y)
                    ctx.lineTo(b.x, b.y)
                    ctx.strokeStyle = `rgba(41,132,33,${alpha})`
                    ctx.lineWidth = 0.5
                    ctx.stroke()
                }
            }
        }

        // Points et labels
        for (const p of raw) {
            const alpha = ((p.z + 1) / 2) * 0.9 + 0.1
            if (p.tech) {
                const textAlpha = (p.z + 1) / 2
                if (textAlpha > 0.3) {
                    ctx.font = `600 ${Math.round(p.scale * 13)}px 'Fira Code', monospace`
                    ctx.fillStyle = `rgba(12,56,8,${textAlpha * 0.85})`
                    ctx.textAlign = 'center'
                    ctx.textBaseline = 'middle'
                    ctx.fillText(p.tech, p.x, p.y)
                }
            } else {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.scale * 3.5, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(41,132,33,${alpha})`
                ctx.fill()
            }
        }

        animationId = requestAnimationFrame(draw)
    }

    draw()
})

onUnmounted(() => cancelAnimationFrame(animationId))
</script>

<style scoped>
.sphere-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sphere-canvas {
    display: block;
    width: 800px;
    height: 800px;
    cursor: grab;
}

.sphere-canvas:active {
    cursor: grabbing;
}
</style>