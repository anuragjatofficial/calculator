
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
    const [nextValue, setNextValue] = React.useState('0');

    const handleCalcuation = (operator)=>{

    };

    const handleReset = ()=>{
        setValue('0');
        setNextValue('0');
    };

    return (
      <div className="flex justify-center flex-col items-center h-screen">
        <div id="display">{value}</div>
        <div id="calculator" className="grid grid-cols-4 gap-2 w-1/2">
          {/* buttons here */}
          <div
            id="clear"
            className="bg-gray-700 text-center py-2 click"
            onClick={handleReset}
          >
            AC
          </div>
          <div id="divide" className="bg-gray-700 text-center py-2 click">
            /
          </div>
          <div
            id="multiply"
            className="bg-gray-700 text-center py-2 click"
            onClick={() => handleCalcuation('X')}
          >
            X
          </div>
          <div
            id="seven"
            onClick={(prev) => setValue(value + "7")}
            className="bg-gray-700 text-center py-2 click"
          >
            7
          </div>
          <div
            id="eight"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "8")}
          >
            8
          </div>
          <div
            id="nine"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "9")}
          >
            9
          </div>
          <div id="subtract" className="bg-gray-700 text-center py-2 click">
            -
          </div>
          <div
            id="four"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "4")}
          >
            4
          </div>
          <div
            id="five"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "5")}
          >
            5
          </div>
          <div
            id="six"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "6")}
          >
            6
          </div>
          <div id="add" className="bg-gray-700 text-center py-2 click">
            +
          </div>
          <div
            id="one"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "1")}
          >
            1
          </div>
          <div
            id="two"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "2")}
          >
            2
          </div>
          <div
            id="three"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "3")}
          >
            3
          </div>
          <div id="equals" className="bg-gray-700 text-center py-2 click">
            =
          </div>
          <div
            id="zero"
            className="bg-gray-700 text-center py-2 click"
            onClick={(prev) => setValue(value + "0")}
          >
            0
          </div>
          <div id="decimal" className="bg-gray-700 text-center py-2 click">
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