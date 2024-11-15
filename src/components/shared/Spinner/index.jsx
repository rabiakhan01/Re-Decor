import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner({ color }) {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress
                size={'20px'}
                sx={{ color: color || '#ffffff' }}
            />
        </Stack>
    );
}
