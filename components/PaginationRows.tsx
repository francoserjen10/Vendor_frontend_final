'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dropdown } from 'react-bootstrap';
import LestIcon from '@/assets/images/table/left.svg';
import DownArrowIcon from '@/assets/images/downArrow-small.svg';
import Image from 'next/image';

type PaginationRowsProps = {
  items_count: number;
  page: number | null;
  onPageChange: (p: number) => void;
  onTakeChange: (take: number) => void;
  className?: string;
  initialTake?: number;
};

export default function PaginationRows({
  items_count,
  page,
  onPageChange,
  onTakeChange,
  className,
  initialTake = 10,
  // pagination, 
  // setPagination
}: PaginationRowsProps) {
  const pathname = usePathname();
  const [selectedValue, setSelectedValue] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(page ?? 1);
  // const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(items_count / selectedValue));
  const rangeStart = items_count ? (currentPage - 1) * selectedValue + 1 : 0;
  const rangeEnd = items_count ? Math.min(currentPage * selectedValue, items_count) : 0;

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    const newTake = parseInt(eventKey, 10);
    setSelectedValue(newTake);
    localStorage.setItem('take', String(newTake));
    onTakeChange(newTake);
    handlePageChange(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);

      const newUrl = new URL(window.location.href);
      newUrl.pathname = pathname;
      newUrl.searchParams.set('page', String(newPage));
      window.history.pushState({}, '', newUrl);
    }
  };
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const arrowStyle = (condition: boolean) =>
    condition ? { cursor: 'not-allowed', opacity: 0.5 } : { cursor: 'pointer' };

  return (
    <div className={`pagination-rows ${className}`}>
      <div className="pagination-rows__left">
        <span className="pagination-rows__summary">
          {items_count
            ? `Showing ${rangeStart}-${String(rangeEnd).padStart(2, '0')} of ${items_count}`
            : 'Showing 0-0 of 0'}
        </span>

        <div className="pagination-rows__perpage">
          <span className="perpage__label">Rows Per Page</span>

          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle
              variant="light"
              id="rows-per-page"
              className="custom-dropdown-toggle"
            >
              {selectedValue}
              <DownArrowIcon className="perpage__caret" aria-hidden />
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              {[5, 10, 20, 30].map(n => (
                <Dropdown.Item key={n} eventKey={n.toString()}>
                  {n}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>


      <div className="pagination-rows__right">
        <div className="pagination-controls__arrow">
          <LestIcon
            arial-label="Previous page"
            onClick={() => handlePageChange(currentPage - 1)}
            style={arrowStyle(isFirst)}
            className="pager-icon"
          />
          <LestIcon
            arial-label="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
            style={arrowStyle(isLast)}
            className="pager-icon mirrored"
          />
        </div>
      </div>
    </div>
  );
};
