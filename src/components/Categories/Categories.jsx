import React from 'react';

const Categories = ({title, products=[], amount}) => {
  const list = products.filter((_, i) => i < amount);
  return(
    <section>

    </section>
  );
}

export default Categories;