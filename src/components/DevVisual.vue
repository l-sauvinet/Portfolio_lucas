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

// Quaternion représentant la rotation courante
// On évite les angles d'Euler pour ne pas avoir de problème de sens après rotation
let quat = { w: 1, x: 0, y: 0, z: 0 }

let isDragging = false
let lastMouseX = 0
let lastMouseY = 0
let velX = 0  // inertie après lâcher (axe Y)
let velY = 0  // inertie après lâcher (axe X)

const SIZE = 800
const RADIUS = 300

// Multiplication de quaternions
function quatMul(a, b) {
    return {
        w: a.w*b.w - a.x*b.x - a.y*b.y - a.z*b.z,
        x: a.w*b.x + a.x*b.w + a.y*b.z - a.z*b.y,
        y: a.w*b.y - a.x*b.z + a.y*b.w + a.z*b.x,
        z: a.w*b.z + a.x*b.y - a.y*b.x + a.z*b.w,
    }
}

// Créer un quaternion depuis un axe + angle
function quatFromAxis(ax, ay, az, angle) {
    const s = Math.sin(angle / 2)
    return { w: Math.cos(angle / 2), x: ax*s, y: ay*s, z: az*s }
}

// Normaliser le quaternion pour éviter la dérive
function quatNorm(q) {
    const l = Math.sqrt(q.w*q.w + q.x*q.x + q.y*q.y + q.z*q.z)
    return { w: q.w/l, x: q.x/l, y: q.y/l, z: q.z/l }
}

// Appliquer la rotation du quaternion à un point 3D
function quatRotate(q, x, y, z) {
    // p' = q * p * q^-1
    const px = q.w*x + q.y*z - q.z*y
    const py = q.w*y + q.z*x - q.x*z
    const pz = q.w*z + q.x*y - q.y*x
    const pw = -q.x*x - q.y*y - q.z*z
    return {
        x: pw*(-q.x) + px*q.w + py*(-q.z) - pz*(-q.y),
        y: pw*(-q.y) - px*(-q.z) + py*q.w + pz*(-q.x),
        z: pw*(-q.z) + px*(-q.y) - py*(-q.x) + pz*q.w,
    }
}

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

    const dx = (mx - lastMouseX) * 0.01
    const dy = (my - lastMouseY) * 0.01

    velX = dx
    velY = dy

    // Rotation autour de l'axe Y du monde (gauche/droite)
    if (Math.abs(dx) > 0.0001) {
        const q = quatFromAxis(0, 1, 0, -dx)
        quat = quatNorm(quatMul(q, quat))
    }
    // Rotation autour de l'axe X du monde (haut/bas)
    if (Math.abs(dy) > 0.0001) {
        const q = quatFromAxis(1, 0, 0, -dy)
        quat = quatNorm(quatMul(q, quat))
    }

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

    const techs = ['Vue.js', 'Symfony', 'SQL', 'HTML', 'CSS', 'JS', 'Git', 'C#', 'MySQL', 'React', 'TypeScript', 'Docker', 'Linux', 'PHP', 'Python', 'Node.js', 'MongoDB', 'Tailwind', 'Figma', 'AWS']
    const total = 120
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
        { phi: 0.6,  theta: 2.8 },
        { phi: 1.1,  theta: 3.5 },
        { phi: 1.7,  theta: 0.5 },
        { phi: 2.3,  theta: 4.5 },
        { phi: 2.9,  theta: 1.5 },
        { phi: 0.9,  theta: 6.0 },
        { phi: 1.4,  theta: 1.8 },
        { phi: 2.1,  theta: 3.2 },
        { phi: 2.5,  theta: 5.2 },
        { phi: 1.6,  theta: 4.8 },
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
        const r = quatRotate(quat, x, y, z)
        const scale = (r.z + 2) / 3
        return {
            x: cx + r.x * RADIUS * scale,
            y: cy + r.y * RADIUS * scale,
            z: r.z, scale,
            ox: x, oy: y, oz: z
        }
    }

    function draw() {
        ctx.clearRect(0, 0, SIZE, SIZE)

        if (!isDragging) {
            // Inertie — continue dans la direction du dernier drag
            if (Math.abs(velX) > 0.0001 || Math.abs(velY) > 0.0001) {
                if (Math.abs(velX) > 0.00001) {
                    const q = quatFromAxis(0, 1, 0, velX)
                    quat = quatNorm(quatMul(q, quat))
                }
                if (Math.abs(velY) > 0.00001) {
                    const q = quatFromAxis(1, 0, 0, -velY)
                    quat = quatNorm(quatMul(q, quat))
                }
                velX *= 0.97
                velY *= 0.97
            } else {
                velX = 0
                velY = 0
                // Rotation auto une fois l'inertie épuisée
                const q = quatFromAxis(0, 1, 0, 0.005)
                quat = quatNorm(quatMul(q, quat))
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
                    ctx.font = `600 ${Math.round(p.scale * 18)}px 'Fira Code', monospace`
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