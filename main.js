//Arrange numbers
let arr=[1,8,0,4,5,6,9,7,3]
let temp = arr[0]

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<=arr[i]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    
}
console.log(arr);