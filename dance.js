/**
 * Created by JakeDev on 7/3/2017.
 */
var coolButtons = document.getElementsByClassName("cool-button");
var coolButtonsCount = coolButtons.length;

for(var i = 0; i < coolButtonsCount; i++) {

    coolButtons[i].addEventListener('click', function () {
        var currentButtonClass = this.getAttribute('class');
        var currentButtonClassState = currentButtonClass.replace("cool-button ", "");
        var responseFor = this.getAttribute("data-response-for");
        var element = document.getElementsByClassName(responseFor)[0];

        if (currentButtonClassState === "on") {
            this.setAttribute("class", "cool-button off");
            element.setAttribute("class", responseFor);
        } else {
            this.setAttribute("class", "cool-button on");
            element.setAttribute("class", responseFor + " move");
        }
    });
}
