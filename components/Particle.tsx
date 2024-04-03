"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Particle = () => {
   const [init, setInit] = useState(false);

   const particlesInit = useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadFull(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = useCallback(async () => {}, []);
   return (
      init && (
         <Particles
            className="h-screen"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
               fullScreen: { enable: false },
               fpsLimit: 120,
               interactivity: {
                  events: {
                     onHover: {
                        enable: true,
                        mode: "repulse",
                     },
                     resize: true,
                  },
                  modes: {
                     repulse: {
                        distance: 100,
                        duration: 0.4,
                     },
                  },
               },

               particles: {
                  color: {
                     value: "#EE0F0F",
                  },
                  links: {
                     color: "#EE0F0F",
                     distance: 150,
                     enable: true,
                     opacity: 0.5,
                     width: 2,
                  },
                  collisions: {
                     enable: true,
                  },
                  move: {
                     enable: true,
                     direction: "top-left",
                     outModes: {
                        default: "bounce",
                     },
                     random: true,
                     straight: false,
                     speed: 1,
                  },
                  number: {
                     density: {
                        enable: true,
                        area: 800,
                     },
                     value: 200,
                  },
                  opacity: {
                     value: 0.5,
                  },
                  shape: {
                     type: "circle",
                  },
                  size: {
                     value: { min: 1, max: 5 },
                  },
               },
               detectRetina: true,
            }}
         />
      )
   );
};

export default Particle;
