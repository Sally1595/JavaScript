let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
  let commonCourses = [];

    for (let course of courses1) {
      if (courses2.includes(course)) {
      commonCourses.push(course);
    }
  }

    if (commonCourses.length > 0) {
    console.log('Common courses:', commonCourses.join(', '));
  } else {
    console.log('No common courses found.');
  }
}

findCommonCourses(student1Courses, student2Courses);
