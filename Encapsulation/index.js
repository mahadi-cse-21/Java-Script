class Rectangle
{
    constructor(width,height){
        this.height= height;
        this.width = width;
    }

    set width(newWidth)
    {
        if(newWidth>0)
            this._width=newWidth;
        else
            console.log("you have give incorrect width of rectangle.");
    }


    set height(newHeight)
    {
        if(newHeight>0)
           this._height = newHeight
        else
            console.log("you have give incorrect height of rectangle.");
   
    }

    get width()
    {
        return `${this._width.toFixed(1)}cm`;
    }
    get height()
    {
        return `${this._height.toFixed(1)} cm`;
    }
    get area()
    {
        return `${(this._height* this._width).toFixed(1)}cm2`;
    }

}

const rect = new Rectangle(10,23);


console.log(rect.width);
console.log(rect.height);
console.log(rect.area);