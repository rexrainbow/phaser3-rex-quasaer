(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"7fb6":function(e,a,o){"use strict";o.r(a),o.d(a,"launch",(function(){return d}));var s=o("d4ef"),r=o.n(s);class t extends Phaser.Scene{constructor(){super({key:"boot"})}preload(){}create(){console.log("Boot"),this.scene.start("game")}update(){}}var n=t;class c extends Phaser.Scene{constructor(){super({key:"game"})}preload(){this.load.image("classroom","classroom.png")}create(){console.log("Game"),this.add.image(400,300,"classroom")}update(){}}var l=c;function d(e){var a={type:r.a.AUTO,parent:e,width:800,height:600,scale:{mode:r.a.Scale.ENVELOP,autoCenter:r.a.Scale.CENTER_BOTH},backgroundColor:3355443,scene:[n,l]},o=new r.a.Game(a);return o}}}]);