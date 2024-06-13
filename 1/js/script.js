
class school{
    student(name,contact,email) {
        document.getElementById('name1').innerHTML = `Student Name-${name}`
        document.getElementById('contact1').innerHTML = ` contact  -${contact}`
        document.getElementById('eamil1').innerHTML = ` gmail  -${email}`
    }
    peon(name,contact,email) {
        document.getElementById('name2').innerHTML = ` Peon Name  -${name}`
        document.getElementById('contact2').innerHTML = ` contact  -${contact}`
        document.getElementById('eamil2').innerHTML = ` gmail is -${email}`
    }
    faculty(name,contact,email) {
        document.getElementById('name3').innerHTML = `Faculty Name-${name}`
        document.getElementById('contact3').innerHTML = ` contact-${contact}`
        document.getElementById('eamil3').innerHTML = ` gmail -${email}`
    }
}

let student1 = new school();
student1.student("HARDIK","8511001899","hardikgohil4700@gmail.com");

let peon = new school();
peon.peon("nikhil","7043718923","nikhil13@gmail.com");

let faculty = new school();
faculty.faculty("Rahul","6352396878","rahul01418@gmail.com");
