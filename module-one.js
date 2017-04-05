console.log('MOD ONE');
let moduleOneVariable = 'MOD1_VARIABLE';

function moduleOneFunction() {
    console.log('MOD ONE FUNCTION - moduleTwoVariable', moduleTwoVariable);

}
console.log('MOD ONE - moduleTwoVariable', typeof moduleTwoVariable !== 'undefined' ? moduleTwoVariable : "UNDEFINED...");
