import React from 'react';

export default (props) => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div className="control">
      <div className="select">
        <select name={props.name} onChange={props.onChange}>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.title}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);
