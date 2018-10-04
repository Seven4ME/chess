for(let i = 0;i<9;i++){
    for(let j = 0;j<9;j++){
        let arr=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let arr2 = arr.split(', ');
        for(j = 0;j<arr.length;j++){
            document.getElementById('test2').innerHTML += arr2[j];
        }
    }
    document.getElementById('test').innerHTML += [i] +'<br>';
}
