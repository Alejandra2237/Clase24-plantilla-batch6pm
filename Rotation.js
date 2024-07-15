//Rotación de terreno
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          //Rotar con flecha derecha
          
        }
        if (e.key === "ArrowLeft") {
          //Rotar con flecha izquierda
          
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //Componente de rotación del avión
  AFRAME.registerComponent("plane-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //obtener la información de los atributos
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var planeRotation = this.data.speedOfRotation;      
        var planePosition = this.data.speedOfAscent;
  
        //controlar los atributos con las flechas del teclado
        /*if (e.key === "ArrowRight") {
          if (planeRotation.x > -10) {
            planeRotation.x -= 0.5;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (planeRotation.x < ) {
            planeRotation.x = ;
            this.el.setAttribute("rotation", planeRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (planeRotation.z > ) {
            planeRotation.z = ;
            this.el.setAttribute("rotation", planeRotation);
          }
          if (planePosition.y < ) {
            planePosition.y = ;
            this.el.setAttribute("position", planePosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (planeRotation.z < ) {
            planeRotation.z = ;
            this.el.setAttribute("rotation", planeRotation);
          }
          if (planePosition.y > ) {
            planePosition.y = ;
            this.el.setAttribute("position", planePosition);
          }
        }*/
      });
    }
  });
  
  
