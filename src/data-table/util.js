export function getNumberOfPages(total, pageSize) {
    return Math.ceil(total / pageSize);
}

export function getStartIndex(currentPage, pageSize) {
    return (currentPage - 1) * pageSize;
}

export function getEndIndex(total, currentPage, pageSize ) {
    const numPages = Math.ceil(total / pageSize);
    const isLastPage = currentPage === numPages;
    return isLastPage ? total : pageSize * currentPage
}
