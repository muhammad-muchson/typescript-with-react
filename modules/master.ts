export class Addition{  
    constructor(private x?: number, private y?: number){  
    }  
    Sum(){  
        console.log("SUM: " +(this.x + this.y));  
    }  
}  
export class Division{  
    constructor(private x?: number, private y?: number){  
    }  
    Div(){  
        console.log("Division: " +(this.x / this.y));  
    }  
}  