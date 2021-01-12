let spinChar = ['|', '/', '-', '\\'];
for(let i=0; i<=8 ; i++){
  setTimeout(()=>{
    process.stdout.write(`\r${spinChar[i%4]}    `);
  }, 100 + i*200);
}