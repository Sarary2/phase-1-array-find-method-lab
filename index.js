// code your solution here
function superbowlWin(record){
    const result = record.find(re => re.result === 'W')

   if (result){
        return result.year
    }else{
        return undefined
}
}
