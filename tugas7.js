var tinggiBadan = [155,160,165,170,175,180,185,190,195,200];
for(var i = 0; i < tinggiBadan.length; i++){
  console.log(tinggiBadan[i]);
}

for(let x of tinggiBadan){
  console.log(x);
}

//secara hasil tidak ada yang berbeda tetapi dengan pengulangan biasa dapat lebih dibatasi jumlah data yang ingin dikeluarkan,
//sedangkan dengan for of loop data yang dikeluarkan harus semuanya yang ada di dalam array.
