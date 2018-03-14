
import addHeaderToDom from './helpers';
import logFunc, {add, subtract, divide, multiply} from './math';


addHeaderToDom('3 + 0.14 = ' + add(3,0.14));
addHeaderToDom('3 - 15 = ' + subtract(3,15));
addHeaderToDom('3 / 15 = ' + divide(3,15));
addHeaderToDom('3 x 15 = ' + multiply(3,15));

logFunc();