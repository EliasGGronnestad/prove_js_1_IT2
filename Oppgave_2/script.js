class Teller {
  constructor(teller) {
    this.teller = teller;
  }
  okeTeller() {
    console.log(this.teller);
    this.teller++;
    document.getElementById("div").innerText = this.teller;
  }
  nullstillTeller(teller) {
    this.teller = 0;
    document.getElementById("div").innerText = this.teller;
  }
}

let tellerObj = new Teller(0);

