
const getAverage=arr=> {
  let sum=0;
  for (let i=0;i<arr.length;i++) {
    sum+=arr[i];
  }
  let avg=sum/arr.length;
  return avg;
}

const getGrade=score=> {
  if (score==100) {
    return "A+";
  }
  else if (score>=90 && score<=99) {
    return "A";
  }
  else if (score>=80 && score<=89) {
    return "B";
  }
  else if (score>=70 && score<=79) {
    return "C";
  }
  else if (score>=60 && score<=69) {
    return "D";
  }
  else {
    return "F";
  }
}

const hasPassingGrade=score=> {
  if (getGrade(score)=="F") {
    return false;
  }
  else {
    return true;
  }
}

const studentMsg=(arr,score)=> {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
  else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}



