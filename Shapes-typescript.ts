

// I - Interface Segregation Principle

// I don't have to implement what I don't need!!!


export interface ShapeI {
    area?:Function;

    volume?:Function; 
}


// class VolumeCalculator implements ShapeI{


//     volume(){

//     }
// }


// D - Dependency Inversion Principle

// interface ManageShapeInterface
// {
//     calculate:Function;
// }


export class Square implements ShapeI {
    length:number;

    constructor (length) {
        this.length = length
    }

    getLegth(){
        return this.length
    }
    
    public area(){
        return Math.pow(this.length, 2)
    }
   
}

export class Cubic extends Square implements ShapeI {

    length:number;
    public volume():number {
        return (this.length * this.area())
    }
//     public calculate(){
// return (this.length * this.area())    }

}

export class Circle implements ShapeI {
    radius:number;

    constructor (radius) {
        this.radius = radius
    }
    area() {
      return (Math.PI * this.radius ** 2).toFixed(2);
    }
  }
export class Ball extends Circle implements ShapeI {

    radius:number;

    public volume():number {
        return Number(((Math.PI * this.radius ** 3)*4/3).toFixed(2))
    }
//     public calculate(){
// return (this.length * this.area())    }

}



// Database MYSQL / MSSQL / POSTGRES / ORACLE


class MySQLConnection{

    public connect(){
        //handle database connection
        return 'Database Connection'
    }

}



class MSSQLConnection{

    public connect(){
        //handle database connection
        return 'Database Connection'
    }

}


class PasswordChecker {
    private dbConnection:any

    public constructor(dbConnection:MSSQLConnection){
        this.dbConnection = dbConnection
    }

    checkPassword():boolean{
        return false
    }
}