import { DataTypes, Model, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";

export const userModel = (db: Sequelize) => {
    class UserModel extends Model {
        declare password: string;
        declare id: string;
        declare email: string;

        async validateCredentials(password: string) {
            return await bcrypt.compare(password, this.password);
        }
    }
    UserModel.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize: db,
            modelName: "User",
            hooks: {
                beforeCreate: async (user) => {
                    user.password = await bcrypt.hash(user.password, 12);
                },
            },
        }
    );

    return UserModel;
};
