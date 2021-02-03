import React from "react";

export default function AddClass(props) {
  const { name, type, start_time, duration, intensity_level, location, max_size } = props.values;
  const { update, submit, errors } = props;

  const handleChange = evt => {
    const { name, value } = evt.target;
    update(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return (
    <div>
      <form>
        <label> Name:
          <input 
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </label>
        <span>{errors.name}</span>
        <label> Type:
          <input 
            type='text'
            name='type'
            value={type}
            onChange={handleChange}
          />
        </label>
        <span>{errors.type}</span>
        <label> Start time:
          <input 
            type='text'
            name='start_time'
            value={start_time}
            onChange={handleChange}
          />
        </label>
        <span>{errors.start_time}</span>
        <label> Duration: 
          <input 
            type='text'
            name='duration'
            value={duration}
            onChange={handleChange}
          />
        </label>
        <span>{errors.duration}</span>
        <label> Intensity level:
          <select name='intensity_level' value={intensity_level} onChange={handleChange}> 
            <option value=''>--select intensity--</option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='intense'>Intense</option>
          </select>
        </label>
        <span>{errors.intensity_level}</span>
        <label> Location:
          <input 
            type='text'
            name='location'
            value={location}
            onChange={handleChange}
          />
        </label>
        <span>{errors.location}</span>
        <label> Max size:
          <input 
            type='number'
            name='max_size'
            value={max_size}
            onChange={handleChange}
          />
        </label>
        <span>{errors.max_size}</span>
        <button onClick={handleSubmit}>Create class</button>
      </form>
    </div>
  )
}