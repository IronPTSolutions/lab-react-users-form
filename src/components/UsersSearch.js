import React from 'react';
import FormField from './FormField';

export default (props) => {

  const handleChange = (e) => props.onSearch(e.target.value)

  return (
    <section className="section">
      <FormField name="search" value={props.search} onChange={handleChange} icon="fas fa-search" />
    </section>
  );
}