// 使用beforeEach/afterEach优化测试代码
describe("A test suite for SchoolService", function () {
    var schoolService = new SchoolService();
    var teachers = [];
    var students = [];

    beforeEach(function () {
        teachers = schoolService.getTeachers();
        students = schoolService.getStudents();
    });

    it("Spec test 1, test the getTeachers function", function () {
        expect(teachers).not.toBe(null);
        expect(teachers.length).toEqual(5);
    });
    it("Spec test 2, test the getStudents function", function () {
        expect(students).not.toBe(null);
        expect(students.length).toEqual(10);
    });
    it("Spec test 3, test the getTeacher function", function () {
        var teacher = schoolService.getTeacher("011");
        expect(teacher).not.toBe(null);
        expect(teacher.name).toMatch(/teacher/);
        expect(teacher.name).toMatch("teacher");
        expect(teacher.name).not.toMatch(/people/);
        var teacher6 = schoolService.getTeacher("016");
        expect(teacher6).toBe(null);
    });

    // 使用嵌套测试，将 Teacher 和 Student 分开
    // 有利于后面不测试某一部分，直接 xdescribe 即可
    describe("A nested test suite", function () {
        it("Spec test 4: test the getStudent function", function () {
            var student10 = schoolService.getStudent("0010");
            expect(student10).toBe(null);
            var student9 = schoolService.getStudent("009");
            var teacher = student9.teacher;
            expect(teacher).toBeDefined();
        });
        it("Spec test 5: test the getStudentsByTeacher function", function () {
            var students = schoolService.getStudentsByTeacher("014");
            expect(students).not.toBe(null);
            expect(students.length).toEqual(2);
            var idArray = [];
            idArray.push(students[0].id);
            idArray.push(students[1].id);
            expect(idArray).toContain("007", "008");
        });

    });

    afterEach(function () {
        teachers = [];
        students = [];
    });
});

// 高级用法：Jasmine的Spies
describe("A test suite for Spies", function () {
    var schoolService = new SchoolService();
    var teachers = null;
    beforeEach(function () {
        spyOn(schoolService, "getTeachers");
        teachers = schoolService.getTeachers();
    });
    it("Spec test 1, track that the spy was called", function () {
        expect(schoolService.getTeachers).toHaveBeenCalledTimes(1);
        expect(schoolService.getTeachers).toHaveBeenCalled();
    });
    it("Spec test 2, track that the spy was called x times", function () {
        teachers = schoolService.getTeachers();
        expect(schoolService.getTeachers).toHaveBeenCalledTimes(2);
    });
    it("Spec test 3, tracks all the arguments of its calls", function () {
        expect(schoolService.getTeachers).toHaveBeenCalledWith();
    });
    it("Spec test4, stops all execution on a function", function () {
        expect(teachers).not.toBeDefined();
    });
});

// 使用Spies模拟返回值
describe("A test suite for Spies", function () {
    var schoolService = new SchoolService();
    var teachers = null;
    beforeEach(function () {
        spyOn(schoolService, "getTeachers").and.returnValue({ id: "016", name: "teacher6" });;
        teachers = schoolService.getTeachers();
    });
    it("Spec test 5, when called returns the requested value", function () {
        expect(schoolService.getTeachers).toHaveBeenCalledTimes(1);
        expect(teachers).toBeDefined();
        expect(teachers.id).toEqual("016");
    });
});