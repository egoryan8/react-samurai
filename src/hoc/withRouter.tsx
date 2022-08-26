import React from 'react';
import { useParams } from 'react-router-dom';

export function withRouter(Children: React.FC) {
  return (props: any) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
