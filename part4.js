let s="abbccd";
let c=1;
let max=0;
let maxe="";
for(let i=0;i<s.length;i++)
{
    let k=0;
    for(let j=i-1;j>=0;j--)
    {
        if(s[i]==s[j]) k++;
    }
    if(k==0)
    {
        c=1;
    for(let j=i+1;j<s.length;j++)
        {
            if(s[j]==s[i])
            {
               c++;
            }
        }
        console.log("Character=%s"+"  Count=%i",s[i],c);
        if(c>max)
        { 
            max=c;
            maxe=s[i];
        }
        else if(c==max)
        {
            maxe+=s[i];
        }
    }
}
for(let i=0;i<maxe.length;i++)
{
    console.log("Element with max frequency=%s",maxe[i]);
}