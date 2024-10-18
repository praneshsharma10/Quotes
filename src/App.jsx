// import { useState } from 'react';
// import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
// const App = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];
//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };
//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };





//    useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowRight') {
//         nextPerson();
//       } else if (event.key === 'ArrowLeft') {
//         prevPerson();
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);





//   return (
//     <main>
//       <article className='review'>
//         <div className='img-container'>
//           <img src={image} alt={name} className='person-img' />
//           {/* <span className='quote-icon'>
//             <FaQuoteRight />
//           </span> */}
//         </div>
//         <h4 className='author'>{name}</h4>
//         <p className='job'>{job}</p>
//         <p className='info'>{text}</p>
//         <div className='btn-container'>
//           <button className='prev-btn' onClick={prevPerson}>
//             {/* <FaChevronLeft />  */} ←
//           </button>
//           <button className='next-btn' onClick={nextPerson}>
//             {/* <FaChevronRight /> */} →
//           </button>
//         </div>
//         <button className='btn btn-hipster' onClick={randomPerson}>
//           surprise me
//         </button>
//       </article>
//     </main>
//   );
// };

// export default App;









import { useState, useEffect } from 'react'; // Import useEffect
import people from './data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]; // Ensure this is valid


  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };


  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') {
        nextPerson();
      } else if (event.key === 'ArrowLeft') {
        prevPerson();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

//event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextPerson, prevPerson]); 

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          {/* <span className='quote-icon'>
            <FaQuoteRight />
          </span> */}
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            {/* <FaChevronLeft />  */} ←
          </button>
          <button className='next-btn' onClick={nextPerson}>
            {/* <FaChevronRight /> */} →
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
