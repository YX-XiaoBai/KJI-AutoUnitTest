// 对外提供的 SchoolService 类
function Student(id, name) {
    this.id = id;
    this.name = name;
    this.age = -1;
    this.teacher = null;
}
function Teacher(id, name) {
    this.id = id;
    this.name = name;
    this.age = -1;
}
// 定义了 Teacher 与 Student 类
function SchoolService() {
    this.getTeachers = function () {
        var teachers = [];
        for (var i = 0; i < 5; i++) {
            var teacher = new Teacher();
            teacher.id = "01" + i;
            teacher.name = "teacher" + i;
            teachers.push(teacher);
        }
        return teachers;
    }
    this.getStudents = function () {
        var students = [];
        for (var i = 0; i < 10; i++) {
            var student = new Student();
            student.id = "00" + i;
            student.name = "student" + i;
            var teacher = new Teacher();
            var tId = Math.ceil(i / 2);
            teacher.id = "01" + tId;
            teacher.name = "teacher" + tId;
            student.teacher = teacher;
            students.push(student);
        }
        return students;
    }
    this.getTeacher = function (tId) {
        var r = null;
        var teachers = this.getTeachers();
        for (var i = 0; i < teachers.length; i++) {
            var teacher = teachers[i];
            if (teacher.id == tId) {
                r = teacher;
                break;
            }
        }
        return r;
    }
    this.getStudent = function (sId) {
        var r = null;
        var students = this.getStudents();
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            if (student.id == sId) {
                r = student;
                break;
            }
        }
        return r;
    }
    this.getStudents = function (tId) {
        var r = [];
        var students = this.getStudents();
        for (var i = 0; i < students.length; i++) {
            var student = students[i];
            if (student.teacher && student.teacher.id == tId) {
                r.push(student);
            }
        }
        return r;
    }
}