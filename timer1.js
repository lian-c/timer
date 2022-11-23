const args = process.argv;
const newArg = args.slice(2);
 if(!newArg){
  return ;
 }
//edge cases
//no numbers  end
//negative num so less than 0 skip these but continue
//NaN skip  skip with continue
for(let each of newArg){
  if(each < 0 || isNaN(each)){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (each*1000)); // times 1000 to go from ms to second
}