const ricoh: string[] = ["r", "i", "c", "o", "h"]
delete ricoh[3]
console.log(ricoh) //[ 'r', 'i', 'c', <1 empty item>, 'h' ]
console.log("ricoh.length: " + ricoh.length) // 5