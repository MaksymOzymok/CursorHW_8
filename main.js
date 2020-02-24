class Student {
    constructor(univesity,course,fullName) {
        this.university = univesity;
        this.course = course;
        this.fullName = fullName;
    }
    _marks = [5, 4, 4, 5];
    getInfo(){
        console.log(`Студент ${this.course}го курса ${this.university}, ${this.fullName}`);
    }
    get marks(){
        return this._marks ;
    }
   set marks(value){
        if(this._marks!=null)
            this._marks.push(value);

    }
    getAverageMark() {
        if (this.marks != null) {

            return this._marks.reduce((acc, value) => {
                acc += value;
                return acc;
            }, 0) / this._marks.length;
        }
        else return null;
    }
    dismiss(){
        this._marks = null;
    }
    recover(){
        this._marks = [5,4,4,5];
    }

}

let k = new Student(1,2,3);
console.log('Student :', k);

class BudgetStudent extends Student{
    constructor(university,course,fullName) {
        super(university,course,fullName);
        setInterval(()=>this.getSchoolarship(),3000);
    }
    getSchoolarship (){
        if(this.getAverageMark()>=4.0)
            console.log(`Ви отримали 1400 грн`);
    }
}
let d = new BudgetStudent(1,1,2);
d.marks = 5;

console.log('BudgetStudent:',d);
console.log(d);
