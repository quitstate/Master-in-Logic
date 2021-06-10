const showStudents = (students) => {
  let approved = 0;
  let suspended = 0;
  for (const student of students) {
    if (student[1] >= 5) {
      approved++;
    } else {
      suspended++;
    }
  }

  return {
    approved: approved,
    suspended: suspended,
  };
};

module.exports = showStudents;
