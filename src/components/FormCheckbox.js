import React from 'react';

export default (props) => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div className="control">
      <input
        name={props.name}
        type='checkbox'
        checked={props.value}
        onChange={props.onChange}
      />
    </div>
  </div>
);
