function getStudents(classroom) {
    let {hasTeachingAssitant, classList} = classroom;
    let teacher, teachingAssistant, students;

    if (hasTeachingAssitant) {
        [teacher, teachingAssistant, ...students ] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(
    getStudents({
        hasTeachingAssitant: false,
        classList:["Rashida","John","Roman","Lisa","Omair"]
    })
);