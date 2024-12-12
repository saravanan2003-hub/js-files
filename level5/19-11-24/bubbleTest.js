function selectionSort(arr) {

    // Enter code here
    for(i=0; i<arr.length; i++){
        console.log(arr.join(" "));
        
        let min = i;
            for(j=i+1; j<arr.length; j++){
                if(arr[min]>arr[j]){
                    min = j
                }
            }
            if(min!=i){
                let temp = arr[i]
                arr[i] = arr[min];
                arr[min] = temp;
            }
          
    }
    
}

selectionSort([4,5,1,3,7]);