
function App() {
    return (
        <div>
            <Calculator/>
        </div>
    )
}

function Calculator(){
    const [value, setValue] = React.useState("0");

    const handleReset = ()=>{
        setValue('0');
    };

    const calculate = ()=>{
      if(notSingleNumber()){
        let ans  = value.replace("X","*");
        let res = eval(ans);
        document.getElementById("display").innerHTML = res;
        setValue(res);
      }
    };

    const notSingleNumber = () =>{
      for(let i = 0;i<value.length;i++){
        if (
          value[i] === "/" ||
          value[i] === "-" ||
          value[i] === "+" ||
          value[i] === "X"
        ) {
          return true;
        }
      }
      return false;
    };

    const handleInput = (e)=>{

      if (
        value === "0" &&
        e.target.innerHTML !== "/" &&
        e.target.innerHTML !== "X" &&
        e.target.innerHTML !== "-" &&
        e.target.innerHTML !== "+"
      ) {
        setValue(e.target.innerHTML);
      } else if (
        ((value[value.length - 1] === "/" ||
          value[value.length - 1] === "X" ||
          value[value.length - 1] === "-" ||
          value[value.length - 1] === "+") &&
        (e.target.innerHTML === "/" ||
          e.target.innerHTML === "+" ||
          e.target.innerHTML === "-" ||
          e.target.innerHTML === "X")) || (value[value.length - 1] === "." && e.target.innerHTML===".")
      ) {
        setValue(removeLast(value) + e.target.innerHTML);
      } else {
        setValue(value + e.target.innerHTML);
      }
    };

    const removeLast = (str)=>{
      let st = "";
      for(let i = 0;i<str.length-1;i++){
        st+=str[i];
      }
      return st;
    };

   

    return (
      <div className="flex justify-center flex-col items-center h-screen bg-black">
        <div id="calculator" className="grid grid-cols-4 gap-2 border-2 px-2 py-2">
          <div id="display" className="bg-white text-center py-3 px-3">
            {value}
          </div>
          {/* buttons here */}
          <div
            id="clear"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={handleReset}
          >
            AC
          </div>
          <div
            id="divide"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            /
          </div>
          <div
            id="multiply"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            X
          </div>
          <div
            id="seven"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            7
          </div>
          <div
            id="eight"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            8
          </div>
          <div
            id="nine"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            9
          </div>
          <div
            id="subtract"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            -
          </div>
          <div
            id="four"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            4
          </div>
          <div
            id="five"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            5
          </div>
          <div
            id="six"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            6
          </div>
          <div
            id="add"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            +
          </div>
          <div
            id="one"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            1
          </div>
          <div
            id="two"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            2
          </div>
          <div
            id="three"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            3
          </div>
          <div
            id="equals"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={calculate}
          >
            =
          </div>
          <div
            id="zero"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
          >
            0
          </div>
          <div
            id="decimal"
            className="bg-gray-700 text-center py-3 px-3 click cursor-pointer hover:text-white hover:border-white hover:border-2"
            onClick={(e) => handleInput(e)}
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