export const CreateUserDto = {
    fields: {
        email: function (email: string) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        },
        password: function (password: string) {
            return password;
        },
    },
    mandatory: ["email", "password"],
};

export const UpdateUserDto = {
    fields: {
        email: function (email: string) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        },
        password: function (password: string) {
            return password;
        },
    },
    mandatory: [],
};
