/**
 * Created by JakeDev on 7/3/2017.
 */
var coolButtons = document.getElementsByClassName("cool-button");
var coolButtonsCount = coolButtons.length;

for(var i = 0; i < coolButtonsCount; i++) {

    coolButtons[i].addEventListener('click', function () {
        var currentButtonClass = this.getAttribute('class');
        console.log(currentButtonClass);
        var currentButtonClassState = currentButtonClass.replace("cool-button ", "");
        console.log(currentButtonClassState);
        if (currentButtonClassState == "on") {
            this.setAttribute("class", "cool-button off");
        } else {
            this.setAttribute("class", "cool-button on");
        }
    });
}
