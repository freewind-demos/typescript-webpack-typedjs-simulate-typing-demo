import Typed, {TypedOptions} from 'typed.js';

const options: TypedOptions = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

const main = document.getElementById('main')!;

// can pass a id string, or element
// the typing has errors
new Typed(main as any, options);
