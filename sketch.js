var num = 20;
var numX1 = [];
var numY1 = [];
var numSize = [];
var Col = [];
var Tri1_width = [];
var Tri2_width = [];
var Tri3_width = [];
var numX2 = [];
var numY2 = [];
var numX3 = [];
var numY3 = [];
var MyButton;
var ArrayofTriangles = [];

function setup() {
	background(100,50,50);
	createCanvas(windowWidth, windowHeight);
	noStroke();
	Tri1_width = [10, 50, 99, 127, 466, 700, 820]; 
	Tri2_width = [30,90,200,500,950];
	Tri3_width = [10,400,30,750];
	Col = [color(88,178,103), color(89,0,255), color(255,157,47)];
	MyButton = createButton('Refresh');
  MyButton.position(windowWidth/2, 75);
	MyButton.size(90,50);
	triangles();
  MyButton.mousePressed(setup);
	
	}
	

function draw() { 
	for (var i = 0; i <num; i++){
		ArrayofTriangles[i].display();
			
	}
}
	
	function triangles(){
			for (var i = 0; i <num; i++){
	  	numX1[i] = Tri1_width[floor(random(Tri1_width.length))];
			numY1[i] = random(height);
			numX2[i] = Tri2_width[floor(random(Tri2_width.length))];
			numY2[i] = random(height);
			numX3[i] = Tri3_width[floor(random(Tri3_width.length))];
			numY3[i] = random(height);
			numSize[i] = random(100);
			Col[i] = random(Col);
		var myTri = new trianglesObject(numX1[i],numY1[i],numX2[i],numY2[i],numX3[i],numY3[i],Col[i]);
		ArrayofTriangles[i] = myTri;
			}
	}
		
	function trianglesObject(x1,y1,x2,y2,x3,y3,Col) {
			this.pt1 = [x1,y1]
			this.pt2 = [x2,y2]
			this.pt3 = [x3,y3]
			this.Col = Col
			
			this.display = function() {
			fill(this.Col);
			strokeWeight(4);
			stroke(51);
			triangle(this.pt1[0], this.pt1[1],this.pt2[0], this.pt2[1],this.pt3[0], this.pt3[1]);
			}
				
   }
