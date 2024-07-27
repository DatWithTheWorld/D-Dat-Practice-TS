const INPUT_FIELD = [
  {
    label: 'Movie name',
    className: 'inputAddField-Name',
    type: 'text',
    placeholder: 'Movie name',
    name: 'name',
  },
  {
    label: 'Year of release',
    className: 'inputAddField-Date',
    type: 'date',
    name: 'date',
  },
  {
    label: 'Poster',
    className: 'inputAddField-Poster',
    type: 'file',
    name: 'poster',
    accept: '.jpg,.png,image/jpeg,image/png',
    placeholder: 'Select file',
  },
  {
    label: 'Video',
    className: 'inputAddField-Video',
    type: 'file',
    accept: '.mp4',
    placeholder: 'Select file',
  },
];
const apimv = 'https://movie-m5ac.onrender.com/';
const movieEvaluateSl = [
  {
    label: '1 Star',
    options: [
      { value: '1.0', text: '1.0' },
      { value: '1.1', text: '1.1' },
      { value: '1.2', text: '1.2' },
      { value: '1.3', text: '1.3' },
      { value: '1.4', text: '1.4' },
      { value: '1.5', text: '1.5' },
      { value: '1.6', text: '1.6' },
      { value: '1.7', text: '1.7' },
      { value: '1.8', text: '1.8' },
      { value: '1.9', text: '1.9' },
    ],
  },
  {
    label: '2 Stars',
    options: [
      { value: '2.0', text: '2.0' },
      { value: '2.1', text: '2.1' },
      { value: '2.2', text: '2.2' },
      { value: '2.3', text: '2.3' },
      { value: '2.4', text: '2.4' },
      { value: '2.5', text: '2.5' },
      { value: '2.6', text: '2.6' },
      { value: '2.7', text: '2.7' },
      { value: '2.8', text: '2.8' },
      { value: '2.9', text: '2.9' },
    ],
  },
  {
    label: '3 Stars',
    options: [
      { value: '3.0', text: '3.0' },
      { value: '3.1', text: '3.1' },
      { value: '3.2', text: '3.2' },
      { value: '3.3', text: '3.3' },
      { value: '3.4', text: '3.4' },
      { value: '3.5', text: '3.5' },
      { value: '3.6', text: '3.6' },
      { value: '3.7', text: '3.7' },
      { value: '3.8', text: '3.8' },
      { value: '3.9', text: '3.9' },
    ],
  },
  {
    label: '4 Stars',
    options: [
      { value: '4.0', text: '4.0' },
      { value: '4.1', text: '4.1' },
      { value: '4.2', text: '4.2' },
      { value: '4.3', text: '4.3' },
      { value: '4.4', text: '4.4' },
      { value: '4.5', text: '4.5' },
      { value: '4.6', text: '4.6' },
      { value: '4.7', text: '4.7' },
      { value: '4.8', text: '4.8' },
      { value: '4.9', text: '4.9' },
    ],
  },
  {
    label: '5 Stars',
    options: [{ value: '5.0', text: '5.0' }],
  },
];
const movieTypes = [
  {
    label: 'For Children',
    options: [
      { value: 'Cartoon', text: 'Cartoon' },
      { value: 'Comedy', text: 'Comedy' },
    ],
  },
  {
    label: 'Crime/Detective',
    options: [
      { value: 'Courtroom drama', text: 'Courtroom drama' },
      { value: 'Crime and Gangster Films', text: 'Crime and Gangster Films' },
      { value: 'Documentary', text: 'Documentary' },
      { value: 'Biography', text: 'Biography' },
    ],
  },
  {
    label: 'Entertaiment',
    options: [
      { value: 'Drama', text: 'Drama' },
      { value: 'Musical', text: 'Musical' },
      { value: 'Sitcom movie', text: 'Sitcom movie' },
    ],
  },
  {
    label: 'Together',
    options: [
      { value: 'Family', text: 'Family' },
      { value: 'Historical', text: 'Historical' },
      { value: 'Romance', text: 'Romance' },
      { value: 'War', text: 'War' },
      { value: 'Western', text: 'Western' },
      { value: 'Thriller', text: 'Thriller' },
      { value: 'Tragedy', text: 'Tragedy' },
      { value: 'Science fiction', text: 'Science fiction' },
    ],
  },
];
export { INPUT_FIELD, movieEvaluateSl, movieTypes, apimv };
