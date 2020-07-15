
(function(){
    const capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1);

    const isAdded = (parentNode, label) => {
        const labels = parentNode.querySelectorAll(".Tracker__label");

        for ( elem of labels) {
            if (elem.innerText === capitalizeFirstLetter(label)) return elem.parentNode;
        }
        return false
    }

    const addElemWithInnerText = (tagName, className, innerText) => {
        const elem = document.createElement(tagName);
        elem.classList.add(...className);
        elem.innerHTML = innerText;
        return elem;
    }

    const checkValue = value => {
        return value > 0;
    }

    const addDeleteButton  = () => {
        const deleteButton = addElemWithInnerText("button", ["DeleteButton", "DeleteButton--Tracker--opacity", "DeleteButton--Tracker__amount"], '');
        
        deleteButton.addEventListener('click', () => {

            const trackerReps = deleteButton.parentNode.parentNode;
            const label = trackerReps.firstChild.innerText;
            const amounts = trackerReps.querySelectorAll(".Tracker__amount");
            console.log(amounts)
            const amountValue = deleteButton.parentNode.innerText;

            let index = 0;
            for (elem of amounts) {
                if (deleteButton.parentNode === elem) break;
                index += 1;
            }

            //total[label.toLowerCase()] -= Number(amountValue);
            total[label.toLowerCase()].splice(index, 1);
            

            const totals = document.querySelector(".Tracker__sets--total").children;


            if (total[label.toLowerCase()].length > 0) {
                deleteButton.parentNode.remove();

                for (item of totals) {
                    if (item.getAttribute(attributeName) === label.toLowerCase()) {
                        let amount = item.querySelector(".Tracker__amount");
                        console.log(total[label.toLowerCase()]);
                        amount.innerText = total[label.toLowerCase()].reduce((accum, current) => accum + current);//total[label.toLowerCase()];
                    }
                }

            } else {
                trackerReps.remove();

                delete total[label.toLowerCase()];

                for (item of totals) {
                    if (item.getAttribute(attributeName) === label.toLowerCase()) item.remove();
                }
            }
        });

        return deleteButton;
    }

    const addNewElem = (amount, exercise) => {
        const setsCollection = document.querySelector(".Tracker__sets");
        const setsTotal = document.querySelector(".Tracker__sets--total");

        let elem = isAdded(setsCollection, exercise);

        if (elem) {
            total[exercise].push(Number(amount));
            //total[exercise] += Number(amount);

            const amountElem = addElemWithInnerText("div", ["Tracker__amount"], amount);
            amountElem.appendChild(addDeleteButton());
            elem.appendChild(amountElem);

            for (item of setsTotal.children) {
                if (item.getAttribute(attributeName) === exercise) {
                    item.querySelector('.Tracker__amount--total').innerHTML = total[exercise].reduce((total, current) => total + current); //total[exercise]
                }
            }
        }
        else {
            const repsContainer = addElemWithInnerText("li", ["Tracker__reps"], '');
            const repsLabel = addElemWithInnerText("span", ["Tracker__label"], capitalizeFirstLetter(exercise));

            const repsAmount = addElemWithInnerText("div", ["Tracker__amount"], amount);
            repsAmount.appendChild(addDeleteButton());

            repsContainer.appendChild(repsLabel);
            repsContainer.appendChild(repsAmount);
            setsCollection.appendChild(repsContainer);

            const totalItem =  addElemWithInnerText("li", ["Tracker__reps"], '');
            totalItem.setAttribute(attributeName, exercise);
            const totalLabel = addElemWithInnerText("div", ["Tracker__total"], "Total:");
            const totalAmount = addElemWithInnerText("span", ["Tracker__amount", "Tracker__amount--total"], amount);
            totalLabel.appendChild(totalAmount);
            totalItem.appendChild(totalLabel);
            setsTotal.appendChild(totalItem);

            total[exercise] = [Number(amount)];
        }
    }

    const showError = () =>  {
        const error = form.querySelector(".Error");
        error.classList.remove("Message--hidden");
    }

    const showSuccessMessage = () => {
        successMessage.classList.remove("Message--hidden");
        console.log(successMessage)
        setTimeout(() => {
            successMessage.classList.add("Message--hidden");
        }, 2000);
    }

    const validate = (amount) => {
        const error = form.querySelector(".Error");

        if (!error.classList.contains("Message--hidden")) {
            error.classList.add("Message--hidden");
        } 
    
        if (checkValue(amount)) {
            return true;
        }
        else {
            showError();
        }
        return false;
    }

    const getFormatDate = (date) => {
        let day = date.getDate();
        day = day < 10 ? "0"+day : day;

        let month = date.getMonth();
        month = month < 10 ? "0"+ (month + 1) : month + 1;

        let year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    console.log(getFormatDate(new Date()));

    const saveToLocalStorage = total => {
        let history;
        if (localStorage.getItem("history") === null) {
            history = {};
        } else {
            history = JSON.parse(localStorage.getItem("history"));
        }
        history[getFormatDate(new Date())] = total;
        localStorage.setItem("history", JSON.stringify(history));
    }

    const form = document.querySelector(".Tracker__form");
    const inputReps = document.querySelector('.Tracker__input--reps');
    const addButton = document.querySelector('.Tracker__add');
    const completeButton = document.querySelector(".Tracker__add--complete");
    const select = document.querySelector('.Tracker__select');
    const successMessage = document.querySelector(".Success");

    const total = {};
    const attributeName = "data-exercise";

    completeButton.addEventListener('click', () => {
        console.log(total);
        saveToLocalStorage(total);
        showSuccessMessage();
    })

    addButton.addEventListener("click", addReps);

    function addReps(event) {
        event.preventDefault();

        let amount = inputReps.value;
        let exercise = select.value;

        if (validate(amount)) {
            addNewElem(amount, exercise);
            inputReps.value = '';
        }
    }

})();
