let s = "12:01:00AM"
let spl = str.split(":");
let time = spl[2][2];
let ans = s;

if(time ==="P" && Number(spl[0]<12)){
    spl[0] = Number(spl[0])+12
    ans = spl.join(":");
}

if(time=== "A" && Number(spl[0])===12){
    spl[0]=="00";
    ans = spl.join(":");
}
ans = ans.slice(0,8);
return ans;