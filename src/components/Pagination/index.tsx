import { Stack, Button, Box } from '@chakra-ui/react';
import {PaginationItem} from './PaginationItem';

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)].map((_, index) => {return from + index + 1})
    .filter(page => page > 0);
}

export function Pagination({
totalCountOfRegisters,
registersPerPage = 10,
currentPage = 1,
onChangePage
}: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
    
    
    const previosPage = currentPage > 1 ? generatePagesArray(currentPage -1 - siblingsCount, currentPage - 1) : [];

    const nextPage = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];
    
    return (
        <Stack
            direction="row"
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                <PaginationItem  number={currentPage} isCurrent />
                {previosPage.length > 0 && previosPage.map(page => {
                    return  <PaginationItem key={page} number={page}  />
                })}
                
            </Stack>
        </Stack>
    )
}