// code your solution here

superbowlWin = (record) => {

    const ifWon = record.find(record => record.result === "W");

    return !!ifWon ? ifWon.year : undefined;
} 