var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;//设定画布宽度为浏览器真正宽度
canvas.height = window.innerHeight;//设定画布高为浏览器真正高度(clientHeight+scrollTop)

var c = canvas.getContext('2d');//获取绘制环境
var center = {x: canvas.width / 2, y: canvas.height / 2};
var time = 0;//运动执行次数

//椭圆
function Oval(x,y,radiusX,radiusY,startAngle, endAngle,fillColor){
  this.x = x;
  this.y = y;
  this.radiusX = radiusX;
  this.radiusY = radiusY;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
  this.fillColor = fillColor;
  
  c.beginPath();
  c.ellipse(this.x, this.y, this.radiusX, this.radiusY, this.startAngle, this.endAngle, false);
  c.fillStyle = this.fillColor;
  c.fill();
}

function Circle(x,y,radius,fillColor){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fillColor = fillColor;
  
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);//画圆
  c.fillStyle = this.fillColor;
  c.fill();
}

function face(){
  var ring = new Circle(center.x,center.y, 220,'rgba(228, 228, 228, .07)');
  var faceShadow = new Circle(center.x,center.y, 120,'rgba(198, 151, 104)');
  var faceTotal = new Circle(center.x,center.y, 110,'rgba(221, 191, 103)');

  var mazi1 = new Circle(center.x - 80,center.y - 40, 5,'rgba(198, 151, 104)');
  var mazi2 = new Circle(center.x + 50,center.y - 95, 2,'rgba(198, 151, 104)');
  var mazi3 = new Circle(center.x - 60,center.y + 50, 20,'rgba(198, 151, 104)');
}

function Crown(){//王冠
  c.beginPath();//开始定义路径
  c.moveTo(center.x-8,center.y-130);//将当前点设为起点
  c.lineTo(center.x-18,center.y-150);//从结束点连接到此点
  c.lineTo(center.x+18,center.y-150);
  c.lineTo(center.x+8,center.y-130);
  c.closePath();//关闭路径，并将结束点与起始点进行连接
  c.strokeStyle = 'rgba(221, 191, 103)';
  c.stroke();//绘制边框
  c.fillStyle = 'rgba(221, 191, 103)';
  c.fill();//填充颜色

  c.beginPath();
  c.arc(center.x-18,center.y-168,18,0, Math.PI/2,0);
  c.arc(center.x+18,center.y-168,18,Math.PI/2,Math.PI,0);
  c.closePath();
  c.strokeStyle = 'rgba(221, 191, 103)';
  c.stroke();
  c.fillStyle = 'rgba(221, 191, 103)';
  c.fill();

  c.beginPath();
  c.moveTo(center.x-10,center.y-130);
  c.lineTo(center.x-10,center.y-134);
  c.lineTo(center.x+10,center.y-134);
  c.lineTo(center.x+10,center.y-130);
  c.closePath();
  c.strokeStyle = 'rgba(221, 191, 103)';
  c.stroke();
  c.fillStyle = 'rgba(221, 191, 103)';
  c.fill();

  c.beginPath();
  c.moveTo(center.x-12,center.y-134);
  c.lineTo(center.x+12,center.y-134);
  c.strokeStyle = 'rgba(72, 65, 63)';
  c.stroke();

  var round1 = new Circle(center.x - 19,center.y - 151, 4,'rgba(221, 191, 103)');
  var round2 = new Circle(center.x,center.y - 169, 4,'rgba(221, 191, 103)');
  var round3 = new Circle(center.x + 19,center.y - 151, 4,'rgba(221, 191, 103)');  
  var round4 = new Circle(center.x,center.y - 145, 4,'rgba(224, 102, 102)');  

}

function Rocket(){  
  c.save();//保存当前环境的状态
  c.translate(center.x,center.y);//重新映射画布上（0，0）的位置
  c.rotate(time*Math.PI/180);//画布的旋转代替火箭的旋转

  //主体蓝：长方形
  c.beginPath();
  c.moveTo(200,30);
  c.lineTo(230,30);
  c.lineTo(230,70);
  c.lineTo(200,70);
  c.closePath();
  c.fillStyle = 'rgba(135, 181, 224)';
  c.fill();
  //下面黄
  c.beginPath();
  c.moveTo(200,60);
  c.lineTo(230,60);
  c.lineTo(230,70);
  c.lineTo(200,70);
  c.closePath();
  c.fillStyle = 'rgba(222, 150, 75)';
  c.fill();
  //上面两个扇形
  c.beginPath();
  c.lineTo(230,30);
  c.arc(230, 30, 30, 21*Math.PI/16, 4*Math.PI/4, 1);
  c.closePath();
  c.fillStyle = 'rgba(135, 181, 224)';
  c.fill();

  c.beginPath();
  c.lineTo(200,30);
  c.arc(200, 30, 30, 27*Math.PI/16, 8*Math.PI/4, 0);
  c.closePath();
  c.fillStyle = 'rgba(135, 181, 224)';
  c.fill();
  //上面棕
  c.beginPath();
  c.lineTo(220, 18);
  c.arc(230, 30, 30, 21*Math.PI/16, 18*Math.PI/16, 1);
  c.closePath();
  c.fillStyle = 'rgba(168, 69, 45)';
  c.fill();

  c.beginPath();
  c.lineTo(210, 18);
  c.arc(200, 30, 30, 27*Math.PI/16, 30*Math.PI/16, 0);
  c.closePath();
  c.fillStyle = 'rgba(168, 69, 45)';
  c.fill();
  //下面棕
  c.beginPath();
  c.moveTo(200,70);
  c.lineTo(230,70);
  c.closePath();
  c.strokeStyle = 'rgba(168, 69, 45)';
  c.lineWidth = 4;
  c.stroke();
  //火焰：用各种圆弧围成
  c.beginPath();
  c.arc(250, 85, 45, Math.PI, 25*Math.PI/32, 1);
  c.arc(180, 85, 45, 7*Math.PI/32, 2*Math.PI, 1);
  c.arc(215, 85, 10, 0, Math.PI, 1);
  c.strokeStyle = 'rgba(226, 171, 56)';
  c.lineWidth = 1;
  c.stroke();
  c.fillStyle = 'rgba(226, 171, 56)';
  c.fill();

  c.beginPath();
  c.arc(245, 80, 35, Math.PI, 26*Math.PI/32, 1);
  c.arc(185, 80, 35, 6*Math.PI/32, 2*Math.PI, 1);
  c.arc(215, 80, 5, 0, Math.PI, 1);
  c.strokeStyle = 'rgba(234, 204, 142)';
  c.lineWidth = 1;
  c.stroke();
  c.fillStyle = 'rgba(234, 204, 142)';
  c.fill();
  //紫色
  c.beginPath();
  c.moveTo(190,80);
  c.lineTo(190,60);
  c.closePath();
  c.strokeStyle = 'rgba(133, 106, 202)';
  c.lineWidth = 6;
  c.stroke();

  c.beginPath();
  c.moveTo(215,80);
  c.lineTo(215,60);
  c.closePath();
  c.strokeStyle = 'rgba(133, 106, 202)';
  c.lineWidth = 6;
  c.stroke();

  c.beginPath();
  c.moveTo(240,80);
  c.lineTo(240,60);
  c.closePath();
  c.strokeStyle = 'rgba(133, 106, 202)';
  c.lineWidth = 6;
  c.stroke();

  //蓝色标志
  c.beginPath();
  c.arc(230, 37, 12, Math.PI/2, 3*Math.PI/2, 0);
  c.fillStyle = 'rgba(57, 112, 200)';
  c.fill();

  c.beginPath();
  c.arc(230, 37, 9, Math.PI/2, 3*Math.PI/2, 0);
  c.fillStyle = 'rgba(109, 158, 235)';
  c.fill();

  c.restore();//返回之前保存过的路径状态和属性
  time-=0.25;
}

function Overcast(x,radius){//多云
  this.x = x;
  this.y = canvas.height;
  this.radius = radius;
  this.fillColor = 'rgba(226, 223, 234, .2)';
  new SemiCircle(this.x, this.y, this.radius, this.fillColor);
}

function ShootingStar(x,y,dx,dy,radius,color){
  
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  
  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
  this.reset = function(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = (Math.random() - 0.5) * 10;
    this.dy = (Math.random() - 0.5) * 10;
    this.radius = (Math.random() * 2) + 1;
  }
  
}

function RotateEye(x,y,dx,dy,radius,color){
  
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.arc(this.x + 50, this.y, this.radius, 0, Math.PI * 2, true);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();

    c.beginPath();
    c.ellipse(this.x + 25, this.y + 40, 12, 6, 0, Math.PI * 2, false);    
    c.closePath();
    c.fillStyle = 'rgb(230, 144, 127)';
    c.fill();

    c.beginPath();
    c.ellipse(this.x + 25, this.y + 40, 12, 6, 0, Math.PI, false);    
    c.closePath();
    c.fillStyle = 'rgba(59, 50, 49)';
    c.fill();
  }
  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
  this.reset = function(){
    this.dx = (Math.abs(this.x-center.x)> 25)?(Math.random()-1)*0.25:(Math.random()+1)*0.15;
    this.dy = (Math.abs(this.y-center.y)> 15)?(Math.random()-1)*0.25:(Math.random()+1)*0.15;
  }
  
}

function file(){
  c.save();
  c.translate(canvas.width, canvas.height);
  c.rotate(120*Math.PI/180);
  c.beginPath();
  c.moveTo(100,420);
  c.lineTo(140,420);
  c.lineTo(140,450);
  c.lineTo(100,450);
  c.lineTo(100,415);
  c.lineTo(110,415);
  c.lineTo(110,430);
  c.closePath();
  c.fillStyle = 'rgba(156, 142, 198, .2)';
  c.fill();
  c.restore();
}

function media(){
  c.beginPath();
  c.moveTo(center.x-350,center.y+169);
  c.lineTo(center.x-327,center.y+173);
  c.closePath();
  c.strokeStyle = 'rgba(156, 142, 198, 0.3)';
  c.lineWidth = 3;
  c.stroke();

  new Circle(center.x-350,center.y+150, 20,'rgba(156, 142, 198, 0.3)');
  new Circle(center.x-343,center.y+140, 3,'rgba(11, 21, 56,0.3)');
  new Circle(center.x-357,center.y+140, 3,'rgba(11, 21, 56,0.3)');
  new Circle(center.x-361,center.y+152, 3,'rgba(11, 21, 56,0.3)');
  new Circle(center.x-339,center.y+152, 3,'rgba(11, 21, 56,0.3)');
  new Circle(center.x-351,center.y+162, 3,'rgba(11, 21, 56,0.3)');
  
}

function picture(){
  c.beginPath();
  c.moveTo(center.x+350,center.y-169);
  c.lineTo(center.x+312,center.y-173);
  c.closePath();
  c.strokeStyle = 'rgba(156, 142, 198, 0.1)';
  c.lineWidth = 50;
  c.stroke();

  c.beginPath();
  c.moveTo(center.x+347,center.y-169);
  c.lineTo(center.x+315,center.y-173);
  c.closePath();
  c.strokeStyle = 'rgba(156, 142, 198, 0.1)';
  c.lineWidth = 40;
  c.stroke();

  new Circle(center.x+325,center.y-181, 4,'rgba(11, 21, 56,0.1)');
  
  c.beginPath();
  c.arc(center.x+348,center.y-150, 25, 180*Math.PI/180, 270*Math.PI/180, 0);
  c.lineTo(center.x+346,center.y-149);
  c.fillStyle = 'rgba(11, 21, 56, 0.2)';
  c.fill();
}

function Land(x,y,dx,landWidth,landLength){
  
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.landWidth = landWidth;
  this.landLength = landLength;

  
  this.draw = function(){
    c.save();
    c.beginPath();
    c.arc(center.x, center.y, 120, 0, Math.PI * 2, false);//画半径120的圆
    c.clip();
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineCap = 'round';//线条结束端为圆
    c.lineWidth = this.landWidth;
    c.lineTo(this.x + this.landLength,this.y);
    c.strokeStyle = '#85cc66';
    c.stroke();
    c.restore();
  }
  this.update = function(){
    if(this.x < (center.x-240)){
      this.x = center.x +240;
    }
    this.x -= this.dx;
    this.draw();
  }
  
}

function SemiCircle(x,y,radius,fillColor){//半圆
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.fillColor = fillColor;
  
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI, 1);
  c.fillStyle = this.fillColor;
  c.fill();
}

function Star(cx, cy, spikes, outerRadius, innerRadius) {
    this.rot = Math.PI / 2 * 3;// 3/2Π
    this.x = cx;
    this.y = cy;
    this.spikes = spikes;
    this.outerRadius = outerRadius;//外部半径
    this.innerRadius = innerRadius;//内部半径
    
    this.step = Math.PI / this.spikes;

    c.strokeStyle = "white";
    c.beginPath();
    c.moveTo(cx, cy - this.outerRadius)
    for (i = 0; i < this.spikes; i++) {
        this.x = cx;
        this.y = cy;
        x = cx + Math.cos(this.rot) * this.outerRadius;
        y = cy + Math.sin(this.rot) * this.outerRadius;
        c.lineTo(x, y)
        this.rot += this.step

        x = cx + Math.cos(this.rot) * this.innerRadius;
        y = cy + Math.sin(this.rot) * this.innerRadius;
        c.lineTo(x, y)
        this.rot += this.step
    }
    c.lineTo(cx, cy - this.outerRadius)
    c.closePath();
    c.lineWidth=3;
    c.strokeStyle='rgb(255, 242, 204, .5)';
    c.stroke();//绘制已定义好的路径
}

function Cross(cx, cy, Radius, strokeStyle) {
    this.rot = Math.PI / 2 * 3;// 3/2Π
    this.x = cx;
    this.y = cy;
    this.Radius = Radius;//半径
    this.strokeStyle = strokeStyle;
    this.step = Math.PI / 4;

    c.strokeStyle = "white";
    c.beginPath();
    c.moveTo(cx, cy)
    for (i = 0; i < 4; i++) {
        this.x = cx;
        this.y = cy;
        x = cx + Math.cos(this.rot) * this.Radius;
        y = cy + Math.sin(this.rot) * this.Radius;
        c.lineTo(x, y)
        this.rot += this.step

        x = cx;
        y = cy;
        c.lineTo(x, y)
        this.rot += this.step
    }
    c.lineTo(cx, cy)
    c.closePath();
    c.lineWidth=3;
    c.strokeStyle=this.strokeStyle;
    c.stroke();//绘制已定义好的路径
}

//初始化
var earthWidth = 120;
var planets = [{x: 20,y:10}];
var land = [{x: 20,y:10}];
var stars = [{x: 10,y:10}];
var cross = [{x: 15,y:15}];
var overcast = [{x: 15,radius:30}];

function drawStars(a){
  for (var i = 0; i <= a; ++i) {
    var bestLocation = sample(stars);
    stars.push( new Star(bestLocation[0], bestLocation[1], 4, Math.floor(Math.random() * 4)+3, 1));
  }
}

function drawOvercast(a){
  for (var i = 0; i <= a; ++i) {
    overcast.push( new Overcast(Math.random() * (canvas.width - 20), Math.random() *150));
  }
}

function drawCross(a){
  for (var i = 0; i <= a; ++i) {
    var bestLocation = sample(cross);
    cross.push( new Cross(bestLocation[0], bestLocation[1], Math.floor(Math.random() * 4)+4, 'rgba(224, 102, 102, .8)'));
  }
  for (var j = 0; j <= a; ++j) {
    var bestLocation = sample(cross);
    cross.push( new Cross(bestLocation[0], bestLocation[1], Math.floor(Math.random() * 4)+4, 'rgba(100, 164, 71, .2)'));    
  }
}

function drawPlanets(a){
  for (var i = 0; i <= a; ++i) {
    var bestLocation = sample(planets);
    planets.push(new Circle(bestLocation[0],bestLocation[1], Math.random() * 5,'rgb(32, 66, 136)'));
  }
}

//最佳候选算法让其在画布上均匀分布
function sample(samples) {
  var bestCandidate, bestDistance = 0;
  for (var i = 0; i < 20; ++i) {
    var c = [Math.random() * canvas.width, Math.random() * canvas.height],
        // 距离c的最近邻距离c的值
        d = distance(findClosest(samples, c), c);
    if (d > bestDistance) {
      bestDistance = d;
      bestCandidate = c;
    }
  }
  return bestCandidate;
}

function earthMask(samples) {
  var bestCandidate, bestDistance = 0;
  for (var i = 0; i < 20; ++i) {
    var c = [Math.floor(Math.random() * ((center.x+240) - (center.x-240) + 1)) + (center.x-240), Math.floor(Math.random() * ((center.y+120) - (center.y-120) + 1)) + (center.y-120)],
        d = distance(findClosest(samples, c), c);
    if (d > bestDistance) {
      bestDistance = d;
      bestCandidate = c;
    }
  }
  return bestCandidate;
}

function distance(a, b) {
  var dx = a.x - b[0],
      dy = a.y - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

//不断更新迭代找到最近邻，points数组中距离b最近的值
function findClosest(points, b) {
  var distance = null;
  var closestPoint;
  for (var i = 0; i < points.length; ++i) {
      var dx = points[i].x - b[0];
      var dy = points[i].y - b[1];
      if(distance == null){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      } else if(distance > Math.sqrt(dx * dx + dy * dy)){
        distance = Math.sqrt(dx * dx + dy * dy);
        closestPoint = points[i];
      }
  }
  return closestPoint;
}

//创建
drawPlanets(50);
drawStars(10);
drawCross(5);
drawOvercast(10);

//随机生成的流星
var shootingStar = new ShootingStar(10,10,8,8,2,'#2c62c2');
var shootingStar2 = new ShootingStar(400,300,-8,8,2,'#2c62c2');
var rotateEye = new RotateEye(center.x,center.y, 0, 0, 8,'rgba(59, 50, 49)');

window.setInterval(resetShootingStar, 3000);
window.setInterval(resetShootingStar2, 5000);
window.setInterval(resetEye,1000);
window.setInterval(Rocket, 10);

function resetShootingStar() {
  shootingStar.reset();
}
function resetShootingStar2() {
  shootingStar2.reset();
}
function resetEye() {
  rotateEye.reset();
}

// 动画
function animate(){
  requestAnimationFrame(animate);//16.67ms
  
  c.fillStyle = 'rgba(11, 21, 56,0.3)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  shootingStar.update();
  shootingStar2.update();
  
  for (var i = 0; i < stars.length; i++){
    Star(stars[i].x,stars[i].y,stars[i].spikes,stars[i].innerRadius,stars[i].outerRadius);
  }
  for (var i = 0; i < overcast.length; i++){
    Overcast(overcast[i].x,overcast[i].radius);
  }
  for (var i = 0; i < cross.length; i++){
    Cross(cross[i].x,cross[i].y,cross[i].Radius,cross[i].strokeStyle);
  }
  for (var i = 0; i < planets.length; i++){
    Circle(planets[i].x,planets[i].y,planets[i].radius,planets[i].fillColor);
  }

  face();
  Crown();
  rotateEye.update();
  file();
  media();
  picture();
}

animate();
