import Building from './5-building.js';

const b = new Building(100);
console.log(b);

try {
    class TestBuilding extends Building {}
}
catch(err) {
   console.log(err);
}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
//console.log(b.evacuationWarningMessage());
//console.log(typeof(new TestBuilding(200).evacuationWarningMessage()));
