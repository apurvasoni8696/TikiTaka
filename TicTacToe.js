let allBtn = document.querySelectorAll(".box");


let turn = 0;

let cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
allBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn % 2 === 0) {
            btn.innerText = "X";
            btn.disabled = true;
        } else {
            btn.innerText = "O";
            btn.disabled = true;
        }

        cases.forEach((c) => {
             if (allBtn[c[0]].innerText != "" && allBtn[c[0]].innerText === allBtn[c[1]].innerText && allBtn[c[1]].innerText === allBtn[c[2]].innerText) {
                setTimeout(() => {
                    alert(`Congratulation ${allBtn[c[0]].innerText}, you won!`);
                }, 300);
            }
        })

        turn++;
    })
})
