var parentText;
var pointLight;
var pointLight2;
function initText() {

    parentText = new THREE.Object3D();

    var extrudeSettings = {
        bevelEnabled: false,
        bevelSegments: 0,
        steps: 0,
        amount: 0,
        bevelThickness : 0
    };
  

    pointLight = new THREE.PointLight( 0xAA0044, 1, 60 );
    pointLight.position.set( 50, 30, 30 );

    scene.add( pointLight );

    // var sphereSize = 10;
    // var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    // scene.add( pointLightHelper );

    pointLight2 = new THREE.PointLight( 0xAA0044, 1, 60 );
    pointLight2.position.set( -50, 30, 30 );

    scene.add( pointLight2 );

    // var sphereSize = 10;
    // var pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
    // scene.add( pointLightHelper2 );

    var outline1 = new THREE.Shape();
   

    //Exported Paths from Illustrator 
    outline1.moveTo(55.7, 68.1);
    outline1.lineTo(60.9, 58.9);
    outline1.bezierCurveTo(61.7, 57.5, 63.9, 57.7, 64.6, 58.2);
    outline1.bezierCurveTo(65.1, 58.5, 73.0, 64.3, 80.4, 64.3);
    outline1.bezierCurveTo(84.8, 64.3, 88.0, 61.6, 88.0, 57.7);
    outline1.bezierCurveTo(88.0, 53.0, 84.1, 49.5, 76.6, 46.5);
    outline1.bezierCurveTo(67.1, 42.7, 55.1, 35.3, 55.1, 22.0);
    outline1.bezierCurveTo(55.1, 11.1, 63.6, 0.0, 80.7, 0.0);
    outline1.bezierCurveTo(92.2, 0.0, 101.1, 5.9, 104.4, 8.3);
    outline1.bezierCurveTo(105.7, 9.1, 105.5, 11.1, 105.0, 11.8);
    outline1.lineTo(99.4, 20.4);
    outline1.bezierCurveTo(98.6, 21.6, 96.6, 22.6, 95.6, 21.8);
    outline1.bezierCurveTo(94.6, 21.3, 86.6, 15.2, 79.8, 15.2);
    outline1.bezierCurveTo(75.8, 15.2, 72.8, 17.8, 72.8, 20.8);
    outline1.bezierCurveTo(72.8, 24.9, 76.1, 28.0, 84.9, 31.6);
    outline1.bezierCurveTo(93.5, 35.0, 107.3, 41.7, 107.3, 56.8);
    outline1.bezierCurveTo(107.3, 68.2, 97.4, 79.7, 81.1, 79.7);
    outline1.bezierCurveTo(66.7, 79.7, 58.8, 73.7, 56.2, 71.2);
    outline1.bezierCurveTo(55.1, 70.1, 54.8, 69.6, 55.7, 68.1);
    
    var outline2 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline2.moveTo(110.8, 75.7);
    outline2.lineTo(145.5, 1.2);
    outline2.bezierCurveTo(145.8, 0.6, 146.6, 0.0, 147.3, 0.0);
    outline2.lineTo(148.4, 0.0);
    outline2.bezierCurveTo(149.2, 0.0, 150.0, 0.6, 150.3, 1.2);
    outline2.lineTo(185.0, 75.7);
    outline2.bezierCurveTo(185.7, 77.2, 184.8, 78.6, 183.1, 78.6);
    outline2.lineTo(170.8, 78.6);
    outline2.bezierCurveTo(168.8, 78.6, 167.9, 78.0, 166.9, 75.8);
    outline2.lineTo(163.0, 67.1);
    outline2.lineTo(132.8, 67.1);
    outline2.lineTo(128.8, 76.0);
    outline2.bezierCurveTo(128.3, 77.3, 127.1, 78.6, 124.9, 78.6);
    outline2.lineTo(112.7, 78.6);
    outline2.bezierCurveTo(111.0, 78.6, 110.1, 77.2, 110.8, 75.7);
 
    var outline3 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline3.moveTo(156.3, 52.0);
    outline3.lineTo(147.9, 33.8);
    outline3.lineTo(147.8, 33.8);
    outline3.lineTo(139.5, 52.0);
    outline3.lineTo(156.3, 52.0);
   
    var outline4 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline4.moveTo(201.7, 1.8);
    outline4.bezierCurveTo(201.8, 0.8, 202.8, 0.0, 203.7, 0.0);
    outline4.lineTo(205.5, 0.0);
    outline4.bezierCurveTo(206.0, 0.0, 207.0, 0.4, 207.3, 1.1);
    outline4.lineTo(233.0, 48.9);
    outline4.lineTo(233.3, 48.9);
    outline4.lineTo(259.0, 1.1);
    outline4.bezierCurveTo(259.3, 0.4, 260.3, 0.0, 260.8, 0.0);
    outline4.lineTo(262.6, 0.0);
    outline4.bezierCurveTo(263.5, 0.0, 264.5, 0.8, 264.6, 1.8);
    outline4.lineTo(277.1, 76.2);
    outline4.bezierCurveTo(277.3, 77.6, 276.3, 78.6, 275.0, 78.6);
    outline4.lineTo(261.9, 78.6);
    outline4.bezierCurveTo(260.9, 78.6, 259.9, 77.7, 259.8, 76.8);
    outline4.lineTo(254.9, 42.6);
    outline4.lineTo(254.6, 42.6);
    outline4.lineTo(236.0, 78.5);
    outline4.bezierCurveTo(235.7, 79.2, 234.7, 79.7, 234.1, 79.7);
    outline4.lineTo(232.2, 79.7);
    outline4.bezierCurveTo(231.5, 79.7, 230.6, 79.2, 230.3, 78.5);
    outline4.lineTo(211.6, 42.6);
    outline4.lineTo(211.3, 42.6);
    outline4.lineTo(206.5, 76.8);
    outline4.bezierCurveTo(206.4, 77.7, 205.5, 78.6, 204.4, 78.6);
    outline4.lineTo(191.3, 78.6);
    outline4.bezierCurveTo(190.0, 78.6, 189.0, 77.6, 189.2, 76.2);
    outline4.lineTo(201.7, 1.8);
   
    var outline5 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline5.moveTo(286.8, 68.1);
    outline5.lineTo(292.1, 58.9);
    outline5.bezierCurveTo(292.9, 57.5, 295.0, 57.7, 295.8, 58.2);
    outline5.bezierCurveTo(296.3, 58.5, 304.2, 64.3, 311.5, 64.3);
    outline5.bezierCurveTo(316.0, 64.3, 319.2, 61.6, 319.2, 57.7);
    outline5.bezierCurveTo(319.2, 53.0, 315.3, 49.5, 307.8, 46.5);
    outline5.bezierCurveTo(298.3, 42.7, 286.3, 35.3, 286.3, 22.0);
    outline5.bezierCurveTo(286.3, 11.1, 294.8, 0.0, 311.9, 0.0);
    outline5.bezierCurveTo(323.4, 0.0, 332.2, 5.9, 335.6, 8.3);
    outline5.bezierCurveTo(336.9, 9.1, 336.7, 11.1, 336.2, 11.8);
    outline5.lineTo(330.6, 20.4);
    outline5.bezierCurveTo(329.8, 21.6, 327.8, 22.6, 326.8, 21.8);
    outline5.bezierCurveTo(325.8, 21.3, 317.7, 15.2, 311.0, 15.2);
    outline5.bezierCurveTo(307.0, 15.2, 304.0, 17.8, 304.0, 20.8);
    outline5.bezierCurveTo(304.0, 24.9, 307.3, 28.0, 316.1, 31.6);
    outline5.bezierCurveTo(324.7, 35.0, 338.4, 41.7, 338.4, 56.8);
    outline5.bezierCurveTo(338.4, 68.2, 328.6, 79.7, 312.3, 79.7);
    outline5.bezierCurveTo(297.9, 79.7, 289.9, 73.7, 287.4, 71.2);
    outline5.bezierCurveTo(286.3, 70.1, 286.0, 69.6, 286.8, 68.1);
   
    var outline6 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline6.moveTo(366.2, 41.3);
    outline6.lineTo(341.8, 4.3);
    outline6.bezierCurveTo(340.9, 2.9, 341.8, 1.1, 343.5, 1.1);
    outline6.lineTo(357.9, 1.1);
    outline6.bezierCurveTo(358.8, 1.1, 359.4, 1.7, 359.7, 2.1);
    outline6.lineTo(375.1, 24.8);
    outline6.lineTo(390.5, 2.1);
    outline6.bezierCurveTo(390.8, 1.7, 391.3, 1.1, 392.3, 1.1);
    outline6.lineTo(406.7, 1.1);
    outline6.bezierCurveTo(408.4, 1.1, 409.3, 2.9, 408.4, 4.3);
    outline6.lineTo(383.6, 41.2);
    outline6.lineTo(383.6, 76.5);
    outline6.bezierCurveTo(383.6, 77.6, 382.6, 78.6, 381.5, 78.6);
    outline6.lineTo(368.3, 78.6);
    outline6.bezierCurveTo(367.1, 78.6, 366.2, 77.6, 366.2, 76.5);
    outline6.lineTo(366.2, 41.3);
    
    var outline7 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline7.moveTo(8.6, 122.1);
    outline7.bezierCurveTo(11.0, 122.1, 12.7, 122.9, 14.3, 124.3);
    outline7.bezierCurveTo(14.5, 124.5, 14.5, 124.8, 14.3, 125.0);
    outline7.lineTo(13.3, 126.1);
    outline7.bezierCurveTo(13.1, 126.3, 12.9, 126.3, 12.7, 126.1);
    outline7.bezierCurveTo(11.6, 125.1, 10.1, 124.5, 8.6, 124.5);
    outline7.bezierCurveTo(5.2, 124.5, 2.6, 127.3, 2.6, 130.6);
    outline7.bezierCurveTo(2.6, 134.0, 5.2, 136.8, 8.6, 136.8);
    outline7.bezierCurveTo(10.3, 136.8, 11.6, 136.1, 12.7, 135.2);
    outline7.bezierCurveTo(12.9, 135.1, 13.1, 135.1, 13.3, 135.2);
    outline7.lineTo(14.4, 136.3);
    outline7.bezierCurveTo(14.5, 136.4, 14.5, 136.7, 14.3, 136.9);
    outline7.bezierCurveTo(12.7, 138.5, 10.7, 139.2, 8.6, 139.2);
    outline7.bezierCurveTo(3.8, 139.2, 0.0, 135.4, 0.0, 130.7);
    outline7.bezierCurveTo(0.0, 126.0, 3.8, 122.1, 8.6, 122.1);
   
    var outline8 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline8.moveTo(29.4, 122.8);
    outline8.bezierCurveTo(29.4, 122.6, 29.6, 122.4, 29.9, 122.4);
    outline8.lineTo(36.3, 122.4);
    outline8.bezierCurveTo(39.2, 122.4, 41.5, 124.6, 41.5, 127.4);
    outline8.bezierCurveTo(41.5, 129.6, 40.1, 131.4, 38.0, 132.3);
    outline8.lineTo(41.3, 138.3);
    outline8.bezierCurveTo(41.4, 138.6, 41.3, 139.0, 40.9, 139.0);
    outline8.lineTo(39.1, 139.0);
    outline8.bezierCurveTo(38.8, 139.0, 38.7, 138.9, 38.6, 138.7);
    outline8.lineTo(35.5, 132.5);
    outline8.lineTo(31.9, 132.5);
    outline8.lineTo(31.9, 138.5);
    outline8.bezierCurveTo(31.9, 138.8, 31.7, 139.0, 31.4, 139.0);
    outline8.lineTo(29.9, 139.0);
    outline8.bezierCurveTo(29.6, 139.0, 29.4, 138.8, 29.4, 138.5);
    outline8.lineTo(29.4, 122.8);
   
    var outline9 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline9.moveTo(36.2, 130.4);
    outline9.bezierCurveTo(37.7, 130.4, 39.0, 129.1, 39.0, 127.5);
    outline9.bezierCurveTo(39.0, 126.0, 37.7, 124.7, 36.2, 124.7);
    outline9.lineTo(31.9, 124.7);
    outline9.lineTo(31.9, 130.4);
    outline9.lineTo(36.2, 130.4);
 
    var outline10 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline10.moveTo(56.8, 122.8);
    outline10.bezierCurveTo(56.8, 122.6, 57.0, 122.4, 57.3, 122.4);
    outline10.lineTo(66.8, 122.4);
    outline10.bezierCurveTo(67.0, 122.4, 67.2, 122.6, 67.2, 122.8);
    outline10.lineTo(67.2, 124.1);
    outline10.bezierCurveTo(67.2, 124.4, 67.0, 124.6, 66.8, 124.6);
    outline10.lineTo(59.3, 124.6);
    outline10.lineTo(59.3, 129.4);
    outline10.lineTo(65.6, 129.4);
    outline10.bezierCurveTo(65.9, 129.4, 66.1, 129.7, 66.1, 129.9);
    outline10.lineTo(66.1, 131.2);
    outline10.bezierCurveTo(66.1, 131.5, 65.9, 131.7, 65.6, 131.7);
    outline10.lineTo(59.3, 131.7);
    outline10.lineTo(59.3, 136.8);
    outline10.lineTo(66.8, 136.8);
    outline10.bezierCurveTo(67.0, 136.8, 67.2, 137.0, 67.2, 137.2);
    outline10.lineTo(67.2, 138.5);
    outline10.bezierCurveTo(67.2, 138.8, 67.0, 139.0, 66.8, 139.0);
    outline10.lineTo(57.3, 139.0);
    outline10.bezierCurveTo(57.0, 139.0, 56.8, 138.8, 56.8, 138.5);
    outline10.lineTo(56.8, 122.8);
   
    
    var outline11 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline11.moveTo(80.3, 138.4);
    outline11.lineTo(87.6, 122.4);
    outline11.bezierCurveTo(87.7, 122.2, 87.9, 122.1, 88.0, 122.1);
    outline11.lineTo(88.3, 122.1);
    outline11.bezierCurveTo(88.4, 122.1, 88.6, 122.2, 88.7, 122.4);
    outline11.lineTo(95.9, 138.4);
    outline11.bezierCurveTo(96.0, 138.7, 95.8, 139.0, 95.5, 139.0);
    outline11.lineTo(94.0, 139.0);
    outline11.bezierCurveTo(93.7, 139.0, 93.5, 138.8, 93.4, 138.6);
    outline11.lineTo(92.0, 135.4);
    outline11.lineTo(84.2, 135.4);
    outline11.lineTo(82.8, 138.6);
    outline11.bezierCurveTo(82.7, 138.8, 82.5, 139.0, 82.2, 139.0);
    outline11.lineTo(80.7, 139.0);
    outline11.bezierCurveTo(80.4, 139.0, 80.2, 138.7, 80.3, 138.4);


    var outline12 = new THREE.Shape();
    // calque1/Groupe/Trac transparent/Trac
    outline12.moveTo(91.1, 133.3);
    outline12.lineTo(88.2, 126.8);
    outline12.lineTo(88.0, 126.8);
    outline12.lineTo(85.1, 133.3);
    outline12.lineTo(91.1, 133.3);
    
    var outline13 = new THREE.Shape();
    outline13.moveTo(111.8, 124.6);
    outline13.lineTo(108.0, 124.6);
    outline13.bezierCurveTo(107.7, 124.6, 107.5, 124.4, 107.5, 124.1);
    outline13.lineTo(107.5, 122.8);
    outline13.bezierCurveTo(107.5, 122.6, 107.7, 122.4, 108.0, 122.4);
    outline13.lineTo(118.2, 122.4);
    outline13.bezierCurveTo(118.4, 122.4, 118.6, 122.6, 118.6, 122.8);
    outline13.lineTo(118.6, 124.1);
    outline13.bezierCurveTo(118.6, 124.4, 118.4, 124.6, 118.2, 124.6);
    outline13.lineTo(114.3, 124.6);
    outline13.lineTo(114.3, 138.5);
    outline13.bezierCurveTo(114.3, 138.8, 114.1, 139.0, 113.9, 139.0);
    outline13.lineTo(112.3, 139.0);
    outline13.bezierCurveTo(112.0, 139.0, 111.8, 138.8, 111.8, 138.5);
    outline13.lineTo(111.8, 124.6);
   

    var outline14 = new THREE.Shape()
    outline14.moveTo(133.3, 122.8);
    outline14.bezierCurveTo(133.3, 122.6, 133.5, 122.4, 133.7, 122.4);
    outline14.lineTo(135.3, 122.4);
    outline14.bezierCurveTo(135.5, 122.4, 135.7, 122.6, 135.7, 122.8);
    outline14.lineTo(135.7, 138.5);
    outline14.bezierCurveTo(135.7, 138.8, 135.5, 139.0, 135.3, 139.0);
    outline14.lineTo(133.7, 139.0);
    outline14.bezierCurveTo(133.5, 139.0, 133.3, 138.8, 133.3, 138.5);
    outline14.lineTo(133.3, 122.8);
   
    var outline15 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline15.moveTo(149.9, 123.0);
    outline15.bezierCurveTo(149.7, 122.7, 149.9, 122.4, 150.3, 122.4);
    outline15.lineTo(152.0, 122.4);
    outline15.bezierCurveTo(152.1, 122.4, 152.3, 122.5, 152.4, 122.6);
    outline15.lineTo(157.6, 134.4);
    outline15.lineTo(157.7, 134.4);
    outline15.lineTo(162.9, 122.6);
    outline15.bezierCurveTo(163.0, 122.5, 163.1, 122.4, 163.3, 122.4);
    outline15.lineTo(165.0, 122.4);
    outline15.bezierCurveTo(165.4, 122.4, 165.6, 122.7, 165.4, 123.0);
    outline15.lineTo(158.1, 139.0);
    outline15.bezierCurveTo(158.1, 139.1, 157.9, 139.2, 157.7, 139.2);
    outline15.lineTo(157.5, 139.2);
    outline15.bezierCurveTo(157.3, 139.2, 157.2, 139.1, 157.1, 139.0);
    outline15.lineTo(149.9, 123.0);
    outline15.closePath();
    
    var outline16 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline16.moveTo(179.5, 122.8);
    outline16.bezierCurveTo(179.5, 122.6, 179.7, 122.4, 180.0, 122.4);
    outline16.lineTo(189.5, 122.4);
    outline16.bezierCurveTo(189.7, 122.4, 189.9, 122.6, 189.9, 122.8);
    outline16.lineTo(189.9, 124.1);
    outline16.bezierCurveTo(189.9, 124.4, 189.7, 124.6, 189.5, 124.6);
    outline16.lineTo(182.0, 124.6);
    outline16.lineTo(182.0, 129.4);
    outline16.lineTo(188.3, 129.4);
    outline16.bezierCurveTo(188.6, 129.4, 188.8, 129.7, 188.8, 129.9);
    outline16.lineTo(188.8, 131.2);
    outline16.bezierCurveTo(188.8, 131.5, 188.6, 131.7, 188.3, 131.7);
    outline16.lineTo(182.0, 131.7);
    outline16.lineTo(182.0, 136.8);
    outline16.lineTo(189.5, 136.8);
    outline16.bezierCurveTo(189.7, 136.8, 189.9, 137.0, 189.9, 137.2);
    outline16.lineTo(189.9, 138.5);
    outline16.bezierCurveTo(189.9, 138.8, 189.7, 139.0, 189.5, 139.0);
    outline16.lineTo(180.0, 139.0);
    outline16.bezierCurveTo(179.7, 139.0, 179.5, 138.8, 179.5, 138.5);
    outline16.lineTo(179.5, 122.8);
    outline16.closePath();
    
    var outline17 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline17.moveTo(222.6, 122.8);
    outline17.bezierCurveTo(222.6, 122.6, 222.8, 122.4, 223.1, 122.4);
    outline17.lineTo(228.5, 122.4);
    outline17.bezierCurveTo(233.1, 122.4, 236.8, 126.1, 236.8, 130.6);
    outline17.bezierCurveTo(236.8, 135.2, 233.1, 139.0, 228.5, 139.0);
    outline17.lineTo(223.1, 139.0);
    outline17.bezierCurveTo(222.8, 139.0, 222.6, 138.8, 222.6, 138.5);
    outline17.lineTo(222.6, 122.8);
    
    var outline18 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline18.moveTo(228.2, 136.7);
    outline18.bezierCurveTo(231.7, 136.7, 234.2, 134.2, 234.2, 130.6);
    outline18.bezierCurveTo(234.2, 127.2, 231.7, 124.6, 228.2, 124.6);
    outline18.lineTo(225.0, 124.6);
    outline18.lineTo(225.0, 136.7);
    outline18.lineTo(228.2, 136.7);
 
   
    var outline19 = new THREE.Shape()
    outline19.moveTo(252.0, 122.8);
    outline19.bezierCurveTo(252.0, 122.6, 252.2, 122.4, 252.5, 122.4);
    outline19.lineTo(262.0, 122.4);
    outline19.bezierCurveTo(262.2, 122.4, 262.4, 122.6, 262.4, 122.8);
    outline19.lineTo(262.4, 124.1);
    outline19.bezierCurveTo(262.4, 124.4, 262.2, 124.6, 262.0, 124.6);
    outline19.lineTo(254.5, 124.6);
    outline19.lineTo(254.5, 129.4);
    outline19.lineTo(260.8, 129.4);
    outline19.bezierCurveTo(261.0, 129.4, 261.2, 129.7, 261.2, 129.9);
    outline19.lineTo(261.2, 131.2);
    outline19.bezierCurveTo(261.2, 131.5, 261.0, 131.7, 260.8, 131.7);
    outline19.lineTo(254.5, 131.7);
    outline19.lineTo(254.5, 136.8);
    outline19.lineTo(262.0, 136.8);
    outline19.bezierCurveTo(262.2, 136.8, 262.4, 137.0, 262.4, 137.2);
    outline19.lineTo(262.4, 138.5);
    outline19.bezierCurveTo(262.4, 138.8, 262.2, 139.0, 262.0, 139.0);
    outline19.lineTo(252.5, 139.0);
    outline19.bezierCurveTo(252.2, 139.0, 252.0, 138.8, 252.0, 138.5);
    outline19.lineTo(252.0, 122.8);
   
  
    var outline20 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline20.moveTo(275.5, 123.0);
    outline20.bezierCurveTo(275.4, 122.7, 275.6, 122.4, 275.9, 122.4);
    outline20.lineTo(277.6, 122.4);
    outline20.bezierCurveTo(277.8, 122.4, 277.9, 122.5, 278.0, 122.6);
    outline20.lineTo(283.2, 134.4);
    outline20.lineTo(283.3, 134.4);
    outline20.lineTo(288.6, 122.6);
    outline20.bezierCurveTo(288.6, 122.5, 288.8, 122.4, 289.0, 122.4);
    outline20.lineTo(290.7, 122.4);
    outline20.bezierCurveTo(291.0, 122.4, 291.2, 122.7, 291.1, 123.0);
    outline20.lineTo(283.8, 139.0);
    outline20.bezierCurveTo(283.7, 139.1, 283.6, 139.2, 283.4, 139.2);
    outline20.lineTo(283.1, 139.2);
    outline20.bezierCurveTo(283.0, 139.2, 282.8, 139.1, 282.7, 139.0);
    outline20.lineTo(275.5, 123.0);
    outline20.closePath();
 
    var outline21 = new THREE.Shape()
    outline21.moveTo(305.2, 122.8);
    outline21.bezierCurveTo(305.2, 122.6, 305.4, 122.4, 305.6, 122.4);
    outline21.lineTo(315.1, 122.4);
    outline21.bezierCurveTo(315.4, 122.4, 315.6, 122.6, 315.6, 122.8);
    outline21.lineTo(315.6, 124.1);
    outline21.bezierCurveTo(315.6, 124.4, 315.4, 124.6, 315.1, 124.6);
    outline21.lineTo(307.6, 124.6);
    outline21.lineTo(307.6, 129.4);
    outline21.lineTo(314.0, 129.4);
    outline21.bezierCurveTo(314.2, 129.4, 314.4, 129.7, 314.4, 129.9);
    outline21.lineTo(314.4, 131.2);
    outline21.bezierCurveTo(314.4, 131.5, 314.2, 131.7, 314.0, 131.7);
    outline21.lineTo(307.6, 131.7);
    outline21.lineTo(307.6, 136.8);
    outline21.lineTo(315.1, 136.8);
    outline21.bezierCurveTo(315.4, 136.8, 315.6, 137.0, 315.6, 137.2);
    outline21.lineTo(315.6, 138.5);
    outline21.bezierCurveTo(315.6, 138.8, 315.4, 139.0, 315.1, 139.0);
    outline21.lineTo(305.6, 139.0);
    outline21.bezierCurveTo(305.4, 139.0, 305.2, 138.8, 305.2, 138.5);
    outline21.lineTo(305.2, 122.8);
  

    var outline22 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline22.moveTo(330.7, 122.8);
    outline22.bezierCurveTo(330.7, 122.6, 330.9, 122.4, 331.2, 122.4);
    outline22.lineTo(332.7, 122.4);
    outline22.bezierCurveTo(333.0, 122.4, 333.2, 122.6, 333.2, 122.8);
    outline22.lineTo(333.2, 136.8);
    outline22.lineTo(339.6, 136.8);
    outline22.bezierCurveTo(339.9, 136.8, 340.1, 137.0, 340.1, 137.2);
    outline22.lineTo(340.1, 138.5);
    outline22.bezierCurveTo(340.1, 138.8, 339.9, 139.0, 339.6, 139.0);
    outline22.lineTo(331.2, 139.0);
    outline22.bezierCurveTo(330.9, 139.0, 330.7, 138.8, 330.7, 138.5);
    outline22.lineTo(330.7, 122.8);
    
  
    var outline23 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline23.moveTo(361.4, 122.1);
    outline23.bezierCurveTo(366.1, 122.1, 369.9, 126.0, 369.9, 130.7);
    outline23.bezierCurveTo(369.9, 135.4, 366.1, 139.2, 361.4, 139.2);
    outline23.bezierCurveTo(356.6, 139.2, 352.8, 135.4, 352.8, 130.7);
    outline23.bezierCurveTo(352.8, 126.0, 356.6, 122.1, 361.4, 122.1);
   

    var outline24 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline24.moveTo(361.4, 136.9);
    outline24.bezierCurveTo(364.8, 136.9, 367.5, 134.1, 367.5, 130.7);
    outline24.bezierCurveTo(367.5, 127.3, 364.8, 124.4, 361.4, 124.4);
    outline24.bezierCurveTo(358.0, 124.4, 355.2, 127.3, 355.2, 130.7);
    outline24.bezierCurveTo(355.2, 134.1, 358.0, 136.9, 361.4, 136.9);
    
    var outline25 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline25.moveTo(385.1, 122.8);
    outline25.bezierCurveTo(385.1, 122.6, 385.3, 122.4, 385.5, 122.4);
    outline25.lineTo(390.9, 122.4);
    outline25.bezierCurveTo(393.8, 122.4, 396.2, 124.7, 396.2, 127.6);
    outline25.bezierCurveTo(396.2, 130.6, 393.8, 132.9, 390.9, 132.9);
    outline25.lineTo(387.5, 132.9);
    outline25.lineTo(387.5, 138.5);
    outline25.bezierCurveTo(387.5, 138.8, 387.3, 139.0, 387.1, 139.0);
    outline25.lineTo(385.5, 139.0);
    outline25.bezierCurveTo(385.3, 139.0, 385.1, 138.8, 385.1, 138.5);
    outline25.lineTo(385.1, 122.8);
 
    var outline26 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline26.moveTo(390.9, 130.6);
    outline26.bezierCurveTo(392.5, 130.6, 393.8, 129.3, 393.8, 127.6);
    outline26.bezierCurveTo(393.8, 126.0, 392.5, 124.7, 390.9, 124.7);
    outline26.lineTo(387.5, 124.7);
    outline26.lineTo(387.5, 130.6);
    outline26.lineTo(390.9, 130.6);
   
   
     var outline27 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline27.moveTo(410.9, 122.8);
    outline27.bezierCurveTo(410.9, 122.6, 411.1, 122.4, 411.4, 122.4);
    outline27.lineTo(420.9, 122.4);
    outline27.bezierCurveTo(421.1, 122.4, 421.3, 122.6, 421.3, 122.8);
    outline27.lineTo(421.3, 124.1);
    outline27.bezierCurveTo(421.3, 124.4, 421.1, 124.6, 420.9, 124.6);
    outline27.lineTo(413.4, 124.6);
    outline27.lineTo(413.4, 129.4);
    outline27.lineTo(419.7, 129.4);
    outline27.bezierCurveTo(420.0, 129.4, 420.2, 129.7, 420.2, 129.9);
    outline27.lineTo(420.2, 131.2);
    outline27.bezierCurveTo(420.2, 131.5, 420.0, 131.7, 419.7, 131.7);
    outline27.lineTo(413.4, 131.7);
    outline27.lineTo(413.4, 136.8);
    outline27.lineTo(420.9, 136.8);
    outline27.bezierCurveTo(421.1, 136.8, 421.3, 137.0, 421.3, 137.2);
    outline27.lineTo(421.3, 138.5);
    outline27.bezierCurveTo(421.3, 138.8, 421.1, 139.0, 420.9, 139.0);
    outline27.lineTo(411.4, 139.0);
    outline27.bezierCurveTo(411.1, 139.0, 410.9, 138.8, 410.9, 138.5);
    outline27.lineTo(410.9, 122.8);
    
    var outline28 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline28.moveTo(436.5, 122.8);
    outline28.bezierCurveTo(436.5, 122.6, 436.7, 122.4, 436.9, 122.4);
    outline28.lineTo(443.4, 122.4);
    outline28.bezierCurveTo(446.2, 122.4, 448.5, 124.6, 448.5, 127.4);
    outline28.bezierCurveTo(448.5, 129.6, 447.1, 131.4, 445.0, 132.3);
    outline28.lineTo(448.3, 138.3);
    outline28.bezierCurveTo(448.4, 138.6, 448.3, 139.0, 447.9, 139.0);
    outline28.lineTo(446.1, 139.0);
    outline28.bezierCurveTo(445.8, 139.0, 445.7, 138.9, 445.6, 138.7);
    outline28.lineTo(442.5, 132.5);
    outline28.lineTo(438.9, 132.5);
    outline28.lineTo(438.9, 138.5);
    outline28.bezierCurveTo(438.9, 138.8, 438.7, 139.0, 438.5, 139.0);
    outline28.lineTo(436.9, 139.0);
    outline28.bezierCurveTo(436.7, 139.0, 436.5, 138.8, 436.5, 138.5);
    outline28.lineTo(436.5, 122.8);

    var outline29 = new THREE.Shape()
    // calque1/Groupe/Trac transparent/Trac
    outline29.moveTo(443.2, 130.4);
    outline29.bezierCurveTo(444.7, 130.4, 446.1, 129.1, 446.1, 127.5);
    outline29.bezierCurveTo(446.1, 126.0, 444.7, 124.7, 443.2, 124.7);
    outline29.lineTo(439.0, 124.7);
    outline29.lineTo(439.0, 130.4);
    outline29.lineTo(443.2, 130.4);


    function init() {

        scene.add(parentText);
        addShape(outline1, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline2, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline3, extrudeSettings, 0xffffff, -173.45, 66.45, -4, 0, 3.14, 3.14, 1);
        addShape(outline4, extrudeSettings, 0xffffff, -173.45, 66.45, 1, 0, 3.14, 3.14, 1);
        addShape(outline5, extrudeSettings, 0xffffff, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);
        addShape(outline6, extrudeSettings, 0xffffff, -173.45, 66.45, 0, 0, 3.14, 3.14, 1);

        addShape2(outline7, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline8, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline9, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline10, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline11, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline12, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline13, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline14, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline15, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline16, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline17, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline18, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline19, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline20, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline21, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline22, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline23, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline24, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline25, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline26, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline27, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline28, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        addShape2(outline29, extrudeSettings, 0xffffff, -85, 30.45, 300, 0, 3.14, 3.14, 0.6);
        parentText.scale.multiplyScalar(.2);
        parentText.rotation.y = Math.PI;
        parentText.position.y = 15;
        parentText.position.z = 72;
        parentText.position.x = 7
    }


    function addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {

        var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        var text = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: color,
            shading: THREE.FlatShading,
            vertexColors: THREE.FaceColors

        }));

        text.position.set(x, y, z);
        text.rotation.set(rx, ry, rz);
        text.scale.set(s, s, s);

        parentText.add(text);

    }
    function addShape2(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {

        var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        var text = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: color,
            shading: THREE.FlatShading,
            vertexColors: THREE.FaceColors

        }));

        text.position.set(x, y, z);
        text.rotation.set(rx, ry, rz);
        text.scale.set(s, s, s);

        parentText.add(text);

    }

    init();

}