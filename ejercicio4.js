function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

function quiz3(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    var e = espacios (n - (i+1));
    for (var j = i; j >= 1; j--) {
      s += j;
    }
    console.log(e + s);
  }
}

function quiz4 (r) {
  //for (var x = 0; x < r; x++) {
  //}
  var x = 0;
  var circulo = [];
  while (x <= r) {
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
  }
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
}

function quiz1(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    console.log(s);
  }
  var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = n - i; j >= 1; j--) {
        s += j;
      }
      console.log(e + s);
  }
}

//quiz3(5);
quiz4(7);
//quiz1(4);
function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

function quiz3(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    var e = espacios (n - (i+1));
    for (var j = i; j >= 1; j--) {
      s += j;
    }
    console.log(e + s);
  }
}

function quiz4 (r) {
  //for (var x = 0; x < r; x++) {
  //}
  var x = 0;
  var circulo = [];
  while (x <= r) {
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
  }
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
}

function quiz1(n) {
  for (var i = 0; i < n; i++) {
    var s = "";
    for (var j = 1; j <= i + 1; j++) {
      s += j;
    }
    console.log(s);
  }
  var e = espacios(n);
  for (var i = 0; i < n; i++) {
      var s = "";
      for (var j = n - i; j >= 1; j--) {
        s += j;
      }
      console.log(e + s);
  }
}

//quiz3(5);
quiz4(7);
//quiz1(4);
