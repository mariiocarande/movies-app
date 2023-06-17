import React from 'react';

interface Props {
  params: {
    id: string
  }
}

const Detail: React.FC<Props> = ({ params }) => {
  return (
    <div>Movie Detail {params.id}</div>
  );
};

export default Detail;
