particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#FFB6C1", "#87CEEB", "#98FB98", "#DDA0DD", "#F0E68C"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.2,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#FFB6C1",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
                enable: true,
                rotateX: 1200,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "bubble"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            },
            bubble: {
                distance: 200,
                size: 12,
                duration: 0.4,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 150,
                duration: 0.4
            }
        }
    },
    retina_detect: true
}); 