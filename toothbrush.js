let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    dragRotate: true,


    rotate: { y: Zdog.TAU / 5, x: -Zdog.TAU / 15 },

});

// add circle
let base = new Zdog.Box({
    addTo: illo,
    width: 50,
    height: 10,
    depth: 80,
    stroke: false,
    color: 'grey', // default face color
    leftFace: 'grey',
    rightFace: 'grey',
    topFace: 'red',
    bottomFace: 'red',
});

let basetwist = new Zdog.Box({
    addTo: base,
    width: 50,
    height: 10,
    depth: 100,
    stroke: false,
    color: 'grey', // default face color
    leftFace: 'grey',
    rightFace: 'grey',
    topFace: 'red',
    bottomFace: 'red',
    translate: { z: 85, y: -18 },

    rotate: { x: Zdog.TAU / 17 },
});

let longbase = new Zdog.Box({
    addTo: base,
    width: 50,
    height: 10,
    depth: 300,
    stroke: 1,
    color: 'grey', // default face color
    leftFace: 'grey',
    rightFace: 'grey',
    topFace: 'red',
    bottomFace: 'red',
    translate: { z: 280, y: -35 },


});

let grips = new Zdog.Group({
    addTo: longbase,
    translate: { z: 20 },
});



let grip = new Zdog.Shape({
    addTo: grips,
    path: [
        { x: -15 }, // start at 1st point
        { x: 15 }, // line to 2nd point
    ],
    stroke: 10,
    color: 'white',
    fill: true,
    translate: { z: 100, y: -7 }
});



grip.copy({ translate: { z: 50, y: -6 } });
grip.copy({ translate: { z: 0, y: -6 } });
grip.copy({ translate: { z: -50, y: -6 } });
grip.copy({ translate: { z: -170, y: -6 } });




let paste = new Zdog.Shape({
    addTo: illo,
    path: [
        { x: -30, y: -30 },   // start
        {
            bezier: [
                { x: 0, y: -50 }, // start control point
                { x: 20, y: 60 }, // end control point
                { x: 30, y: 30 }, // end point
            ]
        },
    ],
    closed: false,
    stroke: 20,
    color: '#4da6ff',


    rotate: { x: Zdog.TAU / 6, y: Zdog.TAU / 4 },

    translate: { y: -30 },
});



let bristles = new Zdog.Group({
    addTo: base,

});


let bristle = new Zdog.Cylinder({

    addTo: bristles,

    diameter: 5,
    length: 30,
    stroke: false,
    color: '#e6e6e6',
    backface: 'grey',
    rotate: { x: Zdog.TAU / 4 },
    translate: { x: 15, z: 30, y: -10 }

});

bristle.copy({ translate: { x: 15, z: 20, y: -13 } });
bristle.copy({ translate: { x: 15, z: 10, y: -13 } });
bristle.copy({ translate: { x: 15, z: 0, y: -13 } });
bristle.copy({ translate: { x: 15, z: -10, y: -13 } });
bristle.copy({ translate: { x: 15, z: -20, y: -13 } });
bristle.copy({ translate: { x: 15, z: -30, y: -13 } });


bristle.copy({ translate: { x: 5, z: 30, y: -13 } });
bristle.copy({ translate: { x: 5, z: 20, y: -13 } });
bristle.copy({ translate: { x: 5, z: 10, y: -13 } });
bristle.copy({ translate: { x: 5, z: 0, y: -13 } });
bristle.copy({ translate: { x: 5, z: -10, y: -13 } });
bristle.copy({ translate: { x: 5, z: -20, y: -13 } });
bristle.copy({ translate: { x: 5, z: -30, y: -13 } });


bristle.copy({ translate: { x: -5, z: 30, y: -13 } });
bristle.copy({ translate: { x: -5, z: 20, y: -13 } });
bristle.copy({ translate: { x: -5, z: 10, y: -13 } });
bristle.copy({ translate: { x: -5, z: 0, y: -13 } });
bristle.copy({ translate: { x: -5, z: -10, y: -13 } });
bristle.copy({ translate: { x: -5, z: -20, y: -13 } });
bristle.copy({ translate: { x: -5, z: -30, y: -13 } });


bristle.copy({ translate: { x: -15, z: 30, y: -13 } });
bristle.copy({ translate: { x: -15, z: 20, y: -13 } });
bristle.copy({ translate: { x: -15, z: 10, y: -13 } });
bristle.copy({ translate: { x: -15, z: 0, y: -13 } });
bristle.copy({ translate: { x: -15, z: -10, y: -13 } });
bristle.copy({ translate: { x: -15, z: -20, y: -13 } });
bristle.copy({ translate: { x: -15, z: -30, y: -13 } });





function animate() {

    // rotate illo each frame
    // illo.rotate.y += 0.005;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
}
// start animation
animate();




// update & render
illo.updateRenderGraph();