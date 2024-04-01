function saturdayFun(game="roller-skate") {
    return `This Saturday, I want to ${game}!`
  }

let mondayWork= function (work="go to the office") {
    return `This Monday, I will ${work}.`
  }

  let wrapAdjective = function(wrap="*") {
    return function(adjective="special") {
      return `You are ${wrap}${adjective}${wrap}!`
    }
  }
    