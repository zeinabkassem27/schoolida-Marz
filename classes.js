class Staff {
    firt_name;
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
   }
 
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