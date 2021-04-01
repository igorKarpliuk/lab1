var a="ІгорКарплюк";
var b=" Богданович ";
function concat(a,b, pos)
{
    var c="";
    for(let i=0;i<pos;i++)
    {
        c+=a[i];
    }
    for(let i=0;i<b.length;i++)
    {
        c+=b[i];
    }
    for(let i=pos;i<a.length;i++)
    {
        c+=a[i];
    }
    return c;
}
let x=concat(a,b,4);
console.log(x);