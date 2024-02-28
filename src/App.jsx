import { useEffect, useState } from 'react';

import './demo.css'

const dummy = [
  'Verna Ballard',
  'Bruce Hall',
  'Dylan Cross',
  'Juan Ramirez',
  'Danny Morton',
  'Winifred Bishop',
  'Raymond Rice',
  'Troy Brewer',
  'Ivan Stanley',
  'John Peters',
  'Jessie Cortez',
  'Warren Harrison',
  'Norman Patton',
  'Rosetta Pratt',
  'Dollie Estrada',
  'Bobby Garrett',
  'Marc Nash',
  'Vincent Watkins',
  'Bess Hall',
  'Rose Castillo',
  'Max Gardner',
  'Virgie Blair',
  'Emma Ford',
  'Lora Hill',
  'Hettie Harvey',
  'Barry Conner',
  'Albert Nguyen',
  'Emilie Luna',
  'John Lee',
  'Nannie Evans',
  'Bessie Hamilton',
  'Jeremy Swanson',
];

const Demo = function () {
  const [value, setValue] = useState('');

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(
      () =>
        setFiltered(
          dummy.filter((el) =>
            el.trim().toLowerCase().includes(value.trim().toLowerCase())
          )
        ),

      1000
    );

    return () => {
      clearTimeout(timerID);
    };
  }, [value]);

  return (
    <>
      <input
        className="input"
        data-testid="focus-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className='focus-results'>
        {filtered.map((el, index) => (
          <li className={`results-${index}`} key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default Demo;
