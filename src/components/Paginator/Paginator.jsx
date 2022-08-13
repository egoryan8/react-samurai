import React, { useState } from 'react';
import styles from './Paginator.module.css';

function Paginator({ totalItems, pageSize, currentPage, setCurrentPage, portionSize = 10 }) {
  let pagesCount = Math.ceil(totalItems / pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={styles.pages}>
      {portionNumber > 1 && (
        <button
          onClick={() => setPortionNumber(portionNumber - 1)}
          className={styles.prevButton}></button>
      )}
      {pages
        .filter((page) => page >= leftPortionNumber && page <= rightPortionNumber)
        .map((page) => {
          return (
            <span
              className={currentPage === page && styles.selectedPage}
              onClick={() => setCurrentPage(page)}>
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => setPortionNumber(portionNumber + 1)}
          className={styles.nextButton}></button>
      )}
    </div>
  );
}

export default Paginator;
