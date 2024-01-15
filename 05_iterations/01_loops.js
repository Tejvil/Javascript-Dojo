// for
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is best num");
    }
    // console.log(element);
}
for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <=5; j++) {
        const element = j;
        // console.log(`inner loop ${j}`);
    }
    const element = i;
    
}

// break
for (let index = 1; index <= 20; index++) {
    if (index == 5 ) {
        console.log(`detected ${index}`);
        break
    }
    console.log(`value of i is ${index}`);
    
}

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5 ) {
        console.log(`detected ${index}`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}

  

















