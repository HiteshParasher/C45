var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44e262bd-ce6b-444d-82ef-94f63572fecb","1ab18c60-2c6c-4e22-8d26-7370a3798acf","c4a7f9ad-31e0-4200-b6da-34bc7418adbb","d8503d96-de1b-42b9-8926-cf8031246020","f296c50c-96ef-461f-8487-7f2d980a59de","db806375-006c-4d13-8859-9dd40d42689d"],"propsByKey":{"44e262bd-ce6b-444d-82ef-94f63572fecb":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"rN0Wb.78oSrbpncYEm16EH3gXQ39GRZB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/44e262bd-ce6b-444d-82ef-94f63572fecb.png"},"1ab18c60-2c6c-4e22-8d26-7370a3798acf":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YM5E1mQtkXFKEuDOvmkglBQ0BkroSxJr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1ab18c60-2c6c-4e22-8d26-7370a3798acf.png"},"c4a7f9ad-31e0-4200-b6da-34bc7418adbb":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"R5CmqUoMBesgtA1qwS.y3lbGpEaS5LAm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c4a7f9ad-31e0-4200-b6da-34bc7418adbb.png"},"d8503d96-de1b-42b9-8926-cf8031246020":{"name":"tank","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fntCIzjkXAB9OU0nW4rgwd8SD4JDstes","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d8503d96-de1b-42b9-8926-cf8031246020.png"},"f296c50c-96ef-461f-8487-7f2d980a59de":{"name":"fire","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GGPt6zDNxncRBG00iJZyBeSM03nGAl0o","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f296c50c-96ef-461f-8487-7f2d980a59de.png"},"db806375-006c-4d13-8859-9dd40d42689d":{"name":"back","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wosion8_6egKvF_Rs9c1bV5hCh0shc72","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/db806375-006c-4d13-8859-9dd40d42689d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//back = createSprite(200,200,-5,-5);
//back.setAnimation("back");
bullet1 = createSprite(335,200,0,0);
bullet1.setAnimation("animation_1");
bullet1.scale = 0.3;
bullet2 = createSprite(340,200,0,0);
bullet2.setAnimation("animation_2");
bullet2.scale = 0.3;
bullet3 = createSprite(345,200,0,0);
bullet3.setAnimation("animation_3");
bullet3.scale = 0.3;
bullet4 = createSprite(350,200,0,0);
bullet4.setAnimation("animation_1");
bullet4.scale = 0.3;
bullet5 = createSprite(355,200,0,0);
bullet5.setAnimation("animation_2");
bullet5.scale = 0.3;
bullet6 = createSprite(360,200,0,0);
bullet6.setAnimation("animation_3");
bullet6.scale = 0.3;
fire = createSprite(335,200,0,0);
fire.setAnimation("fire");
tank = createSprite(345,200,0,0);
tank.setAnimation("tank");
tank.scale = 0.70;

function draw() {
  background("pink");
  createEdgeSprites()
if (keyWentDown("space")) {
    bullet1.velocityX = -8;
    bullet2.velocityX = -8;
    bullet3.velocityX = -8;
    bullet4.velocityX = -8;
    bullet5.velocityX = -8;
    bullet6.velocityX = -8;
    
    
  
  }
  if (bullet1.isTouching(leftEdge))
  {
    bullet1.x = 345
    bullet1.y = 200
    bullet1.velocityX = 0;
  }
  if (bullet2.isTouching(leftEdge))
  {
    bullet2.x = 345
    bullet2.y = 200
    bullet1.velocityX = 0;
  }
  if (bullet3.isTouching(leftEdge))
  {
    bullet3.x = 345
    bullet3.y = 200
    bullet1.velocityX = 0;
  }
 if (bullet4.isTouching(leftEdge))
  {
    bullet4.x = 345
    bullet4.y = 200
    bullet1.velocityX = 0;
  }
  if (bullet5.isTouching(leftEdge))
  {
    bullet5.x = 345
    bullet5.y = 200
    bullet1.velocityX = 0;
  }
  if (bullet6.isTouching(leftEdge))
  {
    bullet6.x = 345
    bullet6.y = 200
    bullet1.velocityX = 0;
  }
strokeWeight(3);
fill("black");
text("PRESS SPACE TO START",200,40);
  
  
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
