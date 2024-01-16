import './App.css'

function App() {

  return (
    <div className="w-screen min-h-screen bg-slate-400 grid place-items-center">
      <div id="drum-machine" className="bg-bg w-[min(50vh,95vw)] h-[50vh] rounded-3xl">
        <div id="display" className='w-full h-[3rem] rounded-t-3xl border-bg border-4 bg-fg text-center font-inter font-semibold text-[1.5rem] leading-[2.5rem] text-bg'>Sound</div>
        <div className='h-[calc(100%-3rem)] w-full p-2 flex flex-wrap gap-3 justify-center items-center'>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
          <div className='drum-pad bg-fg text-bg text-center h-1/4 w-1/4 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default App
