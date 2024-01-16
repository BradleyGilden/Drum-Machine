import './App.css'
import {useEffect} from 'react';

const letters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sources = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
const names = ['Heater-1', 'Heater-2', 'Heater-3', 'Heater-4',
  'Clap', 'Open-HH', 'Kick-n-Hat', 'Kick', 'Close-HH']

function App() {

  useEffect(() => {
    const pads = document.querySelectorAll('.drum-pad');
    const mp3 = document.querySelectorAll('.clip');
    const display = document.querySelector('#display')

    const handleClick = (pad, j) => {
      return () => {
        mp3[j].play();
        display.textContent = pad.id;
      }
    }

    pads.forEach((pad, i) => {
      pad.addEventListener('click', handleClick(pad, i));
    });

    const handleKeydown = () => {
      return (event) => {
        if (letters.includes(event.key.toUpperCase())) {
          const idx = letters.indexOf(event.key.toUpperCase());
          mp3[idx].play();
          display.textContent = pads[idx].id;
        }
      }
    }
    document.addEventListener('keydown', handleKeydown());
    // clean up
    return () => {
      document.removeEventListener('keydown', handleKeydown());
      pads.forEach((pad, i) => {
        pad.removeEventListener('click', handleClick(pad, i));
      });
    }
  }, []);

  return (
    <div className="w-screen min-h-screen bg-slate-400 grid place-items-center">
      <div id="drum-machine" className="bg-bg w-[min(50vh,95vw)] h-[50vh] rounded-3xl">
        <div id="display" className='w-full h-[3rem] rounded-t-3xl border-bg border-4 bg-fg text-center font-inter font-semibold text-[1.5rem] leading-[2.5rem] text-bg'>Sound</div>
        <div className='h-[calc(100%-3rem)] w-full p-2 flex flex-wrap gap-3 justify-center items-center'>
          <DrumPad letters={letters} sources={sources} names={names} />
        </div>
      </div>
    </div>
  )
}

const DrumPad = ({letters, sources, names}) => {
  return (
    letters.map((letter, i) => {
      return (
      <div id={names[i]} className='drum-pad cursor-pointer transition-all active:text-4xl hover:bg-bg hover:text-fg bg-fg text-bg text-center font-bold h-1/4 w-1/4 rounded-full text-[2rem] leading-[calc((50vh-4rem)/4)]' key={letter}>
      {letter}
      <audio type="audio/mp3" className="clip" src={sources[i]} id={letter}></audio>
      </div>
      );
    })
  );
}

export default App
