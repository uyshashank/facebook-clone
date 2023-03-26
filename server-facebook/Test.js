const obj = {
  fname: "Shashank",
  lname: "Yenurkar",
  brother: {
    fname: "Kshitij",
    test: "YEN",
    lname: function () {
      return this.fname;
    },
  },
};
console.log(obj.brother.lname);
