const calcPercent = (number: any, percentage: any) => {
  const result = number / percentage;
  return parseFloat(result.toFixed(2));
};

export const find_percentage = (questions: any) => {
  let all_ques = [...questions];

  var newques = all_ques.map((question: any) => {
    let single_ques: any = { ...question };
    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let d: number = 0;
    const answers = { ...question.answers };
    Object.keys(answers).map((user: any) => {
      if (answers[user].saved.a === true) a = a + 1;
      if (answers[user].saved.b === true) b = b + 1;
      if (answers[user].saved.c === true) c = c + 1;
      if (answers[user].saved.d === true) d = d + 1;
    });
    const total = a + b + c + d;
    if (total === 0) {
      let percentage = {
        ...single_ques.percentage,
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      };
      single_ques.percentage = percentage;
    } else {
      let percentage = {
        ...single_ques.percentage,
        a: calcPercent(a, total) * 100,
        b: calcPercent(b, total) * 100,
        c: calcPercent(c, total) * 100,
        d: calcPercent(d, total) * 100,
      };
      single_ques.percentage = percentage;
      single_ques.number = {
        ...single_ques.number,
        a: a,
        b: b,
        c: c,
        d: d,
      };
    }
    return single_ques;
  });
  return newques;
};
