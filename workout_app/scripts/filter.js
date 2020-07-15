(function() {
    const buttons = document.querySelector(".Navigation__list");
    const activeClass = "Navigation__button--active";
    const mainContainer = document.querySelector(".Main");
    let currentActive = document.querySelector("." + activeClass);
    const list = document.querySelector(".History__list");

    const makeActive = elem => {
        if (currentActive) {
            currentActive.classList.remove(activeClass);
        }
        currentActive = elem;
        elem.classList.add(activeClass);
    }

    const addElemWithInnerText = (tagName, className, innerText) => {
        
        const elem = document.createElement(tagName);

        elem.classList.add(...className);
        elem.innerHTML = innerText;
        return elem;
    }

    const getHistory = () => {
        const history = JSON.parse(localStorage.getItem("history"));
        console.log(history);
        return history;
    }

    const buildHistory = historyData => {
        list.innerHTML = "";

        for (let key in historyData) {
            buildItem(historyData[key], key);
        }
    }

    const buildItem = (day, date) => {

        let item = document.createElement("li");
        item.classList.add("History__item");

        let dateElem = document.createElement("div");
        dateElem.classList.add("History__date");
        dateElem.innerHTML = date;

        item.appendChild(dateElem);
        list.appendChild(item);

        for (let exercise in day) {
            let row = buildRow(exercise, day[exercise]);
            item.append(row);
        }
    }

    const buildRow = (label, numbers) => {
        let row = addElemWithInnerText("div", ["History__row"], '');
        let labelName = addElemWithInnerText("div", ["History__label"], label);
        let numbersList = addElemWithInnerText("ul", ["History__numbers"], "");

        for (let number of numbers) {
            let item =  addElemWithInnerText("li", ["History__number"], number)
            numbersList.appendChild(item)
        }


        let total = addElemWithInnerText("div", ["History__total"], '');
        let totalLabel = addElemWithInnerText('span', ["History__total--num"], "Total:");
        let totalNumber = addElemWithInnerText('span', ["History__total--num"], numbers.reduce((accum, current) => accum + current));
        total.appendChild(totalLabel);
        total.appendChild(totalNumber)

        row.appendChild(labelName);
        row.appendChild(numbersList);
        row.appendChild(total);

        return row;
    }

    const switchSection = sectionName => {

        sectionName = sectionName.toLowerCase();
        const sections = mainContainer.querySelectorAll("section");


        sections.forEach(section => {
            if (sectionName === section.getAttribute("data-section")) {
                section.style.display = "flex";
                if ( sectionName === "history") {
                    buildHistory(getHistory());
                }
                if (sectionName === "start") {
                    list.innerHTML = '';
                }

            } else {
                section.style.display = "none";
            }
        })
    }

    const filter = e => {
        if ( e.target.tagName !== "BUTTON") return;
        
        makeActive(e.target);
        switchSection(e.target.innerText);
    }

    buttons.addEventListener("click", filter)

})()