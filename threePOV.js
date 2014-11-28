    var loader;

    var container, stats;

    var camera, scene, renderer;

    var mouseX = 0, mouseY = 0;
    var movement = 0.5;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var moonGlow;
    var mesh;
    var mouseX;
    var mouseY;
    var objects = [];
    var vertices;
    var faces; 
    var tempA;
    var tempB;
    var tempC;
    var countFaces = 0;
    var lengthFaces;
    var meshLoaded = false;
    var nbBands = 6;
    var nbBandsNumbers = [];
    var nbBandsLimits = [];
    var faceParent;
    var faceParentlength;
    var countKinectCloud  = 0 ;
    var composer, effectBloom;

    var verticalBandNumber = [];
    var verticalBandLimits = [];
    var nbVerticalBands = 80;
    var isFront = false;
    var lengthMesh = 60;
    var temp;
    var delay = Math.round(lengthMesh / nbBands)*2;
    var updateFlag = true;
    var panel = document.getElementById('panel');
    var canvasGL = null;
    var isPanelOpen = false;
    var hamburger;
    var canColorMesh = false;
    var interval;

    var loaded = false;
    var animNb = 0;
    var positionBuff = [];
    var colorsBuff = [];
    var frame  = [];
    var goDown = false;

    var width = 160;
    var length = 240;

    var effect;

    var scaleValue = {
        val : 150,
        glitch : 0,
        ratio : 0
    };
   
    var cameraPosZ = 5000;

    var canUpdate = true;
    var max = width * length -1;
    var pointSize = 0;
    var loaded = false;
   

    var kinectLimit  = dataKinectAll.length;

    manifest = [
                {src:"obj/land.obj", id:"grant"},
            ];


    loader = new createjs.LoadQueue(true);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", progress);

    loader.loadManifest(manifest);

    cameraX = 0;
    cameraY = 3;
    cameraZ = -69;
    hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", clickMenu);


    function clickMenu(a){

        if(!isPanelOpen){
            scaleAnimBack();
            // TweenLite.to(pcBuffer.material, 0.5, {size : 0});
            
             
             isPanelOpen = true;
        }
        else{

             TweenLite.to(panel, 0.3, {x : -250,ease:Power4.easeInOut });
              TweenLite.to(hamburger, 0.3, {x : 0,ease:Power4.easeInOut });
              front();
             isPanelOpen = false;
        }

      
        


     /*   document.getElementById('loadBar').style.width = (e.loaded*100)+'%'*/

    }

    function progress(e){
      

     /*   document.getElementById('loadBar').style.width = (e.loaded*100)+'%'*/

    }

    function handleComplete(){

  

      /*  TweenLite.to(document.getElementById('loadBar'), 1, {opacity : 0});*/
            init();
            // initGui();
            // initComposer();
            animate();
        
            

    }
    function initGui(){

        
        var gui = new dat.GUI({
            height : 5 * 32 - 1
        });
        var params = {
            bloom1: 0,
            bloom2: 0,
            bloom3: 0,
        };
        gui.add(params, 'bloom1')
        gui.add(params, 'bloom2')
        gui.add(params, 'bloom3')
    }

    function initComposer(){

        var renderModel = new THREE.RenderPass( scene, camera );
                        var effectBloom = new THREE.BloomPass( 1.25 );
                        var effectFilm = new THREE.FilmPass( 0.35, 0.95, 2048, false );

                        effectFilm.renderToScreen = true;

                        composer = new THREE.EffectComposer( renderer );

                        composer.addPass( renderModel );
                        composer.addPass( effectBloom );
                        composer.addPass( effectFilm );

       
    }


    function init() {

        container = document.createElement( 'div' );
        container.id = 'canvasGL';
        document.body.appendChild( container );

        canvasGL = document.getElementById('canvasGL');

        camera = new THREE.PerspectiveCamera( 180, window.innerWidth / window.innerHeight, 1, 50000 );
        camera.position.x=0;
            camera.position.z=-150;
            camera.position.y=0;

        /*    camera.position.z=0;
                camera.position.x=54;
                camera.position.y=5;*/
        // scene
        /*
        camera.position.x=100;
            camera.position.y=100;*/

        scene = new THREE.Scene();


        pcBuffer = generatePointcloud( new THREE.Color( 0x4ea5bf ), width, length );
        pcBuffer.scale.set( 1,-1,1 );

        pcBuffer.position.z = 1800;

        pcBuffer.position.y  = 1400;



        scene.add( pcBuffer );


        pointclouds = [ pcBuffer ];
        loaded = true;
        stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms

        // Align top-left
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        /*   document.body.appendChild( stats.domElement );*/



        var directionalLight = new THREE.DirectionalLight( 0x4ea5bf,0.5 );
        directionalLight.position.set( 1, 1, 0 );

        scene.add( directionalLight );          


        /*
        var directionalLight2 = new THREE.DirectionalLight( 0x4ea5bf,0.4 );
        directionalLight2.position.set( 1, 1, 0 );

        scene.add( directionalLight2 );
        */












        renderer = new THREE.WebGLRenderer( { width:  window.innerWidth, height:  window.innerHeight, scale:1, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);



        container.appendChild( renderer.domElement );


        window.addEventListener( 'resize', onWindowResize, false );




        var manager = new THREE.LoadingManager();   
        var loader = new THREE.OBJLoader( manager );


        loader.load( 'obj/land.obj', function ( object ) {    
            console.log(object)
            mesh = THREE.SceneUtils.createMultiMaterialObject( object.children[0].geometry, [
                new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true,vertexColors: THREE.FaceColors, transparent : true, opacity : 1, shininess: 1000}),
             new THREE.MeshPhongMaterial({color: 0x6eb5df,  shininess: 1000,vertexColors: THREE.FaceColors})




            ]);

            object.position.y = - 30;

            mesh.rotation.y = Math.PI / 2;

            scene.add( mesh );

            objects.push(mesh)

          
            vertices = mesh.children[0].geometry.vertices
            faces = mesh.children[0].geometry.faces
            lengthFaces = faces.length;


            var i=0
            while(i< vertices.length){

                vertices[i].originalY = vertices[i].y;

                vertices[i].y = 0;

                i++;
            }



            meshLoaded = true;

            var k = 0;
            while(k < nbBands){

                var temp = Math.round(Math.random()*lengthMesh);

                nbBandsNumbers.push(  (Math.round(lengthFaces/lengthMesh * temp )) - (delay * k) -1) ;

                if(nbBandsNumbers[k] < 1){
                        nbBandsNumbers[k] = 0;
                        temp = 2;
                }
             
                nbBandsLimits.push(  Math.round(lengthFaces/lengthMesh * (temp-1)));

           
              
                k++;
            }

            meshLoaded = true;



            var k = 0;
            while(k < nbVerticalBands){

                

               
               verticalBandNumber.push(  (Math.round(lengthFaces/lengthMesh * k ))  -1 ) ;
               if(verticalBandNumber[k] < 0){

                    verticalBandNumber[k] = 0;

               }
               
               verticalBandLimits.push(  Math.round(lengthFaces/lengthMesh * (k-1)));


            
              
                k++;
            }
            



            // camera.fov = 90;
            // 

            

            TweenLite.to(camera, 1.5, {fov : 90,g :10, b : 10, onUpdate:cameraUpdate, ease:Power4.easeInOut, onComplete: function(){

                initHeight();
                canColorMesh = true;
                glitch();
            }});
            
            initText();

            faceParent =  parentText.children[0].geometry.faces;
            faceParentlength = faceParent.length;


            effect = new THREE.ParallaxBarrierEffect( renderer );
            effect.setSize( window.innerWidth, window.innerHeight );
            document.addEventListener( 'mousemove', onDocumentMouseDown, false );



        } );

        var windSound = document.getElementById('wind-sound');
                windSound.volume = 1;
                windSound.addEventListener('ended', function(){
                    this.load();
                }, false);










    }



    var projector = new THREE.Projector();

    function cameraUpdate(){

        camera.updateProjectionMatrix();

    }

    function onDocumentMouseDown( event ) {

        event.preventDefault();

        var vector = new THREE.Vector3(
            ( event.clientX / window.innerWidth ) * 2 - 1,
          - ( event.clientY / window.innerHeight ) * 2 + 1,
            0.5
        );
        projector.unprojectVector( vector, camera );

        var ray = new THREE.Raycaster( camera.position, 
        vector.sub( camera.position ).normalize() );

        var intersects = ray.intersectObjects( objects[0].children );

        if ( intersects.length > 0 ) {

            mesh.children[0].geometry.colorsNeedUpdate = true
            mesh.children[1].geometry.colorsNeedUpdate = true
           

            i=0
            while(i<intersects.length){

                TweenLite.fromTo(faces[intersects[i].faceIndex].color, 0.5, {r : 10,g :10, b : 10},{r : 1,g :1, b : 1})  

                TweenLite.fromTo(faces[intersects[i].faceIndex+1].color, 0.5,{r : 8,g :8, b : 8},{r : 1,g :1, b : 1})              

                TweenLite.fromTo(faces[intersects[i].faceIndex-1].color, 0.5, {r : 8,g :8, b : 8},{r : 1,g :1, b : 1})   

                TweenLite.fromTo(faces[intersects[i].faceIndex-2].color, 0.5, {r : 5,g :5, b : 5},{r : 1,g :1, b : 1})          

                TweenLite.fromTo(faces[intersects[i].faceIndex+2].color, 0.5, {r : 5,g :5, b : 5},{r : 1,g :1, b : 1}) 



                if(intersects[i].distance > 32){
                    // intersects[i].point.z += intersects.distance/3;



                    temp = faces[intersects[i].faceIndex]
                    

                    tempA = vertices[temp.a]
                    
                    tempB = vertices[temp.b]
                    
                    tempC = vertices[temp.c]
                    

                    TweenLite.to(tempA, 0.2, {y : tempA.y+2})
                    TweenLite.to(tempB, 0.2, {y : tempB.y+2})
                    TweenLite.to(tempC, 0.2, {y : tempC.y+2})

                    TweenLite.to(tempA, 0.2, {y : tempA.originalY, delay: 0.2})
                    TweenLite.to(tempB, 0.2, {y : tempB.originalY, delay: 0.2})
                    TweenLite.to(tempC, 0.2, {y : tempC.originalY, delay: 0.2})

                   
                }
                
               
                i++;
             
            }      

        }

        mouseX = ( event.clientX ) / window.innerWidth

        mouseY = ( event.clientY ) / window.innerHeight

    }



    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }



    function verticalColorMesh(){


        //verticalMoveLand();

        r = 0;
        limit = 120;
        nbVerticalBands = 60;

            while(r < nbVerticalBands){

                i = limit-1;
                k = 0;
                delay = Math.random()/2;
                while(i > 0){

                    temp = faces[r * limit + i]

                    TweenLite.to(temp.color, 0.2, {r : 6,g :6, b : 6,delay : 0.01 * k + delay, onComplete: function(face){
                        TweenLite.to(face.color, 0.2, {r : 1,g :1, b : 1});
                    }, onCompleteParams:[temp]});

                    i--;
                    k++;
                 
                }
                r++;


            }


          

       
       

      

       

    }

    function verticalMoveLand(){


        r = 0;
        limit = 120;
        nbVerticalBands = 60;

            while(r < nbVerticalBands){

                i = 0;
                lim = limit-1;
                del = lim;
                k = 0;
                delayVerticalBand = Math.random()/8;

                while(i < lim){

                    temp = faces[r * limit + i]

                    delayCall = del * 0.01 ;
                    delayCallBack = delayCall + 0.01 ;
                    

                    tempA = vertices[temp.a]
                    
                    tempB = vertices[temp.b]
                    
                    tempC = vertices[temp.c]
                    

                    TweenLite.to(tempA, 0.2, {y : tempA.y+4, delay : delayCall})
                    TweenLite.to(tempB, 0.2, {y : tempB.y+4, delay : delayCall})
                    TweenLite.to(tempC, 0.2, {y : tempC.y+4, delay : delayCall})

                    TweenLite.to(tempA, 0.2, {y : tempA.originalY, delay: delayCallBack})
                    TweenLite.to(tempB, 0.2, {y : tempB.originalY, delay: delayCallBack})
                    TweenLite.to(tempC, 0.2, {y : tempC.originalY, delay: delayCallBack})

                    i++;
                    k++;
                    del--;
                 
                }
                r++;


            }


            

       
       

      

       

    }


    //

    function animate() {


        requestAnimationFrame( animate );

        if(meshLoaded && canColorMesh){

            mesh.children[0].geometry.colorsNeedUpdate = true

            k = 0;
            while(k < nbBands){

                TweenLite.to(faces[nbBandsNumbers[k]].color, 0.2, {r : 10,g :10, b : 10, onComplete: function(face){
                    TweenLite.to(face.color, 0.5, {r : 1,g :1, b : 1});
                }, onCompleteParams:[faces[nbBandsNumbers[k]]]});

                nbBandsNumbers[k]--;


                if(nbBandsNumbers[k] < nbBandsLimits[k]){
                    var temp = Math.round(Math.random()*lengthMesh);

                    if(temp == 0){
                        temp = 1;
                    }

                    nbBandsNumbers[k] =   Math.round(lengthFaces/lengthMesh * temp)-1


                    nbBandsLimits[k] =   Math.round(lengthFaces/lengthMesh * (temp-1 ))
                }

                k++;

            }                   



            


            mesh.children[0].geometry.verticesNeedUpdate = true 
            mesh.children[0].geometry.computeFaceNormals();

            i=0
            j=parentText.children.length
            while(i<j){
               parentText.children[i].geometry.colorsNeedUpdate = true 
               parentText.children[i].geometry.verticesNeedUpdate = true 
               parentText.children[i].geometry.computeFaceNormals();  
               i++  

            }

        }



            


             
            




        render();

    }

    function textAnim(){



        k = 0;
        color = new THREE.Color("#BD1550");

        while(k < faceParentlength){

            console.log("bla")
                TweenLite.to(faceParent[k].color, 0.2, {delay :k*0.005, r : 10,g :10, b : 10});

            k++;

        }       


     

    }

    function moveLand(){

        i=0
        while(i<faces.length){


            temp = faces[i]
            

            tempA = vertices[temp.a]    


            TweenLite.to( tempA, Math.random()*2+0.5 , {y : tempA.y+Math.random()*3, onComplete: function(vert){
                TweenLite.to( vert, Math.random()*2+0.5 , {y : vert.originalY})

            },onCompleteParams:[tempA]});

            i++;

        }
    }

    function render() {


        stats.update();
        /*  renderer.setClearColorHex(0xffffff, 1);*/
        if(isFront){
            TweenLite.killTweensOf(camera.position);
            TweenLite.to( camera.position, 0.5 , {z : cameraZ + (mouseY * 8 - 4), x: cameraX + (mouseX * 4 - 2)  })
                
            
            
            
            countKinectCloud++;
            
        }

        if(canUpdate){
            animCloud();  
        }



                      
        camera.lookAt( scene.position );
        
        if(scaleValue.ratio == 0){
            // composer.render();
            renderer.render( scene, camera );
        }
        else {
            effect.render( scene, camera, scaleValue.ratio );
        }
        

       
       

    }

    function initHeight(){

              i = 0;
              all = Math.round(vertices.length);

              middle = Math.round(vertices.length/5);
              middleReal = Math.round(vertices.length/2);
              middlePlus = Math.round(vertices.length/2);
              middleLess = Math.round(vertices.length/2);

              invertValuePlus = Math.round(faces.length/2);

              invertValueLess = Math.round(faces.length/2);

              j = faces.length;
              m = 0;
              k = faces.length;
              l = vertices.length;
              
              length = 0;
              while(i < l){
               
                  if(middlePlus < all){
                      temp =  vertices[middlePlus];
                      if(temp.originalY != 0){

                              TweenLite.to(temp, 0.8, {y : temp.originalY, delay : 0.0015*i, ease:Power4.easeInOut})
                             
                          }

                          middlePlus++;

                  }
           

                  if(middleLess > 0){
                      temp =  vertices[middleLess];

                      if(temp.originalY != 0){

                              TweenLite.to(temp, 0.8, {y : temp.originalY, delay : 0.0015*i, ease:Power4.easeInOut})
                           
                          }

                          middleLess--;  

                  }
                 
                                   

                  if(i == (middleReal-1)){
                      TweenLite.to(temp, 0.8, {y : temp.originalY, delay : 0.0015*i, ease:Power4.easeInOut, onComplete:function(){

                          setTimeout(front,600);
                            

                        interval = setInterval(verticalColorMesh,7500);
                         
                         
                      }});
                  }

                  if(i > middle){
                      if( invertValueLess > 0 && invertValueLess < j){

                          TweenLite.to(faces[invertValueLess].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0012*i, onComplete: function(face){

                              TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                          }, onCompleteParams:[faces[invertValueLess]]});

                      }

                      invertValueLess--;


                      if( invertValueLess > 0 && invertValueLess < j){

                          TweenLite.to(faces[invertValueLess].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0012*i, onComplete: function(face){

                              TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                          }, onCompleteParams:[faces[invertValueLess]]});

                      }

                      invertValueLess--;


                      if( invertValuePlus > 0 && invertValuePlus < j){

                          TweenLite.to(faces[invertValuePlus].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0012*i, onComplete: function(face){

                              TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                          }, onCompleteParams:[faces[invertValuePlus]]});

                      }

                      invertValuePlus++;


                      if( invertValuePlus > 0 && invertValuePlus < j){

                          TweenLite.to(faces[invertValuePlus].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0012*i, onComplete: function(face){

                              TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                          }, onCompleteParams:[faces[invertValuePlus]]});

                      }

                      invertValuePlus++;


                      
                      

                  }

                  
                  
                  i++;
              }

                  
          }

    function animateColorMesh(){


        i = 0;
        all = Math.round(vertices.length);

        middle = Math.round(vertices.length/5);
        middleReal = Math.round(vertices.length/2);
        middlePlus = Math.round(vertices.length/2);
        middleLess = Math.round(vertices.length/2);

        invertValuePlus = Math.round(faces.length/2);

        invertValueLess = Math.round(faces.length/2);

        j = faces.length;
        m = 0;
        k = faces.length;
        l = vertices.length;

        length = 0;
        while(i < l){
         



         
                if( invertValueLess > 0 && invertValueLess < j){

                    TweenLite.to(faces[invertValueLess].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0005*i, onComplete: function(face){

                        TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                    }, onCompleteParams:[faces[invertValueLess]]});

                }

                invertValueLess--;


                if( invertValueLess > 0 && invertValueLess < j){

                    TweenLite.to(faces[invertValueLess].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0005*i, onComplete: function(face){

                        TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                    }, onCompleteParams:[faces[invertValueLess]]});

                }

                invertValueLess--;


                if( invertValuePlus > 0 && invertValuePlus < j){

                    TweenLite.to(faces[invertValuePlus].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0005*i, onComplete: function(face){

                        TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                    }, onCompleteParams:[faces[invertValuePlus]]});

                }

                invertValuePlus++;


                if( invertValuePlus > 0 && invertValuePlus < j){

                    TweenLite.to(faces[invertValuePlus].color, 0.2, {r : 6,g :6, b : 6, delay : 0.0005*i, onComplete: function(face){

                        TweenLite.to(face.color, 0.6, {r : 1,g :1, b : 1});
                    }, onCompleteParams:[faces[invertValuePlus]]});

                }

                invertValuePlus++;
            
            i++;
        }


    }

    function back(){
        isFront = false;
        updateFlag = false;

        TweenLite.to(camera.position, 1.2, {x : 0 ,y :0, z : -150, ease:Power4.easeOut, onComplete:function(){
            updateFlag = true;

            animateColorMesh();

            clearInterval(interval);

            interval = setInterval(animateColorMesh,7500);


        }});

    }

    function front(){


        scaleAnimFront();
        animateColorMesh();

        updateFlag = false;



           TweenLite.to(camera.position, 0.8, {x : cameraX, z : cameraZ,y :cameraY, ease:Power4.easeOut, onComplete:function(){
               updateFlag = true;
               isFront = true;

               

               TweenLite.to(pcBuffer.material, 2, {size : 1});
               
               

               setTimeout(verticalColorMesh,200);

                clearInterval(interval);

                interval = setInterval(verticalColorMesh,7500);

           }});





    }

    function scaleAnimFront(){
        canUpdate = true;

        TweenLite.to(scaleValue, 2, {val : 4 , ease: Power4.easeInOut})


        

        

    }



    function glitch(){
        i=0;
        count = 20;
        delayTime = 0.01;
        amplitude = 30;
        halfAmplitude = amplitude/2;
        // camera.position.z = -100
        // camera.position.x = 0;

        while(i<count){

            del = i*delayTime;
            TweenLite.fromTo(scaleValue,delayTime, {ratio : Math.random()*amplitude - halfAmplitude},  {ratio : Math.random()*amplitude - halfAmplitude, delay : del})

            i++;

        }


        TweenLite.to(scaleValue, 0, {ratio : 0 , delay: count*delayTime+0.1, onComplete: function(){
            // parentText.visible = false
        }})
    }


    function scaleAnimBack(){

    TweenLite.to(scaleValue, 0.8, {val : 30 , ease: Power4.easeInOut, onComplete: function(){
        back();
        canUpdate = false;
        TweenLite.to(panel, 0.6, {x : -250, delay:0.6,ease:Power4.easeOut });
        TweenLite.to(hamburger, 0.6, {x : 0, delay:0.6,ease:Power4.easeOut });
    }});


    }

    function generatePointCloudGeometry( color, width, length ){

        var geometry = new THREE.BufferGeometry();
        var numPoints = width*length;

        var positions = new Float32Array( numPoints*3 );
        var colors = new Float32Array( numPoints*3 );



        var lgt = Math.round((dataKinectAll[0].length/3)-1);
        console.log(dataKinectAll[0].length)
        var intensity =  1 ;
        for( var k = 0; k < lgt; k++ ) {

                    

                    colors[ 3 * k ] =  0.29;
                    colors[ 3 * k + 1 ] = 0.65;
                    colors[ 3 * k + 2 ] =  0.75;

                   
                    kTemps = 3 * k;
                    
                    positions[ 3 * k ] = dataKinectAll[0][ kTemps ];
                    positions[ 3 * k + 1 ] = dataKinectAll[0][kTemps + 1];
                    positions[ 3 * k + 2 ] = dataKinectAll[0][ kTemps + 2];                            


                       
                    
                    
                    

        }


        for( var k = lgt; k < max; k++ ) {

            
                   
                    
                    positions[ 3 * k ] = 0;
                    positions[ 3 * k + 1 ] = 0;
                    positions[ 3 * k + 2 ] = 0;                            


                    
                       
                    colors[ 3 * k ] =  0.29;
                    colors[ 3 * k + 1 ] = 0.65;
                    colors[ 3 * k + 2 ] =  0.75;
                    
                    
            

        }


        console.log(positions[0])

        positionBuff = positions;
        colorsBuff = colors;
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );

        geometry.computeBoundingBox();

        return geometry;

    }

    function generatePointcloud( color, width, length ) {

        var geometry = generatePointCloudGeometry( color, width, length );

        var material = new THREE.PointCloudMaterial( { size:pointSize, vertexColors: THREE.VertexColors,sizeAttenuation : true } );
        var pointcloud = new THREE.PointCloud( geometry, material );
        pointcloud.sortParticles = true;

        return pointcloud;

    }

    function animCloud(){

        if(!goDown){
            animNb++;
            if(animNb>kinectLimit-2){
                goDown = true;
            }
        }
        else{
            animNb--;
            if(animNb<1){
                goDown = !goDown;
            }
        }

        modulo = animNb%kinectLimit;
        ChangeAnim(dataKinectAll[modulo]);

    // console.log(modulo)
    }

    function animText(){

        // faceParent =  parentText.children[0].geometry.faces;
        // faceParentlength = faceParent.length;

        r=0;
        lengthParent = parentText.children.length;
        while(r< lengthParent){
            m =0 ;
            facesParent = parentText.children[r].geometry.vertices;
            l = facesParent.length


            while(m < l){

                TweenLite.to(facesParent[m], 0.2, {x : 150,y :150, z : 150, delay : 0.05*m});
                m++;

            }
            r++;
           

        }

        
        

    }


    function ChangeAnim(anim){

        k = 0;
        lgt = anim.length/3
        for( var i = 0; i < max; i++ ) {                    

                    tp = 3 * k;
                    if(i < lgt){
                        z = anim[tp + 2]
                        positionBuff[ tp ] = anim[tp ] * scaleValue.val + scaleValue.glitch;
                        positionBuff[ tp + 1 ] = anim[tp + 1] * scaleValue.val;
                        positionBuff[ tp + 2 ] = z;                            


                        // colorsBuff[ 3 * k ] =  0.29;
                        // colorsBuff[ 3 * k + 1 ] = 0.65;
                        // colorsBuff[ 3 * k + 2 ] =  0.75;
                
                    }
                    else {

                        positionBuff[ tp ] = 0;
                        positionBuff[ tp + 1 ] = 0;
                        positionBuff[ tp + 2 ] = 0;   

                    }


                    k++;                      


        }

        // geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        // geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
        pcBuffer.geometry.computeBoundingBox();
        pcBuffer.geometry.attributes.position.needsUpdate = true;


    }




    function keydown(e){


    switch( e.which )
    {
     case 38:
             camera.position.y += 1;
            
         break;

     case 40:
             camera.position.y -= 1;
            
         break;

     case 37:
         camera.position.x -= 1;
         break;

     case 39:
         camera.position.x += 1;
         break;
    }

             }

    document.addEventListener("keydown", keydown, false);

    var fb = document.getElementById('facebook');
    var twt = document.getElementById('twitter');
    var lin = document.getElementById('linkedin');
     var plus = document.getElementById('plus');

    fb.addEventListener('click', function(){

        window.open("https://www.facebook.com/Pierre.de.miel", '_blank');
    }, false)

     twt.addEventListener('click', function(){

        window.open("https://twitter.com/Samsyyyy", '_blank');
    }, false)

      lin.addEventListener('click', function(){

        window.open("https://www.linkedin.com/profile/view?id=182449324&trk=nav_responsive_tab_profile", '_blank');
    }, false)


       plus.addEventListener('click', function(){

        window.open("https://kinectic.herokuapp.com", '_blank');
    }, false)

    document.addEventListener("keydown", keydown, false);


