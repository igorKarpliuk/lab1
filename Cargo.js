class Cargo
{
    constructor(id,weight,initial,terminal,init_time)
    {
        this.id=id;
        this.weight=weight;
        this.initial=initial;
        this.terminal=terminal;
        this.init_time=new Date(init_time);
    }
}

module.exports=Cargo