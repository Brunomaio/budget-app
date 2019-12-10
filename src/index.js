let budgetController = (function() {})();

let UIController = (function() {
	const DOMstrings = {
		inputType: ".add__type",
		inputDescription: ".add__description",
        inputValue: "add__value",
        inputBtn: '.add__btn'
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // returns either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
        },
        getDOMstrings = () => {
            return DOMstrings
        }
	};
})();

let controller = (function(budgetCtrl, UICtrl) {
    
    let DOM = UICtrl.getDOMstrings()
    
    let ctrlAddItem = () => {
		let input = UICtrl.getInput();
		console.log(input);
	};

	document.querySelector(UICtrl.getDOMstrings().inputBtn).addEventListener("click", ctrlAddItem);

	document.addEventListener("keypress", e => {
		if (e.keyCode === 13) {
			ctrlAddItem();
		}
	});
})(budgetController, UIController);
