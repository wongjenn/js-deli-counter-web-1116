var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine[0] == undefined ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(line) {
  var numInLine = "";
  if (line[0] == undefined) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length; i++){
      numInLine += `${i+1}. ${line[i]}, `;
    }
    return `The line is currently: ${numInLine.slice(0, numInLine.length-2)}`;
  }
}
