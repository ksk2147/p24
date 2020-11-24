class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.body);
	    this.body= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.body);
	    this.body = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.body);
        this.body.width = width
        this.body.height = height 
        
   }
   display(){
       fill("white");
   }
}
