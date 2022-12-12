import {
	DataTypes,
	Model,
	Sequelize,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional
} from "sequelize";
import bcrypt from "bcryptjs";
import { User } from ".";

export class SessionModel extends Model<
	InferAttributes<SessionModel>,
	InferCreationAttributes<SessionModel>
> {
	declare id: CreationOptional<string>;
	declare isValid: CreationOptional<boolean>;
}

export const sessionModel = (db: Sequelize) => {
	SessionModel.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
				unique: true,
				allowNull: false
			},
			isValid: {
				type: DataTypes.BOOLEAN,
				defaultValue: true
			}
		},
		{
			sequelize: db,
			modelName: "UserSession"
		}
	);

	SessionModel.belongsTo(User, { foreignKey: "UserSession" });

	return SessionModel;
};
