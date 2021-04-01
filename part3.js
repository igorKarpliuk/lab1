var array=[4,-4,6,5,1,2,0,-3,11];

function arr(array)
{
    for(let i=1;i<array.length;i++)
    {
        let j=i-1;
        let k=i;
        while(array[k]<=array[j] && j>=0 )
        {
            let temp=array[k];
            array[k]=array[j];
            array[j]=temp;
            j--;
            k--;
        }
    }
    return array;
}
console.log(arr(array));
