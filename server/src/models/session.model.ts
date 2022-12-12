import {
	DataTypes,
	Model,
	Sequelize,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	ForeignKey
} from "sequelize";
import { UserModel } from "./user.model";

export class SessionModel extends Model<
	InferAttributes<SessionModel>,
	InferCreationAttributes<SessionModel>
> {
	declare id: CreationOptional<string>;
	declare isValid: CreationOptional<boolean>;
	declare userId: ForeignKey<UserModel["id"]>;
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
				defaultValue: true,
				allowNull: false
			}
		},
		{
			sequelize: db,
			modelName: "UserSession"
		}
	);

	return SessionModel;
};
