// let str = "Hello world";// llohe rldwo
// let a = str.split(' ');
// let array1 = [];
// let array2 =[];
// array1.push(a[0]);
// array2.push(a[1]);
// let b = array1[0].split('');
// let c = array2[0].split('');
// console.log(array1);


// let str = "HTML-CSS-JavaScript"
// let spl = str.split("-")
// console.log(spl);



let landing_times = [12, 15, 12, 18, 20, 12];
let count1 = landing_times.length
for(i=0; i<count1; i++)
{
    for(j=i+1; j<count1; j++){
        if(landing_times[i]==landing_times[j]){
            console.log(landing_times[i])
        }
    }
}
