class CargoFinished
{
    constructor(id,weight,initial,terminal,init_time,term_time)
    {
        if(term_time)
        {
        this.id=id;
        this.weight=weight;
        this.initial=initial;
        this.terminal=terminal;
        this.init_time=new Date(init_time);
        this.term_time=new Date(term_time);
        }
        else 
        {
            console.log("Term_time isn't declared");
        }
    }
}
module.exports=CargoFinished