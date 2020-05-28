class Staff {
    static teacher_array= [];
     constructor(firt_name, last_name, phone_number, address, personal_email, role ,school_email, salary) {
       this.firt_name = firt_name;
       this.last_name = last_name;
       this.phone_number = phone_number;
       this.address = address;
       this.personal_email = personal_email;
       this.role=role;
       this.school_email=school_email;
       this.salary=salary;
     }
    teacher_array =[];
    staff_array =[];

    addTeacher = (c)=>{ 
        if(this instanceof Principle){
            let teacher = new Teacher(c.floor,c.classes, c.subject, c.type, c.first, c.last, c.phone, c.address, c.p_email, c.s_email, c.salary);
            Staff.teacher_array.push(teacher);
            console.log("array ", Staff.teacher_array);
        }
    }

    addStaff = (emp,cons)=>{
        let test= ({
            first_name: cons.first_name,
            last_name: cons.last_name,
            schoolida_email: cons.schoolida_email
        })
        switch(emp){
            case "Teacher":
                Staff.staff_array.push({
                    first_name: cons.first_name,
                    last_name: cons.last_name,
                    schoolida_email: cons.schoolida_email,
                    role: emp,
                    floors_covered: cons.floors_covered,
                    classes_taught: cons.classes_taught,
                    subject: cons.subject
                })
                break;
            case "conselor":
                test.push({
                    first_name: cons.first_name,
                    last_name: cons.last_name,
                    schoolida_email: cons.schoolida_email,
                    role: emp,
                    office_days: cons.office_days, 
                    office_hours: cons.office_hours
                })
                break;
                default:
                    test.push({
                        first_name: cons.first_name,
                        last_name: cons.last_name,
                        schoolida_email: cons.schoolida_email,
                        role: emp,
                    })

        }
    }
    viewEmployees=()=>{
     console.log(Staff.staff_array)
    }
}
     
   Staff.teacher_array=[];
   Staff.staff_array=[];
 
   class Bank{
     constructor(bank_IBAN,bank_name,bank_branch){
       this.bank_IBAN=bank_IBAN;
       this.bank_name=bank_name;
       this.bank_branch=bank_branch;
     }
   }
 
  
   class Principle extends Staff{
     constructor(first,last,phone,address,p_email,s_email,salary){
       super(first, last,phone, address, p_email, "principle",s_email,salary);
     }
  


   }
 
   class Conselor extends Staff{
     constructor(office_days,office_hours,first,last,phone,address,p_email,s_email,salary){
       super(first, last,phone, address, p_email, "conselor",s_email,salary);
       this.office_days = office_days;
       this.office_hours = office_hours;
     }  
   }
 
   class Floor_Directors extends Staff{
     constructor(floor_num,first,last,phone,address,p_email,s_email,salary){
       super(first, last,phone, address, p_email, "teacher",s_email,salary);
       this.floor_num = floor_num;
     }  
   }
   class Accountant extends Staff{
     constructor(first,last,phone,address,p_email,s_email,salary){
       super(first, last,phone, address, p_email, "teacher",s_email,salary);
     }  
   }
 
 class Teacher extends Staff{
    
   constructor(floor,classes,subject,type,first,last,phone,address,p_email,s_email,salary){
     super(first, last,phone, address, p_email, "teacher",s_email,salary);
     this.floor = floor;
     this.classes = classes;
     this.subject = subject;
     this.type = type;
     //Teacher.prototype.teacher_array = Teacher.prototype.teacher_array.push(this);
   }
   
 }
 
   class PartTime extends Teacher{
     constructor(office_days,office_hours,floor,classes,subject,type,first,last,phone,address,p_email,s_email,salary){
       super(floor,classes,subject,type,first,last,phone,address,p_email,s_email,salary)
       this.office_days = office_days;
       this.office_hours = office_hours;
     }
   }
 
   class Student{
     constructor(first_name,last_name,mother_name,father_name,s_email){
       this.first_name=first_name;
       this.last_name=last_name;
       this.mother_name=mother_name;
       this.father_name=father_name;
       this.s_email=s_email;
     }
   }
 
   class Classes {
     constructor(class_name,students,floor){
       this.class_name=class_name;
       this.students=students;
       this.floor=floor;
 
     }
   }
   class Problems{
     constructor(problem_type,problem_question,problem_answer){
       this.problem_type=problem_type;
       this.problem_question=problem_question;
       this.problem_answer=problem_answer;
 
     }
   }
 
   class Assignments extends Problems{
     constructor(file_upload,deadline,grade,teacher,student,problem_type,problem_question,problem_answer){
       super(problem_type,problem_question,problem_answer);
       this.file_upload=file_upload;
       this.deadline=deadline;
       this.grade=grade;
       this.teacher=teacher;
       this.student=student;
     }
   }
 
 
   //let teacher= new Teacher(2,1,2,3,"zeinab","kassem",123,"address","p@hotmail.com","s@hotmail.com",80)
   let principle= new Principle("first","last",123,"address","p_email","s_email",300);
   let teacher_constructor=
   ({
       floor:2,
       classes:1,
       subject:"engl",
       type:"part",
       first:"zeinab",
       last:"kassem",
       phone:123,
       address:"beirut",
       p_email:"zi@hotmail.com",
       s_email:"s@hotmail.com",
       salary:300
    });
    let teacher_constructor3=
    ({
        floor:2,
        classes:1,
        subject:"engl",
        type:"part",
        first:"ruy",
        last:"rudy",
        phone:123,
        address:"beirut",
        p_email:"zi@hotmail.com",
        s_email:"s@hotmail.com",
        salary:300
     })

     let test=
     ({
         first_name:2,
         last_name:1,
         schoolida_email:"part",
         floors_covered:"ruy",
         classes_taught:"rudy",
         subject:123,
      })

   principle.addTeacher(teacher_constructor);
   principle.addTeacher(teacher_constructor3);
   principle.addStaff("Teacher",test)