import React from 'react';
import styles from './Paginator.module.css';

function Paginator({ totalUsers, pageSize, currentPage, setCurrentPage }) {
  let pagesCount = Math.ceil(totalUsers / pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pages}>
      {pages.map((page) => {
        return (
          <span
            className={currentPage === page && styles.selectedPage}
            onClick={() => setCurrentPage(page)}>
            {page}
          </span>
        );
      })}
    </div>
  );
}

export default Paginator;
