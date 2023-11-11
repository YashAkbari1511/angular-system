export const INITIAL_PAGE_SIZE = 10;
export const PAGINATION_MAX_SIZE = 5;
export const PAGE_SIZE_OPTIONS = [10, 20, 30, 50];
export const INITIAL_PAGE_INDEX = 1;
export const DEFAULT_SORT_FIELD = '_id';
export const DEFAULT_SORT_ORDER = 'desc'

export const DEFAULT_IMAGES = {
    USER: 'assets/images/users/1.jpg',
};

// STATUS LIST
export const STATUS_LIST = [
    {
        status: true,
        label: 'Active',
        class: 'bg-success',
    },
    {
        status: false,
        label: 'Inactive',
        class: 'bg-danger',
    }
];

export const VALIDATION_PATTERN = {
    EMAIL: /^([!#-\'*+\/-9=?A-Z^-~\\\\-]{1,64}(\.[!#-\'*+\/-9=?A-Z^-~\\\\-]{1,64})*|"([\]!#-[^-~\ \t\@\\\\]|(\\[\t\ -~]))+")@([0-9A-Z]([0-9A-Z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Z]([0-9A-Z-]{0,61}[0-9A-Za-z])?))+$/i,
    WHOLE_NUMBER: /^[0-9]*$/,
    PHONE_NUMBER: `^1[0-9]*$`,
    ALPHABETS_WITH_SPACE: /^[a-zA-Z ]*$/,
    STRING_WITH_DOT: /^([ A-Za-z\s.])*[^\s]\1*$/,
    ONLY_ALPHABETS: /^[a-zA-Z]*$/,
    // VALID_URL: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g,
    VALID_URL: /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{2,10}$/,
    STRING_WITH_NUMBER: /^[a-zA-Z0-9]*$/,
    STR_DIGIT_UNDERSCORE: /^[a-zA-Z0-9_]+$/
};

// Data Type List
export const DATA_TYPE_LIST = [
    {
        fieldType: 'Integer',
        type: 'int',
    },
    {
        fieldType: 'Boolean',
        type: 'boolean',
    },
    {
        fieldType: 'String',
        type: 'string',
    },
    {
        fieldType: 'Date',
        type: 'date',
    },
    {
        fieldType: 'Number',
        type: 'number',
    }
];