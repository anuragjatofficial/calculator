
function App() {
    return (
        <div>
            <Calculator/>
        </div>
    )
}

function Calculator(){
    const style = {
        
    };
    const [value, setValue] = React.useState('0');
    const [isFirstValue, setIsFirstValue] = React.useState(true);
    const [nextValue, setNextValue] = React.useState('0');
    const [operator, setOperator] = React.useState('');
    const handleCalcuation = (op)=>{
        switch (op) {
          case "/":
            setIsFirstValue(!isFirstValue);
            setOperator("/");
            break;

          case "X":
            setIsFirstValue(!isFirstValue);
            setOperator("X");
            break;

          case "-":
            setIsFirstValue(!isFirstValue);
            setOperator("-");
            break;
          case "+":
            setIsFirstValue(!isFirstValue);
            setOperator("+");
            break;
          case "=":
            console.log(operator);
            switch (operator) {
              case "X":
                document.getElementById("display").innerHTML = (
                  +value * +nextValue
                );
                setValue(((+value)*(+nextValue)));
                break;
              case "/":
                document.getElementById("display").innerHTML = (
                  +value / +nextValue
                );
                setValue(((+value)/(+nextValue)));
                break;
              case "-":
                document.getElementById("display").innerHTML = (
                  +value - +nextValue
                );
                setValue(((+value)-(+nextValue)));
                break;
              case "+":
                document.getElementById("display").innerHTML = (
                  +value + +nextValue
                );
                setValue(((+value)+(+nextValue)));
                break;
            }
            break;
        }
    };

    const handleReset = ()=>{
        setValue('0');
        setNextValue('0');
    };

    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <div id="display">{isFirstValue ? (+value) : (+nextValue)}</div>
        <div id="calculator" className="grid grid-cols-4 gap-2 w-1/2">
          {/* buttons here */}
          <div
            id="clear"
            className="bg-gray-700 text-center py-2 click"
            onClick={handleReset}
          >
            AC
          </div>
          <div
            id="divide"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation("/")}
          >
            /
          </div>
          <div
            id="multiply"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation("X")}
          >
            X
          </div>
          <div
            id="seven"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "7")
                : setNextValue(nextValue + "7")
            }
            className="bg-gray-700 text-center py-2 click"
          >
            7
          </div>
          <div
            id="eight"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "8")
                : setNextValue(nextValue + "8")
            }
          >
            8
          </div>
          <div
            id="nine"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "9")
                : setNextValue(nextValue + "9")
            }
          >
            9
          </div>
          <div
            id="subtract"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation("-")}
          >
            -
          </div>
          <div
            id="four"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "4")
                : setNextValue(nextValue + "4")
            }
          >
            4
          </div>
          <div
            id="five"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "5")
                : setNextValue(nextValue + "5")
            }
          >
            5
          </div>
          <div
            id="six"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "6")
                : setNextValue(nextValue + "6")
            }
          >
            6
          </div>
          <div
            id="add"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation("+")}
          >
            +
          </div>
          <div
            id="one"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "1")
                : setNextValue(nextValue + "1")
            }
          >
            1
          </div>
          <div
            id="two"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "2")
                : setNextValue(nextValue + "2")
            }
          >
            2
          </div>
          <div
            id="three"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "3")
                : setNextValue(nextValue + "3")
            }
          >
            3
          </div>
          <div
            id="equals"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation("=")}
          >
            =
          </div>
          <div
            id="zero"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) =>
              isFirstValue
                ? setValue(value + "0")
                : setNextValue(nextValue + "0")
            }
          >
            0
          </div>
          <div
            id="decimal"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => value[value.length-1!=='.'] ? setValue(value + "."): setValue}
          >
            .
          </div>
        </div>
      </div>
    );
}

ReactDOM.render(
            <App/>,
            document.getElementById('root')
);