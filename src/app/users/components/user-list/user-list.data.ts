/* Displayed Column Array */
export const displayedColumnArray: any[] = [
    {
        label: 'NAME',
        field: 'firstName',
        type: 'string',
        isSortable: true,
        isComponentsSide: true,
    },
    {
        label: 'STATUS',
        field: 'isActive',
        type: 'isActive',
        isSortable: true,
        isComponentsSide: true,
    },
    {
        label: 'CREATED AT',
        field: 'createdAt',
        type: 'date',
        isSortable: true,
        isComponentsSide: false,
    },
    {
        label: 'ROLE',
        field: 'roleName',
        type: 'string',
        isSortable: false,
        isComponentsSide: true,
    },
    {
        label: 'MOBILE',
        field: 'mobile',
        type: 'phoneNumber',
        isSortable: true,
        isComponentsSide: false,
    },
    {
        label: 'ACTIONS',
        field: 'actionsColumn',
        type: 'string',
        isSortable: false,
        isComponentsSide: true,
    }
];