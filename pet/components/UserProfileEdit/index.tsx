import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export interface IUserDetail {
    _id: any;
    first_name: string;
    last_name: string;
    gender: string;
    phoneNumber: string;
    address: Address[];
}

export interface Address {
    district: string;
    subdistrict: string;
    street: string;
    building: string;
    houseNumber: string;
    province: string;
    postalCode: string;
}

export default function EditUserSettings(props: IUserDetail & { onUpdate: (updatedData: IUserDetail) => void }) {
    const [hover, setHover] = useState(false);
    function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            setHover(true);
        } else {
            setHover(false);
        }
    }

    const [rows, setRows] = useState<GridRowsProp>([
        { id: 1, col1: 'FirstName:', col2: props.first_name },
        { id: 2, col1: 'LastName:', col2: props.last_name },
        { id: 3, col1: 'Gender:', col2: props.gender },
        { id: 4, col1: 'PhoneNumber:', col2: props.phoneNumber },
        { id: 5, col1: 'Address:', col2: getAddressString(props.address) },
    ]);

    function getAddressString(addresses: Address[]): string {
        return addresses
            .map(
                (address) =>
                    `${address.houseNumber}, ${address.street}, ${address.subdistrict}, ${address.district}, ${address.province}, ${address.postalCode}`,
            )
            .join('\n');
    }

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        {
            field: 'col2',
            headerName: 'Column 2',
            renderCell: (params) => (
                <div style={{ width: '100%', maxHeight: 100, overflowY: 'auto' }}>
                    <TextField
                        id={params.row.id.toString()}
                        value={params.value}
                        onChange={(e) => handleCellChange(params.row.id, e.target.value)}
                        multiline
                        fullWidth
                        InputProps={{
                            style: { whiteSpace: 'pre-line' },
                        }}
                    />
                </div>
            ),
        },
    ];

    const handleCellChange = (id: number, value: string) => {
        setRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, col2: value } : row)));
    };

    const handleUpdate = () => {
        const updatedData: IUserDetail = {
            _id: props._id,
            first_name: rows.find((row) => row.id === 1)?.col2 || props.first_name,
            last_name: rows.find((row) => row.id === 2)?.col2 || props.last_name,
            gender: rows.find((row) => row.id === 3)?.col2 || props.gender,
            phoneNumber: rows.find((row) => row.id === 4)?.col2 || props.phoneNumber,
            address: props.address,
        };
        props.onUpdate(updatedData);
    };

    return (
        <Box sx={{ height: 'auto', width: 'auto', margin: 1 }}>
            <Box sx={{ boxShadow: '6px 6px #472F05' }}>
                <Box
                    sx={{
                        height: 'auto',
                        paddingLeft: 3,
                        paddingY: 1,
                        fontSize: 30,
                        backgroundColor: '#F9C067',
                        border: '2px solid #472F05',
                    }}
                >
                    {'MyProfile'}
                </Box>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooter={true}
                    columnHeaderHeight={0}
                    rowHeight={45}
                    sx={{
                        border: '2px solid #472F05',
                        borderRadius: 0,
                        fontSize: 18,
                        '& .MuiDataGrid-cell': {
                            paddingLeft: 3,
                        },
                    }}
                />
                <Button
                    onClick={handleUpdate}
                    style={
                        hover
                            ? {
                                  border: '2px solid black',
                                  boxShadow: '5px 4px #472F05',
                                  backgroundColor: '#66ff66',
                                  cursor: 'pointer',
                              }
                            : {
                                  border: '2px solid black',
                                  boxShadow: '5px 4px #472F05',
                                  backgroundColor: '#ccffcc',
                                  cursor: 'default',
                              }
                    }
                    onMouseOver={(event) => onMouseAction(event)}
                    onMouseOut={(event) => onMouseAction(event)}
                >
                    📥UpdateProfile
                </Button>
            </Box>
        </Box>
    );
}
