import {
    Attributes,
    Identifier,
    Model,
    ModelStatic,
    WhereOptions,
} from "sequelize";
import { MakeNullishOptional } from "sequelize/types/utils";

/**
 * Class to generate services UwU
 */
export class ModelService<T extends Model<any, any>> {
    model: ModelStatic<T>;

    /**
     * Create a new Model Service
     *
     * @param {ModelStatic<T>} model
     */
    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    /**
     * Create a new instance on the model table
     *
     * @param {MakeNullishOptional<T["_creationAttributes"]>} createOptions
     * @returns Promise<Model<T>>
     */
    async create(
        createOptions: MakeNullishOptional<T["_creationAttributes"]>
    ): Promise<Model<T>> {
        return this.model.create({ ...createOptions });
    }

    /**
     * Find a singular entity which the matching where criteria
     *
     * @param {WhereOptions<Attributes<T>>} findOpts
     * @returns Promise<Model<T>>
     */
    async findOne(findOpts: WhereOptions<Attributes<T>>): Promise<Model<T>> {
        return this.model.findOne({
            where: { ...findOpts },
        });
    }

    /**
     * Find many entities on the table which the matching where criteria
     *
     * @param {WhereOptions<Attributes<T>>} findOpts
     * @returns Promise<Model<T>[]>
     */
    async findMany(findOpts: WhereOptions<Attributes<T>>): Promise<Model<T>[]> {
        return this.model.findAll({
            where: { ...findOpts },
        });
    }

    /**
     * Find a single entity by the ID (Primary Key)
     *
     * @param {Identifier} id
     * @returns Promise<Model<T>>
     */
    async findById(id: Identifier): Promise<Model<T>> {
        return this.model.findByPk(id);
    }

    /**
     * Find a single entity by the ID (Primary Key) and then update it with new
     * attributes supplied
     *
     * @param {Identifier} id
     * @returns Promise<Model<T>>
     */
    async findByIdAndUpdate(id: Identifier, updateParams: Attributes<T>) {
        const entity = await this.model.findByPk(id);
        for (const key of Object.keys(entity)) {
            entity[key] = updateParams[key] ?? entity[key];
        }
        await entity.save();
        return entity;
    }

    /**
     * Find a single entity by the ID (Primary Key) and delete
     *
     * @param {Identifier} id
     * @returns Promise<Model<T>>
     */
    async findByIdAndDelete(id: Identifier) {
        const entity = await this.model.findByPk(id);
        entity.destroy();
        return entity;
    }
}
