function superbowlWin(array){
    const result = array.find( array => array.result === "W");
    return !!result ? result.year : undefined;
}

function superbowlWinUpdate(array){
    let updatedRecord = [{ year: "2021", result: "L"},{ year: "2020", result: "W"}, { year: "2019", result: "N/A"}, ...array];
    const result = updatedRecord.find( updatedRecord => updatedRecord.result === "W");
    return !!result ? result.year : undefined;
}
