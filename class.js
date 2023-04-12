class Job {
	constructor(name, industry, requiresDegree, field, salary) {
		this.name = name;
		this.industry = industry;
		this.requiresDegree = requiresDegree;
		this.field = field;
		this.salary = salary;
	}

	getName() {
		return this.name;
	}

	getInformation() {
		return `${this.name} is in the ${this.industry} industry, and pays ${this.salary} on average`;
	}

	getFieldAndIndustry() {
		return `${this.field}  plays a huge roll in ${this.industry}`;
	}

	getSalary() {
		return `${this.name}  makes  ${this.salary}`;
	}
}

const job1 = new Job("Software Engineer", "Computer Science", true, "Technology", "$100,000")

console.log(job1.getName());
console.log(job1.getFieldAndIndustry());

const job2 = new Job("Professor", "Education", true, "Mathematics", "$75,000")

console.log(job2.getName());
console.log(job2.getSalary());

const job3 = new Job("Professional Athlete", "Entertainment", false, "Sports", "$150,000")

console.log(job3.getName());
console.log(job3.getInformation());







class Career extends Job {
	constructor(name, industry, requiresDegree, field, salary, yearsOfExperience, jobDescription) {
		super(name, industry, requiresDegree, field, salary);
		this.yearsOfExperience = yearsOfExperience;
		this.jobDescription = jobDescription;

	}

	getYearsOfExperience() {
	
        return this.yearsOfExperience;
    }

	getJobDescription() {
        return this.jobDescription;
    }
};
	let career1 = new Career("Software Engineer", "Computer Science", true, "Technology", "$100,000", "1", "Working with code");
	console.log(career1.getYearsOfExperience());
	console.log(career1.getJobDescription());






