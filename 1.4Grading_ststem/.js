function getGradeAndComment(score) {
  // Validate score range
  if (score < 0 || score > 100) {
    return {
      grade: "Invalid",
      comment: "Score must be between 0 and 100"
    };
  }

  // Else-if ladder for grading
  if (score >= 90) {
    return {
      grade: "A",
      comment: "Outstanding! Keep it up!"
    };
  } else if (score >= 80) {
    return {
      grade: "B",
      comment: "Very good – room to reach A"
    };
  } else if (score >= 70) {
    return {
      grade: "C",
      comment: "Good effort – aim higher next time"
    };
  } else if (score >= 60) {
    return {
      grade: "D",
      comment: "Passing – but needs improvement"
    };
  } else {
    return {
      grade: "F",
      comment: "You need to study more"
    };
  }
}

// Function Calls (testing all required cases)

console.log(getGradeAndComment(59));
// { grade: "F", comment: "You need to study more" }

console.log(getGradeAndComment(60));
// { grade: "D", comment: "Passing – but needs improvement" }

console.log(getGradeAndComment(89.9));
// { grade: "B", comment: "Very good – room to reach A" }

console.log(getGradeAndComment(90));
// { grade: "A", comment: "Outstanding! Keep it up!" }

console.log(getGradeAndComment(100));
// { grade: "A", comment: "Outstanding! Keep it up!" }

console.log(getGradeAndComment(-5));
// { grade: "Invalid", comment: "Score must be between 0 and 100" }
