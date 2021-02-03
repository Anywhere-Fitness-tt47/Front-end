import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required('Name is a required field.'),
  type: yup.string().required('Type is a required field.'),
  start_time: yup.string().required('Please enter a start time.'),
  duration: yup.string().required('Please enter a duration.'),
  intensity_level: yup.string().oneOf(['easy','medium','intense']),
  location: yup.string().required('Please enter a location.'),
  max_size: yup.number().required('Please enter a maximum size.').min(1, 'Please select a number greater than 0.')
})