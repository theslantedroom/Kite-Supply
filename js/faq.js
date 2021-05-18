const faq1A = document.getElementById('faq1A');
const faq1Q = document.getElementById('faq1Q');
let faqToggle1 = false;


const faqAnswerDisplay = (faq) => {
	if (document.getElementById('faq'+faq+'A').classList.contains('faqShow')) {	
	document.getElementById('faq'+faq+'A').classList.remove("faqShow");
	document.getElementById('faq'+faq+'Q').innerHTML = "<i class='fas fa-caret-right'></i>";	
	} else {
	document.getElementById('faq'+faq+'A').classList.add("faqShow");
	document.getElementById('faq'+faq+'Q').innerHTML = "<i class='fas fa-caret-down'></i>";	
	};

	};



