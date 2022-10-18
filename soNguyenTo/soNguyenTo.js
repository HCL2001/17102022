var numbers = parseInt(prompt("Nhap vao mot so bat ky"));
var count = 0;
var N = 0;
const MAX_INT_NUM = Number.MAX_SAFE_INTEGER;

for(var i = 1; i < MAX_INT_NUM; i++){
    if (count < numbers){
        for (let j = 1; j<=i; j++){
            if (i % j === 0)
                N++;
        }
        if (N === 2){
            document.write(i + "<br>");
            count++;
        }
        N++;
    } else {
        break;
    }
}