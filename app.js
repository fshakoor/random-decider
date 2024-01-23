function handle_form_submission() {
    Gameboard.curPlayer = this.p1choice.value
    Gameboard.p1Text = this.p1Name.value + "'s Turn (" + this.p1choice.value + ")"
    Gameboard.p2Text = this.p2Name.value + "'s Turn (" + this.p2choice.value + ")"
    this.body.removeChild(this.formDisplay)
    this.curPlayerText.innerText = Gameboard.p1Text
    Gameboard.topLeft.style.cursor = 'pointer'
    Gameboard.topMid.style.cursor = 'pointer'
    Gameboard.topRight.style.cursor = 'pointer'
    Gameboard.midLeft.style.cursor = 'pointer'
    Gameboard.mid.style.cursor = 'pointer'
    Gameboard.bottomLeft.style.cursor = 'pointer'
    Gameboard.bottomMid.style.cursor = 'pointer'
    Gameboard.bottomRight.style.cursor = 'pointer'
    Gameboard.init();
    return false;
}