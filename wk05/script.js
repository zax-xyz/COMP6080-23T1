const BASE_URL = "https://timetable.csesoc.app/api/terms/2023-T1";
const courseListElem = document.getElementById("course-list");
const courseInfoElem = document.getElementById("course-info");

const renderCourseList = courses => {
  courseListElem.innerHTML = "";

  courses.forEach(course => {
    const courseElem = document.createElement("button");
    courseElem.classList.add("course");
    courseElem.innerText = `${course.courseCode} ${course.name}`;
    courseElem.addEventListener("click", async () => {
      const resp = await fetch(`${BASE_URL}/courses/${course.courseCode}`);
      const data = await resp.json();
      document.querySelector("#course-info > h1").innerText = `${data.courseCode} ${data.name}`;
      document.querySelector("#course-info > h2").innerText = `${data.school} - ${data.campus}`;

      const classesElem = document.getElementById("classes");
      classesElem.innerHTML = "";
      data.classes.forEach(cls => {
        const classElem = document.createElement("div");
        classElem.innerText = cls.section;
        classesElem.appendChild(classElem);
      });
    });

    courseListElem.appendChild(courseElem);
  });
};

const fetchCourses = async () => {
  const resp = await fetch(`${BASE_URL}/courses`);
  const data = await resp.json();
  const courses = data.courses;
  renderCourseList(courses);

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    renderCourseList(
      courses.filter(
        course =>
          course.courseCode.toLowerCase().includes(query) ||
          course.name.toLowerCase().includes(query),
      ),
    );
  });
};

fetchCourses();
