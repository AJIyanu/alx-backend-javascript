interface MajorCredits {
	credits:number;
};

interface MinorCredits {
	credits:number;
};


function sumMajorCredits(subject1, subject2):MajorCredits {
	return subject1 + subject2;
}

function sumMinorCredits(subject1, subject2):MinorCredits {
	return subject1 + subject2;
}
