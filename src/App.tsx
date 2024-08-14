const VerticalNodes = [8, 7, 6, 5, 4, 3, 2, 1]
const HorizontalNodes = ["a", "b", "c", "d", "e", "f", "g", "h"]

function App() {
  return (
    <main className='flex flex-col w-full h-screen bg-gray-900 justify-center items-center space-y-10'>
      <ol id="board" className="grid grid-rows-8 w-[40%] h-[80%]">
        {
          VerticalNodes.map((x, Xindex) => {
            return (
              <li key={Xindex}>
                <ol className="grid grid-cols-8 w-full h-full">
                  {
                    HorizontalNodes.map((y, Yindex) => {
                      return (
                        <li key={Yindex} className={"flex items-center justify-center " + ((x + (HorizontalNodes.indexOf(y) + 1)) % 2 == 0 ? "bg-green-600" : "bg-gray-300")}>
                          <h1>{x + "" + y}</h1>
                        </li>
                      )
                    })
                  }
                </ol>
              </li>
            )
          })
        }
      </ol>
      <div id="chat" className="w-[35%] h-[7%] bg-gray-200 rounded-2xl overflow-hidden">
        <input className=" w-full h-full p-3 pr-5 pl-5" placeholder="Type Here.." />
      </div>
    </main>
  )
}

export default App
