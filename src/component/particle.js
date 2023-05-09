
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Generate from "./generate";

export default function Particle() {
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
const optionsvar={
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffff00"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0,
          sync: false
        }
      },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 4 },
        animation: {
          enable: false,
          speed: 20,
          minimumValue: 4,
          sync: false
        }
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: -0.5
        },
        speed: 5,
        direction: "top",
        random: false,
        straight: false,
        outModes: {
          default: "destroy",
          bottom: "none"
        },
        attract: {
          enable: true,
          distance: 300,
          rotate: {
            x: 600,
            y: 1200
          }
        },
       
      }
    },
    fullScreen: {
        zIndex: -1
      },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    background: {
      color: "#000000"
    },
    emitters: [
      {
        direction: "top",
        particles: {
          color: "#f00"
        },
        rate: {
          quantity: 1,
          delay: 0.1
        },
        size: {
          width: 100,
          height: 10
        },
        position: {
          x: 50,
          y: 100
        }
      },
      {
        direction: "top",
        particles: {
          color: "#0f0"
        },
        rate: {
          quantity: 1,
          delay: 0.1
        },
        size: {
          width: 100,
          height: 10
        },
        position: {
          x: 50,
          y: 100
        }
    },
    ]
}

  return (
    <div className="App" >
      <p className="title">QR Generator</p>
      <br />
      <br />
        <div>
        <Generate/>
        </div>
      

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={optionsvar}
    />
    </div>
  );
}