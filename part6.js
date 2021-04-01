class Tree
{
    constructor(value,first,second)
   { 
       this.value=value;
       this.first=first;
       this.second=second;
   }
   sum()
   {
       let summ=`${this.value}`;
       if(this.first!=null)
       {
           summ+=`${this.first.sum()}`;
       }
       if(this.second!=null)
       {
           summ+=`${this.second.sum()}`;
       }
       if(this.first!=null || this.second!=null)
       summ+=`${this.value}`;
       return summ;
   }
}
let tree1=new Tree(1,new Tree(2,new Tree(3),new Tree(5)),new Tree(4));
console.log(`sum=${tree1.sum()}`);