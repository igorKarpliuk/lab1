let amd=[31,28,31,30,31,30,31,31,30,31,30,31];
function amount(a,b,c)
{
    let am=0;
    for(let i=0;i<b-1;i++)
    {
        if(i==1&&(c%4==0))
        {
            am+=amd[i]+1;
        }
        else
        {
            am+=amd[i];
        }
    }
    am+=a-1;
    return am;
}
console.log("Amount of days:"+amount(1,4,2021));
