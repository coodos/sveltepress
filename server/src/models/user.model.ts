import {
	DataTypes,
	Model,
	Sequelize,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional
} from "sequelize";
import bcrypt from "bcryptjs";

export class UserModel extends Model<
	InferAttributes<UserModel>,
	InferCreationAttributes<UserModel>
> {
	declare id: CreationOptional<string>;
	declare password: string;
	declare email: string;
	declare isSuperUser: CreationOptional<boolean>;

	async validateCredentials(password: string) {
		return await bcrypt.compare(password, this.password);
	}
}

export const userModel = (db: Sequelize) => {
	UserModel.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				unique: true,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			isSuperUser: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false
			}
		},
		{
			sequelize: db,
			modelName: "User",
			hooks: {
				beforeSave: async (user) => {
					if (user.changed("password")) {
						user.password = await bcrypt.hash(user.password, 12);
					}
				}
			}
		}
	);

	return UserModel;
};
